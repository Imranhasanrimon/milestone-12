import ItemCard from "../../components/ItemCard";
import SectionTitle from "../../components/SectionTitle";
import Cover from "../shared/Cover";

const MenuCategory = ({ items, title, img, heading }) => {
    return (
        <div >
            <Cover title={title} img={img}></Cover>
            {heading && <SectionTitle heading={heading} subHeading={`don't miss`}></SectionTitle>}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
                {
                    items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>


        </div>
    );
};

export default MenuCategory;