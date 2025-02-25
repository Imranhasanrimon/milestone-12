import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Review from "./Review";
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Input = ({ label, register }) => {
    return (
        <div>
            <label htmlFor="username">{label}</label>
            <input className='bg-transparent border block rounded-md px-2 py-1 mt-1' type="text" {...register(label)} />
        </div>
    )
}

const validationSchema = yup.object({
    username: yup.string()
        .required('Missing Username')
        .min(3, "Must be at least 3 characters")
        .max(15, "Must be at most 15 characters"),
    nickname: yup.string().required('Missing nickname'),
    email: yup.string().required('Missing email'),
    password: yup.string().required('Missing password'),
})

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
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

                    <Input label='username' register={register} />
                    {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
                    <Input label='nickname' register={register} />
                    <Input label='email' register={register} />
                    <Input label='password' register={register} />

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