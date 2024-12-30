import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import ourMenuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import Category from "../home/Category";
import PopularMenu from "../home/PopularMenu";
import MenuCategory from "./MenuCategory";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
    const [items] = useMenu();
    const offeredItems = items.filter(item => item.category === 'offered');
    const dessertItems = items.filter(item => item.category === 'dessert');
    const pizzaItems = items.filter(item => item.category === 'pizza');
    const saladItems = items.filter(item => item.category === 'salad');
    const soupItems = items.filter(item => item.category === 'soup');
    return (
        <div className="space-y-11">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCategory title={'our menu'} img={ourMenuImg} items={offeredItems} heading={`today's offer`}></MenuCategory>
            <MenuCategory title={'Desserts'} img={dessertImg} items={dessertItems}></MenuCategory>
            <MenuCategory title={'pizza'} img={pizzaImg} items={pizzaItems}></MenuCategory>
            <MenuCategory title={'salad'} img={saladImg} items={saladItems}></MenuCategory>
            <MenuCategory title={'soups'} img={soupImg} items={soupItems}></MenuCategory>

        </div>
    );
};

export default Menu;