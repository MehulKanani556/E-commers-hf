import React from 'react'
import './home.css'
import { Col, Row } from 'react-bootstrap'

const Poster = () => {
    return (
        <React.Fragment>
            <section className='VK_poster'>
                <Row className='m-0'>
                    <Col className='p-0'>
                        <div className='VK_poster_img'>
                            <div className='d_container p-0 h-100'>
                                <div className="row m-0 h-100">
                                    <div className="col-xxl-5 col-xl-5 col-md-7 align-self-center">
                                        <div className='VK_poster_text'>
                                            <div className=''>
                                                <p className='VK_poster_exclusive'>
                                                    Exclusive
                                                </p>
                                                <h3 className='VK_poster_product'>
                                                    SNEAKERS
                                                </h3>
                                                <p className='VK_poster_txt'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <button className='VK_poster_btn'>
                                                    Explore Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    )
}

export default Poster
