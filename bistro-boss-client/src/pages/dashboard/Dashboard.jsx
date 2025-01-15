import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    // TODO: isAdmin value should be loaded form database;
    const [isAdmin] = useAdmin();

    return (
        <div className="flex dashboard max-w-screen-2xl w-11/12 mx-auto my-10">
            <div className="min-h-screen min-w-64 bg-yellow-600 border-r-2 border-white text-black flex flex-col gap-3 p-5">
                {
                    isAdmin ? <>
                        <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/home'>Admin Home</NavLink>
                        <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/addItem'>Add Items</NavLink>
                        <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/manageItem'>Manage Items</NavLink>
                        <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/reservation'>Manage Bookings</NavLink>
                        <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/allUsers'>All Users</NavLink>
                    </>
                        :
                        <>
                            <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/home'>User Home</NavLink>
                            <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/reservation'>Reservation</NavLink>
                            <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/paymentHistory'>Payment History</NavLink>
                            <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/cart'>My Cart</NavLink>
                            <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/addReview'>Add a Review</NavLink>
                            <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/dashboard/myBookings'>My Bookings</NavLink>
                        </>
                }
                <div className="divider "></div>
                <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/'>Home</NavLink>
                <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/'>Menu</NavLink>
                <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/'>Shop</NavLink>
                <NavLink className='bg-black bg-opacity-10 p-2 rounded-lg hover:bg-opacity-25 ' to='/'>Contact</NavLink>
            </div>
            <div className="m-5 flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;