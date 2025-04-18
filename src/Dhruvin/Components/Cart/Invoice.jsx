import React, { useEffect, useState } from 'react'
import './../Css/Cart.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Invoice = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const { id } = useParams();
    // console.log("id",id);

    const [orderData, setOrderData] = useState();
    
    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getOrder/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // console.log("response", response.data);
                setOrderData(response.data.order[0]);
                // console.log("addressData", response.data.order[0].addressData);

            } catch (error) {
                console.error('Data fetching failed:', error);
            }
        }
        if (id) fetchOrderData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, BaseUrl, token]);

    // Add this before the return statement in your component
    const calculateSubtotal = () => {
        // console.log("ordedata",orderData);

        return orderData?.items.reduce((total, item, index) => {
            const price = orderData?.productVariantData[index]?.originalPrice -
                (orderData?.productVariantData[index]?.originalPrice *
                    orderData?.productVariantData[index]?.discountPrice / 100);
            return total + (price * item.quantity);
        }, 0) || 0;
    };

    const subtotal = calculateSubtotal();
    const sgstRate = 0.015; // 1.5%
    const cgstRate = 0.025; // 2.5%
    const sgstAmount = subtotal * sgstRate;
    const cgstAmount = subtotal * cgstRate;
    const totalAmount = subtotal + sgstAmount + cgstAmount;

    return (
        <>

            <section className="d-non">
                <div>
                    <div className="d_container">
                        <div className="mt-4">
                            <div className="row justify-content-center">
                                <div className="col-xl-8 ">
                                    <div className="ds_in-bg">
                                        <h5 className="fw-bold">LOGO</h5>
                                        <div className="d-flex flex-wrap justify-content-between ">
                                            <div className="mt-4">
                                                <h5 className="ds_in-name">{orderData?.userData?.[0].name}</h5>
                                                <h6 className="ds_in-email">{orderData?.userData?.[0].email}</h6>
                                                <h6 className="ds_in-email">+1 {orderData?.userData?.[0].mobileNo}</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4 ds_in-flex-manage">
                                                <div>
                                                    <p className="ds_in-text mb-0">Invoice No</p>
                                                    <p className="ds_in-text mb-0">Invoice Date</p>
                                                    <p className="ds_in-text mb-0">Order ID</p>
                                                </div>
                                                <div className="text-end">
                                                    <p className="ds_in-text mb-0 text-dark fw-500">#123456</p>
                                                    <p className="ds_in-text mb-0 text-dark fw-500">{new Date(orderData?.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}</p>
                                                    <p className="ds_in-text mb-0 text-dark fw-500">{orderData?._id}</p>
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
                                                <p className="ds_in-sold text-dark fw-600 mb-0">{orderData?.addressData[0]?.name}</p>
                                                <p className="ds_in-add text-dark fw-400">{orderData?.addressData[0] &&
                                                    `${orderData.addressData[0].address}, ${orderData.addressData[0].landmark}, 
                                                        ${orderData.addressData[0].city}, ${orderData.addressData[0].state}, 
                                                        ${orderData.addressData[0].pincode}`
                                                }</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                                            <div className="ds_in-border border-0 h-100">
                                                <p className="ds_in-sold fw-500 mb-2">SHIPPED TO</p>
                                                <p className="ds_in-sold text-dark fw-600 mb-0">{orderData?.addressData[0]?.name}</p>
                                                <p className="ds_in-add text-dark fw-400">{orderData?.addressData[0] &&
                                                    `${orderData.addressData[0].address}, ${orderData.addressData[0].landmark}, 
                                                    ${orderData.addressData[0].city}, ${orderData.addressData[0].state}, 
                                                    ${orderData.addressData[0].pincode}`
                                                }</p>
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
                                                    {orderData?.productData?.map((product, index) => (
                                                        <tr key={product._id}>
                                                            <td>
                                                                <div className="ds_table-title">{product.productName}</div>
                                                                <div className="ds_table-desc">{orderData?.productVariantData[index]?.shortDescription}</div>
                                                            </td>
                                                            <td className="ds_table-quantity">{orderData?.items[index]?.quantity}</td>
                                                            <td className="ds_table-price"> ${orderData?.productVariantData[index]?.originalPrice &&
                                                                (orderData.productVariantData[index].originalPrice -
                                                                    (orderData.productVariantData[index].originalPrice *
                                                                        orderData.productVariantData[index].discountPrice / 100))}</td>
                                                            <td className="ds_table-price"> ${(orderData?.productVariantData[index]?.originalPrice &&
                                                                (orderData.productVariantData[index].originalPrice -
                                                                    (orderData.productVariantData[index].originalPrice *
                                                                        orderData.productVariantData[index].discountPrice / 100)) *
                                                                orderData?.items[index]?.quantity).toFixed(2)}</td>
                                                        </tr>
                                                    ))}
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
                                                            {/* <p className="ds_in-sub">Discount</p> */}
                                                            <p className="ds_in-sub">SGST</p>
                                                            <p className="ds_in-sub">CGST</p>
                                                            <h6 className="ds_in-total">Total Amount</h6>
                                                        </div>
                                                        <div className="ms-5">
                                                            <p className="ds_in-sub fw-600 text-dark">${subtotal.toFixed(2)}</p>
                                                            {/* <p className="ds_in-sub fw-600" style={{ color: "#0F993E" }}>-$40.00</p> */}
                                                            <p className="ds_in-sub fw-600 text-dark">${sgstAmount.toFixed(2)}</p>
                                                            <p className="ds_in-sub fw-600 text-dark">${cgstAmount.toFixed(2)}</p>
                                                            <h6 className="ds_in-total">${totalAmount.toFixed(2)}</h6>
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

        </>
    )
}

export default Invoice;