import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex dashboard">
            <div className="min-h-screen min-w-64 bg-yellow-600 border-r-2 border-white text-black flex flex-col gap-3 p-5">
                <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/home'>User Home</NavLink>
                <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/reservation'>Reservation</NavLink>
                <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/cart'>My Cart</NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;