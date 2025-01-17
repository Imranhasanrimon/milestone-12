import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaDollarSign } from "react-icons/fa";
import { LuSquareMenu } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    });
    console.log(stats);

    return (
        <div>
            <h2 className="text-3xl font-semibold">Hi..! Welcome {user ? user.displayName : 'Back'}</h2>

            <div className="stats shadow border border-gray-600">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-3xl" />
                    </div>
                    <div className="stat-title">Revenues</div>
                    <div className="stat-value">{stats?.revenue}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl" />
                    </div>
                    <div className="stat-title"> Users</div>
                    <div className="stat-value">{stats.users}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <LuSquareMenu className="text-3xl" />
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <GrDeliver className="text-3xl" />
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.payments}</div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;