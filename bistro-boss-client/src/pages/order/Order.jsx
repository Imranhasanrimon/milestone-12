import Cover from "../shared/Cover";
import banner from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [items] = useMenu();
    const offeredItems = items.filter(item => item.category === 'offered');
    const dessertItems = items.filter(item => item.category === 'dessert');
    const pizzaItems = items.filter(item => item.category === 'pizza');
    const saladItems = items.filter(item => item.category === 'salad');
    const soupItems = items.filter(item => item.category === 'soup');
    const drinksItems = items.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover title={'oredr food'} img={banner}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={saladItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soupItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessertItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinksItems}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;