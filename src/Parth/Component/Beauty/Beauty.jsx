import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Beauty.css'

function Beauty() {
    return (
        <>
            <section className='V_fresh'>
                <div className='d_container h-100'>
                    <Row className='h-100'>
                        <Col lg={6} className='align-self-center'>
                            <div className='V_lipstic pe-xxl-5'>
                                <h1 className='V_try_fresh '>TRY FRESH PRODUCT
                                    FOR YOUR LIPS</h1>
                                <p className='V_try'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>



            <section className='text-white'>
                <div className=''>
                    <Row className='p-md-5 m-0'>
                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_1'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_make text-dark '>
                                        Make your skin the best
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_2'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_Dry text-dark'>
                                        Dry skins lack mosturiser
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_3'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_Dry text-white'>
                                    Glowing skin always in
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Beauty