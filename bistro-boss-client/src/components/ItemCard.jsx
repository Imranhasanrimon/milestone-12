
const ItemCard = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className="flex gap-5 items-center">
            <img className="w-[120px] rounded-full rounded-tl-none" src={image} alt="" />
            <div>
                <h3 className="text-lg text-white">{name} -------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400 w-32">$ {price}</p>
        </div>
    );
};

export default ItemCard;