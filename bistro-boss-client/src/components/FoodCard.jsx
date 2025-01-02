import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import axios from "axios";


const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = (food) => {
        if (user && user.email) {
            const cartItem = {
                itemId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('//localhost:5000/carts', cartItem)
                .then(data => {
                    console.log(data.data);
                    if (data.data.insertedId) {
                        Swal.fire({
                            title: "Item added to the cart!",
                            icon: "success",
                            draggable: true
                        });
                    }
                })
        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
                <p className="bg-black text-white py-1 px-2 rounded-lg absolute right-3 top-1">$ {price}</p>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;