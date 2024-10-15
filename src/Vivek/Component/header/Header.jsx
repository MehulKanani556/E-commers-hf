import React, { useState } from 'react'
import './header.css'
import { Accordion, Button, Col, Dropdown, Offcanvas, Row } from 'react-bootstrap'
import { FaAngleDown, FaBars, FaLocationCrosshairs, FaLocationDot, FaPlus, FaRegHeart, FaUser } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { BsCart3 } from 'react-icons/bs'

const Header = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <header className='header py-3'>
                <div>
                    <Row className='m-0 justify-content-between align-items-center'>
                        <Col xs={12} md={4} lg={3} className='p-0'>
                            <div className='d-flex align-items-center ps-xxl-5 gap-3'>
                                <h2 className='text-white ps-4 m-0'>
                                    LOGO
                                </h2>
                                <div className='d-md-block d-none'>
                                    <Dropdown className='VK_header_drop'>
                                        <Dropdown.Toggle className='bg-transparent border-0' id="dropdown-basic">
                                            <div className='d-flex align-items-center gap-2'>
                                                <FaLocationDot />
                                                <span>Location</span>
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
                                <div className='d-md-none ms-auto'>
                                    <Button className="bg-transparent shadow-none border-0 font_22">
                                        <IoSearch />
                                    </Button>
                                    <Button onClick={handleShow} className="bg-transparent shadow-none border-0 font_22">
                                        <FaBars />
                                    </Button>
                                    <Offcanvas show={show} onHide={handleClose} placement='end'>
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>
                                                LOGO
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <div className=''>
                                                <Accordion className='header_accoridan'>
                                                    <Accordion.Item eventKey="0" className='shadow-none'>
                                                        <Accordion.Header>
                                                            <FaLocationDot className='me-2' />
                                                            Location
                                                        </Accordion.Header>
                                                        <Accordion.Body className='p-0'>
                                                            <hr className='m-0' />
                                                            <div className='px-3 py-3 d-flex align-items-center'>
                                                                <FaLocationCrosshairs className='me-2' />
                                                                Get Current location
                                                            </div>
                                                            <hr className='m-0' />
                                                            <div className='px-3 py-3 d-flex align-items-center'>
                                                                <FaPlus className='me-2' />
                                                                Add address
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                                <hr className='m-0' />
                                                <div className='px-3 py-3 d-flex align-items-center'>
                                                    <FaUser className='me-2' />
                                                    Profile
                                                </div>
                                                <hr className='m-0' />
                                                <div className='px-3 py-3 d-flex align-items-center'>
                                                    <FaRegHeart className='me-2 font_20' />
                                                    Wishlist
                                                </div>
                                                <hr className='m-0' />
                                                <div className='px-3 py-3 d-flex align-items-center'>
                                                    <BsCart3 className='me-2 font_20' />
                                                    Cart
                                                </div>
                                            </div>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6} className='d-none d-md-flex'>
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
                        </Col>
                        <Col sm={2} lg={2} className='text-white'>
                            <div className='h-100 d-none d-md-block'>
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
                </div >
            </header >

            <nav>
                <Row className='m-0'>
                    <Col className='p-0'>
                        <div className='VK_header_nav'>
                            <ul className='list-unstyled justify-content-between m-0 p-0 d-flex flex-nowrap white_space'>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Women
                                    <div className='VK_mega_menu d-none'>
                                        <div className='d-flex flex-wrap justify-content-between'>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Indian Wear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Sarees
                                                    </li>
                                                    <li className='py-1'>
                                                        Kurtis & Suits
                                                    </li>
                                                    <li className='py-1'>
                                                        Tunics & Tops
                                                    </li>
                                                    <li className='py-1'>
                                                        Ethnic Wear
                                                    </li>
                                                    <li className='py-1'>
                                                        Skirts, Salwars & Palazoos
                                                    </li>
                                                    <li className='py-1'>
                                                        Dress Materials
                                                    </li>
                                                    <li className='py-1'>
                                                        Lehenga Cholis
                                                    </li>
                                                    <li className='py-1'>
                                                        Dupattas  & Shawls
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Western Wear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Dresses
                                                    </li>
                                                    <li className='py-1'>
                                                        Tops
                                                    </li>
                                                    <li className='py-1'>
                                                        T-shirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Jeans
                                                    </li>
                                                    <li className='py-1'>
                                                        Shorts & Skirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Co-ords
                                                    </li>
                                                    <li className='py-1'>
                                                        Playsuits
                                                    </li>
                                                    <li className='py-1'>
                                                        Sweaters & Sweatshirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Jackets & Coats
                                                    </li>
                                                    <li className='py-1'>
                                                        Blazers & Waistcoats
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Watches
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Watches
                                                    </li>
                                                    <li className='py-1'>
                                                        Smart Watches
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-2'>
                                                        <b>
                                                            Belts, Scarves & More
                                                        </b>
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-2'>
                                                        <b>
                                                            Maternity
                                                        </b>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Footwear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Flats
                                                    </li>
                                                    <li className='py-1'>
                                                        Heels
                                                    </li>
                                                    <li className='py-1'>
                                                        Boots
                                                    </li>
                                                    <li className='py-1'>
                                                        Casual Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Sports Shoes & Floaters
                                                    </li>
                                                    <li className='py-1'>
                                                        Sandals
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-3'>
                                                        <b>
                                                            Sunglasses & Frames
                                                        </b>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Sports & Active Wear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Clothing
                                                    </li>
                                                    <li className='py-1'>
                                                        Footwear
                                                    </li>
                                                    <li className='py-1'>
                                                        Sports AccessoriesSports Accessories
                                                    </li>
                                                    <li className='py-1'>
                                                        Sports Equipment
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-3'>
                                                        <b>
                                                            Jewellery
                                                        </b>
                                                    </li>
                                                    <li className='py-1'>
                                                        Fashion Jewellery
                                                    </li>
                                                    <li className='py-1'>
                                                        Fine Jewellery
                                                    </li>
                                                    <li className='py-1'>
                                                        Earrings
                                                    </li>
                                                    <li className='py-1'>
                                                        Rings
                                                    </li>
                                                    <li className='py-1'>
                                                        Bracelets and Bangles
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Lingerie & Sleepwear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Bra
                                                    </li>
                                                    <li className='py-1'>
                                                        Briefs
                                                    </li>
                                                    <li className='py-1'>
                                                        Shapewear
                                                    </li>
                                                    <li className='py-1'>
                                                        Sleepwear & Loungewear
                                                    </li>
                                                    <li className='py-1'>
                                                        Swimwear
                                                    </li>
                                                    <li className='py-1'>
                                                        Camisoles & Thermals
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Beauty & Personal Care
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Fragrances
                                                    </li>
                                                    <li className='py-1'>
                                                        Makeup
                                                    </li>
                                                    <li className='py-1'>
                                                        Skincare
                                                    </li>

                                                    <li className='py-1'>
                                                        Lipsticks
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-3'>
                                                        <b>
                                                            Bags
                                                        </b>
                                                    </li>
                                                    <li className='py-1'>
                                                        Handbags
                                                    </li>
                                                    <li className='py-1'>
                                                        Travel Bags
                                                    </li>
                                                    <li className='py-1'>
                                                        Laptop Bags
                                                    </li>
                                                    <li className='py-1'>
                                                        Clutches
                                                    </li>
                                                    <li className='py-1'>
                                                        Wallets
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Men
                                    <div className='VK_mega_menu d-none'>
                                        <div className='d-flex flex-wrap justify-content-between'>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Topwear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        T-Shirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Casual Shirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Formal Outfits
                                                    </li>
                                                    <li className='py-1'>
                                                        Sweaters
                                                    </li>
                                                    <li className='py-1'>
                                                        Denim Jackets
                                                    </li>
                                                    <li className='py-1'>
                                                        Suits
                                                    </li>
                                                    <li className='py-1'>
                                                        Rain Jackets
                                                    </li>
                                                    <li className='py-1'>
                                                        Hoodies
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Indian & Festive Wear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Kurta Sets
                                                    </li>
                                                    <li className='py-1'>
                                                        Sherwanis
                                                    </li>
                                                    <li className='py-1'>
                                                        Dhotis
                                                    </li>
                                                    <li className='py-1'>
                                                        Nehru Jackets
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-2'>
                                                        <b>
                                                            Bottomwear
                                                        </b>
                                                    </li>
                                                    <li className='py-1'>
                                                        Jeans
                                                    </li>
                                                    <li className='py-1'>
                                                        Formal Trousers
                                                    </li>
                                                    <li className='py-1'>
                                                        Shorts
                                                    </li>
                                                    <li className='py-1'>
                                                        Track Pants
                                                    </li>
                                                    <li className='py-1'>
                                                        Joggers
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Footwear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Casual Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Sports Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Formal Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Sneakers
                                                    </li>
                                                    <li className='py-1'>
                                                        Sports Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Sandals
                                                    </li>
                                                    <li className='py-1'>
                                                        Loafers
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Watches
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Watches
                                                    </li>
                                                    <li className='py-1'>
                                                        Smart Watches
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-3'>
                                                        <b>
                                                            Sunglasses & Frames
                                                        </b>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Sports & Active Wear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Fitness Accessories
                                                    </li>
                                                    <li className='py-1'>
                                                        Tracksuits
                                                    </li>
                                                    <li className='py-1'>
                                                        Sport Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Jackets
                                                    </li>
                                                    <li className='py-1'>
                                                        Track Panets
                                                    </li>
                                                    <li className='py-1'>
                                                        Shorts
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Innerwear & Sleepwear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Boxers
                                                    </li>
                                                    <li className='py-1'>
                                                        Vests
                                                    </li>
                                                    <li className='py-1'>
                                                        Shapewear
                                                    </li>
                                                    <li className='py-1'>
                                                        Loungewear
                                                    </li>
                                                    <li className='py-1'>
                                                        Briefs & Trunks
                                                    </li>
                                                    <li className='py-1'>
                                                        Thermals
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Personal Care & Grooming
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Cosmetic Skin Care
                                                    </li>
                                                    <li className='py-1'>
                                                        Face Wash
                                                    </li>
                                                    <li className='py-1'>
                                                        Body Wash
                                                    </li>
                                                    <li className='py-1'>
                                                        Grooming Kit
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-3'>
                                                        <b>
                                                            Bags
                                                        </b>
                                                    </li>
                                                    <li className='py-1'>
                                                        Handbags
                                                    </li>
                                                    <li className='py-1'>
                                                        Travel Bags
                                                    </li>
                                                    <li className='py-1'>
                                                        Laptop Bags
                                                    </li>
                                                    <li className='py-1'>
                                                        Wallets
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Baby & Kids
                                    <div className='VK_mega_menu'>
                                        <div className='d-flex flex-wrap justify-content-between'>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Boy
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        T-Shirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Shirts & Shorts
                                                    </li>
                                                    <li className='py-1'>
                                                        Clothing Sets
                                                    </li>
                                                    <li className='py-1'>
                                                        Jeans
                                                    </li>
                                                    <li className='py-1'>
                                                        Denim Jackets
                                                    </li>
                                                    <li className='py-1'>
                                                        Suits
                                                    </li>
                                                    <li className='py-1'>
                                                        Hoodies
                                                    </li>
                                                    <li className='py-1'>
                                                        Nightwear
                                                    </li>
                                                    <li className='py-1'>
                                                        Sherwanis
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Girl
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Kurti Sets
                                                    </li>
                                                    <li className='py-1'>
                                                        Tops
                                                    </li>
                                                    <li className='py-1'>
                                                        T-shirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Dresses
                                                    </li>
                                                    <li className='py-1'>
                                                        Skirts
                                                    </li>
                                                    <li className='py-1'>
                                                        Lehenga Choli
                                                    </li>
                                                    <li className='py-1'>
                                                        Party Wear
                                                    </li>
                                                    <li className='py-1'>
                                                        Clothing Sets
                                                    </li>
                                                    <li className='py-1'>
                                                        Jeans & Capris
                                                    </li>
                                                    <li className='py-1'>
                                                        Jumpsuits
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Footwear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Casual Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Sports Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Flats
                                                    </li>
                                                    <li className='py-1'>
                                                        Heels
                                                    </li>
                                                    <li className='py-1'>
                                                        Crocks
                                                    </li>
                                                    <li className='py-1'>
                                                        School Shoes
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Toys & Games
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Learning & Educational Toys
                                                    </li>
                                                    <li className='py-1'>
                                                        Art & Craft
                                                    </li>
                                                    <li className='py-1'>
                                                        Baby Toys
                                                    </li>
                                                    <li className='py-1'>
                                                        Puzzles Games
                                                    </li>
                                                    <li className='py-1'>
                                                        Pool & Bath Toys
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Sports & Active Wear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Fitness Accessories
                                                    </li>
                                                    <li className='py-1'>
                                                        Tracksuits
                                                    </li>
                                                    <li className='py-1'>
                                                        Sport Shoes
                                                    </li>
                                                    <li className='py-1'>
                                                        Jackets
                                                    </li>
                                                    <li className='py-1'>
                                                        Track Panets
                                                    </li>
                                                    <li className='py-1'>
                                                        Shorts
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Innerwear & Sleepwear
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Boxers
                                                    </li>
                                                    <li className='py-1'>
                                                        Vests
                                                    </li>
                                                    <li className='py-1'>
                                                        Shapewear
                                                    </li>
                                                    <li className='py-1'>
                                                        Loungewear
                                                    </li>
                                                    <li className='py-1'>
                                                        Briefs & Trunks
                                                    </li>
                                                    <li className='py-1'>
                                                        Thermals
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_18 header_color inter'>
                                                    <b>
                                                        Personal Care & Grooming
                                                    </b>
                                                </p>
                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                    <li className='py-1'>
                                                        Cosmetic Skin Care
                                                    </li>
                                                    <li className='py-1'>
                                                        Face Wash
                                                    </li>
                                                    <li className='py-1'>
                                                        Body Wash
                                                    </li>
                                                    <li className='py-1'>
                                                        Grooming Kit
                                                    </li>
                                                    <li className='py-1 font_18 text-black mt-3'>
                                                        <b>
                                                            Bags
                                                        </b>
                                                    </li>
                                                    <li className='py-1'>
                                                        Handbags
                                                    </li>
                                                    <li className='py-1'>
                                                        Travel Bags
                                                    </li>
                                                    <li className='py-1'>
                                                        Laptop Bags
                                                    </li>
                                                    <li className='py-1'>
                                                        Wallets
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Beauty & Health
                                </li>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Electronics & Mobiles
                                </li>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Sports
                                </li>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Luggage
                                </li>
                                <li className='py-3 px-2 VK_sub_menu'>
                                    Home & Kitchen
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </nav>
        </React.Fragment >
    )
}

export default Header
