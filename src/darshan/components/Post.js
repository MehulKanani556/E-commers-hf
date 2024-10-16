import React from 'react'
import './../css/post.css'

const Post = () => {

    const postItems = [
        {
            id: 1,
            image: require('./../d_img/postimg1.png'),
            title: "Designer Sarees",
            discount: "Up to 20% off"
        },
        {
            id: 2,
            image: require('./../d_img/postimg2.png'),
            title: "Designer Gowns",
            discount: "Up to 20% off"
        },
        {
            id: 3,
            image: require('./../d_img/postimg3.png'),
            title: "Short Kurtis",
            discount: "Up to 20% off"
        },
        {
            id: 4,
            image: require('./../d_img/postimg4.png'),
            title: "Long Kurtis",
            discount: "Up to 20% off"
        },
        {
            id: 5,
            image: require('./../d_img/postimg5.png'),
            title: "Premium Lehenga Choli",
            discount: "Up to 20% off"
        }
    ];

    return (
        <>

            <section className='d_post'>
                <div className="d_container">
                    <div className="d_margin">
                        <div className="row gy-4">
                            {postItems.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-12 col-sm-4 col-lg-3 d_col-20">
                                        <div className="d_box">
                                            <div className="d_img">
                                                <img src={item.image} alt="" />
                                                <div className="d_text">
                                                    <p className='mb-0'>{item.title}</p>
                                                    <div className="d_discounttext">{item.discount}</div>
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
