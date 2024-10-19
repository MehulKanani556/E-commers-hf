import React from 'react'
import '../../Component/Electronics/ElectronicPost.css'
const Post = () => {

    const postItems = [
        {
            id: 1,
            image: require('../../assets/five_air.png'),
            title: "Airpods",
            discount: "Up to 20% off"
        },
        {
            id: 2,
            image: require('../../assets/five_smart.png'),
            title: "Smart Watch",
            discount: "Up to 20% off"
        },
        {
            id: 3,
            image: require('../../assets/five_head.png'),
            title: "Headphone",
            discount: "Up to 20% off"
        },
        {
            id: 4,
            image: require('../../assets/five_mac.png'),
            title: "Macbook",
            discount: "Up to 20% off"
        },
        {
            id: 5,
            image: require('../../assets/five_iphone.png'),
            title: "Iphone 15 pro max",
            discount: "Up to 20% off"
        }
    ];

    return (
        <>

            <section className='V_post'>
                <div className="d_container">
                    <div className="V_margin">
                        <div className="row gy-4">
                            {postItems.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-12 col-sm-4 col-lg-3 V_col-20">
                                        <div className="V_box">
                                            <div className="V_img1">
                                                <img src={item.image} alt="" />
                                                <div className="V_text">
                                                    <p className='mb-0'>{item.title}</p>
                                                    <div className="V_discounttext">{item.discount}</div>
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
