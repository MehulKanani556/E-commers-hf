import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';

const UserProfileModel = ({ show, handleClose, contact, handlecontact, userData, onUpdateSuccess }) => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    // State for personal details form
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        gender: '',
        dateOfBirth: ''
    });

    // State for contact details form
    const [contactDetails, setContactDetails] = useState({
        email: '',
        mobileNo: ''
    });

    // State for date components
    const [dobComponents, setDobComponents] = useState({
        day: '',
        month: '',
        year: ''
    });

    // Update state when user data changes or modal opens
    useEffect(() => {
        if (userData) {
            setPersonalDetails({
                name: userData.name || '',
                gender: userData.gender || '',
                dateOfBirth: userData.dateOfBirth || ''
            });

            setContactDetails({
                email: userData.email || '',
                mobileNo: userData.mobileNo || ''
            });

            // Parse date of birth if it exists
            // Update your date parsing logic in the useEffect
            if (userData.dateOfBirth) {
                try {
                    // Check if the date is in "DD/MM/YYYY" format
                    if (userData.dateOfBirth.includes('/')) {
                        const [day, month, year] = userData.dateOfBirth.split('/');

                        // Convert numeric month to month name
                        const monthNames = ["january", "february", "march", "april", "may", "june",
                            "july", "august", "september", "october", "november", "december"];

                        setDobComponents({
                            day: day || '',
                            month: monthNames[parseInt(month) - 1] || '',
                            year: year || ''
                        });
                    } else {
                        // Original logic for "DD Month YYYY" format
                        const parts = userData.dateOfBirth.split(' ');
                        setDobComponents({
                            day: parts[0] || '',
                            month: parts[1]?.toLowerCase() || '',
                            year: parts[2] || ''
                        });
                    }
                } catch (error) {
                    console.error('Error parsing date:', error);
                }
            }
        }
    }, [userData, show, contact]);

    // Handle personal details input change
    const handlePersonalInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle contact details input change
    const handleContactInputChange = (e) => {
        const { name, value } = e.target;
        setContactDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle date of birth input change
    const handleDobChange = (e) => {
        const { name, value } = e.target;
        setDobComponents(prev => ({
            ...prev,
            [name.replace('dob-', '')]: value
        }));
    };

    // Submit handler for personal details
    const handlePersonalSubmit = async (e) => {
        e.preventDefault();

        // Format date of birth
        const formattedDob = `${dobComponents.day} ${dobComponents.month} ${dobComponents.year}`;

        try {
            const response = await axios.put(
                `${BaseUrl}/api/updateUser`,
                {
                    name: personalDetails.name,
                    gender: personalDetails.gender,
                    dateOfBirth: formattedDob
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            console.log('Profile updated:', response.data);

            // Close modal and trigger refresh
            handleClose();
            if (onUpdateSuccess) onUpdateSuccess();

        } catch (error) {
            console.error('Update Error:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    // Submit handler for contact details
    const handleContactSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `${BaseUrl}/api/updateUser`,
                contactDetails,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            console.log('Contact updated:', response.data);

            // Close modal and trigger refresh
            handlecontact();
            if (onUpdateSuccess) onUpdateSuccess();

        } catch (error) {
            console.error('Update Error:', error);
            alert('Failed to update contact details. Please try again.');
        }
    };

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
                            <form onSubmit={handlePersonalSubmit} className='w-100'>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100'>
                                    <div className='w-100 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Name
                                        </p>
                                        <input
                                            type="text"
                                            name="name"
                                            value={personalDetails.name}
                                            onChange={handlePersonalInputChange}
                                            className='VK_from_input w-100 py-2 px-3'
                                        />
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
                                            value="Male"
                                            checked={personalDetails.gender === "Male"}
                                            onChange={handlePersonalInputChange}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="female-radio"
                                            label="Female"
                                            name="gender"
                                            value="Female"
                                            checked={personalDetails.gender === "Female"}
                                            onChange={handlePersonalInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='w-100 my-4'>
                                    <div className='w-100 my-3 px-xxl-4'>
                                        <p className='VK_input_label m-0 pb-1'>
                                            Date of Birth
                                        </p>
                                        <div className='d-flex flex-column flex-sm-row gap-sm-4'>
                                            <input
                                                type="text"
                                                name="dob-day"
                                                value={dobComponents.day}
                                                onChange={handleDobChange}
                                                className='VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0'
                                                placeholder="Day"
                                            />
                                            <Form.Select
                                                name="dob-month"
                                                value={dobComponents.month}
                                                onChange={handleDobChange}
                                                className="VK_from_input w-100 py-2 px-3 my-3 my-sm-0"
                                            >
                                                <option value="">Select</option>
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
                                            </Form.Select>
                                            <input
                                                type="text"
                                                name="dob-year"
                                                value={dobComponents.year}
                                                onChange={handleDobChange}
                                                className='VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0'
                                                placeholder="Year"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-sm-5'>
                                    <button type="submit" className='VK_edit_submit'>Update</button>
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
                            <form onSubmit={handleContactSubmit} className='w-100'>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100 pb-3'>
                                    <div className='w-100 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Mobile No.
                                        </p>
                                        <input
                                            type="text"
                                            name="mobileNo"
                                            value={contactDetails.mobileNo}
                                            onChange={handleContactInputChange}
                                            className='VK_from_input w-100 py-2 px-3'
                                        />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100 pt-3'>
                                    <div className='w-100 px-xxl-4'>
                                        <p className='VK_input_label m-0'>
                                            Email
                                        </p>
                                        <input
                                            type="email"
                                            name="email"
                                            value={contactDetails.email}
                                            onChange={handleContactInputChange}
                                            className='VK_from_input w-100 py-2 px-3'
                                        />
                                    </div>
                                </div>
                                <div className='text-center mt-5'>
                                    <button type="submit" className='VK_edit_submit'>Update</button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </React.Fragment>
    );
};

export default UserProfileModel;