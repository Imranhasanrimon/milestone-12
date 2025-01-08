import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";

const AddItem = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={`what's new?`}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input  {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </label>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Category</span>
                            </div>
                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
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
                            <input  {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">recipe details</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </label>

                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />


                    <button className="btn btn-primary w-full">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;