import { FaGoogle } from "react-icons/fa";
import useAuth from './../../hooks/useAuth';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-sm w-full bg-success">Google <FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;