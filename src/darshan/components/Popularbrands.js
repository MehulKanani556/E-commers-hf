// import React, { useEffect, useState } from 'react'
// import { Col, Row } from 'react-bootstrap'
// import '../../Parth/Component/Electronics/grid.css'
// import Map from './../../Vivek/Component/Map'
// import axios from 'axios'

// const Popularbrands = () => {

//     const BaseUrl = process.env.REACT_APP_BASEURL;
//     const [popularbarnd, setPopularbrand] = useState([]);

//     let data = [
//         {
//             title: "Women’s Jeans",
//             image: "popular1.png",
//             logo: "zara.png",
//             offer: "Upto 20% OFF"
//         },
//         {
//             title: "Get Your Style.",
//             image: "popular2.png",
//             logo: "calvin.png",
//             offer: "Upto 20% OFF"
//         },
//         {
//             title: "Experience Luxury Every Day",
//             image: "popular3.png",
//             logo: "fossil.png",
//             offer: "Upto 20% OFF"
//         },
//         {
//             title: "Stylish sports apparel for you",
//             image: "popular4.png",
//             logo: "armour.png",
//             offer: "Upto 20% OFF"
//         },
//         {
//             title: "Elegance in every stroke",
//             image: "popular5.png",
//             logo: "sugar.png",
//             offer: "Upto 20% OFF"
//         },
//         {
//             title: "Accessorize Your Life",
//             image: "popular6.png",
//             logo: "swarovski.png",
//             offer: "Upto 20% OFF"
//         },
//         {
//             title: "Walk with Confidence",
//             image: "popular7.png",
//             logo: "bata.png",
//             offer: "Upto 20% OFF"
//         },
//     ]

//     let cnt = 1

//     const fetchPopularbrand = async () => {
//         try {
//             const response = await axios.get(`${BaseUrl}/api/getAllBrands`);
//             setPopularbrand(response?.data?.popularBrand)
//             // console.log(response?.data?.popularBrand)
//         } catch (error) {
//             console.error("Error fetching brand data:", error);
//         }
//     }

//     useEffect(() => {
//         // setgridview(data)
//         fetchPopularbrand()
//     }, []);

//     return (

//         <React.Fragment>
//             <section className='d_p-80'>
//                 <div className='d_container'>
//                     <Row className='m-0 mb-4'>
//                         <Col className='p-0'>
//                             <h2 className='section_title text-uppercase m-0'>
//                                 Explore Popular Brands
//                             </h2>
//                         </Col>
//                     </Row>
//                     <Row className='m-0'>
//                         <Col className='p-0'>
//                             <div>
//                                 <div className="parent">
//                                     {popularbarnd.map((item) => (
//                                         <div className={`div${cnt++} VK_grid_parent`}>
//                                             <img src={`${BaseUrl}/${item?.brandImage}`} className='w-100 h-100 object_center' alt="" />
//                                             <div className='VK_grid_child'>
//                                                 <div className='h-100 d-flex flex-column'>
//                                                     <div className='d-flex'>
//                                                         <div className='VK_grid_logo text-center'>
//                                                             <img src={`${BaseUrl}/${item?.brandLogo}`}className='mv_brand_logo_img' alt="" />
//                                                             <p className='m-0 text-white font_12 mt-2'>
//                                                                 {item.offer}
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                     <div className='mt-auto'>
//                                                         <h4 className='VK_pro_heading'>
//                                                             {item.title}
//                                                         </h4>
//                                                         <div>
//                                                             <button className='VK_pro_button'>
//                                                                 Go to Collection
//                                                             </button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </div>
//             </section>
//         </React.Fragment>
//     )
// }

// export default Popularbrands



import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../../Parth/Component/Electronics/grid.css'
import Map from './../../Vivek/Component/Map'
import axios from 'axios'

const Popularbrands = () => {
    const navigate = useNavigate();
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [popularbarnd, setPopularbrand] = useState([]);

    let cnt = 1

    const fetchPopularbrand = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getAllBrands`);
            setPopularbrand(response?.data?.popularBrand)
        } catch (error) {
            console.error("Error fetching brand data:", error);
        }
    }

    useEffect(() => {
        fetchPopularbrand()
    }, []);

    // Handle navigation to products page with brand ID
    const handleGoToCollection = (brandId, brandName) => {
        navigate(`/products/${brandId}`, { state: { brandName } });
    }

    return (
        <React.Fragment>
            <section className='d_p-80'>
                <div className='d_container'>
                    <Row className='m-0 mb-4'>
                        <Col className='p-0'>
                            <h2 className='section_title text-uppercase m-0'>
                                Explore Popular Brands
                            </h2>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Col className='p-0'>
                            <div>
                                <div className="parent">
                                    {popularbarnd.map((item) => (
                                        <div key={item._id} className={`div${cnt++} VK_grid_parent`}>
                                            <img src={`${BaseUrl}/${item?.brandImage}`} className='w-100 h-100 object_center' alt="" />
                                            <div className='VK_grid_child'>
                                                <div className='h-100 d-flex flex-column'>
                                                    <div className='d-flex'>
                                                        <div className='VK_grid_logo text-center'>
                                                            <img src={`${BaseUrl}/${item?.brandLogo}`} className='mv_brand_logo_img' alt="" />
                                                            <p className='m-0 text-white font_12 mt-2'>
                                                                {item.offer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='mt-auto'>
                                                        <h4 className='VK_pro_heading'>
                                                            {item.title}
                                                        </h4>
                                                        <div>
                                                            <button 
                                                                className='VK_pro_button'
                                                                onClick={() => handleGoToCollection(item._id, item.brandName)}
                                                            >
                                                                Go to Collection
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Popularbrands