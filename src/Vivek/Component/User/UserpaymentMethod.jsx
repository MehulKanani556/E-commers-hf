import React, { useEffect, useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import Map from '../Map';

const UserpaymentMethod = () => {

    var data = [
        {
            name: "John Smith",
            date: "24/11",
            number: "1520  0100  3356  6888",
        },
        {
            name: "John Smith1",
            date: "24/11",
            number: "1520  0101  3356  6888",
        },
        {
            name: "John Smith2",
            date: "24/11",
            number: "1520  0102  3356  6888",
        }
    ]

    let [card, setcard] = useState([])

    useEffect(() => {
        setcard(data);
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
                                    Credit / Debit Cards
                                </p>
                            </div>
                            <div className='ms-auto'>
                                <button className='VK_theme_btn' onClick={() => { setadcard(true) }}>
                                    Add Credit / Debit Card
                                </button>
                            </div>
                        </div>
                        <div className='pt-2 h-100'>
                            <Row>
                                <Map data={card}>
                                    {(item) => (
                                        <Col xxl={4} md={12} lg={6} sm={6} className='my-3'>
                                            <div className='VK_card_box d-flex flex-column p-3'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src={require('../../assets/cart_type.png')} width="48px" alt="" />
                                                    </div>
                                                    <div>
                                                        <button className='bg-transparent border-0' onClick={() => { setdelete_model(true) }}>
                                                            <img src={require('../../assets/delete.png')} width="16px" alt="" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='mt-auto'>
                                                    <h4 className='VK_card_num mb-3'>
                                                        {item.number}
                                                    </h4>
                                                </div>
                                                <div className='d-flex gap-4'>
                                                    <div>
                                                        <p className='VK_card_del_tit m-0'>
                                                            CARD HOLDER NAME
                                                        </p>
                                                        <p className='text-white mb-2'>
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className='VK_card_del_tit m-0'>
                                                            VALID THRU
                                                        </p>
                                                        <p className='text-white mb-2'>
                                                            {item.date}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )}
                                </Map>
                            </Row>

                            {/* empty card */}
                            <div className='VK_empty_card d-none'>
                                <div className='text-center'>
                                    <img src={require('../../assets/card.png')} alt="" />
                                    <p className='fw-600 text-black'>
                                        You have no Saved cards
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
                            Add Credit / Debit Card
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form action="" className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Card Holder Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Card No.
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' />
                            </div>
                            <div className='d-flex flex-sm-nowrap flex-wrap my-3 gap-3'>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        CVV
                                    </span>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        Expiry Date
                                    </span>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' />
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

export default UserpaymentMethod
