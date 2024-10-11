import React from 'react'
import './footer.css'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='d_container text-white VK_sec_padding'>
                <Row>
                    <Col lg={3}>
                        <div>
                            <h2>
                                LOGO
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Amet viverra nec netus donec. Et ut cursus nisl tincidunt egestas morbi aliquet.
                            </p>
                        </div>
                        <div className='mt-4'>
                            <h3>
                                Connect with us
                            </h3>
                            <div>
                                <div className='d-flex'>
                                    <div className='bg-white'>
                                        <img src={require('../../assets/facebook.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer
