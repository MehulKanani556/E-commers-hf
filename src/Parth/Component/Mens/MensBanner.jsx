import { Row, Col, Button, } from 'react-bootstrap';
import '../Sports/Sports.css';
import OwlCarousel from 'react-owl-carousel';

const MensBanner = () => {
    return (
        <section className=''>
            <OwlCarousel className='owl-theme' loop items={1}>
                <div className='item V_slider_height'>
                    <div className='V_sports slider_img1'>
                        <div className='d_container h-100'>
                            <Row className='h-100'>
                                <Col lg={6} className='align-self-center p-3'>
                                    <div className='V_future pe-xxl-5'>
                                        <h1 className='V_combine_text'> <span className='V_text_white'>Redefining Motion:</span> <span className='V_text_green'> The Future of Footwear is Here</span></h1>
                                        <p className='V_experience'>Experience unparalleled comfort and innovative design with our state-of-the-art, futuristic sports shoes. Built for champions, designed for you.</p>
                                    </div>
                                    <div className='pt-3'>
                                        <Button className='py-2 px-5 V_sport_slider_1_button '>Buy Now</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className='item V_slider_height'>
                    <div className='V_slider2 slider_img2'>
                        <div className='d_container h-100'>
                            <Row className=' d-flex h-100'>
                                <Col lg={6} className='align-self-center p-3'>
                                    <div className='V_slide2 pe-xxl-5'>
                                        <h1 className='V_fantastic'>Fantastic Features That Makes You Look Cool</h1>
                                        <p className='V_slide_2_text'>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus.</p>
                                    </div>
                                    <div className='pt-3'>
                                        <Button className='py-2 px-5 V_sport_slider_2_button'>Buy Now</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className='item V_slider_height'>
                    <div className='V_slider3 slider_img3'>
                        <div className='d_container h-100'>
                            <Row className=' d-flex h-100'>
                                <Col lg={6} className='align-self-center p-3'>
                                    <div className='V_slid3 pe-xxl-5'>
                                        <h1 className='V_more_than ' >More than
                                            just a game.
                                            It’s a lifestyle.</h1>
                                        <p className='V_slide_3_text '>Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
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

export default MensBanner;