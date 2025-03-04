import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { BsCartFill } from "react-icons/bs";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        signOutUser()
            .then(() => console.log('sign out done'))
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order</NavLink></li>
        {!user ? <li><NavLink to="/login">Login</NavLink></li> : <li><button className="btn btn-neutral" onClick={handleLogout} >Logout</button></li>}
    </>
    return (
        <div className="navbar sticky top-0 z-10  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to='dashboard' className="btn">
                    <BsCartFill />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </Link>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;