import React from 'react'
import { Form, Modal } from 'react-bootstrap'

const UserProfileModel = ({ show, handleClose, contact, handlecontact }) => {
    return (
        <React.Fragment>
            <div className='inter'>

                {/* edit personal details */}
                <Modal
                    className='VK_edit_profile_model'
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton className='px-4'>
                        <Modal.Title id="contained-modal-title-vcenter" className='py-2'>
                            <h4 className='VK_model_heading m-0 px-xxl-4'>
                                Edit Personal Details
                            </h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='VK_edit_profile_model p-sm-3'>
                            <form action="" className='w-100'>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100'>
                                    <div className='w-100 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Name
                                        </p>
                                        <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                </div>
                                <div className='px-xxl-4 my-4'>
                                    <div className='pb-2'>
                                        <span className='VK_input_label'>
                                            Gender
                                        </span>
                                    </div>
                                    <div className='d-flex VK_edit_radio flex-column flex-sm-row gap-sm-5 w-100'>
                                        <Form.Check
                                            type="radio"
                                            id="male-radio"
                                            label="Male"
                                            name="gender"
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="female-radio"
                                            label="Female"
                                            name="gender"
                                        />
                                    </div>
                                </div>
                                <div className='w-100 my-4'>
                                    <div className='w-100 my-3 px-xxl-4'>
                                        <p className='VK_input_label m-0 pb-1'>
                                            Date of Birth
                                        </p>
                                        <div className='d-flex flex-column flex-sm-row gap-sm-4'>
                                            <input type="text" name="dob-day" className='VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0' placeholder="Day" />
                                            <select name="dob-month" className="VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0">
                                                <option value="january">January</option>
                                                <option value="february">February</option>
                                                <option value="march">March</option>
                                                <option value="april">April</option>
                                                <option value="may">May</option>
                                                <option value="june">June</option>
                                                <option value="july">July</option>
                                                <option value="august">August</option>
                                                <option value="september">September</option>
                                                <option value="october">October</option>
                                                <option value="november">November</option>
                                                <option value="december">December</option>
                                            </select>
                                            <input type="text" name="dob-year" className='VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0' placeholder="Year" />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-sm-5'>
                                    <input type="submit" value="Update" className='VK_edit_submit' />
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>

                {/* Edit contact model */}
                <Modal
                    className='VK_edit_profile_model'
                    show={contact}
                    onHide={handlecontact}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton className='px-4'>
                        <Modal.Title id="contained-modal-title-vcenter" className='py-2'>
                            <h4 className='VK_model_heading m-0 px-xxl-4'>
                                Edit Contact Details
                            </h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='VK_edit_profile_model p-sm-3'>
                            <form action="" className='w-100'>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100 pb-3'>
                                    <div className='w-100 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Mobile No.
                                        </p>
                                        <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100 pt-3'>
                                    <div className='w-100 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Email
                                        </p>
                                        <input type="email" name="name" className='VK_from_input w-100 py-2 px-3' />
                                    </div>
                                </div>
                                <div className='text-center mt-5'>
                                    <input type="submit" value="Update" className='VK_edit_submit' />
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </React.Fragment>
    )
}

export default UserProfileModel
