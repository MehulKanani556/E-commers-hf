import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import { Accordion, Button, Col, Container, Dropdown, Modal, Offcanvas, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaBars, FaLocationCrosshairs, FaLocationDot, FaPlus, FaRegHeart, FaUser } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { BsCart3 } from 'react-icons/bs'
import Models from './model/Models'

const Header = () => {

    // login 
    const [modalShow, setModalShow] = React.useState(false);
    var [login, setlogin] = useState(false)
    let login_chk = () => {
        let login = localStorage.getItem('login')

        if (login) {
            setlogin(false)
            setModalShow(false);
        } else {
            setlogin(true)
            setModalShow(true);
        }
    }


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


    // search suggestions

    let [suggestion, setsuggestion] = useState(null);

    let search_sug = [
        "iphone 16 pro max",
        "Samsung Galaxy S23 Ultra 5G AI Smartphone ",
        "iphone 16 pro max",
        "Samsung Galaxy S23 Ultra 5G AI Smartphone ",
        "Samsung Galaxy S23 Ultra 5G AI Smartphone ",
        "Samsung Galaxy S23 Ultra 5G AI Smartphone "
    ]

    const handle_serachSuggestion = (event) => {
        let search_text = event.target.value.toLowerCase(); 
        if (search_text.length > 0) {
            const filtered = search_sug.filter((element) =>
                element.toLocaleLowerCase().includes(search_text)
            );

            setsuggestion(filtered.length > 0 ? filtered : null); 
      
        } else {
            setsuggestion(null); 
        }
    };


    // image search model
    const [imagemodel, setimagemodel] = React.useState(false);




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Container fluid className='p-0'>

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
                                <div className='VK_search_parent w-100'>
                                    <div className='VK_header_search d-flex align-items-center bg-white rounded-2 overflow-hidden px-3'>
                                        <span>
                                            <img src={require("../../assets/zoom.png")} alt="" />
                                        </span>
                                        <input type="text" placeholder='Search for products, styles and more'
                                            className='VK_header_search_bar bg-transparent outline_none border-0 py-2 ps-3' onChange={(e) => { handle_serachSuggestion(e) }} />
                                        <span>
                                            <button className='bg-transparent border-0' onClick={() => { setimagemodel(true) }}>
                                                <img src={require("../../assets/Frame.png")} alt="" />
                                            </button>
                                        </span>
                                        <div className='VK_input_suggestion'>
                                            {
                                                suggestion != null &&
                                                <ul className='VK_search_suggestion list-unstyled'>
                                                    {
                                                        suggestion.map((item, index) => {
                                                            return (
                                                                <li key={index} className='py-2'>
                                                                    <div className='d-flex align-items-center w-100'>
                                                                        <div>
                                                                            <img src={require('../../assets/zoom.png')} height="22px" width="22px" alt="" />
                                                                        </div>
                                                                        <div className='ps-3'>
                                                                            {item}
                                                                        </div>
                                                                        <div className='ms-auto'>
                                                                            <img src={require('../../assets/arrow.png')} height="20px" width="20px" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={2} lg={2} className='text-white p-0 pe-lg-3'>
                                <div className='h-100 d-none d-md-block'>
                                    <div className='d-flex align-items-center justify-content-lg-end justify-content-xxl-start h-100 gap-4'>
                                        <div>
                                            <img src={require("../../assets/wishlist.png")} height={20} width={20} alt="" />
                                        </div>
                                        <div>
                                            <img src={require("../../assets/Cart.png")} height={22} width={22} alt="" />
                                        </div>
                                        <div>
                                            <button className='bg-transparent border-0' onClick={() => { login_chk() }}>
                                                <img src={require("../../assets/user.png")} height={22} width={22} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div >
                </header >

                <nav style={{ backgroundColor: "#F5F5F7" }}>
                    <Row className='m-0'>
                        <Col className='p-0'>
                            <div className='VK_header_nav d-flex justify-content-center overflow-hidden'>
                                {IsScroll && (
                                    <button className='border-0' onClick={() => handleNavScroll('left')}>
                                        <FaAngleLeft />
                                    </button>
                                )}
                                <ul className='w-100 VK_sub_scroll_bar list-unstyled justify-content-between m-0 p-0 d-flex flex-nowrap overflow-auto white_space'
                                    ref={navListRef}
                                    onScroll={checkScroll}>
                                    <li className='VK_sub_menu'>
                                        Women
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                            Sports Accessories
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                    <li className='VK_sub_menu'>
                                        Men
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                    <li className='VK_sub_menu'>
                                        Baby & Kids
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
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
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Kids Accessories
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Sunglasses
                                                        </li>
                                                        <li className='py-1'>
                                                            Caps & Hats
                                                        </li>
                                                        <li className='py-1'>
                                                            Watches
                                                        </li>
                                                        <li className='py-1'>
                                                            Bags
                                                        </li>
                                                        <li className='py-1 font_18 text-black mt-2'>
                                                            <b>
                                                                Personal Care
                                                            </b>
                                                        </li>
                                                        <li className='py-1'>
                                                            Skin Care Products
                                                        </li>
                                                        <li className='py-1'>
                                                            Hair Oils
                                                        </li>
                                                        <li className='py-1'>
                                                            Shampoos
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Innerwear & Sleepwear
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Innerwear sets
                                                        </li>
                                                        <li className='py-1'>
                                                            Trunks & Briefs
                                                        </li>
                                                        <li className='py-1'>
                                                            Night Suits
                                                        </li>
                                                        <li className='py-1'>
                                                            Lounge T-shirts
                                                        </li>
                                                        <li className='py-1'>
                                                            Thermal Innerwear
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Winterwear
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Sweater
                                                        </li>
                                                        <li className='py-1'>
                                                            Coats & Winter Jackets
                                                        </li>
                                                        <li className='py-1'>
                                                            Winter Clothing Sets
                                                        </li>
                                                        <li className='py-1'>
                                                            BodySuits
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='VK_sub_menu'>
                                        Beauty & Health
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Mackup
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Primer
                                                        </li>
                                                        <li className='py-1'>
                                                            Foundation
                                                        </li>
                                                        <li className='py-1'>
                                                            Lipstick
                                                        </li>
                                                        <li className='py-1'>
                                                            Eyeliner
                                                        </li>
                                                        <li className='py-1'>
                                                            Compact
                                                        </li>
                                                        <li className='py-1'>
                                                            Nail Polish
                                                        </li>
                                                        <li className='py-1'>
                                                            Kajal
                                                        </li>
                                                        <li className='py-1'>
                                                            Eyeshadow
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Skincare
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Sunscreen
                                                        </li>
                                                        <li className='py-1'>
                                                            Face Wash
                                                        </li>
                                                        <li className='py-1'>
                                                            Body Wash
                                                        </li>
                                                        <li className='py-1'>
                                                            Body Lotion
                                                        </li>
                                                        <li className='py-1'>
                                                            Face Moisturiser
                                                        </li>
                                                        <li className='py-1'>
                                                            Lip Balm
                                                        </li>
                                                        <li className='py-1'>
                                                            Cream
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Health & Personal Care
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Hair Oil
                                                        </li>
                                                        <li className='py-1'>
                                                            Hand Wash
                                                        </li>
                                                        <li className='py-1'>
                                                            Glucose
                                                        </li>
                                                        <li className='py-1'>
                                                            Ayurvedic Care
                                                        </li>
                                                        <li className='py-1'>
                                                            Hair Color
                                                        </li>
                                                        <li className='py-1'>
                                                            Hair Gel
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Fragrances
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Perfumes
                                                        </li>
                                                        <li className='py-1'>
                                                            Body Mist
                                                        </li>
                                                        <li className='py-1 font_18 text-black mt-2'>
                                                            <b>
                                                                Baby Care
                                                            </b>
                                                        </li>
                                                        <li className='py-1 font_18 text-black mt-2'>
                                                            <b>
                                                                Men’s Grooming
                                                            </b>
                                                        </li>
                                                        <li className='py-1'>
                                                            Hair Wax
                                                        </li>
                                                        <li className='py-1'>
                                                            Face Shaver
                                                        </li>
                                                        <li className='py-1'>
                                                            Beard Oil
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Makeup Set
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Beauty Kit
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Company
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Lakme
                                                        </li>
                                                        <li className='py-1'>
                                                            Nivea
                                                        </li>
                                                        <li className='py-1'>
                                                            Loreal
                                                        </li>
                                                        <li className='py-1'>
                                                            Maybelline
                                                        </li>
                                                        <li className='py-1'>
                                                            Philips
                                                        </li>
                                                        <li className='py-1'>
                                                            Biotique
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='VK_sub_menu'>
                                        Electronics & Mobiles
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Mobile, TV & More
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Smart Phones
                                                        </li>
                                                        <li className='py-1'>
                                                            Android TV
                                                        </li>
                                                        <li className='py-1'>
                                                            I pad
                                                        </li>
                                                        <li className='py-1'>
                                                            Laptop
                                                        </li>
                                                        <li className='py-1'>
                                                            Computer
                                                        </li>
                                                        <li className='py-1'>
                                                            Refrigerator
                                                        </li>
                                                        <li className='py-1'>
                                                            Air Conditioner
                                                        </li>
                                                        <li className='py-1'>
                                                            Speaker
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Wearable Device
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Smart Watch
                                                        </li>
                                                        <li className='py-1'>
                                                            Air pods
                                                        </li>
                                                        <li className='py-1'>
                                                            Headphone
                                                        </li>
                                                        <li className='py-1'>
                                                            Smart Glasses
                                                        </li>
                                                        <li className='py-1'>
                                                            Fitness Tracker
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Games
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Play Station
                                                        </li>
                                                        <li className='py-1'>
                                                            Sony PSP
                                                        </li>
                                                        <li className='py-1'>
                                                            Gaming PC
                                                        </li>
                                                        <li className='py-1'>
                                                            Gaming Headset
                                                        </li>
                                                        <li className='py-1'>
                                                            Gaming Chair
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Accessories
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Mobile Case
                                                        </li>
                                                        <li className='py-1'>
                                                            Mousepad & more...
                                                        </li>
                                                        <li className='py-1'>
                                                            Mobile Skins
                                                        </li>
                                                        <li className='py-1'>
                                                            Adapter
                                                        </li>
                                                        <li className='py-1'>
                                                            Charging Cable
                                                        </li>
                                                        <li className='py-1'>
                                                            Pen drive & SD Card
                                                        </li>
                                                        <li className='py-1'>
                                                            Powerbanks
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Company
                                                        </b>
                                                    </p>
                                                    <div className='d-flex justify-content-between'>
                                                        <ul className='list-unstyled px-2 m-0 header_light inter'>
                                                            <li className='py-1'>
                                                                Vivo
                                                            </li>
                                                            <li className='py-1'>
                                                                Oppo
                                                            </li>
                                                            <li className='py-1'>
                                                                Samsung
                                                            </li>
                                                            <li className='py-1'>
                                                                Sony
                                                            </li>
                                                            <li className='py-1'>
                                                                Apple
                                                            </li>
                                                            <li className='py-1'>
                                                                Dell
                                                            </li>
                                                            <li className='py-1'>
                                                                HP
                                                            </li>
                                                            <li className='py-1'>
                                                                Lenovo
                                                            </li>
                                                        </ul>
                                                        <ul className='list-unstyled px-2 m-0 header_light inter'>
                                                            <li className='py-1'>
                                                                Asus
                                                            </li>
                                                            <li className='py-1'>
                                                                Sony
                                                            </li>
                                                            <li className='py-1'>
                                                                Boat
                                                            </li>
                                                            <li className='py-1'>
                                                                Noise
                                                            </li>
                                                            <li className='py-1'>
                                                                JBL
                                                            </li>
                                                            <li className='py-1'>
                                                                Mitsubishi
                                                            </li>
                                                            <li className='py-1'>
                                                                O General
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='VK_sub_menu'>
                                        Sports
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Sports & Active wear
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Active T-Shirts
                                                        </li>
                                                        <li className='py-1'>
                                                            Track Pants
                                                        </li>
                                                        <li className='py-1'>
                                                            Track Suits
                                                        </li>
                                                        <li className='py-1'>
                                                            Jackets
                                                        </li>
                                                        <li className='py-1'>
                                                            Sweatshirts
                                                        </li>
                                                        <li className='py-1'>
                                                            Swimwear
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Shoes
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Running
                                                        </li>
                                                        <li className='py-1'>
                                                            Training
                                                        </li>
                                                        <li className='py-1'>
                                                            Baseball
                                                        </li>
                                                        <li className='py-1'>
                                                            Football
                                                        </li>
                                                        <li className='py-1'>
                                                            Cricket
                                                        </li>
                                                        <li className='py-1'>
                                                            Hiker & Trail
                                                        </li>
                                                        <li className='py-1'>
                                                            Golf
                                                        </li>
                                                        <li className='py-1'>
                                                            Skateboarding
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Sport Accessories & Gear
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Socks
                                                        </li>
                                                        <li className='py-1'>
                                                            Insoles
                                                        </li>
                                                        <li className='py-1'>
                                                            Hats & Gloves
                                                        </li>
                                                        <li className='py-1'>
                                                            Safety Gears
                                                        </li>
                                                        <li className='py-1'>
                                                            Headbands & Wristbands
                                                        </li>
                                                        <li className='py-1'>
                                                            Bags
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Company
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Sketchers
                                                        </li>
                                                        <li className='py-1'>
                                                            Adidas
                                                        </li>
                                                        <li className='py-1'>
                                                            Nike
                                                        </li>
                                                        <li className='py-1'>
                                                            Puma
                                                        </li>
                                                        <li className='py-1'>
                                                            New Balance
                                                        </li>
                                                        <li className='py-1'>
                                                            Reebok
                                                        </li>
                                                        <li className='py-1'>
                                                            Asics
                                                        </li>
                                                        <li className='py-1'>
                                                            Under Armour
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='VK_sub_menu'>
                                        Luggage
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Trolley Bag
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Soft trolleys
                                                        </li>
                                                        <li className='py-1'>
                                                            Hard trolleys
                                                        </li>
                                                        <li className='py-1'>
                                                            Hybrid trolleys
                                                        </li>
                                                        <li className='py-1'>
                                                            Duffle trolleys
                                                        </li>
                                                        <li className='py-1 font_18 text-black mt-2'>
                                                            <b>
                                                                Duffle Bags
                                                            </b>
                                                        </li>
                                                        <li className='py-1'>
                                                            Duffle bags
                                                        </li>
                                                        <li className='py-1'>
                                                            Cross body bags
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Backpacks
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Laptop backpacks
                                                        </li>
                                                        <li className='py-1'>
                                                            Travel backpacks
                                                        </li>
                                                        <li className='py-1'>
                                                            Hiking backpacks
                                                        </li>
                                                        <li className='py-1'>
                                                            Rusksack
                                                        </li>
                                                        <li className='py-1'>
                                                            Cycling backpacks
                                                        </li>
                                                        <li className='py-1'>
                                                            Hydration backpacks
                                                        </li>
                                                        <li className='py-1'>
                                                            Camera backpacks
                                                        </li>
                                                        <li className='py-1'>
                                                            Climbing backpacks
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Accessories
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Neck pillows
                                                        </li>
                                                        <li className='py-1'>
                                                            Eye mask
                                                        </li>
                                                        <li className='py-1'>
                                                            Travel kit & Organizer
                                                        </li>
                                                        <li className='py-1'>
                                                            Luggage tags
                                                        </li>
                                                        <li className='py-1'>
                                                            Passport covers
                                                        </li>
                                                        <li className='py-1'>
                                                            Ear plugs
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Company
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Monos
                                                        </li>
                                                        <li className='py-1'>
                                                            Delsey paris
                                                        </li>
                                                        <li className='py-1'>
                                                            July
                                                        </li>
                                                        <li className='py-1'>
                                                            Louis Vitton
                                                        </li>
                                                        <li className='py-1'>
                                                            American Touristr
                                                        </li>
                                                        <li className='py-1'>
                                                            Safari
                                                        </li>
                                                        <li className='py-1'>
                                                            Provogue
                                                        </li>
                                                        <li className='py-1'>
                                                            VIP
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='VK_sub_menu'>
                                        Home & Kitchen
                                        <div className='VK_mega_menu'>
                                            <div className='VK_mega_menu_div_parent'>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Cookwear & Kitchenwear
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Pans
                                                        </li>
                                                        <li className='py-1'>
                                                            Tawas
                                                        </li>
                                                        <li className='py-1'>
                                                            Pressure Cookers
                                                        </li>
                                                        <li className='py-1'>
                                                            Gas Stove
                                                        </li>
                                                        <li className='py-1'>
                                                            Kitchen Containers
                                                        </li>
                                                        <li className='py-1'>
                                                            Crockeries
                                                        </li>
                                                        <li className='py-1'>
                                                            Utensils
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Table wear & Dinner wear
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Coffee mug
                                                        </li>
                                                        <li className='py-1'>
                                                            Dinner wear
                                                        </li>
                                                        <li className='py-1'>
                                                            Bar set
                                                        </li>
                                                        <li className='py-1'>
                                                            Flasks
                                                        </li>
                                                        <li className='py-1'>
                                                            Dinner set
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Home Decor
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Paintings
                                                        </li>
                                                        <li className='py-1'>
                                                            Wall Clock
                                                        </li>
                                                        <li className='py-1'>
                                                            Showpiece & Art crafts
                                                        </li>
                                                        <li className='py-1'>
                                                            Curtains & Sofa
                                                        </li>
                                                        <li className='py-1'>
                                                            TV Unit
                                                        </li>
                                                        <li className='py-1'>
                                                            Floor Covering
                                                        </li>
                                                        <li className='py-1'>
                                                            Chandelier
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Smart Home
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Smart Light
                                                        </li>
                                                        <li className='py-1'>
                                                            Smart security system
                                                        </li>
                                                        <li className='py-1'>
                                                            Smart door locks
                                                        </li>
                                                        <li className='py-1 font_18 text-black mt-2'>
                                                            <b>
                                                                Other
                                                            </b>
                                                        </li>
                                                        <li className='py-1'>
                                                            Light
                                                        </li>
                                                        <li className='py-1'>
                                                            Home utilities & Organizer
                                                        </li>
                                                        <li className='py-1'>
                                                            Bathroom & Kitchen fitting
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Accessories
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Kitchen cutleries
                                                        </li>
                                                        <li className='py-1'>
                                                            Controllers
                                                        </li>
                                                        <li className='py-1'>
                                                            Switch boards
                                                        </li>
                                                        <li className='py-1'>
                                                            Cutleries
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='VK_menu_list'>
                                                    <p className='mb-2 font_18 header_color inter'>
                                                        <b>
                                                            Company
                                                        </b>
                                                    </p>
                                                    <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                        <li className='py-1'>
                                                            Prestige
                                                        </li>
                                                        <li className='py-1'>
                                                            Caraway
                                                        </li>
                                                        <li className='py-1'>
                                                            Cuisinart
                                                        </li>
                                                        <li className='py-1'>
                                                            Borosil
                                                        </li>
                                                        <li className='py-1'>
                                                            Branbantia
                                                        </li>
                                                        <li className='py-1'>
                                                            Milton
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                {IsScroll && (
                                    <button className='border-0' onClick={() => handleNavScroll('right')}>
                                        <FaAngleRight />
                                    </button>
                                )}
                            </div>
                        </Col>
                    </Row>
                </nav>
            </Container>

            {/* models */}
            {
                login ? (
                    <Models onHide={() => setModalShow(false)} show={modalShow} setmodel={setModalShow} />
                ) : (null)
            }


            {/* image search model */}
            <Modal
                show={imagemodel}
                onHide={() => { setimagemodel(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_image_search_model'
            >
                <Modal.Header>
                    <div className='d-flex w-100 align-items-center'>
                        <div className='w-100 text-center'>
                            <p className='m-0 VK_image_search_heading'>
                                Search a product by image
                            </p>
                        </div>
                        <div>
                            <button onClick={() => { setimagemodel(false) }} className='bg-transparent border-0'>
                                <img src={require('../../assets/close.png')} alt="" />
                            </button>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-sm-4 p-2'>
                        <div>
                            <div className='mb-5'>
                                <p className='m-0 text-center fw-600'>
                                    Drag an image here or <span className='text-decoration-underline'>upload a file</span>
                                </p>
                            </div>
                            <div className='d-flex gap-4 justify-content-between align-items-center mb-4'>
                                <span className='VK_or_line'></span>
                                <span className='fw-600 light_color'>OR</span>
                                <span className='VK_or_line'></span>
                            </div>
                            <div className='mb-5'>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter image url' />
                            </div>
                            <div className='text-center'>
                                <button className='VK_image_btn'>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>




        </React.Fragment >
    )
}

export default Header
