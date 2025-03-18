import './Luggage.css';
import OwlCarousel from 'react-owl-carousel';
import { Row, Col, Button } from 'react-bootstrap';

const LuggageBanner = () => {
    return (
        <section className=''>

            {/* Luggage Slider */}
            <OwlCarousel className='owl-theme' loop items={1}>
                <div className='item V_slider_height'>
                    <div className='V_pack'>
                        <div className='d_container h-100'>
                            <div className='row m-0 h-100'>
                                <div className='col-6' >
                                </div>
                                <div className='col-6 p-3'>
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
                    <div className='V_slider2'>
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
                    </div>
                </div>
                <div className='item V_slider_height'>
                    <div className='V_slider3'>
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
                    </div>
                </div>
            </OwlCarousel>
        </section >
    )
}

export default LuggageBanner;