import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Register_model = (props) => {

    // login modal visibility
    const [modalShow1, setModalShow1] = useState(false);
    const [forget, setforget] = useState(false);

    // show/hide password
    const [type, setType] = useState('password')

    const handleInputType = () => {
        setType(type === 'password' ? 'text' : 'password');
    }

    const handleLoginModal = () => {
        props.setmodel(false)
        setModalShow1(true);
    }

    const handleregistermodel = () => {
        props.setmodel(true)
        setModalShow1(false);
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <React.Fragment>

            {/* Register Modal */}

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='register_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>
                        Register
                    </h4>
                    <p className='text-center font_18 light_color fw-500 mb-3'>
                        Register & get access to the exclusive collection!
                    </p>
                    <div className='mt-lg-5'>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className='mb-4'>
                                <input type="text" placeholder='Name' className='w-100 model_input' required />
                            </div>
                            <div className='mb-4'>
                                <input type="text" placeholder='Mobile no.' className='w-100 model_input' required />
                            </div>
                            <div className='mb-4 input_password'>
                                <input type={type} placeholder='Password' className='w-100 model_input' required />
                                <button type='button' className='bg-transparent VK_eyes border-0' onClick={handleInputType}>
                                    {
                                        type === 'password' ? (
                                            <img src={require('../../../assets/eye_close.png')} alt="Hide Password" />
                                        ) : (
                                            <img src={require('../../../assets/eye_open.png')} alt="Show Password" />
                                        )
                                    }
                                </button>
                            </div>
                            <div className='mb-4'>
                                <p className='light_color model_p fw-400'>
                                    To verify your number, we will send you a text message with a temporary code to your mobile number.
                                </p>
                            </div>
                            <div>
                                <input type="submit" value={"Verify"} className='w-100 inter model_theme' />
                            </div>
                        </form>
                        <div className='mt-md-4 mt-2'>
                            <p className='m-0 pt-2 text-center text-black fw-500 font_18'>
                                Already have an account?
                                <button className='bg-transparent border-0 text-black fw-500 font_18' onClick={handleLoginModal}>
                                    Login Now
                                </button>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* Login Modal */}


            {/* <Modal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='login_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>
                        Login
                    </h4>
                    <p className='text-center font_18 light_color fw-500 mb-3'>
                        Log in to continue
                    </p>
                    <div className='mt-lg-4'>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className='mb-4 pb-sm-3'>
                                <input type="text" placeholder='Mobile no.' className='w-100 model_input' required />
                            </div>
                            <div className='mb-4'>
                                <input type="submit" value={"Continue"} className='w-100 inter model_theme' />
                            </div>
                            <div className='mb-4'>
                                <p className='light_color model_p fw-400'>
                                    By continuing, you agree to our
                                    <span className='px-1 text-black VK_underline d-inline-block'>
                                        Terms of Use
                                    </span>
                                    and
                                    <span className='px-1 text-black VK_underline d-inline-block'>
                                        Privacy Policy.
                                    </span>
                                </p>
                            </div>
                        </form>
                        <div className='mt-md-5 mt-2'>
                            <p className='m-0 pt-2 text-center text-black fw-500 font_18'>
                                Don't have an account?
                                <button className='bg-transparent border-0 text-black fw-500 font_18' onClick={handleregistermodel}>
                                    Create Now
                                </button>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}

            {/* login password */}
            <Modal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='login_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>
                        Login
                    </h4>
                    <p className='text-center font_18 light_color fw-500 mb-3'>
                        Log in to continue
                    </p>
                    <div className='mt-lg-4'>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className='input_password'>
                                <input type={type} placeholder='Password' className='w-100 model_input' required />
                                <button type='button' className='bg-transparent VK_eyes border-0' onClick={handleInputType}>
                                    {
                                        type === 'password' ? (
                                            <img src={require('../../../assets/eye_close.png')} alt="Hide Password" />
                                        ) : (
                                            <img src={require('../../../assets/eye_open.png')} alt="Show Password" />
                                        )
                                    }
                                </button>
                            </div>
                            <div className='text-end mb-4 mt-2'>
                                <button onClick={() => {
                                    setModalShow1(false)
                                    setforget(true)
                                }} className='bg-transparent '>
                                    <p className='VK_forget_link m-0'>
                                        Forget Password?
                                    </p>
                                </button>
                            </div>
                            <div className='mb-4 pt-2'>
                                <input type="submit" value={"Continue"} className='w-100 inter model_theme' />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>


            {/* forget password */}
            <Modal
                show={forget}
                onHide={() => setforget(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='login_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>
                        Forgot Password
                    </h4>
                    <p className='text-center font_18 light_color fw-500 mb-3'>
                        Enter details below to recover your password
                    </p>
                    <div className='mt-lg-4'>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className='mb-4 pb-sm-3'>
                                <input type="text" placeholder='Mobile no.' className='w-100 model_input' required />
                            </div>
                            <div className='mb-4 pt-2'>
                                <input type="submit" value={"Get code"} className='w-100 inter model_theme' />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default Register_model;
