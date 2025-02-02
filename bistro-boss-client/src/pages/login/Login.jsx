import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../shared/SocialLogin';

const Login = () => {
    const { user, signInUser } = useContext(AuthContext)
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Successful!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate(from, { replace: true })
            })
    }

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            console.log('Captcha Matched');
            setDisabled(false)
        }

        else {
            console.log('Captcha Does Not Match');
        }
    }
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-primary bg-opacity-5 border border-primary w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                < LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" name="capthca" placeholder="type the text above" className="input input-bordered" required />

                            <button type='button' onClick={handleValidateCaptcha} className="btn btn-outline btn-primary btn-xs mt-2">Validate Captcha</button>
                        </div>
                        <div className="form-control mt-6">
                            {/* todo: disabled the recaptcha */}
                            <button disabled={false} className="btn btn-primary">Login</button>
                        </div>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;