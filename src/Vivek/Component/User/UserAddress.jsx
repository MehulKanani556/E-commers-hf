import React, { useEffect, useState } from 'react'
import { Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Map from '../Map'
import axios from 'axios'

const UserAddress = () => {
    const [addresses, setAddresses] = useState([])
    const [address_model, setAddressModel] = useState(false)
    const [edit_model, setEditModel] = useState(false)
    const [delete_model, setDeleteModel] = useState(false)
    const [loading, setLoading] = useState(false)
    const [currentAddress, setCurrentAddress] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        address: '',
        landmark: '',
        pincode: '',
        city: '',
        state: '',
        addressType: 'Home'
    })

    // API URL
    const API_URL = 'http://localhost:5000/api'

    // Get token from localStorage
    const getToken = () => {
        return localStorage.getItem('token')
    }

    // Config for axios
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }
const token = localStorage.getItem('token');
console.log("token",token);

    // Fetch all addresses
    const fetchAddresses = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${API_URL}/allAddress`, {
                headers: {Authorization : `Bearer ${token}`}
            })
            setAddresses(response.data.address)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching addresses:', error)
            setLoading(false)
        }
    }

    // Create new address
    const createAddress = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post(`${API_URL}/createAddress`, formData, config)
            setAddressModel(false)
            resetForm()
            fetchAddresses()
        } catch (error) {
            console.error('Error creating address:', error)
            setLoading(false)
        }
    }

    // Update address
    const updateAddress = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.put(`${API_URL}/updateAddress/${currentAddress._id}`, formData, config)
            setEditModel(false)
            resetForm()
            fetchAddresses()
        } catch (error) {
            console.error('Error updating address:', error)
            setLoading(false)
        }
    }

    // Delete address
    const deleteAddress = async () => {
        try {
            setLoading(true)
            await axios.delete(`${API_URL}/deleteAddress/${currentAddress._id}`, config)
            setDeleteModel(false)
            fetchAddresses()
        } catch (error) {
            console.error('Error deleting address:', error)
            setLoading(false)
        }
    }

    // Reset form
    const resetForm = () => {
        setFormData({
            name: '',
            contactNo: '',
            address: '',
            landmark: '',
            pincode: '',
            city: '',
            state: '',
            addressType: 'Home'
        })
    }

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Handle radio button change for address type
    const handleAddressTypeChange = (e) => {
        setFormData({
            ...formData,
            addressType: e.target.value
        })
    }

    // Open edit modal with address data
    const openEditModal = (address) => {
        setCurrentAddress(address)
        setFormData({
            name: address.name,
            contactNo: address.contactNo,
            address: address.address,
            landmark: address.landmark || '',
            pincode: address.pincode,
            city: address.city,
            state: address.state,
            addressType: address.addressType
        })
        setEditModel(true)
    }

    // Open delete modal with address data
    const openDeleteModal = (address) => {
        setCurrentAddress(address)
        setDeleteModel(true)
    }

    // Fetch addresses on component mount
    useEffect(() => {
        fetchAddresses()
    }, [])

    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4 h-100'>
                <div className='d-flex flex-wrap align-items-center justify-content-between mb-4'>
                    <h2 className='VK_profile_heading'>
                        My Address
                    </h2>
                    <button className='VK_add_address' onClick={() => { setAddressModel(true) }}>
                        + Add Address
                    </button>
                </div>

                {/* empty address */}
                {addresses.length === 0 && !loading && (
                    <div className='VK_my_order d-flex justify-content-center align-items-center h-100'>
                        <div className='VK_empty_order text-center'>
                            <div className='VK_empty_order_img'>
                                <img src={require('../../assets/address.png')} alt="" />
                            </div>
                            <div>
                                <p className='text-black fw-bold mb-1 h5'>
                                    No saved address found
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* my address */}
                {addresses.length > 0 && (
                    <div className='VK_address_parent'>
                        <Row className='m-0'>
                            <Map data={addresses}>
                                {(item) => (
                                    <Col lg={6} className='my-3 p-0 px-md-2' key={item._id}>
                                        <div className='VK_address_box'>
                                            <div className='VK_address_div'>
                                                <div className='Address_header py-2 px-3'>
                                                    <div className='VK_address_type py-1 d-flex justify-content-between'>
                                                        <div className='VK_address_typ'>
                                                            <span className='d-block px-3 py-1'>
                                                                {item.addressType}
                                                            </span>
                                                        </div>
                                                        <div className='VK_address_three_dots'>
                                                            <Dropdown className='VK_address_drop_down'>
                                                                <Dropdown.Toggle className='bg-transparent text-black' id="dropdown-basic">
                                                                    <BsThreeDotsVertical />
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item>
                                                                        <button className='bg-transparent border-0' onClick={() => openEditModal(item)}>
                                                                            Edit
                                                                        </button>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item>
                                                                        <button className='bg-transparent border-0' onClick={() => openDeleteModal(item)}>
                                                                            Delete
                                                                        </button>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='VK_address_body p-3'>
                                                    <p className='text-black mb-2 fw-500'>
                                                        {item.name}
                                                    </p>
                                                    <p className='mb-2 font_14 text-black fw-500'>
                                                        {item.contactNo}
                                                    </p>
                                                    <p className='font_12 fw-500 m-0'>
                                                        {item.address}
                                                        {item.landmark && `, ${item.landmark}`}
                                                        {item.city && `, ${item.city}`}
                                                        {item.state && `, ${item.state}`}
                                                        {item.pincode && ` - ${item.pincode}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )}
                            </Map>
                        </Row>
                    </div>
                )}

                {loading && (
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='spinner-border text-primary' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </div>
                    </div>
                )}
            </section>

            {/* add address model */}
            <Modal
                show={address_model}
                onHide={() => { setAddressModel(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Add Address
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form onSubmit={createAddress} className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Name
                                </span>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter name' 
                                    required 
                                />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Contact no.
                                </span>
                                <input 
                                    type="text" 
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter Contact No.' 
                                    required 
                                />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Building No. /  Building Name / Street Name
                                </span>
                                <input 
                                    type="text" 
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter Building No. / Building Name / Street Name' 
                                    required 
                                />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Landmark
                                </span>
                                <input 
                                    type="text" 
                                    name="landmark"
                                    value={formData.landmark}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter Landmark' 
                                />
                            </div>
                            <div className='d-flex flex-sm-nowrap flex-wrap my-3 gap-3'>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        Pincode
                                    </span>
                                    <input 
                                        type="text" 
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className='VK_from_input w-100 py-2 px-3' 
                                        placeholder='Enter Pincode' 
                                        required 
                                    />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        City
                                    </span>
                                    <input 
                                        type="text" 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className='VK_from_input w-100 py-2 px-3' 
                                        placeholder='Enter City' 
                                        required 
                                    />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        State
                                    </span>
                                    <input 
                                        type="text" 
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className='VK_from_input w-100 py-2 px-3' 
                                        placeholder='Enter State' 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className='my-4'>
                                <div className='pb-2'>
                                    <span className='text-black fw-bold'>
                                        Address Type
                                    </span>
                                </div>
                                <div className='d-flex VK_edit_radio align-items-center gap-sm-5 gap-2 w-100'>
                                    <Form.Check
                                        type="radio"
                                        id="home-radio"
                                        label="Home"
                                        name="addressType"
                                        value="Home"
                                        checked={formData.addressType === "Home"}
                                        onChange={handleAddressTypeChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="work-radio"
                                        label="Work"
                                        name="addressType"
                                        value="Work"
                                        checked={formData.addressType === "Work"}
                                        onChange={handleAddressTypeChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="other-radio"
                                        label="Other"
                                        name="addressType"
                                        value="Other"
                                        checked={formData.addressType === "Other"}
                                        onChange={handleAddressTypeChange}
                                    />
                                </div>
                            </div>
                            <div className='mt-4 text-center'>
                                <button type="submit" className='VK_add_address_submit' disabled={loading}>
                                    {loading ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* edit address model */}
            <Modal
                show={edit_model}
                onHide={() => { setEditModel(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Edit Address
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form onSubmit={updateAddress} className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Name
                                </span>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter name' 
                                    required 
                                />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Contact no.
                                </span>
                                <input 
                                    type="text" 
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter Contact No.' 
                                    required 
                                />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Building No. /  Building Name / Street Name
                                </span>
                                <input 
                                    type="text" 
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter Building No. / Building Name / Street Name' 
                                    required 
                                />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Landmark
                                </span>
                                <input 
                                    type="text" 
                                    name="landmark"
                                    value={formData.landmark}
                                    onChange={handleChange}
                                    className='VK_from_input w-100 py-2 px-3' 
                                    placeholder='Enter Landmark' 
                                />
                            </div>
                            <div className='d-flex flex-wrap my-3 gap-3'>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        Pincode
                                    </span>
                                    <input 
                                        type="text" 
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className='VK_from_input w-100 py-2 px-3' 
                                        placeholder='Enter Pincode' 
                                        required 
                                    />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        City
                                    </span>
                                    <input 
                                        type="text" 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className='VK_from_input w-100 py-2 px-3' 
                                        placeholder='Enter City' 
                                        required 
                                    />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        State
                                    </span>
                                    <input 
                                        type="text" 
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className='VK_from_input w-100 py-2 px-3' 
                                        placeholder='Enter State' 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className='my-4'>
                                <div className='pb-2'>
                                    <span className='text-black fw-bold'>
                                        Address Type
                                    </span>
                                </div>
                                <div className='d-flex VK_edit_radio align-items-center gap-sm-5 gap-2 w-100'>
                                    <Form.Check
                                        type="radio"
                                        id="home-radio-edit"
                                        label="Home"
                                        name="addressType"
                                        value="Home"
                                        checked={formData.addressType === "Home"}
                                        onChange={handleAddressTypeChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="work-radio-edit"
                                        label="Work"
                                        name="addressType"
                                        value="Work"
                                        checked={formData.addressType === "Work"}
                                        onChange={handleAddressTypeChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="other-radio-edit"
                                        label="Other"
                                        name="addressType"
                                        value="Other"
                                        checked={formData.addressType === "Other"}
                                        onChange={handleAddressTypeChange}
                                    />
                                </div>
                            </div>
                            <div className='mt-4 text-center'>
                                <button type="submit" className='VK_add_address_submit' disabled={loading}>
                                    {loading ? 'Updating...' : 'Update'}
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* delete address model */}
            <Modal
                show={delete_model}
                onHide={() => { setDeleteModel(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_logout_model'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span className='fw-bold m-0 ps-3'>
                            Delete
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column p-md-5 p-2'>
                        <p className='text-center VK_logout_txt m-0'>
                            Are you sure you want to delete?
                        </p>
                        <div className='mt-5'>
                            <div className='d-flex gap-2'>
                                <div className='w-100'>
                                    <button 
                                        className='VK_logut_cancle h-100' 
                                        onClick={() => setDeleteModel(false)}
                                        disabled={loading}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className='w-100'>
                                    <button 
                                        className='VK_logout_ok h-100' 
                                        onClick={deleteAddress}
                                        disabled={loading}
                                    >
                                        {loading ? 'Deleting...' : 'Yes'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default UserAddress