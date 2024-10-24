import React, { useEffect, useState } from 'react'
import { Col, Dropdown, Modal, Row } from 'react-bootstrap'
import Map from '../Map'
import { FaChevronDown } from 'react-icons/fa'

const UserUpiPayment = () => {

    var data = [
        {
            upiId: "example56@oksbi"
        },
        {
            upiId: "example56@oksbi"
        },
        {
            upiId: "example56@oksbi"
        }
    ]

    let [upi, setupi] = useState([])

    useEffect(() => {
        setupi(data);
    }, [])


    const [delete_model, setdelete_model] = React.useState(false);
    const [addcard, setadcard] = React.useState(false);


    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4 h-100'>
                <div className='d-flex flex-wrap align-items-center justify-content-between mb-4'>
                    <h2 className='VK_profile_heading fw-bold'>
                        Payment Methods
                    </h2>
                </div>
                <div className='mt-4'>
                    <div className=''>
                        <div className='d-flex justify-content-between flex-wrap align-items-center VK_border_bottom pb-4'>
                            <div>
                                <p className='m-0 fw-600 font_18'>
                                    UPI ID
                                </p>
                            </div>
                            <div className='ms-auto'>
                                <button className='VK_theme_btn' onClick={() => { setadcard(true) }}>
                                    Add UPI ID
                                </button>
                            </div>
                        </div>
                        <div className='pt-2 h-100'>
                            <Row>
                                <Map data={upi}>
                                    {(item) => (
                                        <Col lg={6} md={12} sm={6} className='my-3'>
                                            <div className='VK_upi_card d-flex align-items-center w-100'>
                                                <div>
                                                    <img src={require('../../assets/googlepay.png')} height="28px" alt="" />
                                                </div>
                                                <div className='ps-3'>
                                                    {item.upiId}
                                                </div>
                                                <div className='ms-auto'>
                                                    <button className='bg-transparent border-0' onClick={() => { setdelete_model(true) }}>
                                                        <img src={require('../../assets/delete.png')} width="16px" alt="" />
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    )}
                                </Map>
                            </Row>

                            {/* empty card */}
                            <div className='VK_empty_card d-none'>
                                <div className='text-center'>
                                    <img src={require('../../assets/upi.png')} alt="" />
                                    <p className='fw-600 text-black'>
                                        You have no saved UPI ID
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Add Card model */}
            <Modal
                show={addcard}
                onHide={() => { setadcard(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Add UPI ID
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form action="" className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    UPI ID
                                </span>
                                <div className='d-flex VK_theme_bg'>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' />
                                    <Dropdown>
                                        <Dropdown.Toggle className='VK_theme_bg' id="dropdown-basic">
                                            <FaChevronDown className='text-black' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                oksbi
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                okicici
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                okaxis
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                okhdfcbank
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button type="submit" className='VK_add_address_submit'>
                                    Save
                                </button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>


            {/* delete card model */}
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
                <Modal.Body className='py-4'>
                    <div className='d-flex flex-column p-md-4 p-2'>
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
        </React.Fragment>
    )
}

export default UserUpiPayment
