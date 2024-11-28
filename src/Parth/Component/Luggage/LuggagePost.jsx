import React from 'react'
import '../Electronics/ElectronicPost.css'

const Post = () => {

    const postItems = [
        {
            id: 1,
            image: require('../../assets/Louis Vuiton Backpack.png'),
            title: "Louis Vitton Bag",
            discount: "Up to 20% off"
        },
        {
            id: 2,
            image: require('../../assets/Adidas Backpack.png'),
            title: "Adidas handbag",
            discount: "Up to 20% off"
        },
        {
            id: 3,
            image: require('../../assets/Louise vuiton.png'),
            title: "Louis Vitton bag",
            discount: "Up to 20% off"
        },
        {
            id: 4,
            image: require('../../assets/elegent.png'),
            title: "Elegant sport shoes",
            discount: "Up to 20% off"
        },
        {
            id: 5,
            image: require('../../assets/traditional.png'),
            title: "Traditional Bag",
            discount: "Up to 20% off"
        }
    ];

    return (
        <>

            <section className='V_poste'>
                <div className="d_container">
                    <div className="V_margin">
                        <div className="row gy-4">
                            {postItems.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-12 col-sm-4 col-lg-3 V_col-20e">
                                        <div className="V_boxe">
                                            <div className="V_img1e">
                                                <img src={item.image} alt="" />
                                                <div className="V_texte">
                                                    <p className='mb-0'>{item.title}</p>
                                                    <div className="V_discounttexte">{item.discount}</div>
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
