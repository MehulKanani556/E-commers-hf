import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import './../css/trending.css';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Trending = () => {
  const { id } = useParams();
  const BaseUrl = process.env.REACT_APP_BASEURL;
  const token = localStorage.getItem('token');

  const [isSelectedwishlist, setIsSelectedWishlist] = useState([]);
  const [data, setData] = useState([]);

  // Function to fetch wishlist data from server
  const fetchWishlist = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/getMyWishList`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const wishlistIds = response.data.wishlist.map(item => item.productId || item._id);
      setIsSelectedWishlist(wishlistIds);
      localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  // Function to sync wishlist with localStorage
  const syncWishlistWithLocalStorage = () => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (JSON.stringify(storedWishlist) !== JSON.stringify(isSelectedwishlist)) {
      setIsSelectedWishlist(storedWishlist);
    }
  };

  // Initial fetch of wishlist data
  useEffect(() => {
    fetchWishlist();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [BaseUrl, token]);

  // Listen for custom event from Wishlist component
  useEffect(() => {
    const handleWishlistUpdate = () => {
      syncWishlistWithLocalStorage();
    };

    // Add event listeners
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    window.addEventListener('storage', (e) => {
      if (e.key === 'wishlist') {
        handleWishlistUpdate();
      }
    });

    // Set up interval to check for changes
    const intervalId = setInterval(syncWishlistWithLocalStorage, 1000);

    // Clean up
    return () => {
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
      window.removeEventListener('storage', handleWishlistUpdate);
      clearInterval(intervalId);
    };
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelectedwishlist]);

  // Fetch trending products data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/api/tredingProducts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("response-------",response.data);
        setData(response.data.trendingProducts);
      } catch (error) {
        console.error('Data fetching failed:', error);
      }
    };
    fetchData();
  }, [id, BaseUrl, token]);

  const handleClickwishlist = async (item, e) => {
    e.preventDefault();
    const itemId = item.productId || item._id;

    try {
      if (isSelectedwishlist.includes(itemId)) {
        // Find the actual wishlist item ID for deletion
        const response = await axios.get(`${BaseUrl}/api/getMyWishList`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        // Find the wishlist entry that matches this product ID
        const wishlistEntry = response.data.wishlist.find(
          entry => (entry.productId || entry._id) === itemId
        );

        if (wishlistEntry) {
          // Remove from wishlist on the server
          await axios.delete(`${BaseUrl}/api/deleteWishList/${wishlistEntry._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
        }

        // Update local state
        setIsSelectedWishlist(prev => {
          const updatedWishlist = prev.filter(id => id !== itemId);
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

          // Notify other components
          window.dispatchEvent(new CustomEvent('wishlistUpdated'));

          return updatedWishlist;
        });
      } else {
        // Add to wishlist on the server
        await axios.post(`${BaseUrl}/api/createWishList`, {
          productId: itemId,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        // Update local state
        setIsSelectedWishlist(prev => {
          const updatedWishlist = [...prev, itemId];
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

          // Notify other components
          window.dispatchEvent(new CustomEvent('wishlistUpdated'));

          return updatedWishlist;
        });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <>
      {data.length > 0 && (
        <section className='d_p-80 d_trend'>
          <div className="d_container">
            <div className="d_margin">
              <div className="d_head d-flex justify-content-between align-items-center">
                <h4 className='mb-sm-0 mb-1'>Trending Collection for you</h4>

                <p className='mb-0'><Link to="/womenstore" className='text-decoration-none'>View More</Link></p>
              </div>
              <div className="row gy-xl-4 gy-4">
                {data.map((item) => {
                  const variantData = item.productVariantData[0];
                  const productDetails = item.productDetails;
                  const itemId = item.productId || item._id;

                  return (
                    <div key={itemId} className="col-12 col-sm-6 col-lg-4 col-xl-3 px-2">
                      <Link to={`/womendetails/${data[0].productId}`} state={{ mainCategoryId: item.mainCategoryId }}>
                        <div className="d_box mx-2">
                          <div className="d_img">
                            <img src={`${BaseUrl}/${variantData.images[0]}`} alt="" />
                            {productDetails?.stockStatus === "In Stock" && (
                              <div className="d_seller">Best Seller</div>
                            )}
                            <div
                              className="d_trendicon d-flex justify-content-center align-items-center d_cur"
                              onClick={(e) => handleClickwishlist(item, e)}
                            >
                              {isSelectedwishlist.includes(itemId) ?
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
                                    ${variantData && variantData.originalPrice && variantData.discountPrice
                                      ? (variantData.originalPrice - (variantData.originalPrice * variantData.discountPrice) / 100)
                                      : '0'}
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
      )}
    </>
  )
}

export default Trending;