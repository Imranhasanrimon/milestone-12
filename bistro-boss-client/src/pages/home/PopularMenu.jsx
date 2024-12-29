import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ItemCard from "../../components/ItemCard";

const PopularMenu = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setItems(popularItems)
            })
    }, [])
    console.log(items);
    return (
        <section className="mb-8">
            <SectionTitle heading={'From Our menu'} subHeading={'Popular Items'}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5">
                {
                    items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;