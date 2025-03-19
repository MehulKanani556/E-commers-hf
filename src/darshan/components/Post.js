import React, { useEffect, useState } from 'react'
import './../css/post.css'
import axios from 'axios'

const Post = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [productoffer, setProductOffer] = useState([]);

    const postItems = [
        {
            id: 1,
            image: "postimg1.png",
            title: "Designer Sarees",
            discount: "Up to 20% off"
        },
        {
            id: 2,
            image: "postimg2.png",
            title: "Designer Gowns",
            discount: "Up to 20% off"
        },
        {
            id: 3,
            image: "postimg3.png",
            title: "Short Kurtis",
            discount: "Up to 20% off"
        },
        {
            id: 4,
            image: "postimg4.png",
            title: "Long Kurtis",
            discount: "Up to 20% off"
        },
        {
            id: 5,
            image: "postimg5.png",
            title: "Premium Lehenga Choli",
            discount: "Up to 20% off"
        }
    ];

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allProductOffer`);
            console.log("reposne",response.data);
            setProductOffer(response.data.productOffer);
        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>

            <section className='d_post'>
                <div className="d_container">
                    <div className="d_margin">
                        <div className="row gy-4">
                            {productoffer.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-12 col-sm-4 col-lg-3 d_col-20">
                                        <div className="d_box">
                                            <div className="d_img">
                                                <img src={`${BaseUrl}/${item?.offerImage}`} />
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

        </>
    )
}

export default Post
