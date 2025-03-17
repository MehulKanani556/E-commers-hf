import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import { Accordion, Button, Col, Container, Dropdown, Form, Modal, Offcanvas, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaBars, FaLocationCrosshairs, FaLocationDot, FaPlus, FaRegHeart, FaUser } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { BsCart3 } from 'react-icons/bs'
import Models from './model/Models'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    // login 
    const [modalShow, setModalShow] = React.useState(false);
    const [address_model, setadderss_model] = useState(false);
    const [login, setlogin] = useState(false);

    const [mainCategories, setMainCategories] = useState([]);
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [categoriesByMain, setCategoriesByMain] = useState({});
    // const [mainCategory, setMainCategory] = useState([]);
    // const [category, setCategory] = useState([]);
    // const [subCategory, setSubCategory] = useState([]);

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

    const handleMainCategoryHover = (mainCategoryName) => {
        setSelectedMainCategory(mainCategoryName);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getCategoryAndSubCategory`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log("response", response.data.data);

                if (response.data && response.data.data) {
                    const categoryData = response.data.data;

                    // Set main categories
                    setMainCategories(categoryData);

                    // Process categories by main category
                    const categoriesMapped = {};

                    categoryData.forEach(mainCategory => {
                        categoriesMapped[mainCategory.mainCategoryName] = {};

                        // Process each category under the main category
                        if (mainCategory.categories && mainCategory.categories.length > 0) {
                            mainCategory.categories.forEach(category => {
                                categoriesMapped[mainCategory.mainCategoryName][category.categoryName] = [];

                                // Process subcategories
                                if (category.subCategories && category.subCategories.length > 0) {
                                    category.subCategories.forEach(subCategory => {
                                        categoriesMapped[mainCategory.mainCategoryName][category.categoryName].push(
                                            subCategory.subCategoryName
                                        );
                                    });
                                }
                            });
                        }
                    });

                    setCategoriesByMain(categoriesMapped);
                }
            } catch (error) {
                console.error('Data fetching Error:', error);
            }
        };

        fetchData();
    }, [BaseUrl, token]);
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
                                                    <div className='d-flex align-items-center' onClick={() => setadderss_model(true)}>
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
                                                    <div className='px-3 py-3 d-flex align-items-center' onClick={() => { login_chk() }}>
                                                        <FaUser className='me-2' />
                                                        Profile
                                                    </div>
                                                    <hr className='m-0' />
                                                    <Link to='/wishlist' className='px-3 py-3 d-flex align-items-center text-decoration-none d_theme'>
                                                        <FaRegHeart className='me-2 font_20' />
                                                        Wishlist
                                                    </Link>
                                                    <hr className='m-0' />
                                                    <Link to='/cart' className='px-3 py-3 d-flex align-items-center d_theme text-decoration-none'>
                                                        <BsCart3 className='me-2 font_20' />
                                                        Cart
                                                    </Link>
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
                                        <Link to='/wishlist'>
                                            <img src={require("../../assets/wishlist.png")} height={20} width={20} alt="" />
                                        </Link>
                                        <Link to='/cart'>
                                            <img src={require("../../assets/Cart.png")} height={22} width={22} alt="" />
                                        </Link>
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
                                    {mainCategories.map((mainCategory) => (
                                        <li className='VK_sub_menu' key={mainCategory._id}
                                            onMouseEnter={() => handleMainCategoryHover(mainCategory.mainCategoryName)}>
                                            <Link to={`/${mainCategory.mainCategoryName.toLowerCase()}`} className='text-decoration-none d_headertext'>
                                                {mainCategory.mainCategoryName}
                                            </Link>
                                            <div className='VK_mega_menu'>
                                                <div className='VK_mega_menu_div_parent'>
                                                    {categoriesByMain[mainCategory.mainCategoryName] &&
                                                        Object.keys(categoriesByMain[mainCategory.mainCategoryName]).map((categoryName) => (
                                                            <div key={categoryName} className='VK_menu_list'>
                                                                <p className='mb-2 font_18 header_color inter'>
                                                                    <b>{categoryName}</b>
                                                                </p>
                                                                <ul className='list-unstyled p-0 m-0 header_light inter'>
                                                                    {categoriesByMain[mainCategory.mainCategoryName][categoryName].map((subCategory) => (
                                                                        <li className='py-1' key={subCategory}>
                                                                            <Link to={`/${mainCategory.mainCategoryName.toLowerCase()}/${categoryName.toLowerCase()}/${subCategory.toLowerCase()}`} className='text-decoration-none d_theme'>
                                                                                {subCategory}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                    ))}
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

            {/* add address model */}
            <Modal
                show={address_model}
                onHide={() => { setadderss_model(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Add Address
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form action="" className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter name' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Contact no.
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Contact No.' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Building No. /  Building Name / Street Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Building No. / Building Name / Street Name' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Landmark
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Landmark' />
                            </div>
                            <div className='d-flex flex-sm-nowrap flex-wrap my-3 gap-3'>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        Pincode
                                    </span>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' placeholder='Enter Pincode' />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        City
                                    </span>
                                    <select name="" id="" className='VK_from_input w-100 py-2 px-3'>
                                        <option value="">Select</option>
                                    </select>
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        State
                                    </span>
                                    <select name="" id="" className='VK_from_input w-100 py-2 px-3'>
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className=' my-4'>
                                <div className='pb-2'>
                                    <span className='text-black fw-bold'>
                                        Address Type
                                    </span>
                                </div>
                                <div className='d-flex VK_edit_radio align-items-center gap-sm-5 gap-2 w-100'>
                                    <Form.Check
                                        type="radio"
                                        id="home-radio"
                                        label="Home"
                                        name="address"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="work-radio"
                                        label="Work"
                                        name="address"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="other-radio"
                                        label="Other"
                                        name="address"
                                    />
                                </div>
                            </div>
                            <div className='mt-4 text-center'>
                                <button type="submit" className='VK_add_address_submit'>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            {/* add address model */}




        </React.Fragment >
    )
}

export default Header
