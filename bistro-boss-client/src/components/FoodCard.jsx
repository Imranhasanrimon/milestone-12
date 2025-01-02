import useAuth from "../hooks/useAuth";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    const { user } = useAuth();
    const handleAddToCart = (food) => {
        console.log(user);
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