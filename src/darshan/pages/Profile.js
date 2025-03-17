import React, { useEffect, useRef, useState } from 'react'
import { Accordion, Col, Modal, Offcanvas, Row, Form, Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../../Vivek/Component/User/user.css'
import Map from '../../Vivek/Component/Map';

const Profile = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let Address = [
        {
            type: "Home",
            name: "Jhon Wick",
            number: "+1 56565 56565",
            address: "Ehrenkranz 13 Washington Square S, New York,Washington Square, NY 10012, USA"
        },
        {
            type: "Work",
            name: "Jhon Wick",
            number: "+1 56565 56565",
            address: "Ehrenkranz 13 Washington Square S, New York,Washington Square, NY 10012, USA"
        },
        {
            type: "Home",
            name: "Jhon Wick",
            number: "+1 56565 56565",
            address: "Ehrenkranz 13 Washington Square S, New York,Washington Square, NY 10012, USA"
        },
    ]

    const myorder = [
        {
            name: "Full pair stretched",
            description: "Lorem ipsum dolor sit amet consectetur. Ac iaculis viverra purus malesuada quam dolor.",
            color: "Light Brown",
            size: "XL",
            price: 120,
            status: "arriving",
            status_date: "26 Oct, 2023",
            image: "order1.png"
        },
        {
            name: "Samsung S24 Ultra",
            description: "Lorem ipsum dolor sit amet consectetur. Ac iaculis viverra purus malesuada quam dolor.",
            price: 220,
            message: "Your item has been delivered successfully",
            status: "Delivered",
            status_date: "20 Oct, 2023",
            image: "order2.png"
        },
        {
            name: "Rule zip jacket",
            description: "Lorem ipsum dolor sit amet consectetur. Ac iaculis viverra purus malesuada quam dolor.",
            color: "Brown",
            size: "XL",
            price: 120,
            message: "Your item has been cancelled successfully",
            status: "Cancelled",
            status_date: "10 Oct, 2023",
            image: "order3.png"
        },
    ];

    var data = [
        {
            upiId: "example56@oksbi"
        },
        {
            upiId: "example56@oksbi"
        },
        {
            upiId: "example56@oksbi"
        }
    ]

    var cards = [
        {
            name: "John Smith",
            date: "24/11",
            number: "1520  0100  3356  6888",
        },
        {
            name: "John Smith1",
            date: "24/11",
            number: "1520  0101  3356  6888",
        },
        {
            name: "John Smith2",
            date: "24/11",
            number: "1520  0102  3356  6888",
        }
    ]

    const [activeSection, setActiveSection] = useState(location.state?.activeSection || 'profile'); // Default to profile section

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editpersonal, setEditpersonal] = useState(false);
    const [editcontact, setEditcontact] = useState(false);
    const [deactivemodal, setdeactivemodal] = useState(false);
    const [activeKey, setActiveKey] = useState(null);
    let [address, setaddress] = useState([])
    const [address_model, setadderss_model] = useState(false);
    const [edit_model, setedit_model] = useState(false);
    const [delete_model, setdelete_model] = useState(false);
    const [orders, setOrders] = useState(myorder);
    const [current, setCurrent] = useState(myorder);
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [deletecredit, setDeletecredit] = useState(false);
    const [addcredit, setAddcredit] = useState(false);
    const [addupimodal, setAddupimodal] = useState(false);
    const [deleteupimodal, setDeleteupimodal] = useState(false);
    const [upiId, setUpiId] = useState(''); 

    console.log(activeSection);

    let [card, setcard] = useState([])
    let [upi, setupi] = useState([])
    const inputRefs = useRef([]);

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const handleInputChange = (e, index) => {
        const value = e.target.value;

        if (e.key === 'Backspace' && !value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
        else if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handle_filter = (e, orderby) => {
        let filteredOrders = [];

        const buttons = document.querySelectorAll('.VK_order_btn');
        buttons.forEach(button => button.classList.remove('VK_order_btn_active'));

        e.target.classList.add('VK_order_btn_active');

        if (orderby === 'All') {
            filteredOrders = current;
        } else if (orderby === 'Delivered') {
            filteredOrders = current.filter(el => el.status === 'Delivered');
        } else if (orderby === 'Cancelled') {
            filteredOrders = current.filter(el => el.status === 'Cancelled');
        } else if (orderby === 'Progress') {
            filteredOrders = current.filter(el => el.status === 'arriving');
        }

        setOrders(filteredOrders);
    };

    useEffect(() => {
        setOrders(current);
    }, [current]);

    useEffect(() => {
        setaddress(Address)
        setupi(data);
        setcard(cards)
    }, []);

    const handleOrderNavigation = (status) => {
        if (status === 'arriving') {
            navigate('/trackorder');
        } else if (status === 'Cancelled') {
            navigate('/returnrefund');
        } else if (status === 'Delivered') {
            navigate('/ratereview');
        }
    };

    const handleDropdownSelect = (suffix) => {
        setUpiId((prevUpiId) => `${prevUpiId}${suffix}`);
    };

    return (
        <>

            <section className=''>
                <div className='pt-5'>
                    <aside className='inter'>
                        <div className='d_container'>
                            <Row>
                                {/* user Side Bar */}
                                <Col lg={3} md={4} className='pe-4 pb-5 pb-md-0'>
                                    <div className='VK_user_side_bar'>
                                        <div className='VK_user_sidebar'>
                                            <div className='heading_user px-4'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5 className='VK_user_heading py-4 m-0'>
                                                        Account
                                                    </h5>
                                                    <button className='d-md-none border-0 bg-white h3 m-0' onClick={handleShow}>
                                                        <FaBars />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='d-none d-md-block'>
                                                <hr className='m-0' />
                                                <ul className='list-unstyled user_profile_menu p-0 m-0'>
                                                    <NavLink onClick={() => setActiveSection('profile')} to="" className={({ isActive }) => `text-decoration-none d-block ${activeSection === 'profile' ? 'VK_user_active' : ''}`}>
                                                        <li className='py-4 px-4'>
                                                            <div className='d-flex gap-2 align-items-center'>
                                                                <span className='d-inline-block pe-2'>
                                                                    <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                                        <path d="M6.00176 6.79997C7.87952 6.79997 9.40175 5.27775 9.40175 3.39999C9.40175 1.52223 7.87952 0 6.00176 0C4.124 0 2.60178 1.52223 2.60178 3.39999C2.60178 5.27775 4.124 6.79997 6.00176 6.79997Z" />
                                                                        <path d="M6.0002 7.60156C2.68651 7.60156 0.000213623 10.2879 0.000213623 13.6015C0.000213623 14.4852 0.716572 15.2016 1.60022 15.2016H10.4002C11.2839 15.2016 12.0002 14.4852 12.0002 13.6015C12.0002 10.2879 9.31388 7.60156 6.0002 7.60156Z" />
                                                                    </svg>
                                                                </span>
                                                                My Profile
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                    <hr className='m-0' />
                                                    <NavLink to="" onClick={() => setActiveSection('order')} className={({ isActive }) => `text-decoration-none d-block ${activeSection === "order" ? 'VK_user_active' : ''}`}>
                                                        <li className='py-4 px-4'>
                                                            <div className='d-flex gap-2 align-items-center'>
                                                                <span className='d-inline-block pe-2'>
                                                                    <svg width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.11577 0.0199072L9.33543 0.882993L2.70854 3.45981L0.386859 2.55703L6.91193 0.0199072C6.98003 -0.00663574 7.0476 -0.00663574 7.11577 0.0199072ZM14.0276 7.43137C15.8915 7.43137 17.4023 8.94235 17.4023 10.8062C17.4023 12.67 15.8914 14.181 14.0276 14.181C12.1638 14.181 10.6528 12.67 10.6528 10.8062C10.6528 8.94235 12.1638 7.43137 14.0276 7.43137ZM15.3054 9.2672L13.3063 11.2663L12.6241 10.4078C12.4563 10.1967 12.1491 10.1616 11.938 10.3294C11.7269 10.4972 11.6918 10.8044 11.8596 11.0155L12.8636 12.2789C13.0372 12.5276 13.3947 12.5616 13.611 12.3453L15.9972 9.959C16.1883 9.76796 16.1883 9.45824 15.9972 9.2672C15.8062 9.07616 15.4965 9.07616 15.3054 9.2672ZM11.7057 1.80461C9.49672 2.66362 7.28779 3.52259 5.07871 4.38139L7.01381 5.13381L13.6408 2.55703L11.7057 1.80461ZM14.0276 3.00815L7.29506 5.62599V13.424L10.3572 12.2334C10.185 11.7909 10.0903 11.3097 10.0903 10.8062C10.0903 8.63171 11.8531 6.86894 14.0276 6.86894V3.00815ZM6.73256 13.424V5.62599L4.69199 4.83259V6.47924C4.69199 6.55883 4.599 6.60179 4.53846 6.55018L3.45547 5.62782L2.44266 5.94279C2.42871 5.94719 2.41393 5.94824 2.3995 5.94586C2.38507 5.94347 2.37141 5.9377 2.35963 5.92904C2.34785 5.92037 2.33829 5.90905 2.33171 5.89599C2.32513 5.88293 2.32173 5.8685 2.32179 5.85388V3.91097L0 3.00819V10.6138C0 10.7321 0.069082 10.8331 0.179438 10.8759L6.73256 13.424Z" />
                                                                    </svg>
                                                                </span>
                                                                My Order
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                    <hr className='m-0' />
                                                    <NavLink to="" onClick={() => { setActiveSection('payment'); }} className={({ isActive }) => `text-decoration-none d-block   ${activeSection === "payment" ? 'VK_user_active' : ''}`}>
                                                        <li>
                                                            <Accordion className='VK_payment '>
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header className='py-0'>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <span className='d-inline-block pe-2'>
                                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                                    <path d="M14.9089 12.7363H12.3634C10.7594 12.7363 9.45442 11.5142 9.45442 10.012C9.45442 8.50982 10.7594 7.28766 12.3634 7.28766H14.9089C14.9566 7.28769 15.0039 7.2789 15.0481 7.2618C15.0922 7.24469 15.1323 7.21961 15.1661 7.18798C15.1999 7.15635 15.2266 7.1188 15.2449 7.07747C15.2632 7.03614 15.2725 6.99184 15.2725 6.94711V5.92548C15.2725 5.21136 14.681 4.6306 13.9338 4.57428L11.8454 1.15821C11.6518 0.842272 11.3393 0.61646 10.9654 0.522693C10.5932 0.429566 10.2041 0.478476 9.87097 0.660039L2.71189 4.5633H1.45453C0.652353 4.5633 0 5.1742 0 5.92548V14.0985C0 14.8498 0.652319 15.4607 1.45453 15.4607H13.818C14.6202 15.4607 15.2725 14.8498 15.2725 14.0985V13.0769C15.2725 13.0321 15.2632 12.9879 15.2449 12.9465C15.2266 12.9052 15.1999 12.8676 15.1661 12.836C15.1323 12.8044 15.0922 12.7793 15.0481 12.7622C15.0039 12.7451 14.9566 12.7363 14.9089 12.7363ZM12.2964 3.26723L13.0887 4.5633H9.91927L12.2964 3.26723ZM4.15732 4.5633L10.2371 1.24866C10.4015 1.15853 10.5936 1.13458 10.7772 1.18049C10.9629 1.22704 11.1178 1.33945 11.214 1.49675L11.2147 1.498L5.5929 4.5633H4.15732Z" />
                                                                                    <path d="M14.9069 7.96875H12.3615C11.1584 7.96875 10.1797 8.88528 10.1797 10.012C10.1797 11.1387 11.1584 12.0553 12.3615 12.0553H14.9069C15.5085 12.0553 15.9978 11.597 15.9978 11.0336V8.99038C15.9978 8.42701 15.5085 7.96875 14.9069 7.96875ZM12.3615 10.6931C11.9606 10.6931 11.6342 10.3875 11.6342 10.012C11.6342 9.63656 11.9606 9.33093 12.3615 9.33093C12.7624 9.33093 13.0887 9.63656 13.0887 10.012C13.0888 10.3875 12.7624 10.6931 12.3615 10.6931Z" fill="#6A6A6A" />
                                                                                </svg>
                                                                            </span>
                                                                            Payment Methods
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <div className='VK_accor-body'>
                                                                        <Accordion.Body className=''>
                                                                            <ul className='VK_ul'>
                                                                                <li onClick={() => setPaymentMethod('credit')} className={paymentMethod === 'credit' ? 'VK_paymentselect' : ''}>
                                                                                    Credit / Debit Cards
                                                                                </li>
                                                                                <li onClick={() => setPaymentMethod('upi')} className={paymentMethod === 'upi' ? 'VK_paymentselect' : ''}>
                                                                                    UPI ID
                                                                                </li>
                                                                            </ul>
                                                                        </Accordion.Body>
                                                                    </div>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </li>
                                                    </NavLink>
                                                    <hr className='m-0' />
                                                    <NavLink to="" onClick={() => setActiveSection('address')} className={({ isActive }) => `text-decoration-none d-block ${activeSection === "address" ? 'VK_user_active' : ''}`}>
                                                        <li className='py-4 px-4'>
                                                            <div className='d-flex gap-2 align-items-center'>
                                                                <span className='d-inline-block pe-2'>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                        <path d="M9 0C5.40545 0 2.48108 2.92437 2.48108 6.51888C2.48108 10.9798 8.31487 17.5287 8.56325 17.8053C8.79655 18.0651 9.20387 18.0647 9.43674 17.8053C9.68512 17.5287 15.5189 10.9798 15.5189 6.51888C15.5188 2.92437 12.5945 0 9 0ZM9 9.79871C7.19149 9.79871 5.7202 8.32739 5.7202 6.51888C5.7202 4.71037 7.19152 3.23909 9 3.23909C10.8085 3.23909 12.2798 4.71041 12.2798 6.51892C12.2798 8.32743 10.8085 9.79871 9 9.79871Z" />
                                                                    </svg>
                                                                </span>
                                                                My Address
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                    <hr className='m-0' />
                                                    <NavLink to="" onClick={() => setActiveSection('faqs')} className={({ isActive }) => `text-decoration-none d-block ${activeSection === "faqs" ? 'VK_user_active' : ''}`}>
                                                        <li className='py-4 px-4'>
                                                            <div className='d-flex gap-2 align-items-center'>
                                                                <span className='d-inline-block pe-2'>
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                        <path d="M8 0.476562C6.41775 0.476563 4.87103 0.915964 3.55544 1.7392C2.23985 2.56244 1.21447 3.73254 0.608967 5.10154C0.00346629 6.47053 -0.15496 7.97694 0.153721 9.43025C0.462403 10.8836 1.22433 12.2185 2.34315 13.2663C3.46197 14.3141 4.88743 15.0276 6.43928 15.3167C7.99113 15.6058 9.59966 15.4574 11.0615 14.8904C12.5233 14.3233 13.7727 13.3631 14.6518 12.131C15.5308 10.8989 16 9.45041 16 7.96862C15.9977 5.98227 15.1541 4.07788 13.6543 2.67331C12.1545 1.26874 10.121 0.478711 8 0.476562ZM8 12.339C7.86815 12.339 7.73925 12.3024 7.62962 12.2338C7.51999 12.1652 7.43454 12.0677 7.38408 11.9536C7.33362 11.8395 7.32042 11.714 7.34615 11.5929C7.37187 11.4717 7.43536 11.3605 7.5286 11.2732C7.62183 11.1859 7.74062 11.1264 7.86994 11.1023C7.99926 11.0782 8.13331 11.0906 8.25512 11.1378C8.37694 11.1851 8.48106 11.2651 8.55431 11.3678C8.62757 11.4705 8.66667 11.5912 8.66667 11.7147C8.66667 11.8802 8.59643 12.039 8.47141 12.1561C8.34638 12.2732 8.17681 12.339 8 12.339ZM9.018 8.40566C8.9088 8.4554 8.81743 8.53385 8.75504 8.63141C8.69265 8.72898 8.66194 8.84144 8.66667 8.95508V9.2173C8.66667 9.38289 8.59643 9.54169 8.47141 9.65878C8.34638 9.77586 8.17681 9.84164 8 9.84164C7.82319 9.84164 7.65362 9.77586 7.5286 9.65878C7.40357 9.54169 7.33334 9.38289 7.33334 9.2173V8.95508C7.32645 8.59364 7.43462 8.23847 7.64405 7.93481C7.85349 7.63116 8.15471 7.39277 8.50934 7.25001C8.79243 7.14024 9.02653 6.94251 9.17223 6.69008C9.31793 6.43764 9.36634 6.14592 9.30933 5.86398C9.25798 5.61692 9.12902 5.38985 8.93898 5.21188C8.74894 5.0339 8.50648 4.91313 8.24267 4.86504C8.05004 4.83165 7.85192 4.83842 7.6624 4.88487C7.47289 4.93132 7.29663 5.01631 7.14616 5.1338C6.9957 5.25128 6.87473 5.39838 6.79185 5.56461C6.70898 5.73085 6.66624 5.91215 6.66667 6.09561C6.66667 6.26119 6.59643 6.42 6.47141 6.53708C6.34638 6.65417 6.17681 6.71995 6 6.71995C5.82319 6.71995 5.65362 6.65417 5.5286 6.53708C5.40357 6.42 5.33334 6.26119 5.33334 6.09561C5.33369 5.64334 5.46518 5.19965 5.71378 4.8119C5.96238 4.42415 6.31874 4.10691 6.74483 3.89403C7.17093 3.68115 7.65075 3.58063 8.13308 3.6032C8.61541 3.62577 9.08214 3.77058 9.48345 4.02218C9.88476 4.27378 10.2056 4.62271 10.4117 5.03173C10.6178 5.44076 10.7014 5.89451 10.6536 6.34457C10.6058 6.79462 10.4284 7.22407 10.1403 7.58707C9.85228 7.95008 9.46436 8.23301 9.018 8.40566Z" />
                                                                    </svg>
                                                                </span>
                                                                FAQs
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                    <hr className='m-0' />
                                                    <NavLink to="" onClick={() => setActiveSection('terms')} className={({ isActive }) => `text-decoration-none d-block ${activeSection === "terms" ? 'VK_user_active' : ''}`}>
                                                        <li className='py-4 px-4'>
                                                            <div className='d-flex gap-2 align-items-center'>
                                                                <span className='d-inline-block pe-2'>
                                                                    <svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                        <path d="M12.8125 2H2.3125C1.96489 2.00158 1.63197 2.14037 1.38617 2.38617C1.14037 2.63197 1.00158 2.96489 1 3.3125V16.8125C1.00158 17.1601 1.14037 17.493 1.38617 17.7388C1.63197 17.9846 1.96489 18.1234 2.3125 18.125H13.5625C13.645 18.125 13.7275 18.125 13.81 18.1175C13.8188 18.1086 13.829 18.101 13.84 18.095C13.977 17.7199 14.0677 17.3296 14.11 16.9325C13.931 16.9775 13.7471 17.0002 13.5625 17C12.916 17 12.296 16.7432 11.8389 16.2861C11.3818 15.829 11.125 15.209 11.125 14.5625C11.125 13.916 11.3818 13.296 11.8389 12.8389C12.296 12.3818 12.916 12.125 13.5625 12.125C13.7521 12.1243 13.941 12.147 14.125 12.1925V3.3125C14.1234 2.96489 13.9846 2.63197 13.7388 2.38617C13.493 2.14037 13.1601 2.00158 12.8125 2ZM4.1875 5H10.9375C11.0867 5 11.2298 5.05926 11.3352 5.16475C11.4407 5.27024 11.5 5.41332 11.5 5.5625C11.5 5.71168 11.4407 5.85476 11.3352 5.96025C11.2298 6.06574 11.0867 6.125 10.9375 6.125H4.1875C4.03832 6.125 3.89524 6.06574 3.78975 5.96025C3.68426 5.85476 3.625 5.71168 3.625 5.5625C3.625 5.41332 3.68426 5.27024 3.78975 5.16475C3.89524 5.05926 4.03832 5 4.1875 5ZM4.1875 8H10.9375C11.0867 8 11.2298 8.05926 11.3352 8.16475C11.4407 8.27024 11.5 8.41332 11.5 8.5625C11.5 8.71168 11.4407 8.85476 11.3352 8.96025C11.2298 9.06574 11.0867 9.125 10.9375 9.125H4.1875C4.03832 9.125 3.89524 9.06574 3.78975 8.96025C3.68426 8.85476 3.625 8.71168 3.625 8.5625C3.625 8.41332 3.68426 8.27024 3.78975 8.16475C3.89524 8.05926 4.03832 8 4.1875 8ZM8.3125 15.125H4.1875C4.03832 15.125 3.89524 15.0657 3.78975 14.9602C3.68426 14.8548 3.625 14.7117 3.625 14.5625C3.625 14.4133 3.68426 14.2702 3.78975 14.1648C3.89524 14.0593 4.03832 14 4.1875 14H8.3125C8.46168 14 8.60476 14.0593 8.71025 14.1648C8.81574 14.2702 8.875 14.4133 8.875 14.5625C8.875 14.7117 8.81574 14.8548 8.71025 14.9602C8.60476 15.0657 8.46168 15.125 8.3125 15.125ZM9.0625 12.125H4.1875C4.03832 12.125 3.89524 12.0657 3.78975 11.9602C3.68426 11.8548 3.625 11.7117 3.625 11.5625C3.625 11.4133 3.68426 11.2702 3.78975 11.1648C3.89524 11.0593 4.03832 11 4.1875 11H9.0625C9.21168 11 9.35476 11.0593 9.46025 11.1648C9.56574 11.2702 9.625 11.4133 9.625 11.5625C9.625 11.7117 9.56574 11.8548 9.46025 11.9602C9.35476 12.0657 9.21168 12.125 9.0625 12.125Z" />
                                                                        <path d="M14.1272 11.0456C13.6642 10.9776 13.1925 11.0015 12.7388 11.1159C12.2851 11.2302 11.8584 11.4328 11.483 11.7121C11.1077 11.9914 10.791 12.3419 10.551 12.7435C10.3111 13.1452 10.1526 13.5902 10.0847 14.0531C10.0167 14.516 10.0406 14.9878 10.1549 15.4414C10.2693 15.8951 10.4719 16.3218 10.7512 16.6972C11.0305 17.0726 11.3809 17.3893 11.7826 17.6292C12.1843 17.8692 12.6293 18.0276 13.0922 18.0956C13.2487 18.1168 13.4066 18.1268 13.5647 18.1256C13.6472 18.1256 13.7297 18.1256 13.8122 18.1181C14.6853 18.0581 15.5059 17.6789 16.1173 17.0526C16.7287 16.4263 17.0882 15.5968 17.1271 14.7225C17.1661 13.8481 16.8818 12.99 16.3285 12.3118C15.7751 11.6337 14.9916 11.1829 14.1272 11.0456ZM14.1122 16.9331C13.9331 16.9781 13.7492 17.0008 13.5647 17.0006C12.9182 17.0006 12.2982 16.7438 11.8411 16.2867C11.384 15.8296 11.1272 15.2096 11.1272 14.5631C11.1272 13.9166 11.384 13.2966 11.8411 12.8395C12.2982 12.3824 12.9182 12.1256 13.5647 12.1256C13.7542 12.1249 13.9431 12.1476 14.1272 12.1931C14.6622 12.3191 15.1388 12.6225 15.4794 13.0539C15.8199 13.4854 16.0044 14.0194 16.0026 14.5691C16.0009 15.1187 15.8131 15.6516 15.4698 16.0809C15.1265 16.5101 14.648 16.8105 14.1122 16.9331Z" fill="#6A6A6A" />
                                                                        <path d="M13.1859 15.8766C13.1121 15.8766 13.0389 15.862 12.9707 15.8337C12.9025 15.8054 12.8405 15.7639 12.7884 15.7116L12.0384 14.9616C11.9831 14.9101 11.9388 14.848 11.9081 14.779C11.8773 14.71 11.8608 14.6355 11.8595 14.56C11.8581 14.4845 11.872 14.4094 11.9003 14.3394C11.9286 14.2694 11.9707 14.2057 12.0241 14.1523C12.0775 14.0989 12.1412 14.0568 12.2112 14.0285C12.2812 14.0002 12.3563 13.9863 12.4318 13.9877C12.5073 13.989 12.5818 14.0055 12.6508 14.0363C12.7198 14.067 12.7819 14.1113 12.8334 14.1666L13.1859 14.5191L14.2884 13.4166C14.395 13.3172 14.5361 13.2631 14.6818 13.2657C14.8275 13.2683 14.9666 13.3273 15.0696 13.4304C15.1727 13.5334 15.2317 13.6725 15.2343 13.8182C15.2369 13.9639 15.1828 14.105 15.0834 14.2116L13.5834 15.7116C13.5313 15.7639 13.4693 15.8054 13.4011 15.8337C13.3329 15.862 13.2598 15.8766 13.1859 15.8766Z" fill="#6A6A6A" />
                                                                    </svg>
                                                                </span>
                                                                Terms of service
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                    <hr className='m-0' />
                                                    <NavLink to="" onClick={() => setActiveSection('deactiveaccount')} className={({ isActive }) => `text-decoration-none d-block ${activeSection === "deactiveaccount" ? 'VK_user_active' : ''}`}>
                                                        <li className='py-4 px-4'>
                                                            <div className='d-flex gap-2 align-items-center'>
                                                                <span className='d-inline-block pe-2'>
                                                                    <svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6818 9.40103L6.15007 5.19246C6.39395 4.46889 6.88691 3.85548 7.54105 3.46163C8.19519 3.06777 8.96797 2.91908 9.72155 3.04207C10.4751 3.16507 11.1605 3.55175 11.6555 4.13315C12.1505 4.71455 12.4228 5.45287 12.424 6.21642C12.4239 6.98763 12.1471 7.73321 11.6439 8.31761C11.1407 8.90202 10.4444 9.28646 9.6818 9.40103ZM11.9545 16.3254L12.945 17.4968C13.0553 17.6272 13.2129 17.7085 13.3832 17.7227C13.5534 17.7369 13.7223 17.6828 13.8527 17.5725C13.9831 17.4622 14.0643 17.3045 14.0785 17.1343C14.0927 16.9641 14.0387 16.7952 13.9284 16.6648L4.14399 5.0965C4.09001 5.03 4.0233 4.97494 3.94778 4.93454C3.87225 4.89414 3.78943 4.86921 3.70415 4.86121C3.61887 4.85321 3.53285 4.8623 3.45113 4.88795C3.36941 4.91361 3.29363 4.9553 3.22822 5.0106C3.16281 5.0659 3.10909 5.1337 3.0702 5.21001C3.03131 5.28633 3.00804 5.36963 3.00174 5.45505C2.99545 5.54048 3.00625 5.62629 3.03353 5.70749C3.06081 5.78868 3.104 5.86362 3.1606 5.92791L7.28932 10.8095C5.44424 10.9808 4.30693 11.3717 3.77305 11.601C3.54056 11.7008 3.4079 11.9326 3.4079 12.1851C3.4079 13.3349 3.86466 14.4376 4.67772 15.2507C5.49077 16.0637 6.59351 16.5205 7.74334 16.5205H10.6646C11.1141 16.5205 11.5468 16.4523 11.9545 16.3254ZM15 12.1851C15 13.1421 14.6902 14.0269 14.1647 14.7437L10.8442 10.7863C12.8516 10.9428 14.0752 11.3601 14.6355 11.601C14.8673 11.7008 15 11.9326 15 12.1851Z" />
                                                                    </svg>
                                                                </span>
                                                                Deactivate Account
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                    <hr className='m-0' />
                                                    <NavLink className='text-decoration-none'>
                                                        <li className='py-4 px-4'>
                                                            <div className='d-flex gap-2 align-items-center'>
                                                                <span className='d-inline-block pe-2'>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                        <path d="M8.97435 15.3489H3.25596C2.90523 15.3489 2.6206 15.0644 2.6206 14.7139V3.28392C2.6206 2.9334 2.90526 2.64894 3.25596 2.64894H8.97435C9.3257 2.64894 9.6097 2.3651 9.6097 2.01395C9.6097 1.6628 9.3257 1.37891 8.97435 1.37891H3.25596C2.20506 1.37891 1.34985 2.23364 1.34985 3.28392V14.7139C1.34985 15.7642 2.20506 16.6189 3.25596 16.6189H8.97435C9.3257 16.6189 9.6097 16.3351 9.6097 15.9839C9.6097 15.6328 9.3257 15.3489 8.97435 15.3489Z" />
                                                                        <path d="M16.4611 8.5436L12.598 4.73359C12.3489 4.48721 11.9461 4.4904 11.6996 4.73995C11.453 4.98951 11.4556 5.39146 11.7059 5.63784L14.4666 8.36071H7.06895C6.7176 8.36071 6.43359 8.64454 6.43359 8.9957C6.43359 9.34685 6.7176 9.63071 7.06895 9.63071H14.4666L11.7059 12.3536C11.4556 12.6 11.4537 13.0019 11.6996 13.2515C11.7587 13.3114 11.8291 13.359 11.9067 13.3915C11.9844 13.424 12.0678 13.4407 12.1519 13.4407C12.3133 13.4407 12.4747 13.3797 12.598 13.2578L16.4611 9.44779C16.521 9.38868 16.5685 9.31829 16.601 9.24068C16.6335 9.16307 16.6503 9.07979 16.6504 8.99567C16.6504 8.82556 16.5824 8.66363 16.4611 8.5436Z" fill="#6A6A6A" />
                                                                    </svg>
                                                                </span>
                                                                Logout
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                </ul>
                                            </div>
                                            {/* offcanvas */}
                                            <Offcanvas show={show} onHide={handleClose} placement='end'>
                                                <Offcanvas.Header closeButton>
                                                    <Offcanvas.Title>
                                                        User Account
                                                    </Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body>
                                                    <div>
                                                        <ul className='list-unstyled user_profile_menu p-0 m-0'>
                                                            <Link onClick={() => { setActiveSection('profile'); handleClose() }} to="" className='text-decoration-none'>
                                                                <li className='py-4 px-4'>
                                                                    <div className='d-flex gap-2 align-items-center'>
                                                                        <span className='d-inline-block pe-2'>
                                                                            <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                                                <path d="M6.00176 6.79997C7.87952 6.79997 9.40175 5.27775 9.40175 3.39999C9.40175 1.52223 7.87952 0 6.00176 0C4.124 0 2.60178 1.52223 2.60178 3.39999C2.60178 5.27775 4.124 6.79997 6.00176 6.79997Z" />
                                                                                <path d="M6.0002 7.60156C2.68651 7.60156 0.000213623 10.2879 0.000213623 13.6015C0.000213623 14.4852 0.716572 15.2016 1.60022 15.2016H10.4002C11.2839 15.2016 12.0002 14.4852 12.0002 13.6015C12.0002 10.2879 9.31388 7.60156 6.0002 7.60156Z" />
                                                                            </svg>
                                                                        </span>
                                                                        My Profile
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                            <hr className='m-0' />
                                                            <Link onClick={() => { setActiveSection('order'); handleClose() }} to="" className='text-decoration-none' >
                                                                <li className='py-4 px-4'>
                                                                    <div className='d-flex gap-2 align-items-center'>
                                                                        <span className='d-inline-block pe-2'>
                                                                            <svg width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.11577 0.0199072L9.33543 0.882993L2.70854 3.45981L0.386859 2.55703L6.91193 0.0199072C6.98003 -0.00663574 7.0476 -0.00663574 7.11577 0.0199072ZM14.0276 7.43137C15.8915 7.43137 17.4023 8.94235 17.4023 10.8062C17.4023 12.67 15.8914 14.181 14.0276 14.181C12.1638 14.181 10.6528 12.67 10.6528 10.8062C10.6528 8.94235 12.1638 7.43137 14.0276 7.43137ZM15.3054 9.2672L13.3063 11.2663L12.6241 10.4078C12.4563 10.1967 12.1491 10.1616 11.938 10.3294C11.7269 10.4972 11.6918 10.8044 11.8596 11.0155L12.8636 12.2789C13.0372 12.5276 13.3947 12.5616 13.611 12.3453L15.9972 9.959C16.1883 9.76796 16.1883 9.45824 15.9972 9.2672C15.8062 9.07616 15.4965 9.07616 15.3054 9.2672ZM11.7057 1.80461C9.49672 2.66362 7.28779 3.52259 5.07871 4.38139L7.01381 5.13381L13.6408 2.55703L11.7057 1.80461ZM14.0276 3.00815L7.29506 5.62599V13.424L10.3572 12.2334C10.185 11.7909 10.0903 11.3097 10.0903 10.8062C10.0903 8.63171 11.8531 6.86894 14.0276 6.86894V3.00815ZM6.73256 13.424V5.62599L4.69199 4.83259V6.47924C4.69199 6.55883 4.599 6.60179 4.53846 6.55018L3.45547 5.62782L2.44266 5.94279C2.42871 5.94719 2.41393 5.94824 2.3995 5.94586C2.38507 5.94347 2.37141 5.9377 2.35963 5.92904C2.34785 5.92037 2.33829 5.90905 2.33171 5.89599C2.32513 5.88293 2.32173 5.8685 2.32179 5.85388V3.91097L0 3.00819V10.6138C0 10.7321 0.069082 10.8331 0.179438 10.8759L6.73256 13.424Z" />
                                                                            </svg>
                                                                        </span>
                                                                        My Order
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                            <hr className='m-0' />
                                                            <Link to=""  onClick={() => { setActiveSection('payment') }} className='text-decoration-none' >
                                                                <li>
                                                                    <Accordion>
                                                                        <Accordion.Item eventKey="0" className='px-4 border-0'>
                                                                            <Accordion.Header className='VK_payment_acoridan'>
                                                                                <div className='d-flex align-items-center gap-2 py-4'>
                                                                                    <span className='d-inline-block pe-2'>
                                                                                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                                            <path d="M14.9089 12.7363H12.3634C10.7594 12.7363 9.45442 11.5142 9.45442 10.012C9.45442 8.50982 10.7594 7.28766 12.3634 7.28766H14.9089C14.9566 7.28769 15.0039 7.2789 15.0481 7.2618C15.0922 7.24469 15.1323 7.21961 15.1661 7.18798C15.1999 7.15635 15.2266 7.1188 15.2449 7.07747C15.2632 7.03614 15.2725 6.99184 15.2725 6.94711V5.92548C15.2725 5.21136 14.681 4.6306 13.9338 4.57428L11.8454 1.15821C11.6518 0.842272 11.3393 0.61646 10.9654 0.522693C10.5932 0.429566 10.2041 0.478476 9.87097 0.660039L2.71189 4.5633H1.45453C0.652353 4.5633 0 5.1742 0 5.92548V14.0985C0 14.8498 0.652319 15.4607 1.45453 15.4607H13.818C14.6202 15.4607 15.2725 14.8498 15.2725 14.0985V13.0769C15.2725 13.0321 15.2632 12.9879 15.2449 12.9465C15.2266 12.9052 15.1999 12.8676 15.1661 12.836C15.1323 12.8044 15.0922 12.7793 15.0481 12.7622C15.0039 12.7451 14.9566 12.7363 14.9089 12.7363ZM12.2964 3.26723L13.0887 4.5633H9.91927L12.2964 3.26723ZM4.15732 4.5633L10.2371 1.24866C10.4015 1.15853 10.5936 1.13458 10.7772 1.18049C10.9629 1.22704 11.1178 1.33945 11.214 1.49675L11.2147 1.498L5.5929 4.5633H4.15732Z" />
                                                                                            <path d="M14.9069 7.96875H12.3615C11.1584 7.96875 10.1797 8.88528 10.1797 10.012C10.1797 11.1387 11.1584 12.0553 12.3615 12.0553H14.9069C15.5085 12.0553 15.9978 11.597 15.9978 11.0336V8.99038C15.9978 8.42701 15.5085 7.96875 14.9069 7.96875ZM12.3615 10.6931C11.9606 10.6931 11.6342 10.3875 11.6342 10.012C11.6342 9.63656 11.9606 9.33093 12.3615 9.33093C12.7624 9.33093 13.0887 9.63656 13.0887 10.012C13.0888 10.3875 12.7624 10.6931 12.3615 10.6931Z" fill="#6A6A6A" />
                                                                                        </svg>
                                                                                    </span>
                                                                                    Payment Methods
                                                                                </div>
                                                                            </Accordion.Header>
                                                                            <Accordion.Body className='p-0 py-3'>
                                                                                <ul className='VK_ul'>
                                                                                    <Link onClick={() => { setPaymentMethod('credit'); handleClose() }} className={paymentMethod === 'credit' ? 'VK_paymentselect' : ''}>
                                                                                    <li>
                                                                                        Credit / Debit Cards
                                                                                    </li>
                                                                                    </Link>
                                                                                    <Link onClick={() => { setPaymentMethod('upi'); handleClose() }} className={paymentMethod === 'upi' ? 'VK_paymentselect' : ''}>
                                                                                    <li>
                                                                                        UPI ID
                                                                                    </li>
                                                                                    </Link>
                                                                                </ul>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                </li>
                                                            </Link>
                                                            <hr className='m-0' />
                                                            <Link to="" onClick={() => { setActiveSection('address'); handleClose() }} className='text-decoration-none'>
                                                                <li className='py-4 px-4'>
                                                                    <div className='d-flex gap-2 align-items-center'>
                                                                        <span className='d-inline-block pe-2'>
                                                                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                                <path d="M9 0C5.40545 0 2.48108 2.92437 2.48108 6.51888C2.48108 10.9798 8.31487 17.5287 8.56325 17.8053C8.79655 18.0651 9.20387 18.0647 9.43674 17.8053C9.68512 17.5287 15.5189 10.9798 15.5189 6.51888C15.5188 2.92437 12.5945 0 9 0ZM9 9.79871C7.19149 9.79871 5.7202 8.32739 5.7202 6.51888C5.7202 4.71037 7.19152 3.23909 9 3.23909C10.8085 3.23909 12.2798 4.71041 12.2798 6.51892C12.2798 8.32743 10.8085 9.79871 9 9.79871Z" />
                                                                            </svg>
                                                                        </span>
                                                                        My Address
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                            <hr className='m-0' />
                                                            <Link to="" onClick={() => { setActiveSection('faqs'); handleClose() }} className='text-decoration-none'>
                                                                <li className='py-4 px-4'>
                                                                    <div className='d-flex gap-2 align-items-center'>
                                                                        <span className='d-inline-block pe-2'>
                                                                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                                <path d="M8 0.476562C6.41775 0.476563 4.87103 0.915964 3.55544 1.7392C2.23985 2.56244 1.21447 3.73254 0.608967 5.10154C0.00346629 6.47053 -0.15496 7.97694 0.153721 9.43025C0.462403 10.8836 1.22433 12.2185 2.34315 13.2663C3.46197 14.3141 4.88743 15.0276 6.43928 15.3167C7.99113 15.6058 9.59966 15.4574 11.0615 14.8904C12.5233 14.3233 13.7727 13.3631 14.6518 12.131C15.5308 10.8989 16 9.45041 16 7.96862C15.9977 5.98227 15.1541 4.07788 13.6543 2.67331C12.1545 1.26874 10.121 0.478711 8 0.476562ZM8 12.339C7.86815 12.339 7.73925 12.3024 7.62962 12.2338C7.51999 12.1652 7.43454 12.0677 7.38408 11.9536C7.33362 11.8395 7.32042 11.714 7.34615 11.5929C7.37187 11.4717 7.43536 11.3605 7.5286 11.2732C7.62183 11.1859 7.74062 11.1264 7.86994 11.1023C7.99926 11.0782 8.13331 11.0906 8.25512 11.1378C8.37694 11.1851 8.48106 11.2651 8.55431 11.3678C8.62757 11.4705 8.66667 11.5912 8.66667 11.7147C8.66667 11.8802 8.59643 12.039 8.47141 12.1561C8.34638 12.2732 8.17681 12.339 8 12.339ZM9.018 8.40566C8.9088 8.4554 8.81743 8.53385 8.75504 8.63141C8.69265 8.72898 8.66194 8.84144 8.66667 8.95508V9.2173C8.66667 9.38289 8.59643 9.54169 8.47141 9.65878C8.34638 9.77586 8.17681 9.84164 8 9.84164C7.82319 9.84164 7.65362 9.77586 7.5286 9.65878C7.40357 9.54169 7.33334 9.38289 7.33334 9.2173V8.95508C7.32645 8.59364 7.43462 8.23847 7.64405 7.93481C7.85349 7.63116 8.15471 7.39277 8.50934 7.25001C8.79243 7.14024 9.02653 6.94251 9.17223 6.69008C9.31793 6.43764 9.36634 6.14592 9.30933 5.86398C9.25798 5.61692 9.12902 5.38985 8.93898 5.21188C8.74894 5.0339 8.50648 4.91313 8.24267 4.86504C8.05004 4.83165 7.85192 4.83842 7.6624 4.88487C7.47289 4.93132 7.29663 5.01631 7.14616 5.1338C6.9957 5.25128 6.87473 5.39838 6.79185 5.56461C6.70898 5.73085 6.66624 5.91215 6.66667 6.09561C6.66667 6.26119 6.59643 6.42 6.47141 6.53708C6.34638 6.65417 6.17681 6.71995 6 6.71995C5.82319 6.71995 5.65362 6.65417 5.5286 6.53708C5.40357 6.42 5.33334 6.26119 5.33334 6.09561C5.33369 5.64334 5.46518 5.19965 5.71378 4.8119C5.96238 4.42415 6.31874 4.10691 6.74483 3.89403C7.17093 3.68115 7.65075 3.58063 8.13308 3.6032C8.61541 3.62577 9.08214 3.77058 9.48345 4.02218C9.88476 4.27378 10.2056 4.62271 10.4117 5.03173C10.6178 5.44076 10.7014 5.89451 10.6536 6.34457C10.6058 6.79462 10.4284 7.22407 10.1403 7.58707C9.85228 7.95008 9.46436 8.23301 9.018 8.40566Z" />
                                                                            </svg>
                                                                        </span>
                                                                        FAQs
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                            <hr className='m-0' />
                                                            <Link to="" onClick={() => { setActiveSection('terms'); handleClose() }} className='text-decoration-none'>
                                                                <li className='py-4 px-4'>
                                                                    <div className='d-flex gap-2 align-items-center'>
                                                                        <span className='d-inline-block pe-2'>
                                                                            <svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                                <path d="M12.8125 2H2.3125C1.96489 2.00158 1.63197 2.14037 1.38617 2.38617C1.14037 2.63197 1.00158 2.96489 1 3.3125V16.8125C1.00158 17.1601 1.14037 17.493 1.38617 17.7388C1.63197 17.9846 1.96489 18.1234 2.3125 18.125H13.5625C13.645 18.125 13.7275 18.125 13.81 18.1175C13.8188 18.1086 13.829 18.101 13.84 18.095C13.977 17.7199 14.0677 17.3296 14.11 16.9325C13.931 16.9775 13.7471 17.0002 13.5625 17C12.916 17 12.296 16.7432 11.8389 16.2861C11.3818 15.829 11.125 15.209 11.125 14.5625C11.125 13.916 11.3818 13.296 11.8389 12.8389C12.296 12.3818 12.916 12.125 13.5625 12.125C13.7521 12.1243 13.941 12.147 14.125 12.1925V3.3125C14.1234 2.96489 13.9846 2.63197 13.7388 2.38617C13.493 2.14037 13.1601 2.00158 12.8125 2ZM4.1875 5H10.9375C11.0867 5 11.2298 5.05926 11.3352 5.16475C11.4407 5.27024 11.5 5.41332 11.5 5.5625C11.5 5.71168 11.4407 5.85476 11.3352 5.96025C11.2298 6.06574 11.0867 6.125 10.9375 6.125H4.1875C4.03832 6.125 3.89524 6.06574 3.78975 5.96025C3.68426 5.85476 3.625 5.71168 3.625 5.5625C3.625 5.41332 3.68426 5.27024 3.78975 5.16475C3.89524 5.05926 4.03832 5 4.1875 5ZM4.1875 8H10.9375C11.0867 8 11.2298 8.05926 11.3352 8.16475C11.4407 8.27024 11.5 8.41332 11.5 8.5625C11.5 8.71168 11.4407 8.85476 11.3352 8.96025C11.2298 9.06574 11.0867 9.125 10.9375 9.125H4.1875C4.03832 9.125 3.89524 9.06574 3.78975 8.96025C3.68426 8.85476 3.625 8.71168 3.625 8.5625C3.625 8.41332 3.68426 8.27024 3.78975 8.16475C3.89524 8.05926 4.03832 8 4.1875 8ZM8.3125 15.125H4.1875C4.03832 15.125 3.89524 15.0657 3.78975 14.9602C3.68426 14.8548 3.625 14.7117 3.625 14.5625C3.625 14.4133 3.68426 14.2702 3.78975 14.1648C3.89524 14.0593 4.03832 14 4.1875 14H8.3125C8.46168 14 8.60476 14.0593 8.71025 14.1648C8.81574 14.2702 8.875 14.4133 8.875 14.5625C8.875 14.7117 8.81574 14.8548 8.71025 14.9602C8.60476 15.0657 8.46168 15.125 8.3125 15.125ZM9.0625 12.125H4.1875C4.03832 12.125 3.89524 12.0657 3.78975 11.9602C3.68426 11.8548 3.625 11.7117 3.625 11.5625C3.625 11.4133 3.68426 11.2702 3.78975 11.1648C3.89524 11.0593 4.03832 11 4.1875 11H9.0625C9.21168 11 9.35476 11.0593 9.46025 11.1648C9.56574 11.2702 9.625 11.4133 9.625 11.5625C9.625 11.7117 9.56574 11.8548 9.46025 11.9602C9.35476 12.0657 9.21168 12.125 9.0625 12.125Z" />
                                                                                <path d="M14.1272 11.0456C13.6642 10.9776 13.1925 11.0015 12.7388 11.1159C12.2851 11.2302 11.8584 11.4328 11.483 11.7121C11.1077 11.9914 10.791 12.3419 10.551 12.7435C10.3111 13.1452 10.1526 13.5902 10.0847 14.0531C10.0167 14.516 10.0406 14.9878 10.1549 15.4414C10.2693 15.8951 10.4719 16.3218 10.7512 16.6972C11.0305 17.0726 11.3809 17.3893 11.7826 17.6292C12.1843 17.8692 12.6293 18.0276 13.0922 18.0956C13.2487 18.1168 13.4066 18.1268 13.5647 18.1256C13.6472 18.1256 13.7297 18.1256 13.8122 18.1181C14.6853 18.0581 15.5059 17.6789 16.1173 17.0526C16.7287 16.4263 17.0882 15.5968 17.1271 14.7225C17.1661 13.8481 16.8818 12.99 16.3285 12.3118C15.7751 11.6337 14.9916 11.1829 14.1272 11.0456ZM14.1122 16.9331C13.9331 16.9781 13.7492 17.0008 13.5647 17.0006C12.9182 17.0006 12.2982 16.7438 11.8411 16.2867C11.384 15.8296 11.1272 15.2096 11.1272 14.5631C11.1272 13.9166 11.384 13.2966 11.8411 12.8395C12.2982 12.3824 12.9182 12.1256 13.5647 12.1256C13.7542 12.1249 13.9431 12.1476 14.1272 12.1931C14.6622 12.3191 15.1388 12.6225 15.4794 13.0539C15.8199 13.4854 16.0044 14.0194 16.0026 14.5691C16.0009 15.1187 15.8131 15.6516 15.4698 16.0809C15.1265 16.5101 14.648 16.8105 14.1122 16.9331Z" fill="#6A6A6A" />
                                                                                <path d="M13.1859 15.8766C13.1121 15.8766 13.0389 15.862 12.9707 15.8337C12.9025 15.8054 12.8405 15.7639 12.7884 15.7116L12.0384 14.9616C11.9831 14.9101 11.9388 14.848 11.9081 14.779C11.8773 14.71 11.8608 14.6355 11.8595 14.56C11.8581 14.4845 11.872 14.4094 11.9003 14.3394C11.9286 14.2694 11.9707 14.2057 12.0241 14.1523C12.0775 14.0989 12.1412 14.0568 12.2112 14.0285C12.2812 14.0002 12.3563 13.9863 12.4318 13.9877C12.5073 13.989 12.5818 14.0055 12.6508 14.0363C12.7198 14.067 12.7819 14.1113 12.8334 14.1666L13.1859 14.5191L14.2884 13.4166C14.395 13.3172 14.5361 13.2631 14.6818 13.2657C14.8275 13.2683 14.9666 13.3273 15.0696 13.4304C15.1727 13.5334 15.2317 13.6725 15.2343 13.8182C15.2369 13.9639 15.1828 14.105 15.0834 14.2116L13.5834 15.7116C13.5313 15.7639 13.4693 15.8054 13.4011 15.8337C13.3329 15.862 13.2598 15.8766 13.1859 15.8766Z" fill="#6A6A6A" />
                                                                            </svg>
                                                                        </span>
                                                                        Terms of service
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                            <hr className='m-0' />
                                                            <Link to="" onClick={() => { setActiveSection('deactiveaccount'); handleClose() }} className='text-decoration-none'>
                                                                <li className='py-4 px-4'>
                                                                    <div className='d-flex gap-2 align-items-center'>
                                                                        <span className='d-inline-block pe-2'>
                                                                            <svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6818 9.40103L6.15007 5.19246C6.39395 4.46889 6.88691 3.85548 7.54105 3.46163C8.19519 3.06777 8.96797 2.91908 9.72155 3.04207C10.4751 3.16507 11.1605 3.55175 11.6555 4.13315C12.1505 4.71455 12.4228 5.45287 12.424 6.21642C12.4239 6.98763 12.1471 7.73321 11.6439 8.31761C11.1407 8.90202 10.4444 9.28646 9.6818 9.40103ZM11.9545 16.3254L12.945 17.4968C13.0553 17.6272 13.2129 17.7085 13.3832 17.7227C13.5534 17.7369 13.7223 17.6828 13.8527 17.5725C13.9831 17.4622 14.0643 17.3045 14.0785 17.1343C14.0927 16.9641 14.0387 16.7952 13.9284 16.6648L4.14399 5.0965C4.09001 5.03 4.0233 4.97494 3.94778 4.93454C3.87225 4.89414 3.78943 4.86921 3.70415 4.86121C3.61887 4.85321 3.53285 4.8623 3.45113 4.88795C3.36941 4.91361 3.29363 4.9553 3.22822 5.0106C3.16281 5.0659 3.10909 5.1337 3.0702 5.21001C3.03131 5.28633 3.00804 5.36963 3.00174 5.45505C2.99545 5.54048 3.00625 5.62629 3.03353 5.70749C3.06081 5.78868 3.104 5.86362 3.1606 5.92791L7.28932 10.8095C5.44424 10.9808 4.30693 11.3717 3.77305 11.601C3.54056 11.7008 3.4079 11.9326 3.4079 12.1851C3.4079 13.3349 3.86466 14.4376 4.67772 15.2507C5.49077 16.0637 6.59351 16.5205 7.74334 16.5205H10.6646C11.1141 16.5205 11.5468 16.4523 11.9545 16.3254ZM15 12.1851C15 13.1421 14.6902 14.0269 14.1647 14.7437L10.8442 10.7863C12.8516 10.9428 14.0752 11.3601 14.6355 11.601C14.8673 11.7008 15 11.9326 15 12.1851Z" />
                                                                            </svg>
                                                                        </span>
                                                                        Deactivate Account
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                            <hr className='m-0' />
                                                            <li className='py-4 px-4' onClick={() => {
                                                                handleClose()
                                                            }}>
                                                                <div className='d-flex gap-2 align-items-center'>
                                                                    <span className='d-inline-block pe-2'>
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className='icon'>
                                                                            <path d="M8.97435 15.3489H3.25596C2.90523 15.3489 2.6206 15.0644 2.6206 14.7139V3.28392C2.6206 2.9334 2.90526 2.64894 3.25596 2.64894H8.97435C9.3257 2.64894 9.6097 2.3651 9.6097 2.01395C9.6097 1.6628 9.3257 1.37891 8.97435 1.37891H3.25596C2.20506 1.37891 1.34985 2.23364 1.34985 3.28392V14.7139C1.34985 15.7642 2.20506 16.6189 3.25596 16.6189H8.97435C9.3257 16.6189 9.6097 16.3351 9.6097 15.9839C9.6097 15.6328 9.3257 15.3489 8.97435 15.3489Z" />
                                                                            <path d="M16.4611 8.5436L12.598 4.73359C12.3489 4.48721 11.9461 4.4904 11.6996 4.73995C11.453 4.98951 11.4556 5.39146 11.7059 5.63784L14.4666 8.36071H7.06895C6.7176 8.36071 6.43359 8.64454 6.43359 8.9957C6.43359 9.34685 6.7176 9.63071 7.06895 9.63071H14.4666L11.7059 12.3536C11.4556 12.6 11.4537 13.0019 11.6996 13.2515C11.7587 13.3114 11.8291 13.359 11.9067 13.3915C11.9844 13.424 12.0678 13.4407 12.1519 13.4407C12.3133 13.4407 12.4747 13.3797 12.598 13.2578L16.4611 9.44779C16.521 9.38868 16.5685 9.31829 16.601 9.24068C16.6335 9.16307 16.6503 9.07979 16.6504 8.99567C16.6504 8.82556 16.5824 8.66363 16.4611 8.5436Z" fill="#6A6A6A" />
                                                                        </svg>
                                                                    </span>
                                                                    Logout
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Offcanvas.Body>
                                            </Offcanvas>
                                        </div >
                                    </div >
                                </Col>
                                <Col lg={9} md={8} className='pt-3 px-md-2'>

                                    {/* Profile start */}
                                    {activeSection === 'profile' &&
                                        <section className='VK_user_profile mb-4'>
                                            <h2 className='VK_profile_heading'>
                                                My Profile
                                            </h2>
                                            <div className='VK_profile_div'>
                                                <div className='VK_proflie_logo'>
                                                    <div className='VK_proflie_img'>
                                                        <p className='m-0'>
                                                            JW
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='VK_profile_info'>
                                                    <div className='VK_profile_detail px-4'>
                                                        <div className='d-flex justify-content-between align-items-center pb-3'>
                                                            <div>
                                                                <h4 className='VK_profile_det m-0'>
                                                                    Personal Details
                                                                </h4>
                                                            </div>
                                                            <div>
                                                                <button className='bg-white border-0' onClick={() => { setEditpersonal(true) }}>
                                                                    <p className='m-0 text-decoration-underline fw-'>
                                                                        Edit
                                                                    </p>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className='m-0' />
                                                    <div className='VK_profile_detais py-3 mx-4'>
                                                        <form action="" className='w-100'>
                                                            <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100'>
                                                                <div className='w-100 my-3 px-xxl-4'>
                                                                    <p className='VK_input_label m-0'>
                                                                        Name
                                                                    </p>
                                                                    <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                                                </div>
                                                                <div className='w-100 my-3 px-xxl-4'>
                                                                    <p className='VK_input_label m-0'>
                                                                        Date of Birth
                                                                    </p>
                                                                    <input type="text" name="date" className='VK_from_input w-100 py-2 px-3' />
                                                                </div>
                                                            </div>
                                                            <div className='d-flex flex-column flex-sm-row gap-5 w-100'>
                                                                <div className='w-100 my-3 px-xxl-4'>
                                                                    <p className='VK_input_label m-0'>
                                                                        Gender
                                                                    </p>
                                                                    <input type="text" name="gender" className='VK_from_input w-100 py-2 px-3' />
                                                                </div>
                                                                {/* <div className='w-100 px-xxl-4'>
                                                                </div> */}
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className='VK_profile_detail px-4'>
                                                        <div className='d-flex justify-content-between align-items-center pb-3'>
                                                            <div>
                                                                <h4 className='VK_profile_det m-0'>
                                                                    Contact Details
                                                                </h4>
                                                            </div>
                                                            <div>
                                                                <button className='bg-white border-0' onClick={() => setEditcontact(true)}>
                                                                    <p className='m-0 text-decoration-underline '>
                                                                        Edit
                                                                    </p>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className='m-0' />
                                                    <div className='VK_profile_detais py-3 mx-4'>
                                                        <form action="" className='w-100'>
                                                            <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100'>
                                                                <div className='w-100 px-xxl-4 my-3'>
                                                                    <p className='VK_input_label m-0'>
                                                                        Email
                                                                    </p>
                                                                    <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                                                </div>
                                                                <div className='w-100 px-xxl-4 my-3'>
                                                                    <p className='VK_input_label m-0'>
                                                                        Password
                                                                    </p>
                                                                    <input type="text" name="date" className='VK_from_input w-100 py-2 px-3' />
                                                                </div>
                                                            </div>
                                                            <div className='d-flex flex-column flex-sm-row gap-5 w-100'>
                                                                <div className='w-100 px-xxl-4 my-3'>
                                                                    <p className='VK_input_label m-0'>
                                                                        Mobile No.
                                                                    </p>
                                                                    <input type="text" name="gender" className='VK_from_input w-100 py-2 px-3' />
                                                                </div>
                                                                {/* <div className='w-100 px-xxl-4 my-3'>
                                                                </div> */}
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    }
                                    {/* Profile end */}

                                    {/* order start */}
                                    {activeSection === 'order' &&
                                        <section className='VK_user_profile mb-4 h-100'>
                                            <h2 className='VK_profile_heading mb-4'>
                                                My Order
                                            </h2>


                                            {/* empty order */}
                                            {orders.length === 0 ? (
                                                // Empty order section
                                                <div className='VK_my_order d-flex justify-content-center align-items-center h-100'>
                                                    <div className='VK_empty_order text-center'>
                                                        <div className='VK_empty_order_img'>
                                                            <img src={require('../d_img/empty_cart.png')} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='text-black fw-bold mb-1'>You have no orders</p>
                                                            <p className='font_14 mb-4'>
                                                                You have no orders with us. Keep shopping with us!
                                                            </p>
                                                            <button className='VK_empty_order_btn'>
                                                                Continue Shopping
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                // Orders section
                                                <>
                                                    {/* Filter buttons */}
                                                    <div className='d-flex flex-wrap gap-3 mb-4'>
                                                        <button className='VK_order_btn VK_order_btn_active' onClick={(e) => { handle_filter(e, 'All') }}>
                                                            All
                                                        </button>
                                                        <button className='VK_order_btn' onClick={(e) => { handle_filter(e, 'Progress') }}>
                                                            In Progress
                                                        </button>
                                                        <button className='VK_order_btn' onClick={(e) => { handle_filter(e, 'Delivered') }}>
                                                            Delivered
                                                        </button>
                                                        <button className='VK_order_btn' onClick={(e) => { handle_filter(e, 'Cancelled') }}>
                                                            Cancelled
                                                        </button>
                                                    </div>

                                                    {/* Orders list */}
                                                    <div className='VK_order_parent'>
                                                        {orders.map((item) => (
                                                            <div className='VK_order_card my-3' key={item.id} onClick={() => {
                                                                if (item.status === 'Delivered') {
                                                                    navigate('/combine');
                                                                }
                                                            }}>
                                                                <div className={`VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap ${item.status === "Delivered" ? 'd_cur' : ""}`}>
                                                                    <div className='VK_order_detail d-flex flex-sm-row flex-column'>
                                                                        <div>
                                                                            <img src={require(`../../Vivek/assets/${item.image}`)} className='VK_order_images object_cover' alt={item.name} />
                                                                        </div>
                                                                        <div className='ps-sm-4 my-4 my-sm-0'>
                                                                            <h5 className='text-black fw-bold'>{item.name}</h5>
                                                                            <p className='font_14 mb-1 text-black fw-500'>{item.description}</p>
                                                                            {item.color && <p className='font_14 light_color mb-1'>{item.color}</p>}
                                                                            {item.size && <p className='font_14 light_color m-0'>{item.size}</p>}
                                                                        </div>
                                                                    </div>
                                                                    <div className='VK_order_price'>
                                                                        <p className='m-0'>${item.price}</p>
                                                                    </div>
                                                                    <div className='VK_order_status ms-xl-0 mt-xl-0 mt-4'>
                                                                        <div className='h-100 d-flex flex-column'>
                                                                            <h4 className='d-flex flex-wrap align-items-center'>
                                                                                <span
                                                                                    className={`VK_order_dots me-sm-3 me-2 ${item.status === 'Delivered' ? 'bg-success' : item.status === 'arriving' ? 'bg-warning' : item.status === 'Cancelled' ? 'bg-danger' : ''}`}
                                                                                ></span>
                                                                                <span className={`VK_order_stu ${item.status === 'Delivered' ? 'text-success' : item.status === 'arriving' ? 'text-warning' : item.status === 'Cancelled' ? 'text-danger' : ''}`}>
                                                                                    Order {item.status}
                                                                                </span> 
                                                                                <span className='VK_order_date ps-2'>On {item.status_date}</span>
                                                                            </h4>
                                                                            <p className='font_14 fw-bold light_color'>{item.message}</p>
                                                                            <p className='mt-auto text-lg-end m-0 font_16 VK_track fw-500 d_cur' onClick={(e) => {e.stopPropagation();  handleOrderNavigation(item.status)}}>
                                                                                {
                                                                                    item.status === 'Delivered' ? 'Add Rate & Review' :
                                                                                        item.status === 'arriving' ? 'Track Order' :
                                                                                            item.status === 'Cancelled' ? 'View refund status' : null
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </section>
                                    }
                                    {/* order end */}

                                    {/* Payment start */}

                                    {activeSection === 'payment' && (
                                        <>
                                            {paymentMethod === 'credit' && (
                                                <section className='VK_user_profile mb-4 h-100'>
                                                    <div className='d-flex flex-wrap align-items-center justify-content-between mb-4'>
                                                        <h2 className='VK_profile_heading fw-bold'>
                                                            Payment Methods
                                                        </h2>
                                                    </div>
                                                    <div className='mt-4'>
                                                        <div className='VK_paymentbox'>
                                                            <div className="VK_paymenthead">
                                                                <div className='d-flex justify-content-between flex-wrap align-items-center'>
                                                                    <div>
                                                                        <p className='m-0 fw-600 font_18'>
                                                                            Credit / Debit Cards
                                                                        </p>
                                                                    </div>
                                                                    <div className=''>
                                                                        <button className='VK_theme_btn' onClick={() => { setAddcredit(true) }}>
                                                                            Add Credit / Debit Card
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='h-100'>
                                                                <div className="VK_paymentdata">
                                                                    <Row>
                                                                        <Map data={card}>
                                                                            {(item) => (
                                                                                <Col xxl={4} md={12} lg={6} sm={6} className='my-3'>
                                                                                    <div className='VK_card_box d-flex flex-column p-3'>
                                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                                            <div>
                                                                                                <img src={require('../d_img/card_type.png')} width="48px" alt="" />
                                                                                            </div>
                                                                                            <div>
                                                                                                <button className='bg-transparent border-0' onClick={() => { setDeletecredit(true) }}>
                                                                                                    <img src={require('../d_img/delete.png')} width="16px" alt="" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='mt-auto'>
                                                                                            <h4 className='VK_card_num mb-3'>
                                                                                                {item.number}
                                                                                            </h4>
                                                                                        </div>
                                                                                        <div className='d-flex gap-4'>
                                                                                            <div>
                                                                                                <p className='VK_card_del_tit m-0'>
                                                                                                    CARD HOLDER NAME
                                                                                                </p>
                                                                                                <p className='text-white mb-2'>
                                                                                                    {item.name}
                                                                                                </p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <p className='VK_card_del_tit m-0'>
                                                                                                    VALID THRU
                                                                                                </p>
                                                                                                <p className='text-white mb-2'>
                                                                                                    {item.date}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                            )}
                                                                        </Map>
                                                                    </Row>
                                                                </div>

                                                                {/* empty card */}
                                                                <div className='VK_empty_card d-none'>
                                                                    <div className='text-center'>
                                                                        <img src={require('../d_img/card.png')} alt="" />
                                                                        <p className='fw-600 text-black'>
                                                                            You have no Saved cards
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            )}
                                            {paymentMethod === 'upi' && (
                                                <section className='VK_user_profile mb-4 h-100'>
                                                    <div className='d-flex flex-wrap align-items-center justify-content-between mb-4'>
                                                        <h2 className='VK_profile_heading fw-bold'>
                                                            Payment Methods
                                                        </h2>
                                                    </div>
                                                    <div className='mt-4'>
                                                        <div className='VK_paymentbox'>
                                                            <div className="VK_paymenthead">
                                                                <div className='d-flex justify-content-between flex-wrap align-items-center'>
                                                                    <div>
                                                                        <p className='m-0 fw-600 font_18'>
                                                                            UPI ID
                                                                        </p>
                                                                    </div>
                                                                    <div className='ms-auto'>
                                                                        <button className='VK_theme_btn' onClick={() => { setAddupimodal(true) }}>
                                                                            Add UPI ID
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='h-100'>
                                                                <div className="VK_paymentdata">
                                                                    <Row>
                                                                        {upi.length > 0 ? (
                                                                            upi.map((item) => (
                                                                                <Col lg={6} md={12} sm={6} className='my-3' key={item.id}>
                                                                                    <div className='VK_upi_card d-flex justify-content-between align-items-center w-100'>
                                                                                        <div>
                                                                                            <img src={require('../d_img/googlepay.png')} height="28px" alt="Google Pay" />
                                                                                        </div>
                                                                                        <div className='ps-3'>
                                                                                            {item.upiId}
                                                                                        </div>
                                                                                        <div className='ms-auto'>
                                                                                            <button className='bg-transparent border-0' onClick={() => setDeleteupimodal(true)}>
                                                                                                <img src={require('../d_img/delete.png')} width="16px" alt="Delete" />
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                            ))
                                                                        ) : (
                                                                            <div className='VK_empty_card'>
                                                                                <div className='text-center'>
                                                                                    <img src={require('../d_img/upi.png')} alt="No UPI IDs" />
                                                                                    <p className='fw-600 text-black'>You have no saved UPI ID</p>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </Row>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </section>
                                            )}
                                        </>
                                    )}

                                    {/* Payment end */}


                                    {/* address start */}
                                    {activeSection === 'address' &&
                                        <section className='VK_user_profile mb-4 h-100'>
                                            <div className='d-flex flex-wrap align-items-center justify-content-between mb-4'>
                                                <h2 className='VK_profile_heading'>
                                                    My Address
                                                </h2>
                                                <button className='VK_add_address' onClick={() => { setadderss_model(true) }}>
                                                    + Add Address
                                                </button>
                                            </div>


                                            {/* empty address */}

                                            {address.length === 0 ? (
                                                // Empty address section
                                                <div className='VK_my_order VK_emptyadd d-flex justify-content-center align-items-center h-100'>
                                                    <div className='VK_empty_order text-center'>
                                                        <div className='VK_empty_order_img'>
                                                            <img src={require('../d_img/address.png')} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='text-black fw-bold mb-1 h5'>
                                                                No saved address found
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                // Address list section
                                                <div className='VK_address_parent'>
                                                    <Row className='m-0'>
                                                        {address.map((item, index) => (
                                                            <Col lg={6} className='my-3 p-0 px-md-2' key={index}>
                                                                <div className='VK_address_box'>
                                                                    <div className='VK_address_div'>
                                                                        <div className='Address_header py-2 px-3'>
                                                                            <div className='VK_address_type py-1 d-flex justify-content-between'>
                                                                                <div className='VK_address_typ'>
                                                                                    <span className='d-block px-3 py-1'>{item.type}</span>
                                                                                </div>
                                                                                <div className='VK_address_three_dots'>
                                                                                    <Dropdown className='VK_address_drop_down'>
                                                                                        <Dropdown.Toggle className='bg-transparent text-black' id="dropdown-basic">
                                                                                            <BsThreeDotsVertical />
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu>
                                                                                            <Dropdown.Item>
                                                                                                <button className='bg-transparent border-0' onClick={() => { setedit_model(true) }}>
                                                                                                    Edit
                                                                                                </button>
                                                                                            </Dropdown.Item>
                                                                                            <Dropdown.Item>
                                                                                                <button className='bg-transparent border-0' onClick={() => { setdelete_model(true) }}>
                                                                                                    Delete
                                                                                                </button>
                                                                                            </Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='VK_address_body p-3'>
                                                                            <p className='text-black mb-2 fw-500'>{item.name}</p>
                                                                            <p className='mb-2 font_14 text-black fw-500'>{item.number}</p>
                                                                            <p className='font_12 fw-500 m-0'>{item.address}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </div>
                                            )}
                                        </section>
                                    }
                                    {/* address end */}

                                    {/* Faqs start */}
                                    {activeSection === 'faqs' &&
                                        <section className='VK_user_profile mb-4'>
                                            <h2 className='VK_profile_heading mb-4'>
                                                FAQs
                                            </h2>
                                            <div className='VK_faq_div'>
                                                <div className='VK_FAQ_accoridans'>
                                                    <Accordion activeKey={activeKey} className='VK_faq_accordians'>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header onClick={() => handleToggle('0')}>
                                                                <p className='m-0 VK_faq_acco_txt'>
                                                                    Can I reactivate my inactive account?
                                                                </p>
                                                                <img
                                                                    src={activeKey === '0' ? require('../d_img/minus.png') : require('../d_img/plus.png')}
                                                                    alt="accordion-icon"
                                                                    style={{ marginRight: '10px' }}
                                                                    className='ps-2'
                                                                />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className='m-0 VK_faq_acco_desc'>
                                                                    Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                                                </p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header onClick={() => handleToggle('1')}>
                                                                <p className='m-0 VK_faq_acco_txt'>
                                                                    Can I use any Debit Card to pay for my order?
                                                                </p>
                                                                <img
                                                                    src={activeKey === '1' ? require('../d_img/minus.png') : require('../d_img/plus.png')}
                                                                    alt="accordion-icon"
                                                                    style={{ marginRight: '10px' }}
                                                                    className='ps-2'
                                                                />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className='m-0 VK_faq_acco_desc'>
                                                                    Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                                                </p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header onClick={() => handleToggle('2')}>
                                                                <p className='m-0 VK_faq_acco_txt'>
                                                                    How can I pay with a saved Credit/Debit Card?
                                                                </p>
                                                                <img
                                                                    src={activeKey === '2' ? require('../d_img/minus.png') : require('../d_img/plus.png')}
                                                                    alt="accordion-icon"
                                                                    style={{ marginRight: '10px' }}
                                                                    className='ps-2'
                                                                />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className='m-0 VK_faq_acco_desc'>
                                                                    Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                                                </p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header onClick={() => handleToggle('3')}>
                                                                <p className='m-0 VK_faq_acco_txt'>
                                                                    What are the modes of refund available after cancellation?
                                                                </p>
                                                                <img
                                                                    src={activeKey === '3' ? require('../d_img/minus.png') : require('../d_img/plus.png')}
                                                                    alt="accordion-icon"
                                                                    style={{ marginRight: '10px' }}
                                                                    className='ps-2'
                                                                />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className='m-0 VK_faq_acco_desc'>
                                                                    Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                                                </p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header onClick={() => handleToggle('4')}>
                                                                <p className='m-0 VK_faq_acco_txt'>
                                                                    How quickly can I get my order delivered?
                                                                </p>
                                                                <img
                                                                    src={activeKey === '4' ? require('../d_img/minus.png') : require('../d_img/plus.png')}
                                                                    alt="accordion-icon"
                                                                    style={{ marginRight: '10px' }}
                                                                    className='ps-2'
                                                                />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className='m-0 VK_faq_acco_desc'>
                                                                    Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                                                </p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="5">
                                                            <Accordion.Header onClick={() => handleToggle('5')}>
                                                                <p className='m-0 VK_faq_acco_txt'>
                                                                    Why can't I track my order even though it has been shipped?
                                                                </p>
                                                                <img
                                                                    src={activeKey === '5' ? require('../d_img/minus.png') : require('../d_img/plus.png')}
                                                                    alt="accordion-icon"
                                                                    style={{ marginRight: '10px' }}
                                                                    className='ps-2'
                                                                />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className='m-0 VK_faq_acco_desc'>
                                                                    Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                                                </p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </section>
                                    }
                                    {/* Faqs end */}

                                    {/* terms start */}
                                    {activeSection === 'terms' &&
                                        <section className='VK_user_profile mb-4'>
                                            <h2 className='VK_profile_heading mb-4'>
                                                Terms of Service
                                            </h2>
                                            <div className='VK_Term_of_use'>
                                                <div>
                                                    <p>
                                                        <b>
                                                            Terms of Use
                                                        </b>
                                                    </p>

                                                    <div className='mt-3'>
                                                        <ul className='VK_term_ul'>
                                                            <li className='mb-4'>
                                                                Lorem ipsum dolor sit amet consectetur. Eget congue volutpat sed orci dolor libero. Donec suspendisse mus id nibh eget. Sit feugiat risus mauris nisl. Vitae pulvinar aliquam nunc mauris vehicula pretium. Nunc ipsum nisl integer convallis a quis nec donec ornare. Diam tincidunt elit mi nulla senectus quisque in amet.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Turpis sit dictum id blandit. Ultrices dolor dui viverra magna malesuada laoreet. Ornare amet aliquam imperdiet neque donec. Etiam nisl viverra massa nunc eget fames ullamcorper. Erat vivamus nisl molestie tincidunt cras lacus turpis. Arcu tellus nullam feugiat fermentum venenatis ultricies nec sagittis. Lorem cursus viverra gravida vitae morbi etiam leo nisl mollis.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Mattis magnis sit scelerisque consequat vestibulum. Parturient non ornare quis ornare. Mauris purus risus egestas tortor. Eget orci fames nisi at blandit vitae nibh.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Gravida viverra erat aliquam vitae mattis in duis magna. Morbi senectus adipiscing nisi aliquam amet. Porttitor mattis nunc turpis sit in sagittis ornare in egestas. Urna fringilla nibh tincidunt aliquet facilisis eget faucibus. Turpis integer leo aliquet lectus nunc euismod in vitae. Egestas arcu nisl elit eu amet non in faucibus nibh. Ut donec parturient in mauris. Risus sed ac pulvinar arcu ut accumsan amet semper.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Eget sit bibendum egestas egestas pharetra volutpat penatibus. Adipiscing sit integer sapien mauris pellentesque amet. Nisi bibendum amet elementum amet sit diam placerat lacus. Gravida augue facilisis condimentum parturient aliquam odio facilisis quis. Egestas quisque urna sagittis in risus praesent mauris faucibus nisi. Tincidunt vestibulum morbi libero id volutpat proin vestibulum dolor. Pharetra cursus ullamcorper nunc nisl quis volutpat eget porta ultricies. Ut tellus imperdiet non amet.
                                                            </li>
                                                            <li className="mb-4">
                                                                Odio fringilla cursus ante arcu pulvinar. Nec urna penatibus elementum sed. Sed consequat ullamcorper nibh nibh ullamcorper luctus id convallis. Vulputate est cras arcu sed neque. Nibh pellentesque enim proin adipiscing id nullam. Facilisis egestas nulla quam fermentum nulla nec in vulputate. Non elementum nascetur gravida auctor eget facilisis tortor. Lacinia elit sit platea turpis eu leo est. Condimentum vestibulum pharetra eu sed. Mi nisl enim fermentum lacus. Amet orci diam aliquam id. At vitae laoreet ac tortor nulla volutpat facilisis nunc purus. Quam scelerisque vitae nunc luctus ac neque id.
                                                            </li>
                                                            <li className="mb-4">
                                                                Aliquam feugiat rhoncus mauris leo dui pretium. Quisque sed amet nunc nisl venenatis mi aenean consequat. Rhoncus turpis pellentesque nulla dictum aenean neque. Proin id in lorem eget. Vel nulla etiam at placerat netus pretium cras dapibus. Imperdiet felis suscipit tellus duis lacus lacus ullamcorper. Nisl amet neque congue arcu. Non pretium id nam leo eu ultrices id. Sagittis elementum leo cursus integer. Ultrices magna metus amet id nibh.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='mt-5'>
                                                    <p>
                                                        <b>
                                                            Conditions
                                                        </b>
                                                    </p>
                                                    <div className='mt-3'>
                                                        <ul className='VK_term_ul'>
                                                            <li className='mb-4'>
                                                                Lorem ipsum dolor sit amet consectetur. Eget congue volutpat sed orci dolor libero. Donec suspendisse mus id nibh eget. Sit feugiat risus mauris nisl. Vitae pulvinar aliquam nunc mauris vehicula pretium. Nunc ipsum nisl integer convallis a quis nec donec ornare. Diam tincidunt elit mi nulla senectus quisque in amet.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Turpis sit dictum id blandit. Ultrices dolor dui viverra magna malesuada laoreet. Ornare amet aliquam imperdiet neque donec. Etiam nisl viverra massa nunc eget fames ullamcorper. Erat vivamus nisl molestie tincidunt cras lacus turpis. Arcu tellus nullam feugiat fermentum venenatis ultricies nec sagittis. Lorem cursus viverra gravida vitae morbi etiam leo nisl mollis.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Mattis magnis sit scelerisque consequat vestibulum. Parturient non ornare quis ornare. Mauris purus risus egestas tortor. Eget orci fames nisi at blandit vitae nibh.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Gravida viverra erat aliquam vitae mattis in duis magna. Morbi senectus adipiscing nisi aliquam amet. Porttitor mattis nunc turpis sit in sagittis ornare in egestas. Urna fringilla nibh tincidunt aliquet facilisis eget faucibus. Turpis integer leo aliquet lectus nunc euismod in vitae. Egestas arcu nisl elit eu amet non in faucibus nibh. Ut donec parturient in mauris. Risus sed ac pulvinar arcu ut accumsan amet semper.
                                                            </li>
                                                            <li className='mb-4'>
                                                                Eget sit bibendum egestas egestas pharetra volutpat penatibus. Adipiscing sit integer sapien mauris pellentesque amet. Nisi bibendum amet elementum amet sit diam placerat lacus. Gravida augue facilisis condimentum parturient aliquam odio facilisis quis. Egestas quisque urna sagittis in risus praesent mauris faucibus nisi. Tincidunt vestibulum morbi libero id volutpat proin vestibulum dolor. Pharetra cursus ullamcorper nunc nisl quis volutpat eget porta ultricies. Ut tellus imperdiet non amet.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    }
                                    {/* terms end */}

                                    {/* deactive start */}
                                    {activeSection === 'deactiveaccount' &&
                                        <section className='VK_user_profile mb-4'>
                                            <h2 className='VK_profile_heading mb-4'>
                                                Deactivate Account
                                            </h2>
                                            <div className='VK_dactive'>
                                                <p className='fw-bold'>
                                                    When you deactivate your account
                                                </p>
                                                <ul className='VK_deactive_ul ps-4'>
                                                    <li>
                                                        You are logged out of your Quickcart Account
                                                    </li>
                                                    <li>
                                                        Your public profile on Quickcart is no longer visible
                                                    </li>
                                                    <li>
                                                        Your reviews/ratings are still visible, while your profile information is shown as ‘unavailable’ as a result of deactivation.
                                                    </li>
                                                    <li>
                                                        Your wishlist items are no longer accessible through the associated public hyperlink. Wishlist is shown as ‘unavailable’ as a result of deactivation
                                                    </li>
                                                    <li>
                                                        You will be unsubscribed from receiving promotional emails from Quickcart.
                                                    </li>
                                                    <li>
                                                        Your account data is retained and is restored in case you choose to reactivate your account
                                                    </li>
                                                    <li>
                                                        Your wishlist items are no longer accessible through the associated public hyperlink. Wishlist is shown as ‘unavailable’ as a result of deactivation
                                                    </li>
                                                    <li>
                                                        You will be unsubscribed from receiving promotional emails from Quickcart.
                                                    </li>
                                                </ul>
                                                <div className='mt-4'>
                                                    <button className='VK_dactive_btn' onClick={() => { setdeactivemodal(true) }}>
                                                        Deactivate Account
                                                    </button>
                                                </div>
                                            </div>
                                        </section>
                                    }
                                    {/* deactive end */}

                                </Col>
                            </Row>
                        </div>
                    </aside>
                </div >
            </section >

            {/* Edit detail Modal */}

            <Modal Modal
                className='VK_edit_profile_model'
                show={editpersonal}
                onHide={() => setEditpersonal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='px-4'>
                    <Modal.Title id="contained-modal-title-vcenter" className='py-2'>
                        <h4 className='VK_model_heading m-0 px-xxl-4'>
                            Edit Personal Details
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='VK_edit_profile_model p-sm-3'>
                        <form action="" className='w-100'>
                            <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100'>
                                <div className='w-100 px-xxl-4'>
                                    <p className='VK_input_label m-0'>
                                        Name
                                    </p>
                                    <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                </div>
                            </div>
                            <div className='px-xxl-4 my-4'>
                                <div className='pb-2'>
                                    <span className='VK_input_label'>
                                        Gender
                                    </span>
                                </div>
                                <div className='d-flex VK_edit_radio flex-column flex-sm-row gap-sm-5 w-100'>
                                    <Form.Check
                                        type="radio"
                                        id="male-radio"
                                        label="Male"
                                        name="gender"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="female-radio"
                                        label="Female"
                                        name="gender"
                                    />
                                </div>
                            </div>
                            <div className='w-100 my-4'>
                                <div className='w-100 my-3 px-xxl-4'>
                                    <p className='VK_input_label m-0 pb-1'>
                                        Date of Birth
                                    </p>
                                    <div className='d-flex flex-column flex-sm-row gap-sm-4'>
                                        <input type="text" name="dob-day" className='VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0' placeholder="Day" />
                                        <select name="dob-month" className="VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0">
                                            <option value="january">January</option>
                                            <option value="february">February</option>
                                            <option value="march">March</option>
                                            <option value="april">April</option>
                                            <option value="may">May</option>
                                            <option value="june">June</option>
                                            <option value="july">July</option>
                                            <option value="august">August</option>
                                            <option value="september">September</option>
                                            <option value="october">October</option>
                                            <option value="november">November</option>
                                            <option value="december">December</option>
                                        </select>
                                        <input type="text" name="dob-year" className='VK_from_input text-center w-100 py-2 px-3 my-3 my-sm-0' placeholder="Year" />
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-sm-5'>
                                <input type="submit" value="Update" className='VK_edit_submit' />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Edit detail Modal */}

            {/* Edit contact modal */}

            <Modal
                className='VK_edit_profile_model'
                show={editcontact}
                onHide={() => setEditcontact(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='px-4'>
                    <Modal.Title id="contained-modal-title-vcenter" className='py-2'>
                        <h4 className='VK_model_heading m-0 px-xxl-4'>
                            Edit Contact Details
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='VK_edit_profile_model p-sm-3'>
                        <form action="" className='w-100'>
                            <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100 pb-3'>
                                <div className='w-100 px-xxl-4'>
                                    <p className='VK_input_label m-0'>
                                        Mobile No.
                                    </p>
                                    <input type="text" name="name" className='VK_from_input w-100 py-2 px-3' />
                                </div>
                            </div>
                            <div className='d-flex flex-column flex-sm-row gap-sm-5 w-100 pt-3'>
                                <div className='w-100 px-xxl-4'>
                                    <p className='VK_input_label m-0'>
                                        Email
                                    </p>
                                    <input type="email" name="name" className='VK_from_input w-100 py-2 px-3' />
                                </div>
                            </div>
                            <div className='text-center mt-5'>
                                <input type="submit" value="Update" className='VK_edit_submit' />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Edit contact modal */}

            {/* Add Upi model */}
            <Modal
                show={addupimodal}
                onHide={() => { setAddupimodal(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Add UPI ID
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form action="" className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    UPI ID
                                </span>
                                <div className='d-flex VK_theme_bg'>
                                    <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} className='VK_from_input w-100 py-2 px-3' />
                                    <Dropdown onSelect={handleDropdownSelect}>
                                        <Dropdown.Toggle className='VK_theme_bg' id="dropdown-basic">
                                            <FaChevronDown className='text-black' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="@oksbi">oksbi</Dropdown.Item>
                                            <Dropdown.Item eventKey="@okicici">okicici</Dropdown.Item>
                                            <Dropdown.Item eventKey="@okaxis">okaxis</Dropdown.Item>
                                            <Dropdown.Item eventKey="@okhdfcbank">okhdfcbank</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button type="submit" className='VK_add_address_submit'>
                                    Save
                                </button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Add Upi model */}

            {/* delete upi model */}
            <Modal
                show={deleteupimodal}
                onHide={() => { setDeleteupimodal(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_logout_model'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span className='fw-bold m-0 ps-3'>
                            Delete
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-4'>
                    <div className='d-flex flex-column p-md-4 p-2'>
                        <p className='text-center VK_logout_txt m-0'>
                            Are you sure you want to delete?
                        </p>
                        <div className='mt-5'>
                            <div className='d-flex gap-2'>
                                <div className='w-100'>
                                    <button className='VK_logut_cancle h-100' onClick={() => setDeleteupimodal(false)}>
                                        Cancel
                                    </button>
                                </div>
                                <div className='w-100'>
                                    <button className='VK_logout_ok h-100'>
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* delete upi model */}

            {/* Add Card model */}
            <Modal
                show={addcredit}
                onHide={() => { setAddcredit(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Add Credit / Debit Card
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form action="" className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Card Holder Name
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' />
                            </div>
                            <div className='VK_name my-3'>
                                <span className='VK_input_label pb-1'>
                                    Card No.
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3' />
                            </div>
                            <div className='d-flex flex-sm-nowrap flex-wrap my-3 gap-3'>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        CVV
                                    </span>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' />
                                </div>
                                <div className='w-100'>
                                    <span className='VK_input_label pb-1'>
                                        Expiry Date
                                    </span>
                                    <input type="text" className='VK_from_input w-100 py-2 px-3' />
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button type="submit" className='VK_add_address_submit'>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Add card model */}

            {/* delete card model */}
            <Modal
                show={deletecredit}
                onHide={() => { setDeletecredit(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_logout_model'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span className='fw-bold m-0 ps-3'>
                            Delete
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-4'>
                    <div className='d-flex flex-column p-md-4 p-2'>
                        <p className='text-center VK_logout_txt m-0'>
                            Are you sure you want to delete?
                        </p>
                        <div className='mt-5'>
                            <div className='d-flex gap-2'>
                                <div className='w-100'>
                                    <button className='VK_logut_cancle h-100' onClick={() => setDeletecredit(false)}>
                                        Cancel
                                    </button>
                                </div>
                                <div className='w-100'>
                                    <button className='VK_logout_ok h-100'>
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Delete card modal */}

            {/* Deactive account modal */}

            <Modal
                show={deactivemodal}
                onHide={() => { setdeactivemodal(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_deactive_model'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className='m-0 VK_dactive_model'>
                            Deactivate Account
                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-sm-4 p-2'>
                        <p className='text-center fw-bold'>
                            Are you sure you want to leave?
                        </p>
                        <div className='my-3'>
                            <div className='d-flex w-100 VK_deactive_num px-3 rounded-1'>
                                <input type="text" className='border-0 outline_none bg-transparent w-100 py-2' />
                                <button className='border-0 bg-transparent VK_send_otp_btn w-auto text-nowrap'>
                                    Send OTP
                                </button>
                            </div>
                        </div>

                        <div className='my-4'>
                            <div className='d-flex gap-sm-4 gap-2'>
                                {Array(6).fill("").map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        className='w-100 outline_none VK_otp_box'
                                        onKeyUp={(e) => handleInputChange(e, index)}
                                        ref={(el) => inputRefs.current[index] = el}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-center w-100 text-center px-3'>
                                <p className='m-0 VK_deactive_tct'>
                                    Didn't receive code yet?
                                </p>
                                <button className='border-0 bg-transparent text-decoration-underline w-auto text-nowrap'>
                                    Resend
                                </button>
                            </div>
                        </div>

                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-center w-100 gap-sm-4 gap-2'>
                                <button className='VK_stay' onClick={() => setdeactivemodal(false)}>
                                    Let me stay
                                </button>
                                <button className='VK_dactivete'>
                                    Deactivate
                                </button>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>

            {/* Deactive account modal */}

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


            {/* edit address model */}
            <Modal
                show={edit_model}
                onHide={() => { setedit_model(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Edit Address
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
                            <div className='d-flex flex-wrap my-3 gap-3'>
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
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            {/* edit address model */}

            {/* delete address model */}
            <Modal
                show={delete_model}
                onHide={() => { setdelete_model(false) }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_logout_model'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span className='fw-bold m-0 ps-3'>
                            Delete
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column p-md-5 p-2'>
                        <p className='text-center VK_logout_txt m-0'>
                            Are you sure you want to delete?
                        </p>
                        <div className='mt-5'>
                            <div className='d-flex gap-2'>
                                <div className='w-100'>
                                    <button className='VK_logut_cancle h-100'>
                                        Cancel
                                    </button>
                                </div>
                                <div className='w-100'>
                                    <button className='VK_logout_ok h-100'>
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* delete address model */}

        </>
    )
}

export default Profile
