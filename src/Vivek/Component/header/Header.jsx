import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import { Col, Dropdown, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaLocationCrosshairs, FaLocationDot, FaPlus } from 'react-icons/fa6'

const Header = () => {

    const [IsScroll, setIsScroll] = useState(false);
    const navListRef = useRef(null);

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);

        return () => {
            window.removeEventListener('resize', checkScroll);
        };
    }, []);


    const checkScroll = () => {
        if (navListRef.current.scrollWidth > navListRef.current.clientWidth) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };


    const handleNavScroll = (direction) => {
        const scrollAmount = 100; 
        if (direction === 'left') {
            navListRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            navListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };



    return (
        <React.Fragment>
            <header className='header py-3'>
                <div>
                    <Row className='m-0 justify-content-between align-items-center'>
                        <Col xxl={3} xl={3} lg={3} md={4} sm={'auto'} className='p-0'>
                            <div className='d-flex align-items-center ps-xxl-5 gap-3'>
                                <h2 className='text-white ps-4 m-0'>
                                    LOGO
                                </h2>
                                <div>
                                    <Dropdown className='VK_header_drop'>
                                        <Dropdown.Toggle className='bg-transparent border-0' id="dropdown-basic">
                                            <div className='d-flex align-items-center gap-2'>
                                                <FaLocationDot />
                                                <span>
                                                    Location
                                                </span>
                                                <FaAngleDown />
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='p-0 overflow-hidden'>
                                            <Dropdown.Item href="" className='py-3'>
                                                <div className='d-flex align-items-center'>
                                                    <FaLocationCrosshairs className='me-2' />
                                                    Get Current location
                                                </div>
                                            </Dropdown.Item>
                                            <hr className='m-0' />
                                            <Dropdown.Item href="" className='py-3'>
                                                <div className='d-flex align-items-center'>
                                                    <FaPlus className='me-2' />
                                                    Add address
                                                </div>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={7} xl={6} lg={6} md={6} sm={'auto'}>
                            <div className='d-flex'>
                                <div className='VK_header_search d-flex align-items-center bg-white rounded-2 overflow-hidden px-3'>
                                    <span>
                                        <img src={require("../../assets/zoom.png")} alt="" />
                                    </span>
                                    <input type="text" placeholder='Search for products, styles and more'
                                        className='VK_header_search_bar bg-transparent outline_none border-0 py-2 ps-3' />
                                    <span>
                                        <img src={require("../../assets/Frame.png")} alt="" />
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={2} xl={2} lg={2} md={2} sm={'auto'} className='text-white'>
                            <div className='h-100'>
                                <div className='d-flex align-items-center justify-content-lg-end justify-content-xxl-start h-100 gap-4'>
                                    <div>
                                        <img src={require("../../assets/wishlist.png")} height={20} width={20} alt="" />
                                    </div>
                                    <div>
                                        <img src={require("../../assets/Cart.png")} height={22} width={22} alt="" />
                                    </div>
                                    <div>
                                        <img src={require("../../assets/user.png")} height={22} width={22} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
            <nav>
                <Row className='m-0'>
                    <Col className='p-0'>
                        <div className='d-flex justify-content-center VK_header_nav'>
                            {IsScroll && (
                                <button className='VK_nav_btn' onClick={() => handleNavScroll('left')}>
                                    <FaAngleLeft />
                                </button>
                            )}
                            <ul
                                className='d-flex m-0 p-0 w-100 list-unstyled justify-content-between overflow-auto'
                                ref={navListRef} onScroll={checkScroll}>
                                <li className='py-2 px-md-4 px-md-2 px-3 white_space'>
                                    Women
                                </li>
                                <li className='py-2 px-md-4 px-md-2 px-3 white_space'>
                                    Men
                                </li>
                                <li className='py-2 px-md-4 px-md-2 px-3 white_space'>
                                    Baby & Kids
                                </li>
                                <li className='py-2 px-md-4 px-md-2 px-3 white_space'>
                                    Beauty & Health
                                </li>
                                <li className='py-2 px-md-4 px-md-2 px-3 white_space'>
                                    Electronics & Mobiles
                                </li>
                                <li className='py-2 px-md-4 px-md-2 px-3 white_space'>
                                    Sports
                                </li>
                                <li className='py-2 px-md-4 px-md-2 px-3 white_space'>
                                    Home & Kitchen
                                </li>
                            </ul>
                            {IsScroll && (
                                <button className='VK_nav_btn' onClick={() => handleNavScroll('right')}>
                                    <FaAngleRight />
                                </button>
                            )}
                        </div>
                    </Col>
                </Row>
            </nav>
        </React.Fragment >
    )
}

export default Header
