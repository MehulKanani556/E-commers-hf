import React, { useEffect, useState } from 'react'
import './../css/card.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Card = () => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const { id } = useParams();
    const [card, setCard] = useState([]);

    const formatImagePath = (path) => {
        if (!path) return '';

        let formattedPath = path.replace(/\\/g, '/');
        return formattedPath;
    };

    const fetchBrandData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getProductOfferByMainCategoryId/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // console.log("data", response?.data.productOffers);
            setCard(response?.data.productOffers);
        } catch (error) {
            console.error("Error fetching offers:", error);
        }
    }

    useEffect(() => {
        fetchBrandData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, BaseUrl, token]);

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const opacity = Math.random() * 0.1 + 0.1; // Random value between 0.5 and 1
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return (
        <>
            {card.length > 0 ? (
                <section className='d_p-80'>
                    <div className="container-fluid">
                        <div className="row gy-1">
                            {card.slice(0, 3).map((card) => {
                                const imagePath = formatImagePath(card.offerImage);
                                return (
                                    <div key={card.id} className="col-12 col-sm-6 col-lg-4">
                                        <div
                                            className="d_card"
                                            style={{
                                                backgroundImage: `url(${BaseUrl}/${imagePath})`,
                                                backgroundColor: getRandomColor(),
                                            }}
                                        >
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div className="d_title">
                                                    <h5 className='mb-0' dangerouslySetInnerHTML={{ __html: card.offerName }}></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </section>
            ) : (
                <></>
            )}
        </>
    )
}

export default Card