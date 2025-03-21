import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

import './../css/trending.css'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Trending = () => {

  const { id } = useParams();

  const BaseUrl = process.env.REACT_APP_BASEURL;
  const token = localStorage.getItem('token');

  const [isSelectedwishlist, setIsSelectedWishlist] = useState([]);
  const [data, setData] = useState([]);

  const handleClickwishlist = (item) => {
    setIsSelectedWishlist(prev => {
      if (prev.includes(item.id)) {
        return prev.filter(itemId => itemId !== item.id);
      } else {
        return [...prev, item.id];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/api/tredingProducts/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        // console.log("resposnse", response.data.trendingProducts);
        setData(response.data.trendingProducts);
      } catch (error) {
        console.error('Data fetching failed:', error);
      }
    }
    fetchData();
  }, [id, BaseUrl, token]);

  return (
    <>
      {data.length > 0 ? (
        <section className='d_p-80 d_trend'>
          <div className="d_container">
            <div className="d_margin">
              <div className="d_head d-flex justify-content-between align-items-center">
                <h4 className='mb-sm-0 mb-1'>trending Collection for you</h4>
                <p className='mb-0'><Link to="/womenstore" className='text-decoration-none'>View More</Link></p>
              </div>
              <div className="row gy-xl-4 gy-4">
                {data.map((item) => {
                  const variantData = item.productVariantData[0];
                  const productDetails = item.productDetails;

                  return (
                    <div key={item.productId || item._id} className="col-12 col-sm-6 col-lg-4 col-xl-3 px-2">
                      <Link to='/womendetails'>
                        <div className="d_box mx-2">
                          <div className="d_img">
                            <img src={`${BaseUrl}/${variantData.images[0]}`} alt="" />
                            {productDetails?.stockStatus === "In Stock" && (
                              <div className="d_seller">Best Seller</div>
                            )}
                            <div className="d_trendicon d-flex justify-content-center align-items-center d_cur" onClick={() => handleClickwishlist(item)}>
                              {isSelectedwishlist.includes(item.productId || item._id) ?
                                <IoMdHeart className='d_icon' style={{ color: 'red' }} /> :
                                <IoMdHeartEmpty className='d_icon' style={{ color: '#6a6a6a' }} />}
                            </div>
                          </div>
                          <div className="d_content">
                            <div className='d-flex flex-column h-100'>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d_name">{productDetails?.productName}</div>
                                <div className='d-flex align-items-center'>
                                  <FaStar className='d_staricon me-1' />
                                  <div className="d_review">0</div>
                                </div>
                              </div>
                              <div className="d_desc">{variantData?.shortDescription}</div>
                              <div className="d-flex align-items-center justify-content-between mt-auto">
                                <div className="d-flex align-items-center">
                                  {variantData?.colorName?.split(',').map((color, i) => (
                                    <div key={i} className={`d_color ${i === 0 ? 'active' : ""}`} style={{ backgroundColor: color }}></div>
                                  ))}
                                </div>
                                <div className="d-flex align-items-end">
                                  <div className="d_price">
                                    {variantData?.originalPrice && variantData?.discountPrice
                                      ? ` ${variantData.originalPrice - variantData.discountPrice}`
                                      : "0"}
                                  </div>

                                  <div className="d_disprice ms-1 text-decoration-line-through">${variantData?.originalPrice}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>)}

    </>
  )
}

export default Trending
