import axios from 'axios'
import { useFormik } from 'formik'
import { jwtDecode } from 'jwt-decode'
import React, { useRef, useState } from 'react'
import { Modal } from 'react-bootstrap'
import * as Yup from 'yup'

const Register_model = (props) => {

    const BaseUrl = process.env.REACT_APP_BASEURL;

    const [mobile, setMobile] = useState('');
    const [flowType, setFlowType] = useState('register');

    // register model 
    var init_register = {
        name: "",
        mobileNo: "",
        password: ""
    }

    var register_validation = Yup.object({
        name: Yup.string().min(2, "At least 2 characters required").max(25, "Too long for a name").required("Name is required"),
        mobileNo: Yup.string("Mobile Number Must Be in Digit").min(10, "Must be 10 digits").max(10, "Must be 10 digits").required("Mobile is required"),
        password: Yup.string().min(8, "At least 8 characters required").max(20, "Too long for a password").required("Password is required")
    })

    let { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
        initialValues: init_register,
        validationSchema: register_validation,
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${BaseUrl}/api/createUser`, values);
                console.log("response", response.data.user.otp);
                if (response.data.status === 201) {
                    setMobile(response.data.user.mobileNo);
                    props.setmodel(false);
                    setloginmodel(false);
                    setFlowType('register');
                    setotpmodel(true);
                    resetForm();
                }
            } catch (error) {
                console.error('User Register Error:', error);
            }
        }
    })


    // login model
    var init_login = {
        mobileNo: "",
        password: ""
    }

    var login_validation = Yup.object({
        mobileNo: Yup.string().min(10, "Must be 10 digits").max(10, "Must be 10 digits").required("Mobile is required"),
        password: Yup.string().min(8, "At least 8 characters required").max(20, "Too long for a password").required("Password is required")
    })

    let loginFormik = useFormik({
        initialValues: init_login,
        validationSchema: login_validation,
        onSubmit: async (values, { resetForm,setFieldError }) => {

            try {
                const response = await axios.post(`${BaseUrl}/api/login`, values);

                console.log("respose>>>>>>>>", response.data);
                if (response.data.status === 200) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    resetForm();
                    setloginmodel(false);
                }
            } catch (error) {
                console.error('USer Login Error:', error);
                if (error.response && error.response.data && error.response.data.message) {
                    setFieldError("password",error.response.data.message);
                }
            }
        }
    })

    // OTP Model
    const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleInput = (e, index) => {
        const value = e.target.value;

        // If a digit was entered and there's a next input, focus it
        if (value && index < 3) {
            otpInputRefs[index + 1].current.focus();
        }
    };

    // Handle backspace key to move to previous input
    const handleKeyDown = (e, index) => {
        // If backspace is pressed and the current input is empty
        if (e.key === 'Backspace' && !otpFormik.values[`otp${index + 1}`] && index > 0) {
            otpInputRefs[index - 1].current.focus();
        }
    };

    const otpFormik = useFormik({
        initialValues: {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: ''
        },
        onSubmit: async (values) => {
            // otp_submit(values);
            try {
                const enterOtp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
                const resposnse = await axios.post(`${BaseUrl}/api/verifyOtp`, {
                    otp: enterOtp,
                    mobileNo: mobile
                });

                // console.log("response", resposnse.data);
                if (resposnse.data.status === 200) {
                    setotpmodel(false);
                    setMobile('');

                    if (flowType === 'forgotPassword') {
                        setresetpassword(true);
                    } else {
                        setloginmodel(true);
                    }
                    resetForm();
                }
            } catch (error) {
                console.error('Otp Verify Error:', error);
                if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message);
                }
            }
        }
    });

    // forget password
    var init_forget_password = {
        mobileNo: ""
    }

    var forget_password_validation = Yup.object({
        mobileNo: Yup.string().min(10, "Must be 10 digits").max(10, "Must be 10 digits").required("Mobile is required"),
    })

    let forgetFormik = useFormik({
        initialValues: init_forget_password,
        validationSchema: forget_password_validation,
        onSubmit: async (values, { resetForm }) => {
            // forget_submit(values);
            try {
                const response = await axios.post(`${BaseUrl}/api/forgotPassword`, values);
                console.log("resposne.otp", response.data.otp);
                if (response.data.status === 200) {
                    setMobile(values.mobileNo);
                    setFlowType('forgotPassword');
                    resetForm();
                    setforget(false);
                    setotpmodel(true);
                }
            } catch (error) {
                console.error('forgot password error:', error);
            }
        }
    })
    // reset password

    const init_reset_password = {
        newPassword: "",
        confirmPassword: ""
    };

    const reset_password_validation = Yup.object({
        newPassword: Yup.string()
            .min(8, "At least 8 characters required")
            .max(20, "Too long for a password")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    let resetFormik = useFormik({
        initialValues: init_reset_password,
        validationSchema: reset_password_validation,
        onSubmit: async (values, {resetForm}) => {
            try {

                const token = localStorage.getItem('token');
                // console.log("token", token);
                const decode = jwtDecode(token);

                const response = await axios.post(`${BaseUrl}/api/resetPassword/${decode._id}`, values);

                console.log("REsponse",response.data );
                if(response.data.status === 200){
                    resetForm('');
                    setresetpassword(false);
                    setloginmodel(true);
                }
            } catch (error) {
                console.error('Reset Password Error:', error);

            }
        }
    });


    // Other state and logic

    const [loginmodel, setloginmodel] = useState(false);
    const [forget, setforget] = useState(false);
    const [otpmodel, setotpmodel] = useState(false);
    const [resetpassword, setresetpassword] = useState(false);
    const [confirmPasswordType, setConfirmPasswordType] = useState('password');
    const [type, setType] = useState('password');

    const handleInputType = () => {
        setType(type === 'password' ? 'text' : 'password');
    }
    const handleConfirmPasswordType = () => {
        setConfirmPasswordType(confirmPasswordType === 'password' ? 'text' : 'password');
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
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>Register</h4>
                    <p className='text-center font_18 light_color fw-500 mb-3'>
                        Register & get access to the exclusive collection!
                    </p>
                    <div className='mt-lg-5'>
                        <form method='post' onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <input type="text" placeholder='Name' name='name' value={values.name} className='w-100 model_input' onChange={handleChange} onBlur={handleBlur} />
                                {errors.name && touched.name ? (<span className='VK_error_text text-danger'>{errors.name}</span>) : null}
                            </div>
                            <div className='mb-4'>
                                <input type="text" placeholder='Mobile no.' name='mobileNo' value={values.mobileNo} className='w-100 model_input' onChange={handleChange} onBlur={handleBlur} />
                                {errors.mobileNo && touched.mobileNo ? (<span className='VK_error_text text-danger'>{errors.mobileNo}</span>) : null}
                            </div>
                            <div className='mb-4'>
                                <div className='input_password'>
                                    <input type={type} placeholder='Password' name='password' value={values.password} className='w-100 model_input' onChange={handleChange} onBlur={handleBlur} />
                                    <button type='button' className='bg-transparent VK_eyes border-0' onClick={handleInputType}>
                                        {type === 'password' ? (<img src={require('../../../assets/eye_close.png')} alt="Hide Password" />) : (<img src={require('../../../assets/eye_open.png')} alt="Show Password" />)}
                                    </button>
                                </div>
                                {errors.password && touched.password ? (<span className='VK_error_text text-danger'>{errors.password}</span>) : null}
                            </div>
                            <div className='mb-4'>
                                <p className='light_color model_p fw-400'>
                                    To verify your number, we will send you a text message with a temporary code to your mobile No.
                                </p>
                            </div>
                            <div>
                                <input type="submit" value={"Verify"} className='w-100 inter model_theme' />
                            </div>
                        </form>
                        <div className='mt-md-4 mt-2'>
                            <p className='m-0 pt-2 text-center text-black fw-500 font_18'>
                                Already have an account?
                                <button className='bg-transparent border-0 text-black fw-500 font_18' onClick={() => {
                                    props.setmodel(false)
                                    setloginmodel(true);
                                }}>
                                    Login Now
                                </button>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Login Modal */}
            <Modal
                show={loginmodel}
                onHide={() => setloginmodel(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='login_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>Login</h4>
                    <p className='text-center font_18 light_color fw-500 mb-3'>Log in to continue</p>
                    <div className='mt-lg-4'>
                        <form method='post' onSubmit={loginFormik.handleSubmit}>
                            <div className='mb-4 pb-sm-3'>
                                <input type="text" placeholder='Mobile no.' name='mobileNo' value={loginFormik.values.mobileNo} className='w-100 model_input' onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} />
                                {loginFormik.errors.mobileNo && loginFormik.touched.mobileNo ? (<span className='VK_error_text text-danger'>{loginFormik.errors.mobileNo}</span>) : null}
                            </div>
                            <div className='input_password'>
                                <input type={type} placeholder='Password' name='password' value={loginFormik.values.password} className='w-100 model_input' onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} />
                                <button type='button' className='bg-transparent VK_eyes border-0' onClick={handleInputType}>
                                    {type === 'password' ? (<img src={require('../../../assets/eye_close.png')} alt="Hide Password" />) : (<img src={require('../../../assets/eye_open.png')} alt="Show Password" />)}
                                </button>
                            </div>
                            {loginFormik.errors.password && loginFormik.touched.password ? (<span className='VK_error_text text-danger'>{loginFormik.errors.password}</span>) : null}
                            <div className='text-end mb-4 mt-2'>
                                <button onClick={() => {
                                    setforget(true);
                                    setloginmodel(false);
                                }} type='button' className='bg-transparent border-0'>
                                    <p className='VK_forget_link m-0'>Forget Password?</p>
                                </button>
                            </div>
                            <div className='mb-4'>
                                <input type="submit" value={"Login"} className='w-100 inter model_theme' />
                            </div>
                            <div className='mb-4'>
                                <p className='light_color model_p fw-400'>
                                    By continuing, you agree to our
                                    <span className='px-1 text-black VK_underline d-inline-block'>Terms of Use</span>
                                    and
                                    <span className='px-1 text-black VK_underline d-inline-block'>Privacy Policy</span>.
                                </p>
                            </div>
                        </form>
                        <div className='mt-md-5 mt-2'>
                            <p className='m-0 pt-2 text-center text-black fw-500 font_18'>
                                Don't have an account?
                                <button className='bg-transparent border-0 text-black fw-500 font_18' onClick={() => {
                                    props.setmodel(true)
                                    setloginmodel(false);
                                }}>
                                    Create Now
                                </button>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* otp validation */}
            <Modal
                show={otpmodel}
                onHide={() => setotpmodel(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='otp_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>
                        Verify
                    </h4>
                    <p className='text-center light_color fw-500 mb-md-5 mb-3'>
                        Enter the 4 digit verification code that we've sent to your phone +91 {mobile}
                    </p>
                    <div className='mt-lg-4'>
                        <form method='post' onSubmit={otpFormik.handleSubmit}>
                            <div className='mb-md-5 mb-4 d-flex gap-3 justify-content-center'>
                                {["otp1", "otp2", "otp3", "otp4"].map((field, index) => (
                                    <div key={index} className="d-flex flex-column">
                                        <input
                                            type="text"
                                            className='VK_otp_input'
                                            maxLength="1"
                                            name={field}
                                            value={otpFormik.values[field]}
                                            onChange={(e) => {
                                                otpFormik.handleChange(e);
                                                handleInput(e, index);
                                            }}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            onBlur={otpFormik.handleBlur}
                                            ref={otpInputRefs[index]}
                                        />
                                        {otpFormik.touched[field] && otpFormik.errors[field] && (
                                            <small className="text-danger text-center">{otpFormik.errors[field]}</small>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className='mb-4 pt-2'>
                                <input type="submit" value={"Submit OTP"} className='w-100 inter model_theme' />
                            </div>
                        </form>

                        <div>
                            <p className='text-center text-black'>
                                Didn't receive code yet? <button type='button' className='bg-transparent border-0'>Resend</button>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Forget Password Modal */}
            <Modal
                show={forget}
                onHide={() => setforget(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='login_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>Forgot Password</h4>
                    <p className='text-center font_18 light_color fw-500 mb-3'>Enter details below to recover your password</p>
                    <div className='mt-lg-4'>
                        <form method='post' onSubmit={forgetFormik.handleSubmit}>
                            <div className='mb-4 pb-sm-3'>
                                <input type="text" placeholder='Mobile no.' name='mobileNo' value={forgetFormik.values.mobileNo} className='w-100 model_input' onChange={forgetFormik.handleChange} onBlur={forgetFormik.handleBlur} />
                                {forgetFormik.errors.mobileNo && forgetFormik.touched.mobileNo ? (<span className='VK_error_text text-danger'>{forgetFormik.errors.mobileNo}</span>) : null}
                            </div>
                            <div className='mb-4 pt-2'>
                                <input type="submit" value={"Get code"} className='w-100 inter model_theme' />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Reset Password Modal */}
            <Modal
                show={resetpassword}
                onHide={() => setresetpassword(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='login_model'
            >
                <Modal.Body className='inter model_padding'>
                    <h4 className='text-black text-center model_heading fw-600 mb-3'>
                        Reset Password
                    </h4>
                    <p className='text-center font_18 px-5 light_color mb-md-5 mb-3'>
                        Reset your password and login with a new password
                    </p>
                    <div className='mt-lg-4'>
                        <form method='post' onSubmit={resetFormik.handleSubmit}>
                            <div className='mb-4'>
                                <div className='input_password'>
                                    <input
                                        type={type}
                                        placeholder='New password'
                                        name='newPassword'
                                        value={resetFormik.values.newPassword}
                                        className='w-100 model_input'
                                        onChange={resetFormik.handleChange}
                                        onBlur={resetFormik.handleBlur}
                                    />
                                    <button
                                        type='button'
                                        className='bg-transparent VK_eyes border-0'
                                        onClick={handleInputType}
                                    >
                                        {type === 'password'
                                            ? <img src={require('../../../assets/eye_close.png')} alt="Hide Password" />
                                            : <img src={require('../../../assets/eye_open.png')} alt="Show Password" />}
                                    </button>
                                </div>
                                {resetFormik.touched.newPassword && resetFormik.errors.newPassword ? (
                                    <div className="error text-danger">{resetFormik.errors.newPassword}</div>
                                ) : null}
                            </div>
                            <div className='mb-md-5 mb-2'>
                                <div className='input_password'>
                                    <input
                                        type={confirmPasswordType}
                                        placeholder='Confirm password'
                                        name='confirmPassword'
                                        value={resetFormik.values.confirmPassword}
                                        className='w-100 model_input'
                                        onChange={resetFormik.handleChange}
                                        onBlur={resetFormik.handleBlur}
                                    />
                                    <button
                                        type='button'
                                        className='bg-transparent VK_eyes border-0'
                                        onClick={handleConfirmPasswordType}
                                    >
                                        {confirmPasswordType === 'password'
                                            ? <img src={require('../../../assets/eye_close.png')} alt="Hide Password" />
                                            : <img src={require('../../../assets/eye_open.png')} alt="Show Password" />}
                                    </button>
                                </div>
                                {resetFormik.touched.confirmPassword && resetFormik.errors.confirmPassword ? (
                                    <div className="error text-danger">{resetFormik.errors.confirmPassword}</div>
                                ) : null}
                            </div>
                            <div className='mb-4 pt-2'>
                                <input
                                    type="submit"
                                    value={"Update Password"}
                                    className='w-100 inter model_theme'
                                />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default Register_model;
