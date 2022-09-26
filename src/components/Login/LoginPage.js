import React from 'react';
import BrandLogo from '../../assets/img/zinnextlogo.svg'
import GmailICon from '../../assets/img/gmail.svg'
import MicrosoftICon from '../../assets/img/microsoft.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import '../Login/LoginPage.scss'

function LoginPage() {

    // prevent default
    function onTestClick1(event) {
        event.preventDefault();

    }

    // Toaster 
    const onTestClick = () => toast.success("Sign in successfully!");

    return (
        <div className='LoginPage'>
            <div className='d-flex justify-content-between pt-3 mb-3 bg-white res-spacing'>
                <div>
                    <img className='brand-logo' src={BrandLogo} alt='Brandlogo' />
                </div>
                <div className='d-flex align-items-center gap-3 mobile-hide'>
                    <div>Not registered yet?</div>
                    <div>
                        <Link to="/designToken">
                            <button className='btn signup-btn'>Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='signing-card w-100 d-flex justify-content-center align-items-center'>
                <div className='signing-card-child'>
                    <>
                        <h3 className='text-center mb-4 fw-600 text-black'>Welcome back!</h3>
                    </>
                    <form id="loginForm" autocomplete="off">
                        <div className="mb-3">
                            <label htmlFor="email-login" className="form-label text-black">Email</label>
                            <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email-pswd" className="form-label text-black">Password</label>
                            <input type="password" className="form-control" id="email-pswd" />
                            <div className="form-text text-end theme-primary fw-600 cursor-pointer fs-12 mt-2">Forgot Password?</div>
                        </div>
                        <div className='text-center pt-1'>
                            <div className='my-2 mt-3'>
                                <button type='button' onClick={(e) => { onTestClick(e); onTestClick1(e); }} className='btn signup-btn signin-btn'>Sign in</button>
                            </div>
                            <div className='my-2'>or</div>
                            <div className='text-black mb-2'>Sign in using your email</div>
                            <div className='d-flex justify-content-center gap-2 align-items-center mb-4'>
                                <div className='cursor-pointer'>
                                    <img className='sm-icons' src={GmailICon} alt="gmail login" />
                                </div>
                                <div className='cursor-pointer'>
                                    <img className='sm-icons' src={MicrosoftICon} alt="microsoft login" />
                                </div>
                            </div>
                            <div className='text-black'>Not registered yet? <span className='theme-purple fw-600 cursor-pointer text-decoration-none'>Sign up</span></div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='bg-clor'></div>
            <ToastContainer />
        </div>
    );
}

export default LoginPage;