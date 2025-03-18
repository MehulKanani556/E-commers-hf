import React, { useEffect, useState } from 'react'
import './../css/card.css'
import axios from 'axios'

const Card = () => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [card, setCard] = useState([]);

    const formatImagePath = (path) => {
        if (!path) return '';
        
        let formattedPath = path.replace(/^public\\/, '').replace(/\\/g, '/');
        
        if (!formattedPath.startsWith('http')) {
            formattedPath = `${BaseUrl}/public/${formattedPath}`;
        }
        
        return formattedPath;
    };

    const fetchBrandData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getAllOffers`);
            // console.log("data", response?.data);
            setCard(response?.data?.offers);
        } catch (error) {
            console.error("Error fetching offers:", error);
        }
    }

    useEffect(() => {
        fetchBrandData();
    }, []);

    return (
        <>
            <section className='d_p-80'>
                <div className="container-fluid">
                    <div className="row gy-1">
                        {card.map((card) => (
                            <div key={card.id} className="col-12 col-sm-6 col-lg-4">
                                <div className="d_card">
                                    <div
                                        className={`${card.className || ''} d_cardimg d-flex align-items-center mv_offer_bg_img`}
                                        style={{ backgroundImage: `url(${formatImagePath(card.offerImage)})` }}
                                    >
                                        <div className="d_title">
                                            <h5 className='mb-0' dangerouslySetInnerHTML={{ __html: card.offerName }}></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card