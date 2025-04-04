import React, { useEffect, useRef, useState } from "react";
import Header from "../../../Vivek/Component/header/Header";
import Footer from "../../../Vivek/Component/footer/Footer";
import "../Css/Cart.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { Form, Modal } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { State, City } from 'country-state-city';


const Cart = () => {

  const BaseUrl = process.env.REACT_APP_BASEURL;
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [couponData, setCouponData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    address: '',
    landmark: '',
    pincode: '',
    city: '',
    state: '',
    addressType: 'Home'
  });
  const deliveryCharges = {
    Express: 35,
    Standard: 20,
    Free: 0,
  };
  const [id, setId] = useState(null);
  const [count, setCount] = useState(0)
  const [activeButton, setActiveButton] = useState('Pay on Delivery');
  const [upipayId, setUpipayId] = useState('');
  const [couponInput, setCouponInput] = useState('');
  const [selectedCouponId, setSelectedCouponId] = useState(null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(address.length > 0 ? address[0]?._id : null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [selectedDeliveryType, setSelectedDeliveryType] = useState('Free');
  const [productData, setProductData] = useState([]);
  const [orderData, setOrderData] = useState({ addressData: [], productData: [] });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const countryCode = 'IN';

  useEffect(() => {
    const statesList = State.getStatesOfCountry(countryCode);
    setStates(statesList);
  }, []);

  // Load cities when state changes
  useEffect(() => {
    if (formData.state) {
      const citiesList = City.getCitiesOfState(countryCode, formData.state);
      setCities(citiesList);
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // If state changes, reset city selection
    if (name === 'state') {
      setFormData({
        ...formData,
        state: value,
        city: ''
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}/api/createAddress`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // console.log("resposne", response.data);
      if (response.data.status === 201) {
        handleCloseModal();
      }
    } catch (error) {
      console.error('Data fetching Error:', error);
    }

  };

  const handleCheckOut = async () => {
    setCount(count + 1)
    if (count === 0) {
      document.getElementById("ds_with-line").style.border = "0.65px solid #2A221E"
      document.getElementById("ds_cupon").classList.add("d-none")
      document.getElementById("ds_women-card").classList.add("d-none")

      document.querySelectorAll('.qty-column').forEach(el => el.classList.add('d-none'));
      document.querySelectorAll('.delivery-date-column').forEach(el => el.classList.remove('d-none'));

    }
    else if (count === 1) {
      document.getElementById("ds_with-line2").style.border = "0.65px solid #2A221E"
      document.getElementById("ds_product").classList.add("d-none")
      document.getElementById("ds_address").classList.add("d-none")
      document.getElementById("ds_express-card").classList.remove("d-none")
      document.getElementById("ds_Nav-Tabs").classList.remove("d-none")
      document.getElementById("ds_proceed_btn").classList.add("d-none");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const createOrder = async () => {
    try {
      const selectedAddress = address.find(addr => addr._id === selectedAddressId);

      const orderItems = cartData.map(item => ({
        productId: item.productData[0]._id,
        productVariantId: item.productVariantData[0]._id,
        quantity: item.quantity
      }));

      const response = await axios.post(`${BaseUrl}/api/createOrder`, {
        addressId: selectedAddressId,
        items: orderItems,
        coupenId: selectedCouponId,
        deliveryType: selectedDeliveryType,
        paymentMethod: 'received'
      }, { headers: { Authorization: `Bearer ${token}` } });
      // console.log("response", response.data.order._id);
      setOrderData({
        ...response.data.order,
        addressData: [selectedAddress] // Format it to match your JSX expectations
      });
      setId(response.data.order._id);
    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }
  const handlePayment = (paymentType) => {
    setActiveButton(paymentType);
    console.log(paymentType);
  };

  const handlePaymentsuccess = async () => {
    try {

      await createOrder();

      document.getElementById("ds_order_conformation").classList.remove("d-none")
      document.getElementById("ds_cartsec").classList.add("d-none")
    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }

  const handleinvoicenavigate = () => {
    navigate('/invoice');
  }

  const handleDropdownSelect = (suffix) => {
    setUpipayId((prevUpiId) => {
      const baseId = prevUpiId.split("@")[0];
      return baseId + suffix;
    });
  };

  const handleNavAndTabs = (id) => {
    if (id === 1) {
      // document.getElementById("ds_with-line").classList.remove("ds_solid-border")
      // document.getElementById("ds_with-line").classList.add("ds_dashed-border")
      document.querySelectorAll('.qty-column').forEach(el => el.classList.remove('d-none'));
      document.querySelectorAll('.delivery-date-column').forEach(el => el.classList.add('d-none'));

      document.getElementById("ds_cupon").classList.remove("d-none")
      document.getElementById("ds_women-card").classList.remove("d-none")
    }
    else if (id === 2) {
      document.querySelectorAll('.qty-column').forEach(el => el.classList.add('d-none'));
      document.querySelectorAll('.delivery-date-column').forEach(el => el.classList.remove('d-none'));
      // document.getElementById("ds_with-line").classList.add("ds_solid-border")
      document.getElementById("ds_cupon").classList.remove("d-none")
      document.getElementById("ds_women-card").classList.add("d-none")
      document.getElementById("ds_product").classList.remove("d-none")
      document.getElementById("ds_express-card").classList.add("d-none")
      document.getElementById("ds_Nav-Tabs").classList.add("d-none")
    }
    else if (id === 3) {
      document.getElementById("ds_cupon").classList.add("d-none")
      document.getElementById("ds_women-card").classList.add("d-none")
      document.getElementById("ds_product").classList.add("d-none")
      document.getElementById("ds_express-card").classList.remove("d-none")
      document.getElementById("ds_Nav-Tabs").classList.remove("d-none")

    }


    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // fetch Cart Data
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/allMyCarts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // console.log("response", response.data.carts);
      setCartData(response.data.carts)
    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }

  const handleIncreaseQuantity = async (itemId) => {
    setCartData(prevCartData => {
      return prevCartData.map(item => {
        if (item._id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
    });

    await axios.put(`${BaseUrl}/api/updateCart/${itemId}`,
      { quantity: cartData.find(item => item._id === itemId).quantity + 1 },
      { headers: { Authorization: `Bearer ${token}` } });
    // console.log("response", response.data);
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = async (itemId) => {
    setCartData(prevCartData => {
      return prevCartData.map(item => {
        if (item._id === itemId && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
        return item;
      });
    });

    await axios.put(`${BaseUrl}/api/updateCart/${itemId}`,
      { quantity: cartData.find(item => item._id === itemId).quantity - 1 },
      { headers: { Authorization: `Bearer ${token}` } });
    // console.log("response", response.data);

  };

  // Function to handle removing item (when quantity is 1 and minus is clicked)
  const handleRemoveItem = async (itemId) => {
    const response = await axios.delete(`${BaseUrl}/api/deleteCart/${itemId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    // console.log("Response", response.data);
    if (response.data.status === 200) {
      setCartData(prevCartData => {
        return prevCartData.filter(item => item._id !== itemId);
      });
    }
  };

  const fetchCoupenData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/allSpecialOffer`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // console.log("response", response.data.specialOffers);
      setCouponData(response.data.specialOffers);
    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }
  const fetchAddressData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/getAllMyAddress`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // console.log("resposne", response.data.address);
      setAddress(response.data.address);

      if (response.data.address && response.data.address.length > 0) {
        setSelectedAddressId(response.data.address[0]._id);
      }
    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/allProduct`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // console.log("reesponse", response.data.product);
      setProductData(response.data.product);
    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }
  useEffect(() => {
    fetchCoupenData();
    fetchData();
    fetchAddressData();
    fetchProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCouponSelect = (couponCode, id) => {
    setCouponInput(couponCode);
    setSelectedCouponId(id);
  };

  const handleAddressSelection = (addressId) => {
    setSelectedAddressId(addressId);
    setShowAddressModal(false);
  };

  const getSelectedAddress = () => {
    return address.find(addr => addr._id === selectedAddressId) || (address.length > 0 ? address[0] : null);
  };

  const calculateSubtotal = () => {
    return cartData.reduce((total, item) => {
      const discountPrice = item.productVariantData[0].originalPrice -
        (item.productVariantData[0].originalPrice * item.productVariantData[0].discountPrice / 100);
      return total + (item.quantity * discountPrice);
    }, 0).toFixed(2);
  };
  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = 40;
    const deliveryCharge = deliveryCharges[selectedDeliveryType] || 0;
    return ((subtotal - appliedDiscount) + tax + deliveryCharge).toFixed(2);
  };
  const handleApplyCoupon = (e) => {
    e.preventDefault();

    if (!couponInput || !selectedCouponId) return;
    const selectedCoupon = couponData.find(coupon => coupon._id === selectedCouponId);

    if (selectedCoupon) {
      setAppliedDiscount(selectedCoupon.offerDiscount);
    }
  };

  const handleDeliverySelection = (type) => {
    setSelectedDeliveryType(type);
  };

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/api/getOrder/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log("response", response.data.order);
        setOrderData(response.data.order);
      } catch (error) {
        console.error('Data fetching failed:', error);
      }
    }
    if (id) fetchOrderData();
  }, [id]);

  return (
    <div>
      <Header />

      {/* **************** Cart Without Address ************* */}
      {cartData.length > 0 ? (
        <section className="mb-5 mt-4 d-non" id="ds_cartsec">
          <div>
            <div className="d_container">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="h2">Cart</h2>
                <Link to={'/wishlist'}>
                  <button className=" ds_with-btn">+Add From Wishlist</button>
                </Link>
              </div>

              <div className="row mt-4" >
                <div className="col-xl-8 col-lg-8 col-md-12">
                  <div>
                    <div className="position-relative" style={{ zIndex: "2" }}>
                      <div className="ds_with-line ds_dashed-border" id="ds_with-line"></div>
                      <div className="ds_with-line2 ds_solid-border " id="ds_with-line2"></div>
                      <div className=" row justify-content-between w-100 m-0">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                          <div className="ds_with-circle text-center ds_cursor" style={{ lineHeight: "35px" }} onClick={() => handleNavAndTabs(1)}>
                            <img src={require("../Img/cart-icon.png")} alt="" />
                          </div>
                          <p className="ds_with-text mt-1 ms-1">Cart</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 p-0 ">
                          <div className="text-center mx-auto">
                            <div className="ds_with-circle d-inline-block m-auto ds_cursor" style={{ lineHeight: "35px" }} onClick={() => handleNavAndTabs(2)}>
                              <img src={require("../Img/order.png")} alt="" />
                            </div>
                            <p className="ds_with-text mt-1">Order Summary</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 p-0 ">
                          <div className="d-flex justify-content-end flex-column align-items-end">
                            <div className="ds_with-circle me-sm-3 ds_cursor" style={{ lineHeight: "35px" }} onClick={() => handleNavAndTabs(3)}>
                              <img src={require("../Img/order.png")} alt="" />
                            </div>
                            <p className="ds_with-text mt-1">Payment</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ------------ Address And Product ----------- */}
                    <div className="d-non" id="ds_product">
                      <div className="mt-3" id="ds_address">
                        <div className="ds_with-shadow">
                          <div className="d-flex justify-content-between align-items-center">
                            {address.length > 0 ? (
                              <div>
                                <p className="ds_add-smart mb-0">
                                  Deliver to: <span className="fw-bold ms-2">{getSelectedAddress()?.name}</span>{" "}
                                  <span className="ds_user-data">{getSelectedAddress()?.addressType}</span>
                                </p>
                                <p className="ds_add-smart mb-0">
                                  {`${getSelectedAddress()?.address},${getSelectedAddress()?.landmark}, ${getSelectedAddress()?.city}, ${getSelectedAddress()?.state}, ${getSelectedAddress()?.pincode}`}</p>
                              </div>
                            ) : (
                              <p className="mb-0 fw-600 ds_add-address">No saved Addresses</p>
                            )}
                            {address.length > 0 ? (
                              <button className="ds_with-add" onClick={() => setShowAddressModal(true)}>
                                Change Address
                              </button>
                            ) : (
                              <button className="ds_with-add" onClick={() => handleOpenModal()}>
                                +Add Address
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="ds_add-auto">
                        <div className="hello">
                          <div className="row mt-5">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                              <div className="form-check">
                                <input className="form-check-input ds_cursor" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Select All
                                </label>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                              <div>
                                <p className="fw-bold" style={{ color: "#6A6A6A" }}>
                                  Product
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                              <div>
                                <p className="fw-bold" style={{ color: "#6A6A6A" }}>
                                  Price
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                              <div>
                                <p className="fw-bold ms-xl-3 ms-4 " style={{ color: "#6A6A6A" }}>
                                  Qty
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 delivery-date-column d-none">
                              <div>
                                <p className="fw-bold" style={{ color: "#6A6A6A" }}>
                                  Delivered By
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                              <div>
                                <p className="fw-bold" style={{ color: "#6A6A6A" }}>
                                  Total
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ds_with-border"></div>
                          <div className="">
                            {cartData.map((item) => {
                              const discountprice = item.productVariantData[0].originalPrice - (item.productVariantData[0].originalPrice * item.productVariantData[0].discountPrice / 100);

                              const deliveryDate = new Date();
                              deliveryDate.setDate(deliveryDate.getDate() + 3);
                              const formattedDate = deliveryDate.toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                              });
                              return (
                                <div className="row mt-4">
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                                    <div className="d-flex align-items-center">
                                      <div>
                                        <input className="form-check-input ds_cursor" type="checkbox" value="" id="flexCheckDefault" />
                                      </div>
                                      <div className="ms-4">
                                        <img src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} className="ds_add-img" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                    <div className="ds_add-body">
                                      <p className="fw-bold mb-0">{item.productData[0].productName}</p>
                                      <p className="ds_mini-text mb-0">{item.productVariantData[0].description}</p>
                                      {/* <p className="ds_add-type mb-0">Light Brown</p>
                                      <p className="ds_add-type">XL</p> */}
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                                    <div>
                                      <p className="fw-600">${discountprice}</p>
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 qty-column">
                                    <div>
                                      <div className="ds_add-count">
                                        <div className="d-flex align-items-center justify-content-between">
                                          {item.quantity === 1 ? (
                                            <i
                                              className="fa-solid fa-trash-can ds_cursor"
                                              onClick={() => handleRemoveItem(item._id)}
                                            ></i>
                                          ) : (
                                            <i
                                              className="fa-solid fa-minus mx-1 ds_cursor"
                                              onClick={() => handleDecreaseQuantity(item._id)}
                                            ></i>
                                          )}
                                          <div className="mx-1">{item.quantity}</div>
                                          <i
                                            className="fa-solid fa-plus mx-1 ds_cursor"
                                            onClick={() => handleIncreaseQuantity(item._id)}
                                          ></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 delivery-date-column d-none">
                                    <div>
                                      <p className="fw-600">{formattedDate}</p>
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                                    <div>
                                      <p className="fw-600">${item.quantity * discountprice}</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ************** Payment With COD ************ */}
                    <div className="mt-2 mb-4 d-none" id="ds_express-card">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-2" onClick={() => handleDeliverySelection('Express')}>
                          <div className={`ds_cod-box ${selectedDeliveryType === 'Express' ? 'selected-delivery' : ''}`}>
                            <div className="d-flex justify-content-between align-items-center px-3">
                              <h6 className="ds_cod-title">Express delivery</h6>
                              <h6 className="ds_cod-title fw-bold" style={{ color: 'black' }}>${deliveryCharges.Express}</h6>
                            </div>
                            <div className="ds_with-border"></div>
                            <div className="px-3 mt-2">
                              <p className="ds_cod-mini mb-0">Same day delivery</p>
                              <p className="ds_cod-mini mb-0">Lorem ipsum dolor sit amet consectetur. </p>
                              <p className="ds_cod-mini mb-0">Lorem ipsum dolor sit amet consectetur. </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-2" onClick={() => handleDeliverySelection('Standard')}>
                          <div className={`ds_cod-box ${selectedDeliveryType === 'Standard' ? 'selected-delivery' : ''}`}>
                            <div className="d-flex justify-content-between align-items-center px-3">
                              <h6 className="ds_cod-title">Standard delivery</h6>
                              <h6 className="ds_cod-title fw-bold" style={{ color: 'black' }}>${deliveryCharges.Standard}</h6>
                            </div>
                            <div className="ds_with-border"></div>
                            <div className="px-3 mt-2">
                              <p className="ds_cod-mini mb-0">Delivered in 1-2 days</p>
                              <p className="ds_cod-mini mb-0">Lorem ipsum dolor sit amet consectetur.</p>
                              <p className="ds_cod-mini mb-0">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-2" onClick={() => handleDeliverySelection('Free')}>
                          <div className={`ds_cod-box ${selectedDeliveryType === 'Free' ? 'selected-delivery' : ''}`}>
                            <div className="d-flex justify-content-between align-items-center px-3">
                              <h6 className="ds_cod-title">Free delivery</h6>
                              <h6 className="ds_cod-title fw-bold" style={{ color: '#03CF18' }}>FREE</h6>
                            </div>
                            <div className="ds_with-border"></div>
                            <div className="px-3 mt-2">
                              <p className="ds_cod-mini mb-0">Delivered in 5-10 days</p>
                              <p className="ds_cod-mini mb-0">Lorem ipsum dolor sit amet consectetur. </p>
                              <p className="ds_cod-mini mb-0">Lorem ipsum dolor sit amet consectetur. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <section className="d-none" id="ds_Nav-Tabs">
                      <div className="ds_cod-main mt-5 ds_cod-bg">
                        <div className="row p-0 m-0" style={{ borderBottom: '1px solid black' }}>
                          {['Pay on Delivery', 'Credit / Debit Card', 'UPI ID', 'Net Banking'].map((paymentType, index) => (
                            <div key={index} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 text-center p-0">
                              <button className={` h-100 ${activeButton === paymentType ? 'ds_cod-on-btn' : 'ds_cod-on-btn-txt'}`} style={{ padding: '13px 0px' }} onClick={() => handlePayment(paymentType)}>
                                {paymentType}
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Pay On Delivery Section */}
                        {activeButton === 'Pay on Delivery' && (
                          <section className="ds_pay-box mt-5">
                            <div className="row justify-content-center mx-xl-0 mx-2">
                              <div className="col-xl-8">
                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 mt-3"></div>
                                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 mt-3">
                                    <p className="ds_pay-text mb-0">Enter the captcha to confirm order.</p>
                                  </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 mt-3">
                                    <img src={require("../Img/captha.png")} alt="" className="ds_cod-cap" />
                                  </div>
                                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 mt-3">
                                    <input type="text" className="ds_cod-input" placeholder="Enter the captcha" />
                                  </div>
                                  <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12 mt-3">
                                    <MdRefresh className="ds_cod-refresh" />
                                  </div>
                                </div>
                                <div className="row mt-5">
                                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12"></div>
                                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                    <button className=" ds_cod-pay" onClick={() => handlePaymentsuccess()}>Pay $ {calculateTotal()}</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        )}

                        {/* Credit / Debit Card Section */}
                        {activeButton === 'Credit / Debit Card' && (
                          <section className="ds_pay-box mt-5">
                            <div className="row justify-content-center mx-xl-0 mx-2">
                              <div className="col-xl-10">
                                <div className="row justify-content-center">
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                                    <input type="text" className="ds_cod-input" placeholder="Enter card holder name" />
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                                    <input type="text" className="ds_cod-input" placeholder="Enter card number" />
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                                    <input type="text" className="ds_cod-input" placeholder="MM/YYYY" />
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                                    <input type="text" className="ds_cod-input" placeholder="Enter CVV" />
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-5">
                                    <button className=" ds_cod-pay" onClick={() => handlePaymentsuccess()}>Pay $ {calculateTotal()}</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        )}

                        {/* UPI ID Section */}
                        {activeButton === 'UPI ID' && (
                          <section className="ds_pay-box mt-5 pt-4">
                            <div className="">
                              <div className="row justify-content-center mx-xl-0 mx-2">
                                <div className="col-xl-10">
                                  <div className="position-relative ds_upi-arrow d-flex">
                                    <input type="text" value={upipayId} onChange={(e) => setUpipayId(e.target.value)} className="ds_upi-input" placeholder="Enter UPI ID" />
                                    <select onChange={(e) => handleDropdownSelect(e.target.value)} className="form-select ds_upi-select">
                                      <option value="@okicici">@okicici</option>
                                      <option value="@oksbi">@oksbi</option>
                                      <option value="@okhdfc">@okhdfc</option>
                                      <option value="@okaxis">@okaxis</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-5 mt-5">
                                  <button className=" ds_cod-pay" onClick={() => handlePaymentsuccess()}>Pay $ {calculateTotal()}</button>
                                </div>
                              </div>
                            </div>
                          </section>
                        )}

                        {/* Net Banking Section */}
                        {activeButton === 'Net Banking' && (
                          <section className="ds_pay-box mt-5 pt-4">
                            <div className="mx-xl-0 mx-2">
                              <div className="row justify-content-center align-items-center">
                                <div className="col-xl-10">
                                  <div className="position-relative">
                                    <input type="text" className="ds_net-input" placeholder="Search your bank" />
                                    <IoSearch className="ds_net-icon" />
                                  </div>
                                  <div className="d-flex flex-wrap justify-content-between align-items-center mt-5">
                                    <div className="text-center">
                                      <img src={require('../Img/city.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">Citi <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/well.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">Wells Fargo <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/capital.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">Capital One <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/td.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">TD <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/city.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">Citi <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/capital.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">Capital One <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/td.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">TD <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/city.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">Citi <br /> Bank</p>
                                    </div>
                                    <div className="text-center">
                                      <img src={require('../Img/well.png')} alt="" className="ds_net-img" />
                                      <p className="ds_net-text">Wells Fargo <br /> Bank</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-5 mt-5">
                                  <button className="ds_cod-pay" onClick={() => handlePaymentsuccess()}>Pay $ {calculateTotal()}</button>
                                </div>
                              </div>
                            </div>
                          </section>
                        )}
                      </div>
                    </section>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div>
                    <div className="ds_with-cupon" id="ds_cupon">
                      <div>
                        <h6 className="ps-3 mb-3 fw-600 ds_add-cupan-txt">
                          Apply Coupon
                        </h6>
                        <div className="ds_with-border"></div>
                      </div>
                      <div>
                        <div className="px-3 mt-3">
                          <form action="" className="position-relative">
                            <img className="ds_add-cupan" src={require("../Img/cupon.png")} alt="" />
                            <input type="text" className="form-control ds_add-input" placeholder="Enter coupon code" value={couponInput} onChange={(e) => setCouponInput(e.target.value)} />
                            <button className=" ds_add-apply" onClick={handleApplyCoupon}>Apply</button>
                          </form>
                        </div>
                      </div>
                      <div className="px-3 mt-3 fw-500">
                        <p className="ds_add-special">Special offers</p>
                        {couponData.map((item) => {
                          return (
                            <div className="form-check d-flex align-items-center mt-3" key={item._id}>
                              <input className="form-check-input ds_cursor" type="radio" name="flexRadioDefault"
                                onClick={() => handleCouponSelect(item.code, item._id)} />
                              <div className="ms-2">
                                <label className="form-check-label fw-bold ds_add-label">
                                  {item.title}
                                </label>
                                <p className="text-muted ds_add-offer-txt mb-0" style={{ lineHeight: "18px" }}>
                                  {item.description}
                                </p>
                                <label className="form-check-label ds_add-save" >
                                  Save ${item.offerDiscount}
                                </label>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="ds_add-order mt-4">
                      <div>
                        <h6 className="h6 ms-3 fw-600 mb-3 ds_add-cupan-txt">
                          Order Details
                        </h6>
                        <div className="ds_with-border"></div>
                      </div>
                      <div className="px-3 mt-3">
                        <div className="d-flex justify-content-between">
                          <p className="ds_add-detail">Sub Total</p>
                          <p className="fw-600 ds_add-price">${calculateSubtotal()}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="ds_add-detail">Coupon & Offers</p>
                          <p className="fw-600 ds_add-color">-${appliedDiscount}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="ds_add-detail">Tax</p>
                          <p className="fw-600 ds_add-price">$40</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="ds_add-detail">Delivery Charge</p>
                          <p className="fw-600 ds_add-color">
                            {selectedDeliveryType ? (
                              selectedDeliveryType === "Free" ? "FREE" : `$${deliveryCharges[selectedDeliveryType]}`
                            ) : "Select Delivery"}
                          </p>
                        </div>
                      </div>
                      <div className="ds_with-border mt-2"></div>
                      <div className="px-3 mt-3">
                        <div className="d-flex justify-content-between">
                          <h5 className="h5 mb-0 ds_add-total">Total Amount</h5>
                          <h5 className="h5 mb-0 ds_add-total">${calculateTotal()}</h5>
                        </div>
                        <button className=" ds_add-proccess mt-5" id="ds_proceed_btn" onClick={handleCheckOut}>
                          Proceed to checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- Women Card --------- */}
            <div className="mt-5" id="ds_women-card">
              <div className="d_container">
                <div>
                  <h5 className="">You may also like</h5>
                  <div className="d_right">
                    <div className="d_trend mt-3">
                      <div className="row gy-4">
                        {productData?.slice(0, 4).map((item) => {
                          const discountAmount = (item.productVariantData[0].originalPrice * item.productVariantData[0].discountPrice) / 100;
                          return (
                            <div key={item._id} className="col-12 col-sm-6 col-lg-6 col-xl-3">
                              <div className="d_box">
                                <Link to={`/product/${item._id}`}>
                                  <div className="d_img">
                                    <img src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} alt="" />
                                    {/* <div className="d_trendicon d-flex justify-content-center align-items-center">
                                    <IoMdHeartEmpty className='d_icon ' />
                                  </div> */}
                                  </div>
                                </Link>
                                <div className="d_content">
                                  <div className='d-flex flex-column h-100'>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="d_name">{item.productName}</div>
                                      <div className='d-flex align-items-center'>
                                        <FaStar className='d_staricon me-1' />
                                        <div className="d_review">{item.ratingData[0]?.rating}</div>
                                      </div>
                                    </div>
                                    <div className="d_desc">{item.productVariantData[0].description}</div>
                                    <div className="d-flex align-items-center justify-content-between mt-auto">
                                      <div className="d-flex align-items-center gap-2">
                                        {item.productVariantData[0].colorName &&
                                          item.productVariantData[0].colorName.split(',').map((color, index) => (
                                            <div
                                              key={index}
                                              style={{ backgroundColor: color, width: '30px', height: '30px', borderRadius: '50%' }}
                                            ></div>
                                          ))}
                                      </div>
                                      <div className="d-flex align-items-end">
                                        <div className="d_price">${(item.productVariantData[0].originalPrice - discountAmount)}</div>
                                        <div className="d_disprice ms-1 text-decoration-line-through">${item.productVariantData[0].originalPrice}</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-5 mb-5 ">
          <div className="d_container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div>
                  <img className="ds_cart-img" src={require("../Img/cart.png")} alt="" />
                  <h4 className="ds_card-title">Your cart is empty!</h4>
                  <p className="ds_card-text">
                    There is nothing in your bag. add some item.
                  </p>
                  <Link to={'/'}>
                    <button className=" ds_cart-btn mt-3">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ************** Address Modal Popup ******************* */}
      <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered className="ds_my-modal  VK_add_address_model_">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="VK_add_address_model_heading">Add Address</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2 py-3">
            <form onSubmit={handleFormSubmit} className="w-100 VK_address_form">
              <div className="VK_name mb-3">
                <span className="VK_input_label pb-1">Name</span>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="VK_from_input w-100 py-2 px-3" placeholder="Enter name" />
              </div>
              <div className="VK_name my-3">
                <span className="VK_input_label pb-1">Contact no.</span>
                <input type="text" name="contactNo" value={formData.contactNo} onChange={handleInputChange} className="VK_from_input w-100 py-2 px-3" placeholder="Enter Contact No." />
              </div>
              <div className="VK_name my-3">
                <span className="VK_input_label pb-1">Building No. / Building Name / Street Name</span>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="VK_from_input w-100 py-2 px-3" placeholder="Enter Building No. / Building Name / Street Name" />
              </div>
              <div className="VK_name my-3">
                <span className="VK_input_label pb-1">Landmark</span>
                <input type="text" name="landmark" value={formData.landmark} onChange={handleInputChange} className="VK_from_input w-100 py-2 px-3" placeholder="Enter Landmark" />
              </div>
              <div className="d-flex flex-sm-nowrap flex-wrap my-3 gap-3">
                <div className="w-100">
                  <span className="VK_input_label pb-1">Pincode</span>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} className="VK_from_input w-100 py-2 px-3" placeholder="Enter Pincode" />
                </div>
                <div className="w-100">
                  <span className="VK_input_label pb-1">State</span>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="VK_from_input w-100 py-2 px-3"
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                    ))}
                  </select>
                </div>
                <div className="w-100">
                  <span className="VK_input_label pb-1">City</span>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="VK_from_input w-100 py-2 px-3"
                    disabled={!formData.state}
                  >
                    <option value="">Select City</option>
                    {cities.map(city => (
                      <option key={city.name} value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="my-4">
                <div className="pb-2">
                  <span className="text-black fw-bold">Address Type</span>
                </div>
                <div className="d-flex VK_edit_radio align-items-center gap-sm-5 gap-2 w-100">
                  <Form.Check type="radio" id="home-radio" label="Home" name="addressType" value="Home" checked={formData.addressType === 'Home'} onChange={handleInputChange} />
                  <Form.Check type="radio" id="work-radio" label="Work" name="addressType" value="Work" checked={formData.addressType === 'Work'} onChange={handleInputChange} />
                  <Form.Check type="radio" id="other-radio" label="Other" name="addressType" value="Other" checked={formData.addressType === 'Other'} onChange={handleInputChange} />
                </div>
              </div>
              <div className="mt-4 text-center">
                <button type="submit" className="VK_add_address_submit">Save</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {/* /* {************** Change Address Popup *******************} */}
      <Modal show={showAddressModal} onHide={() => setShowAddressModal(false)} centered className="s_modal">
        <Modal.Header closeButton>
          <Modal.Title>Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {address.map((item) => (
              <div className="col-xl-6 col-lg-6 col-md-6 mt-md-2 mt-3"
                key={item._id}
                onClick={() => handleAddressSelection(item._id)}
              >
                <div className="ds_change-inner">
                  <div className="d-flex justify-content-between align-items-center px-2 mb-2">
                    <div className="ds_change-box text-center">{item.addressType}</div>
                    {selectedAddressId === item._id && <FaCheckCircle />}
                  </div>
                  <div className="ds_change-line"></div>
                  <div className="px-2">
                    <p className="ds_change-name mb-1 fw-600 mt-2">{item.name}</p>
                    <p className="ds_change-name fw-600">+1 {item.contactNo}</p>
                    <p className="ds_change-add">
                      {`${item.address}, ${item.landmark}, ${item.city}, ${item.state}, ${item.pincode}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* /* {************** Order Conformation *******************} */}
      <section className="d-none" id="ds_order_conformation">
        <div className="d_container">
          <div className="mt-4  mb-5 pb-4">
            <div>
              <h4 className="ds_con-title">Order Details</h4>
              <p className="ds_con-text mt-3">Order placed successfully!</p>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div>
                  <iframe className="ds_con-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.261324736735!2d72.87650904796955!3d21.2068260871905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f76476e9ea7%3A0x361d912920aa035b!2sSilver%20Chowk%2C%20Punagam%20Parmukhpark%20Society%2C%20Yoginagar%20Society%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1730193943220!5m2!1sen!2sin" loading="lazy" ></iframe>
                </div>
                <div className="ds_con-box mt-4">
                  <div>
                    <p className="px-3 fw-600 mt-1">Order details</p>
                    <div className="ds_con-line"></div>
                    <div className="px-3">
                      <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                          <div>
                            <div className="d-flex ">
                              <p className="ds_con-bill-txt ">Order ID:</p>
                              <p className="ds_con-bill-deta text-dark fw-600 text-start" >{orderData[0]?._id}</p>
                            </div>
                            <div className="d-flex ">
                              <p className="ds_con-bill-txt">Order Date:</p>
                              <p className="ds_con-bill-deta text-dark fw-600" >{new Date(orderData[0]?.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}</p>
                            </div>
                            <div className="d-flex ">
                              <p className="ds_con-bill-txt">Payment Method:</p>
                              <p className="ds_con-bill-deta text-dark fw-600" >{orderData[0]?.paymentMethod}<RiArrowDropDownLine /></p>
                            </div>
                            <div className="d-flex  mt-1">
                              <p className="ds_con-bill-txt">Card name</p>
                              <p className="ds_con-bill-deta text-dark fw-600" >VISA</p>
                            </div>
                            <div className="d-flex ">
                              <p className="ds_con-bill-txt">Card no.</p>
                              <p className="ds_con-bill-deta text-dark fw-600" >1234 5678 9123 4567</p>
                            </div>
                            <div className="d-flex ">
                              <p className="ds_con-bill-txt">Card holder name</p>
                              <p className="ds_con-bill-deta text-dark fw-600" >Jhon Wick</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12  mt-3">
                          {console.log("ordeData",orderData.addressData)}
                          
                          <div>
                            <p className="ds_con-bill-txt">Billing Address</p>
                            <p className="ds_con-font text-dark fw-600 " >{orderData.addressData?.name}</p>
                            <p className="ds_con-font text-dark fw-600">{`${orderData?.addressData?.address},${orderData?.addressData?.landmark}, ${orderData?.addressData?.city}, ${orderData?.addressData?.state},  ${orderData?.addressData?.pincode}`}</p>
                            <p className="ds_con-font text-dark fw-600">+1 {orderData.addressData?.contactNo}</p>
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12  mt-3 mb-3">
                          <div>
                            <p className="ds_con-bill-txt">Shipping Address</p>
                            <p className="ds_con-font text-dark fw-600 " >{orderData.addressData?.name}</p>
                            <p className="ds_con-font text-dark fw-600">{`${orderData?.addressData?.address},${orderData?.addressData?.landmark}, ${orderData?.addressData?.city}, ${orderData?.addressData?.state},  ${orderData?.addressData?.pincode}`}</p>
                            <p className="ds_con-font text-dark fw-600">+1 {orderData.addressData?.contactNo}</p>
                            <button className=" ds_con-btn" onClick={handleinvoicenavigate}>View Invoice</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 mt-lg-0 mt-4">
                <div className="ds_con-buy">
                  {orderData.productData}
                  <div className="d-flex justify-content-between px-3">
                    <div>
                      <div className="d-flex">
                        <div>
                          <img src={require("../Img/trade.png")} alt="" />
                        </div>
                        <div className="ms-2">
                          <p className="fw-600 mb-0 ds_con-trade">Traditional</p>
                          <p className="ds_con-trade-text mb-0">Elegant peach color silk chaniya choli</p>
                          <p className="ds_qantity" style={{ color: '#6A6A6ABF' }}>Qty : <span className="fw-600 text-dark">01</span></p>
                        </div>
                      </div>
                    </div>
                    <p className="ds_con-price fw-600">$120</p>
                  </div>

                  <div className="ds_con-line mt-3"></div>

                  <div>
                    <div className="d-flex px-3 mt-3 justify-content-between">
                      <h6 className="ds_con-total">Sub Total</h6>
                      <h6 className="ds_con-total-price text-dark fw-600">$240</h6>
                    </div>
                    <div className="d-flex px-3 mt-3 justify-content-between">
                      <h6 className="ds_con-total">Delivery Charge</h6>
                      <h6 className="ds_con-total-price fw-600" style={{ color: "#03CF18" }}>FREE</h6>
                    </div>
                  </div>
                  <div className="ds_con-dash mt-3"></div>

                  <div className="d-flex justify-content-between px-3 mt-3">
                    <h4 className="ds_con-amount">Total Amount</h4>
                    <h4 className="ds_con-amount">$220</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /* {************** Invoice *******************} */}
      <section className="d-none">
        <div>
          <div className="d_container">
            <div className="mt-4">
              <div className="row justify-content-center">
                <div className="col-xl-8 ">
                  <div className="ds_in-bg">
                    <h5 className="fw-bold">LOGO</h5>
                    <div className="d-flex flex-wrap justify-content-between ">
                      <div className="mt-4">
                        <h5 className="ds_in-name">Jhon Wick</h5>
                        <h6 className="ds_in-email">example@gmail.com</h6>
                        <h6 className="ds_in-email">+1 565 5656 565</h6>
                      </div>
                      <div className="d-flex justify-content-between mt-4 ds_in-flex-manage">
                        <div>
                          <p className="ds_in-text mb-0">Invoice No</p>
                          <p className="ds_in-text mb-0">Invoice Date</p>
                          <p className="ds_in-text mb-0">Order ID</p>
                        </div>
                        <div className="text-end">
                          <p className="ds_in-text mb-0 text-dark fw-500">#123456</p>
                          <p className="ds_in-text mb-0 text-dark fw-500">26/09/2024</p>
                          <p className="ds_in-text mb-0 text-dark fw-500">#1123456789654</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                      <div className="ds_in-border h-100">
                        <p className="ds_in-sold fw-500 mb-2">SOLD BY</p>
                        <p className="ds_in-sold text-dark fw-600 mb-0">COCOBLU RETAIL LIMITED </p>
                        <p className="ds_in-add text-dark fw-400">Renaissance industrial smart city, Kalyan Sape road, Thane, Maharashtra, 421302 IN</p>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                      <div className="ds_in-border h-100">
                        <p className="ds_in-sold fw-500 mb-2">BILLED TO</p>
                        <p className="ds_in-sold text-dark fw-600 mb-0">Alex Shroff </p>
                        <p className="ds_in-add text-dark fw-400">Ehrenkranz 13 Washington Square S , New York , Washington Square , NY 10012 , USA</p>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                      <div className="ds_in-border border-0 h-100">
                        <p className="ds_in-sold fw-500 mb-2">SHIPPED TO</p>
                        <p className="ds_in-sold text-dark fw-600 mb-0">Alex Shroff </p>
                        <p className="ds_in-add text-dark fw-400">Ehrenkranz 13 Washington Square S , New York , Washington Square , NY 10012 , USA</p>
                      </div>
                    </div>

                    <div>
                      <div className="ds_in-line mt-3"></div>
                    </div>

                    <div className="mt-4 ds_table-main">
                      <table>
                        <thead>
                          <tr>
                            <th className="ds_table-th">Item</th>
                            <th className="ds_table-th">Qty.</th>
                            <th className="ds_table-th">Price</th>
                            <th className="ds_table-th">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="ds_table-title">Traditional Chaniya Choli</div>
                              <div className="ds_table-desc">Elegant peach color silk chaniya choli with dupatta & accessories</div>
                            </td>
                            <td className="ds_table-quantity">1</td>
                            <td className="ds_table-price">$120.00</td>
                            <td className="ds_table-price">$120.00</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="ds_table-title">Traditional Chaniya Choli</div>
                              <div className="ds_table-desc">Elegant peach color silk chaniya choli with dupatta & accessories</div>
                            </td>
                            <td className="ds_table-quantity">1</td>
                            <td className="ds_table-price">$120.00</td>
                            <td className="ds_table-price">$120.00</td>
                          </tr>
                        </tbody>
                      </table>



                    </div>

                    <div>
                      <div className="ds_in-line mt-5"></div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between flex-wrap align-items-end ">
                        <div className="mt-4">
                          <h6 className="ds_in-method">Payment Method </h6>
                          <p className="ds_in-name mb-0">Bank Name : Bank Central Asia (BCA)</p>
                          <p className="ds_in-name mb-0">Card No. : 1234 5678 9123 4567</p>
                          <p className="ds_in-name mb-0">Name : Jhon Wick</p>
                        </div>
                        <div className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div>
                              <p className="ds_in-sub">Sub Total</p>
                              <p className="ds_in-sub">Discount</p>
                              <p className="ds_in-sub">SGST</p>
                              <p className="ds_in-sub">CGST</p>
                              <h6 className="ds_in-total">Total Amount</h6>
                            </div>
                            <div className="ms-5">
                              <p className="ds_in-sub fw-600 text-dark">$240.00</p>
                              <p className="ds_in-sub fw-600" style={{ color: "#0F993E" }}>-$40.00</p>
                              <p className="ds_in-sub fw-600 text-dark">$3.50</p>
                              <p className="ds_in-sub fw-600 text-dark">$6.50</p>
                              <h6 className="ds_in-total">$210.00</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <div>
                        <p className="ds_in-thank mb-0">Thank you for shopping with us!</p>
                        <p className="ds_in-thank ">Have a nice day <img src={require("../Img/smile.png")} alt="" /></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="d_invoicefooter">
            <p className="mb-0">If you have any questions, feel free to call customer care at +1 565 5656 565 or use Contact Us section.</p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Cart;
