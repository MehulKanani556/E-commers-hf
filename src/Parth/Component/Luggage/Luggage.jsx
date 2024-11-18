import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './Luggage.css'
// import Minisider from '../../../darshan/components/Minisider';
import LuggageSlider from './LuggageSlider.jsx'
import LuggagePost from './LuggagePost.jsx'
import LuggageCollection from './LuggageCollection.jsx'
import GridLuggageComponant from './GridLuggageComponant.jsx';
import Header from '../../../Vivek/Component/header/Header.jsx'
import Subscribe from '../../../Vivek/Component/common/Subscribe.jsx';
import Footer from '../../../Vivek/Component/footer/Footer.jsx'
import Process from '../../../Vivek/Component/common/Process.jsx';
import OwlCarousel from 'react-owl-carousel'

function Luggage() {






    return (
        <>

            <Header />
            <section className=''>
                <OwlCarousel className='owl-theme' loop items={1}>
                    <div className='item V_slider_height'>
                        <div className='V_pack'>
                            <div className='d_container h-100'>
                                <div className='row m-0 h-100'>
                                    <div className='col-6' >
                                    </div>
                                    <div  className='col-6 p-3'>
                                        <div className='V_get_packsack pe-xxl-5 text-white'>
                                            <div>
                                                <p className='V_get_your'>GET YOUR</p>
                                                <h1 className='V_packsack'>PACKSACK</h1>
                                                <p className='V_child_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            </div>
                                            <div className='pt-3 pt-md-5'>
                                                <Button className='py-2 px-5 text-white V_luggage_buy_now_button'>BUY NOW</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item V_slider_height'>
                        {/* <div className='V_slider2'>
                            <div className='d_container h-100'>
                                <Row className=' d-flex h-100'>
                                    <Col lg={6} className='align-self-center p-3'>
                                        <div className='V_slide2 pe-xxl-5'>
                                            <h1 className='V_fantastic'>Fantastic Features That Makes You Look Cool</h1>
                                            <p className='V_slide_2_text'>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus.</p>
                                        </div>
                                        <div className='pt-3'>
                                            <Button className='py-2 px-5 text-white bg-dark'>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div> */}
                    </div>
                    <div className='item V_slider_height'>
                        {/* <div className='V_slider3'>
                            <div className='d_container h-100'>
                                <Row className=' d-flex h-100'>
                                    <Col lg={6} className='align-self-center p-3'>
                                        <div className='V_slid3 pe-xxl-5'>
                                            <h1 className='V_more_than'>More than
                                                just a game.
                                                It’s a lifestyle.</h1>
                                            <p className='V_slide_3_text'>Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
                                        </div>
                                        <div className='pt-3'>
                                            <Button className='py-2 px-5 text-dark V_golf'>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div> */}
                    </div>
                </OwlCarousel>
            </section >
            {/* <section className='V_fresh'>
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
            </section> */}

            <LuggageSlider />

            <section className='text-white py-5'>
                <div className=''>
                    <Row className='p-md-5 m-0'>
                        <Col lg={4} className=' pt-3'>
                            <div className=' V_luggage V_luggage_product_1'>
                                <div className=' pt-lg-3'>
                                    <h3 className='V_upto text-dark'>
                                        Upto <span className='V_20_red'>20%</span> Discount
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_luggage V_luggage_product_2'>
                                <div className=' pt-lg-3'>
                                    <h3 className='V_school text-white'>
                                        Back to
                                        School
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_luggage V_luggage_product_3'>
                                <div className=' pt-lg-3'>
                                    <h3 className='V_trendy text-white'>
                                        Trendy
                                        Backpacks
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>




            {/* <section className='pb-5'>
                <div className='d_container justify-content-between'>
                    <Row className=''>
                        {products.map(product => (
                            <Col sm={6} md={6} lg={4} xl={4} xxl={3} className="gap-3 pb-5 d-flex justify-content-center" key={product.id}>
                                <Card className="V_card align-content-center">
                                    {product.bestSeller && (
                                        <Badge className="V_best_seller_tag py-3 px-5" bg="dark">
                                            Best Seller
                                        </Badge>
                                    )}
                                    <Card.Img
                                        variant="top"
                                        src={product.image} 
                                        className="V_product_image"
                                        alt={product.name}
                                    />
                                    <Card.Body className="px-0">
                                        <Card.Title>
                                            <div className="d-flex justify-content-between  align-self-center px-3">
                                                <h1 className="V_brand">{product.name}</h1>
                                                <div className="V_rating">
                                                    <span className="V_star align-self-center">⭐</span>
                                                    <span className="V_rating_value ">{product.rating}</span>
                                                </div>
                                            </div>
                                        </Card.Title>
                                        <Card.Text className="V_description px-3">
                                            {product.description}
                                        </Card.Text>
                                        <Row>
                                            <Col className="text-end">
                                                <div className="V_price d-flex justify-content-between px-3">
                                                    
                                                    <div className="d-flex">
                                                        {product.colors.map((color, index) => (
                                                            <div
                                                                key={index}
                                                                className=" align-self-center me-2"
                                                                style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%' }}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                    <div className="V_price_container">
                                                        <span className="V_discounted_price">{product.price}</span>
                                                        <span><strike className="original-price">{product.actualPrice}</strike></span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section > */}

            <LuggageCollection />

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



            <LuggagePost />

            <GridLuggageComponant />


            {/* new sletter */}
            <Subscribe />

            {/* process */}
            <Process />

            {/* footer */}
            <Footer />

        </>
    )
}

export default Luggage