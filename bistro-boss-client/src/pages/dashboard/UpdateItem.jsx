import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        //upload the image to the imagebb then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount) {
                //confirmation
                console.log('success: Item updated');
            }
        }
    }
    return (
        <div>
            <SectionTitle heading={'Update item'} subHeading={`what's renew?`}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input  {...register("name", { required: true })} type="text" defaultValue={name} placeholder="Recipe Name" className="input input-bordered w-full" />
                    </label>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Category</span>
                            </div>
                            <select
                                {...register("category", { required: true })}
                                defaultValue={category}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a category</option>
                                <option value='salad'>Salad</option>
                                <option value='dessert'>Dessert</option>
                                <option value='soup'>Soup</option>
                                <option value='drinks'>Drink</option>
                                <option value='pizza'>Pizza</option>
                                <option value='offered'>Offered</option>
                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input  {...register("price", { required: true })} type="number" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">recipe details</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered" defaultValue={recipe} placeholder="Bio"></textarea>
                    </label>

                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />


                    <button className="btn btn-primary w-full">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;