import useAuth from "../../hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>Hi..! Welcome {user ? user.displayName : 'Back'}</h2>

        </div>
    );
};

export default AdminHome;