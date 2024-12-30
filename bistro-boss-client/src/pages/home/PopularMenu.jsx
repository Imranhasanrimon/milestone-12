import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ItemCard from "../../components/ItemCard";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [items] = useMenu()
    const popularItems = items.filter(item => item.category === 'popular');

    return (
        <section className="mb-8">
            <SectionTitle heading={'From Our menu'} subHeading={'Popular Items'}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5">
                {
                    popularItems.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;