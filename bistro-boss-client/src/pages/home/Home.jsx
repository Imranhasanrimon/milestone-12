import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Review from "./Review";
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

const Input = ({ label, register }) => {
    return (
        <div>
            <label htmlFor="username">{label}</label>
            <input className='bg-transparent border block' type="text" {...register(label)} id="username" />
        </div>
    )
}

const Home = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: 'imran hasan',
            nickname: 'rimon',
            email: 'imran@gmail.com',
            password: '123456fF'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            {/* form hook practice */}
            <div className='h-screen  flex justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='border rounded-lg p-6'>

                    <Input label='username' id="username" register={register} />
                    <Input label='nickname' id="nickname" register={register} />
                    <Input label='email' id="email" register={register} />
                    <Input label='password' id="password" register={register} />

                    <button className='btn btn-sm btn-primary w-full mt-5'>Submit</button>
                </form>
            </div>
            {/* form hook practice */}
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;