import { FaGoogle } from "react-icons/fa";
import useAuth from './../../hooks/useAuth';
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })

            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-sm w-full bg-success">Google <FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;