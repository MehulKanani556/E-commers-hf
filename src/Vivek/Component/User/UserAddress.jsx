import React, { useEffect, useState } from 'react'
import { Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Map from '../Map'

const UserAddress = () => {

    let Address = [
        {
            type: "Home",
            name: "Jhon Wick",
            number: "+1 56565 56565",
            address: "Ehrenkranz 13 Washington Square S, New York,Washington Square, NY 10012, USA"
        },
        {
            type: "Work",
            name: "Jhon Wick",
            number: "+1 56565 56565",
            address: "Ehrenkranz 13 Washington Square S, New York,Washington Square, NY 10012, USA"
        },
        {
            type: "Home",
            name: "Jhon Wick",
            number: "+1 56565 56565",
            address: "Ehrenkranz 13 Washington Square S, New York,Washington Square, NY 10012, USA"
        },
    ]

    let [address, setaddress] = useState([])

    const [address_model, setadderss_model] = React.useState(false);
    const [edit_model, setedit_model] = React.useState(false);
    const [delete_model, setdelete_model] = React.useState(false);

    useEffect(() => {
        setaddress(Address)
    }, [])

    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4 h-100'>
                <div className='d-flex flex-wrap align-items-center justify-content-between mb-4'>
                    <h2 className='VK_profile_heading'>
                        My Address
                    </h2>
                    <button className='VK_add_address' onClick={() => { setadderss_model(true) }}>
                        + Add Address
                    </button>
                </div>


                {/* empty address */}
                <div className='VK_my_order d-flex justify-content-center align-items-center h-100 d-none'>
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

                {/* my address */}
                <div className='VK_address_parent'>
                    <Row className='m-0'>
                        <Map data={address}>
                            {(item) => (
                                <Col lg={6} className='my-3 p-0 px-md-2'>
                                    <div className='VK_address_box'>
                                        <div className='VK_address_div'>
                                            <div className='Address_header py-2 px-3'>
                                                <div className='VK_address_type py-1 d-flex justify-content-between'>
                                                    <div className='VK_address_typ'>
                                                        <span className='d-block px-3 py-1'>
                                                            {item.type}
                                                        </span>
                                                    </div>
                                                    <div className='VK_address_three_dots'>
                                                        <Dropdown className='VK_address_drop_down'>
                                                            <Dropdown.Toggle className='bg-transparent text-black' id="dropdown-basic">
                                                                <BsThreeDotsVertical />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item>
                                                                    <button className='bg-transparent border-0' onClick={() => { setedit_model(true) }}>
                                                                        Edit
                                                                    </button>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">
                                                                    <button className='bg-transparent border-0' onClick={() => { setdelete_model(true) }}>
                                                                        delete
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
                                                    {item.number}
                                                </p>
                                                <p className='font_12 fw-500 m-0'>
                                                    {item.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Map>
                    </Row>
                </div>
            </section>



            {/* add address model */}
            <Modal
                show={address_model}
                onHide={() => { setadderss_model(false) }}
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
                        <form action="" className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter name' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Contact no.
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Contact No.' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Building No. /  Building Name / Street Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Building No. / Building Name / Street Name' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Landmark
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Landmark' />
                            </div>
                            <div className='d-flex flex-wrap my-3 gap-3'>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        Pincode
                                    </span>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Pincode' />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        City
                                    </span>
                                    <select name="" id="" className='VK_from_input w-100 py-2 px-3'>
                                        <option value="">Select</option>
                                    </select>
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        State
                                    </span>
                                    <select name="" id="" className='VK_from_input w-100 py-2 px-3'>
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className=' my-4'>
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
                                        name="address"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="work-radio"
                                        label="Work"
                                        name="address"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="other-radio"
                                        label="Other"
                                        name="address"
                                    />
                                </div>
                            </div>
                            <div className='mt-4 text-center'>
                                <button type="submit" className='VK_add_address_submit'>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* edit address model */}
            <Modal
                show={edit_model}
                onHide={() => { setedit_model(false) }}
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
                        <form action="" className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter name' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Contact no.
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Contact No.' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Building No. /  Building Name / Street Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Building No. / Building Name / Street Name' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Landmark
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Landmark' />
                            </div>
                            <div className='d-flex flex-wrap my-3 gap-3'>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        Pincode
                                    </span>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Pincode' />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        City
                                    </span>
                                    <select name="" id="" className='VK_from_input w-100 py-2 px-3'>
                                        <option value="">Select</option>
                                    </select>
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        State
                                    </span>
                                    <select name="" id="" className='VK_from_input w-100 py-2 px-3'>
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className=' my-4'>
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
                                        name="address"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="work-radio"
                                        label="Work"
                                        name="address"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="other-radio"
                                        label="Other"
                                        name="address"
                                    />
                                </div>
                            </div>
                            <div className='mt-4 text-center'>
                                <button type="submit" className='VK_add_address_submit'>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* delete address model */}
            <Modal
                show={delete_model}
                onHide={() => { setdelete_model(false) }}
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
                                    <button className='VK_logut_cancle h-100'>
                                        Cancel
                                    </button>
                                </div>
                                <div className='w-100'>
                                    <button className='VK_logout_ok h-100'>
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment >
    )
}

export default UserAddress
