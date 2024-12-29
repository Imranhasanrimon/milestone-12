import SectionTitle from "../../components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './featured.css'
const Featured = () => {
    return (
        <section className="bg-featured p-5 text-white">
            <SectionTitle heading={'featured item'} subHeading={'check it out'}></SectionTitle>
            <div className="md:flex gap-5 md:px-20 lg:px-40 xl:px-60">
                <img className="md:w-96" src={featuredImg} alt="" />
                <div>
                    <h5>Aug 20, 2029</h5>
                    <h3 className="uppercase font-semibold">where can i get some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quasi doloremque quis architecto voluptatum soluta doloribus similique at exercitationem veritatis ipsam illo ducimus assumenda delectus dignissimos pariatur. Facilis, nemo qui!</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;