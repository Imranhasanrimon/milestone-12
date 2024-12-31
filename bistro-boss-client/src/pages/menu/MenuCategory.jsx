import ItemCard from "../../components/ItemCard";
import SectionTitle from "../../components/SectionTitle";
import Cover from "../shared/Cover";
import { Link } from 'react-router-dom';

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
            <Link to={`/order/${title}`}>
                <button className="btn block mx-auto btn-outline border-0 border-b-4 text-white border-white">Order Yout Favourite Food</button>
            </Link>

        </div>
    );
};

export default MenuCategory;