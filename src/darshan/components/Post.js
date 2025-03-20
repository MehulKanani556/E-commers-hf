import React, { useEffect, useState } from 'react'
import './../css/post.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams();

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [productoffer, setProductOffer] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getProductOfferByMainCategoryId/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // console.log("reposne",response.data.productOffers);
            setProductOffer(response.data.productOffers);
        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, BaseUrl, token]);

    return (
        <>
            {productoffer.length > 0 ? (
                <section className='d_post'>
                    <div className="d_container">
                        <div className="d_margin">
                            <div className="row gy-4">
                                {productoffer.slice(3, 8).map((item) => {
                                    return (
                                        <div key={item.id} className="col-12 col-sm-4 col-lg-3 d_col-20">
                                            <div className="d_box">
                                                <div className="d_img">
                                                    <img src={`${BaseUrl}/${item?.offerImage}`} alt='' />
                                                    <div className="d_text">
                                                        <p className='mb-0'>{item.productData[0]?.productName}</p>
                                                        <div className="d_discounttext">Up to {item.discountPrice}% off</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <></>
            )}

        </>
    )
}

export default Post
