import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

import '../../../darshan/css/trending.css';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Trending = () => {

  const trendingItems = [
    {
      id: 1,
      image: "run in.png",
      isBestSeller: true,
      name: "RUN IN PEGAUSUS 41",
      rating: 4.5,
      description: "Nike pegausus running shoes for men",
      colors: [
        { id: 1, color: "#959499", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 120,
      originalPrice: 140
    },
    {
      id: 2,
      image: "adidas running.png",
      isBestSeller: false,
      name: "ADIDAS RUNNING WEAR",
      rating: 4.5,
      description: "Daily run 3 stripes leggings",
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
      id: 3,
      image: "nike corte.png",
      isBestSeller: true,
      name: "NIKE CORTEZ SHOES",
      rating: 4.7,
      description: "Nike cortez textile collection",
      colors: [
        { id: 1, color: "#353535", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 250,
      originalPrice: 300
    },
    {
      id: 4,
      image: "addidas.png",
      isBestSeller: true,
      name: "ADIDAS SPORTSWEAR",
      rating: 4.7,
      description: "Adizero running singlet for men",
      colors: [
        { id: 1, color: "#E4BE76", isActive: true },
        { id: 2, color: "#EC1B1B", isActive: false },
        { id: 3, color: "#49C0C0", isActive: false },
        { id: 4, color: "#077E35", isActive: false }
      ],
      price: 250,
      originalPrice: 300
    },
    {
      id: 5,
      image: "badminton.png",
      isBestSeller: true,
      name: "BADMINTON KIT",
      rating: 4.5,
      description: "BAdminton racquets & kit",
      colors: [
        { id: 1, color: "#FFFFFF", isActive: true },
      ],
      price: 250,
      originalPrice: 300
    },
    {
      id: 6,
      image: "football.png",
      isBestSeller: false,
      name: "FOOTBALL",
      rating: 4.5,
      description: "Football & accessories",
      colors: [
        { id: 1, color: "#FFFFFF", isActive: true },
        { id: 2, color: "#6BC89B", isActive: false },
        { id: 3, color: "#C796D8", isActive: false },
        { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 120,
      originalPrice: 140
    },
    {
      id: 7,
      image: "football23.png",
      isBestSeller: false,
      name: "FOOTBALL SHOSE",
      rating: 4.5,
      description: "Customized shoes for football",
      colors: [
        { id: 1, color: "#A0B0C0", isActive: true },
      ],
      price: 120,
      originalPrice: 140
    },
    {
      id: 8,
      image: "cricket.png",
      isBestSeller: true,
      name: "PUMA CRICKET KIT",
      rating: 4.5,
      description: "Puma cricket kit with customization",
      colors: [
        // { id: 1, color: "#FF5C75", isActive: true },
        // { id: 2, color: "#6BC89B", isActive: false },
        // { id: 3, color: "#C796D8", isActive: false },
        // { id: 4, color: "#6B8AC8", isActive: false }
      ],
      price: 120,
      originalPrice: 140
    },
  ];

  const [isSelectedwishlist, setIsSelectedWishlist] = useState([]);

  const handleClickwishlist = (item) => {
    setIsSelectedWishlist(prev => {
      if (prev.includes(item.id)) {
        return prev.filter(itemId => itemId !== item.id);
      } else {
        return [...prev, item.id];
      }
    });
  };



  return (
    <>

      <section className='d_p-80 d_trend'>
        <div className="d_container">
          <div className="d_margin">
            <div className="d_head d-flex justify-content-between align-items-center">
              <h4 className='mb-sm-0 mb-1'>new collection of sport & accessories</h4>
              <p className='mb-0'><Link to="" className='text-decoration-none'>View More</Link></p>
            </div>
            <div className="row gy-xl-4 gy-4">
              {trendingItems.map((item, index) => {
                return (
                  <div key={item.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 px-2">
                    <div className="d_box mx-2">
                      <div className="d_img">
                        <img src={require(`../../assets/${item.image}`)} alt="" />
                        {item.isBestSeller &&
                          (<div className="d_seller">Best Seller</div>)}
                        <div className="d_trendicon d-flex justify-content-center align-items-center d_cur" onClick={() => handleClickwishlist(item)}>
                          {isSelectedwishlist.includes(item.id) ? <IoMdHeart className='d_icon' style={{ color: 'red' }} /> : <IoMdHeartEmpty className='d_icon' style={{ color: '#6a6a6a' }} />}
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
