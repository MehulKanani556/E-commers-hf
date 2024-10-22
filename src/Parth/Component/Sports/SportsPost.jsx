import React from 'react'
import '../Sports/SportsPost.css'

const Post = () => {

    const postItems = [
        {
            id: 1,
            image: require('../../assets/soccer.png'),
            title: "Football & Accessories",
            discount: "Up to 20% off"
        },
        {
            id: 2,
            image: require('../../assets/basketball.png'),
            title: "Basketball",
            discount: "Up to 20% off"
        },
        {
            id: 3,
            image: require('../../assets/table tennis.png'),
            title: "Table tennis set",
            discount: "Up to 20% off"
        },
        {
            id: 4,
            image: require('../../assets/playing basketball.png'),
            title: "Basketball",
            discount: "Up to 20% off"
        },
        {
            id: 5,
            image: require('../../assets/ice hockey.png'),
            title: "Ice Hockey",
            discount: "Up to 20% off"
        }
    ];

    return (
        <>

            <section className='V_posts'>
                <div className="d_container">
                    <div className="V_margin">
                        <div className="row gy-4">
                            {postItems.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-12 col-sm-4 col-lg-3 V_col-20s">
                                        <div className="V_boxs">
                                            <div className="V_img1s">
                                                <img src={item.image} alt="" />
                                                <div className="V_texts">
                                                    <p className='mb-0'>{item.title}</p>
                                                    <div className="V_discounttexts">{item.discount}</div>
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
