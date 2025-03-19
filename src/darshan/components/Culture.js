import React from 'react'
import '../css/style.css';
import { Col, Row } from 'react-bootstrap';
import '../../Parth/Component/Beauty/Beauty.css';
import '../../Parth/Component/Luggage/Luggage.css';
import '../../Parth/Component/Sports/Sports.css';

const Culture = ({ mainCategoryName }) => {

    return (
        <>
            {mainCategoryName === 'Women' ? (
                <section className='my-5'>
                    <div className="d_culbg">
                        <div className="d_container">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-5 col-xl-4 col-xxl-6">
                                    <h2>Where culture and style unite</h2>
                                </div>
                                <div className="col-12 col-lg-7 col-xl-8 col-xxl-6">
                                    <div className="d_imgcol position-relative ">
                                        <img src={require('./../d_img/fashion1.png')} alt="Fashion 1" className="d_fimg1" />
                                        <img src={require('./../d_img/fashion2.png')} alt="Fashion 2" className="d_fimg2" />
                                        <img src={require('./../d_img/fashion3.png')} alt="Fashion 3" className="d_fimg3" />
                                        <img src={require('./../d_img/fashion4.png')} alt="Fashion 4" className="d_fimg4" />
                                        <img src={require('./../d_img/fashion5.png')} alt="Fashion 5" className="d_fimg5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : mainCategoryName === 'Men' ? (
                <section className='my-5'>
                <div className="d_culbg">
                    <div className="d_container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-5 col-xl-4 col-xxl-6">
                                <h2>Where culture and style unite</h2>
                            </div>
                            <div className="col-12 col-lg-7 col-xl-8 col-xxl-6">
                                <div className="d_imgcol position-relative ">
                                    <img src={require('./../d_img/men6.jpg')} alt="Fashion 1" className="d_fimg1" />
                                    <img src={require('./../d_img/men7.jpg')} alt="Fashion 2" className="d_fimg2" />
                                    <img src={require('./../d_img/men8.jpg')} alt="Fashion 3" className="d_fimg3" />
                                    <img src={require('./../d_img/men9.jpg')} alt="Fashion 4" className="d_fimg4" />
                                    <img src={require('./../d_img/men10.jpg')} alt="Fashion 5" className="d_fimg5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ) : mainCategoryName === 'Baby & Kids' ? (
                <section className='my-5'>
                <div className="d_culbg">
                    <div className="d_container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-5 col-xl-4 col-xxl-6">
                                <h2>Where culture and style unite</h2>
                            </div>
                            <div className="col-12 col-lg-7 col-xl-8 col-xxl-6">
                                <div className="d_imgcol position-relative ">
                                    <img src={require('./../d_img/baby5.jpg')} alt="Fashion 1" className="d_fimg1" />
                                    <img src={require('./../d_img/baby6.jpg')} alt="Fashion 2" className="d_fimg2" />
                                    <img src={require('./../d_img/baby4.jpg')} alt="Fashion 3" className="d_fimg3" />
                                    <img src={require('./../d_img/baby2.jpg')} alt="Fashion 4" className="d_fimg4" />
                                    <img src={require('./../d_img/baby3.jpg')} alt="Fashion 5" className="d_fimg5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ) : mainCategoryName === 'Luggage' ? (
                <section className='pb-5'>
                    <div className='V_carry_your_load'>
                        <div className='row m-0'>
                            <div className='col-6'>
                                <div className="d_container">
                                    <p className="V_carry ">CARRY YOUR LOAD WITH COMFORT AND STYLE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : mainCategoryName === 'Sports' ? (
                <section className='pb-5'>
                <div className='V_new_footware'>
                    <div className='row m-0'>
                        <div className='col-6'>
                            <div className="d_container">
                                <div className='V_all'>
                                    <p className='V_all_width'><span className='V_new_foot'>NEW FOOTWEAR</span> <span className='V_collection text-white'>COLLECTION</span></p>
                                    <p className='V_big'>
                                        <span className='V_disco text-white'>discount</span>
                                        <span className='V_30'>30%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ) : mainCategoryName === 'Beauty & Health' ? (
                <section className='pb-5'>
                    <div className='V_healty_skincare'>
                        <Row className=''>
                            <Col className=''>
                                <div className="V_overlay">
                                    <p className="V_overlay_text">Healthy skin requires commitment, not a miracle.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            ) : mainCategoryName === 'Electronics & Mobiles' ? (
                <section className='pb-5'>
                    <div className=''>
                        <Row className='m-0'>
                            <Col className='p-0'>
                                <div className='V_back_spe_off d-flex align-items-center'>
                                    <div className="v_spacialpadd">
                                        <div className='V_special '>
                                            <p className='px-3 py-2 text-white text-center'>Special Offer</p>
                                        </div>
                                        <div>
                                            <h1 className='V_sale'>On Mobile Phones
                                                Sale Up To
                                                <span className='V_thirty30'> 30%</span> Off</h1>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            ) : mainCategoryName === 'Home & Kitchen' ? (
                <section className='pb-5'>
                    <div className=''>
                        <Row className='m-0'>
                            <Col className='p-0'>
                                <div className='V_back_spe_off V_back_spe_off1  d-flex align-items-center'>
                                    <div className="v_spacialpadd">
                                        <div className='V_special '>
                                            <p className='px-3 py-2 text-white text-center'>Special Offer</p>
                                        </div>
                                        <div>
                                            <h1 className='V_sale'>On Kitchen Were
                                                Sale Up To
                                                <span className='V_thirty30'> 30%</span> Off</h1>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            ) : null}

        </>
    )
}

export default Culture
