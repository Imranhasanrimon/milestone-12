import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    console.log(users);
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-4xl">All Users</h3>
                <h3 className="text-4xl">Total Users</h3>
            </div>
        </div>
    );
};

export default AllUsers;