// import React, { useEffect, useState } from 'react'
// import { Col, Row } from 'react-bootstrap'
// import Map from '../../../Vivek/Component/Map'
// import { FaRegHeart, FaStar } from 'react-icons/fa'
// import './SportCollection.css'

// const Elecroniccollection = () => {

//     var data = [
//         {
//             compnay: "Run In Pegausus 41",
//             name: "Nike pegausus running shoes for men",
//             colors: [
//                 "#959499", "#6BC89B", "#C796D8", "#6B8AC8"
//             ],
//             rating: 4.5,
//             bestseller: true,
//             price: 120,
//             old_price: 140,
//             image: "run in.png"
//         },
//         {
//             compnay: "Adidas running wear",
//             name: "Daily run 3 stripes leggings",
//             colors: [
//                 "#BF002A", "#6BC89B", "#C796D8", "#6B8AC8"
//             ],
//             rating: 4.5,
//             bestseller: false,
//             price: 120,
//             old_price: 140,
//             image: "adidas running.png"
//         },
//         {
//             compnay: "Nike cortez shoes",
//             name: "Nike cortez textile collection",
//             colors: [
//                 "#353535", "#6BC89B", "#C796D8", "#6B8AC8"
//             ],
//             rating: 4.5,
//             bestseller: true,
//             price: 120,
//             old_price: 140,
//             image: "nike corte.png"
//         },
//         {
//             compnay: "Adidas sportswear",
//             name: "Adizero running singlet for men",
//             colors: ["#E4BE76", "#EC1B1B", "#49C0C0", "#077E35"],
//             rating: 4.5,
//             bestseller: true,
//             price: 120,
//             old_price: 140,
//             image: "addidas.png"
//         },
//         {
//             compnay: "Badminton Kit",
//             name: "BAdminton racquets & kit",
//             colors: [
//                 "#FFFFFF"
//             ],
//             rating: 4.5,
//             bestseller: true,
//             price: 120,
//             old_price: 140,
//             image: "badminton.png"
//         },
//         {
//             compnay: "Football",
//             name: "Football & accessories",
//             colors: [
//                 "#FFFFFF", "#6BC89B", "#C796D8", "#6B8AC8"
//             ],
//             rating: 4.5,
//             bestseller: false,
//             price: 120,
//             old_price: 140,
//             image: "football.png"
//         },
//         {
//             compnay: "Football Shoes",
//             name: "Customized shoes for football",
//             colors: [
//                 "#A0B0C0"
//             ],
//             rating: 4.5,
//             bestseller: false,
//             price: 120,
//             old_price: 140,
//             image: "football23.png"
//         },
//         {
//             compnay: "Puma cricket kit",
//             name: "Puma cricket kit with customization",
//             colors: [
               
//             ],
//             rating: 4.5,
//             bestseller: false,
//             price: 120,
//             old_price: 140,
//             image: "cricket.png"
//         },
//     ]

//     const [electronicProduct, setelectoincproduct] = useState([])

//     useEffect(() => {
//         setelectoincproduct(data)
//     }, []);


//     return (
//         <React.Fragment>
//             <section className='VK_sec_padding'>
//                 <div className='d_container inter p-0'>
//                     <Row className='m-0 mb-4'>
//                         <Col className='d-flex justify-content-between align-items-center'>
//                             <h2 className='section_title m-0'>
//                                 NEW COLLECTION OF ELECTRONICS
//                             </h2>
//                             <p className='m-0 font_14 primary_color white_space fw-500 inter'>
//                                 VIEW ALL
//                             </p>
//                         </Col>
//                     </Row>
//                     <Row className='m-0'>
//                         <Map data={electronicProduct}>
//                             {(item) => (
//                                 <div className='col-xl-3 col-md-4 col-sm-6 my-3 px-4' >
//                                     <div className='VK_shadow VK_ele_card_per'>
//                                         <div>
//                                             <div className='VK_best-seller d-flex'>
//                                                 {
//                                                     item.bestseller ? (
//                                                         <div>
//                                                             <span className='VK_sellter_tag'>
//                                                                 Best Seller
//                                                             </span>
//                                                         </div>
//                                                     ) : (
//                                                         null
//                                                     )
//                                                 }
//                                                 <div className='ms-auto pe-3 mt-1'>
//                                                     <button className='border-0 bg-transparent VK_btn_shadow p-0 rounded-circle VK_wishlist_icn'>
//                                                         <FaRegHeart />
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                             <div className='VK_card_imgs'>
//                                                 <img src={require(`../../assets/${item.image}`)} className='w-100 h-100' alt="" />
//                                             </div>
//                                             <div className='product_desc p-3 '>
//                                                 <div className='d-flex justify-content-between align-items-center'>
//                                                     <div>
//                                                         <h5 className='VK_ele_product_comp fw-600 text-black'>
//                                                             {item.compnay}
//                                                         </h5>
//                                                     </div>
//                                                     <div className='d-flex'>
//                                                         <span className='text-warning pe-2'>
//                                                             <FaStar className='icn' />
//                                                         </span>
//                                                         <span>
//                                                             {item.rating}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className=''>
//                                                     <p className='VK_product_name'>
//                                                         {item.name}
//                                                     </p>
//                                                 </div>
//                                                 <div className='d-flex justify-content-between'>
//                                                     <div className='d-flex gap-1'>
//                                                         {
//                                                             item.colors.map((el, indx) => {
//                                                                 return (
//                                                                     <span className='VK_product_col_dot' style={{ backgroundColor: el }} key={indx}></span>
//                                                                 )
//                                                             })
//                                                         }
//                                                     </div>
//                                                     <div className='d-flex align-items-end'>
//                                                         <p className='fw-bold font_18 m-0 pe-1'>
//                                                             ${item.price}
//                                                         </p>
//                                                         <strike className='light_color'>
//                                                             ${item.old_price}
//                                                         </strike>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </Map>
//                     </Row>
//                 </div>
//             </section>
//         </React.Fragment>
//     )
// }

// export default Elecroniccollection






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
              <h4 className='mb-0'>trending Navratri Collection for you</h4>
              <p className='mb-0'><Link to="" className='text-decoration-none'>View More</Link></p>
            </div>
            <div className="row gy-4">
              {trendingItems.map((item, index) => {
                return (
                  <div key={item.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
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
