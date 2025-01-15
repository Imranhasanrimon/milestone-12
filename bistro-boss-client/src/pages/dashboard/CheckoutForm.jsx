import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from './../../hooks/useCart';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const { user } = useAuth();
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        },
    };
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, currentCart) => total + currentCart.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error: ', error);
            setError(error.message)
        } else {
            console.log('payment method: ', paymentMethod);
            setError('')
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction Id', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                //now save the payment in the database..
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.itemId),
                    status: 'pending'
                }
                const res = axiosSecure.post('/payments', payment)
                console.log('payment saved', res);
                refetch()
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={cardStyle} />
            <button className='btn btn-primary mt-3' type="submit" disabled={!stripe || !clientSecret}>
                Pay Now
            </button>
            <p className='text-red-500'>{error}</p>
            {transactionId && <p className='text-green-500'>your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;