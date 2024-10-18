import React from 'react'
import { FaStar } from "react-icons/fa";

import './../css/trending.css'
import { IoMdHeartEmpty } from 'react-icons/io';

const Trending = () => {

  const trendingItems = [
    {
      id: 1,
      image: "trend1.png",
      isBestSeller: true,
      name: "Traditional Chaniya choli",
      rating: 4.5,
      description: "Magenta cotton silk chaniya choli",
      colors: [
        { id: 1, color: "#BF002A", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 120,
      originalPrice: 140
    },
    {
      id: 2,
      image: "trend2.png",
      isBestSeller: false,
      name: "Traditional Chaniya choli",
      rating: 4.7,
      description: "Blue prinetd chaniya choli with dupatta",
      colors: [
        { id: 1, color: "#BF002A", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 250,
      originalPrice: 300
    },
    {
      id: 3,
      image: "trend3.png",
      isBestSeller: true,
      name: "Traditional Chaniya choli",
      rating: 4.7,
      description: "Mustard yellow cotton silk chaniya choli",
      colors: [
        { id: 1, color: "#FFB804", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 250,
      originalPrice: 300
    },
    {
      id: 4,
      image: "trend4.png",
      isBestSeller: true,
      name: "Traditional Chaniya choli",
      rating: 4.7,
      description: "Black cotton silk chaniya choli for navratri",
      colors: [
        { id: 1, color: "#272629", isActive: true },
        { id: 2, color: "#EC1B1B", isActive: false },
        { id: 3, color: "#49C0C0", isActive: false },
        { id: 4, color: "#077E35", isActive: false }
      ],
      price: 250,
      originalPrice: 300
    },
    {
      id: 5,
      image: "trend5.png",
      isBestSeller: true,
      name: "Traditional Chaniya choli",
      rating: 4.5,
      description: "Cotton silk multi color chaniya choli",
      colors: [
        { id: 1, color: "#FFFFFF", isActive: true },
      ],
      price: 250,
      originalPrice: 300
    },
    {
      id: 6,
      image: "trend6.png",
      isBestSeller: true,
      name: "Traditional Chaniya choli",
      rating: 4.5,
      description: "Newest aqua cotton silk chaniya choli",
      colors: [
        { id: 1, color: "#006F98", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 120,
      originalPrice: 140
    },
    {
      id: 7,
      image: "trend7.png",
      isBestSeller: true,
      name: "Traditional Chaniya choli",
      rating: 4.5,
      description: "Beautiful black cotton silk chaniya choli",
      colors: [
        { id: 1, color: "#333031", isActive: true },
      ],
      price: 120,
      originalPrice: 140
    },
    {
      id: 8,
      image: "trend8.png",
      isBestSeller: true,
      name: "Traditional Chaniya choli",
      rating: 4.5,
      description: "Elegant pink cotton silk chaniya choli",
      colors: [
        { id: 1, color: "#FF5C75", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 120,
      originalPrice: 140
    },
  ];

  return (
    <>

      <section className='d_p-80 d_trend'>
        <div className="d_container">
          <div className="d_margin">
            <div className="d_head d-flex justify-content-between align-items-center">
              <h4 className='mb-0'>trending Navratri Collection for you</h4>
              <p className='mb-0'><a href="" className='text-decoration-none'>View More</a></p>
            </div>
            <div className="row gy-4">
              {trendingItems.map((item, index) => {
                return (
                  <div key={item.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="d_box mx-2">
                      <div className="d_img">
                        <img src={require(`./../d_img/${item.image}`)} alt="" />
                        {item.isBestSeller &&
                          (<div className="d_seller">Best Seller</div>)}
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
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Trending
