import React, { useState } from 'react'
import './user.css';
import '../common.css'
import UserProfileModel from './UserProfileModel';

const UserProfile = () => {

    const [show, setShow] = useState(false);
    const [contactmodel, setcontactmodel] = useState(false);

    const handleClose = () => setShow(false);

    const handlecloseContact = () => setcontactmodel(false);



    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4'>
                <h2 className='VK_profile_heading'>
                    My Profile
                </h2>
                <div className='VK_profile_div'>
                    <div className='VK_proflie_logo'>
                        <div className='VK_proflie_img'>
                            <p className='m-0'>
                                JW
                            </p>
                        </div>
                    </div>
                    <div className='VK_profile_info'>
                        <div className='VK_profile_detail px-4'>
                            <div className='d-flex justify-content-between align-items-center pb-3'>
                                <div>
                                    <h4 className='VK_profile_det m-0'>
                                        Personal Details
                                    </h4>
                                </div>
                                <div>
                                    <button className='bg-white border-0' onClick={() => { setShow(true) }}>
                                        <p className='m-0 text-decoration-underline fw-'>
                                            Edit
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className='VK_profile_detais py-3 mx-4'>
                            <form action="" className='w-100'>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100'>
                                    <div className='w-100 my-3 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Name
                                        </p>
                                        <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                    <div className='w-100 my-3 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Date of Birth
                                        </p>
                                        <input type="text" name="date" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-sm-row gap-5 w-100'>
                                    <div className='w-100 my-3 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Gender
                                        </p>
                                        <input type="text" name="gender" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                    <div className='w-100 px-xxl-4'>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='VK_profile_detail px-4'>
                            <div className='d-flex justify-content-between align-items-center pb-3'>
                                <div>
                                    <h4 className='VK_profile_det m-0'>
                                        Contact Details
                                    </h4>
                                </div>
                                <div>
                                    <button className='bg-white border-0' onClick={() => { setcontactmodel(true) }}>
                                        <p className='m-0 text-decoration-underline fw-'>
                                            Edit
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className='VK_profile_detais py-3 mx-4'>
                            <form action="" className='w-100'>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100'>
                                    <div className='w-100 px-xxl-4 my-3'>
                                        <p className='VK_input_label m-0'>
                                            Email
                                        </p>
                                        <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                    <div className='w-100 px-xxl-4 my-3'>
                                        <p className='VK_input_label m-0'>
                                            Password
                                        </p>
                                        <input type="text" name="date" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-sm-row gap-5 w-100'>
                                    <div className='w-100 px-xxl-4 my-3'>
                                        <p className='VK_input_label m-0'>
                                            Mobile No.
                                        </p>
                                        <input type="text" name="gender" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                    <div className='w-100 px-xxl-4 my-3'>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <UserProfileModel show={show} handleClose={handleClose} contact={contactmodel} handlecontact={handlecloseContact} />
        </React.Fragment>
    )
}

export default UserProfile
