import Modal from 'react-bootstrap/Modal';
import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserDeactive = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [mobileNumber, setMobileNumber] = useState('');
    const [userdeactivate, setUserdeactivate] = useState([]);
    const [userotp, setUserotp] = useState([]);
    const [otpError, setOtpError] = useState('');
    const [isResending, setIsResending] = useState(false);

    const [modalShow, setModalShow] = React.useState(false);

    const inputRefs = useRef([]);
    const navigate = useNavigate()
    const token =  localStorage.getItem('token')

    const handleInputChange = (e, index) => {
        const value = e.target.value;

        if (e.key === 'Backspace' && !value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
        else if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };
    
    const loginData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getUser`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            // console.log("Response>>>>>>>",response.data);
            setMobileNumber(response.data.user.mobileNo)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/deactiveUser`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            // console.log("Response<<<<<<",response.data);
            setUserdeactivate(response.data.deactiveUser);
            setOtpError('');

            inputRefs.current.forEach(input => {
                if (input) input.value = '';
            });

            if (inputRefs.current[0]) inputRefs.current[0].focus();
            setIsResending(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsResending(false);
            setOtpError('Failed to send OTP. Please try again.');
        }
    };

    const handleDeactive = async() => {
        const enteredOTP = inputRefs.current.map(input => input.value).join('');
        try {
            const response = await axios.put(`${BaseUrl}/api/deactiveAccountOtpVerify`, {
                otp: enteredOTP
            } , {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            // console.log("Response===",response.data);
            localStorage.removeItem('token');
            navigate('/')
            setUserotp(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);

            if (error.response) {
                if (error.response.status === 400) {
                    setOtpError('Invalid OTP. Please try again.');
                } else if (error.response.status === 401) {
                    setOtpError('OTP has expired. Please request a new one.');
                } else {
                    setOtpError('Verification failed. Please try again.');
                }
            } else {
                setOtpError('Network error. Please check your connection.');
            }
        }
    }

    useEffect(() => {
        loginData()
        fetchData()
    }, []);

    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4'>
                <h2 className='VK_profile_heading mb-4'>
                    Deactivate Account
                </h2>
                <div className='VK_dactive'>
                    <p className='fw-bold'>
                        When you deactivate your account
                    </p>
                    <ul className='VK_deactive_ul ps-4'>
                        <li>
                            You are logged out of your Quickcart Account
                        </li>
                        <li>
                            Your public profile on Quickcart is no longer visible
                        </li>
                        <li>
                            Your reviews/ratings are still visible, while your profile information is shown as ‘unavailable’ as a result of deactivation.
                        </li>
                        <li>
                            Your wishlist items are no longer accessible through the associated public hyperlink. Wishlist is shown as ‘unavailable’ as a result of deactivation
                        </li>
                        <li>
                            You will be unsubscribed from receiving promotional emails from Quickcart.
                        </li>
                        <li>
                            Your account data is retained and is restored in case you choose to reactivate your account
                        </li>
                        <li>
                            Your wishlist items are no longer accessible through the associated public hyperlink. Wishlist is shown as ‘unavailable’ as a result of deactivation
                        </li>
                        <li>
                            You will be unsubscribed from receiving promotional emails from Quickcart.
                        </li>
                    </ul>
                    <div className='mt-4'>
                        <button className='VK_dactive_btn' onClick={() => { setModalShow(true) }}>
                            Deactivate Account
                        </button>
                    </div>
                </div>
            </section>



            {/* model */}
            <Modal
                show={modalShow}
                onHide={() => { setModalShow(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_deactive_model'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className='m-0 VK_dactive_model'>
                            Deactivate Account
                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-sm-4 p-2'>
                        <p className='text-center fw-bold'>
                            Are you sure you want to leave?
                        </p>
                        <div className='my-3'>
                            <div className='d-flex w-100 VK_deactive_num px-3 rounded-1'>
                                <input type="text" value={mobileNumber} readOnly className='border-0 outline_none bg-transparent w-100 py-2' />
                                <button onClick={() => fetchData()} className='border-0 bg-transparent VK_send_otp_btn w-auto text-nowrap'>
                                    Send OTP
                                </button>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='d-flex gap-sm-4 gap-2'>
                                {Array(6).fill("").map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        className='w-100 outline_none VK_otp_box'
                                        onKeyUp={(e) => handleInputChange(e, index)}
                                        ref={(el) => inputRefs.current[index] = el}
                                    />
                                ))}
                            </div>
                            {otpError && (
                                <div className="text-danger mt-2">
                                    {otpError}
                                </div>
                            )}
                        </div>

                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-center w-100 text-center px-3'>
                                <p className='m-0 VK_deactive_tct'>
                                    Didn't receive code yet?
                                </p>
                                <button className='border-0 bg-transparent text-decoration-underline w-auto text-nowrap'>
                                    Resend
                                </button>
                            </div>
                        </div>

                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-center w-100 gap-sm-4 gap-2'>
                                <button className='VK_stay'>
                                    Let me stay
                                </button>
                                <button className='VK_dactivete' value={userotp} onClick={() => handleDeactive()}>
                                    Deactivate
                                </button>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default UserDeactive
