import React from 'react'
import { FaPlus, FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import './../css/Bought.css'
import './../css/trending.css'

const Bought = () => {

    const trendingItems = [
        {
            id: 1,
            image: "itemimg5.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Traditional Chaniya choli",
            rating: 4.5,
            description: "Peach cotton silk chaniya choli",
            colors: [
                { id: 1, color: "#E15939", isActive: true },
                { id: 2, color: "#1D45A9", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 2,
            image: "itemimg6.png",
            isBestSeller: false,
            isNewArrial: false,
            name: "Fun Homes Potli",
            rating: 4.7,
            description: "Velvet Wedding Potli",
            colors: [
                { id: 1, color: "#DDC9AC", isActive: true },
                { id: 2, color: "#000000", isActive: true },
            ],
            price: 250,
            originalPrice: 300
        },
    ];

    return (
        <>

            <section className='d_p-50 py-0 d_trend d_delcard d_bought'>
                <div className="d_container">
                    <div className="d_head px-3 d-flex justify-content-between align-items-center">
                        <h4 className='mb-0'>Frequently bought together</h4>
                    </div>
                    <div className="position-relative">
                        <div className="row gy-4">
                            {trendingItems.map((item, index) => {
                                console.log(item.length)
                                return (
                                    <>
                                        <div key={item.id} className="col-12 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="d_box">
                                                <div className="d_img">
                                                    <img src={require(`./../d_img/${item.image}`)} alt="" />
                                                    {item.isBestSeller &&
                                                        (<div className="d_seller">Best Seller</div>)}
                                                    {item.isNewArrial &&
                                                        (<div className="d_arrival">New Arrival</div>)}
                                                    <div className="d_trendicon d-flex justify-content-center align-items-center">
                                                        <IoMdHeartEmpty className='d_icon ' />
                                                    </div>
                                                </div>
                                                <div className="d_content">
                                                    <div className='d-flex flex-column h-100'>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d_name">{item.name}</div>
                                                            <div className='d-flex align-items-center'>
                                                                <FaStar className='d_staricon me-1' />
                                                                <div className="d_review">{item.rating}</div>
                                                            </div>
                                                        </div>
                                                        <div className="d_desc">{item.description}</div>
                                                        <div className="d-flex align-items-center justify-content-between mt-auto">
                                                            <div className="d-flex align-items-center">
                                                                {item.colors.map((colorobj, i) => {
                                                                    return (
                                                                        <div key={colorobj.id} className={`d_color ${colorobj.isActive ? 'active' : ""}`} style={{ backgroundColor: colorobj.color }}></div>
                                                                    )
                                                                })}
                                                            </div>
                                                            <div className="d-flex align-items-end">
                                                                <div className="d_price">${item.price}</div>
                                                                <div className="d_disprice ms-1 text-decoration-line-through">${item.originalPrice}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {index < trendingItems.length - 1 && (
                                            <div className="m-0 w-auto p-0">
                                                <span className="d_plusbox">
                                                    <FaPlus className="text-white w-100 d_icon" />
                                                </span>
                                            </div>
                                        )}
                                    </>
                                )
                            })}
                            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 text-center align-self-center">
                                <div className="d_boughtbox">
                                    <div className="d_boughttotal"><span>Total Price :</span> $240</div>
                                    <div className="d_cta">
                                        <a href="" className='text-center text-decoration-none d-block'>Add all 2 to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bought
