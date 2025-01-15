import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from './../../hooks/useCart';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
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
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, currentCart) => total + currentCart.price, 0);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
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
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={cardStyle} />
            <button className='btn btn-primary mt-3' type="submit" disabled={!stripe || !clientSecret}>
                Pay Now
            </button>
            <p className='text-red-500'>{error}</p>
        </form>
    );
};

export default CheckoutForm;