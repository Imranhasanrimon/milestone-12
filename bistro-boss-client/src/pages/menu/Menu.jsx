import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import coverImg from "../../assets/menu/banner3.jpg"
import Category from "../home/Category";
import PopularMenu from "../home/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={coverImg} title={'our menu'} subTitle={` Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a idnisi`}>
            </Cover>
            <PopularMenu></PopularMenu>
            <Cover
                img={coverImg} title={'our menu'} subTitle={` Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a idnisi`}>
            </Cover>
            <PopularMenu></PopularMenu>
            <Cover
                img={coverImg} title={'our menu'} subTitle={` Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a idnisi`}>
            </Cover>
            <PopularMenu></PopularMenu>

        </div>
    );
};

export default Menu;