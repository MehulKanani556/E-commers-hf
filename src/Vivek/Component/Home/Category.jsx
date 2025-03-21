import { useParams } from 'react-router-dom';
import '../../../Parth/Component/Luggage/Luggage.css';
import '../../../darshan/css/style.css'
import Header from '../header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../../../darshan/components/Banner';
import LuggageBanner from '../../../Parth/Component/Luggage/LuggageBanner';
import SportsBanner from '../../../Parth/Component/Sports/SportsBanner';
import BeautyBanner from '../../../Parth/Component/Beauty/BeautyBanner';
import ElectronicsBanner from '../../../Parth/Component/Electronics/ElectronicsBanner';
import MensBanner from '../../../Parth/Component/Mens/MensBanner';
import KidsBanner from '../../../Parth/Component/Kids/KidsBanner';
import KitchenBanner from '../../../Parth/Component/Kitchen/KitchenBanner';
import Minisider from '../../../darshan/components/Minisider';
import Culture from '../../../darshan/components/Culture';
import Card from '../../../darshan/components/Card';
import Trending from '../../../darshan/components/Trending';
import Post from '../../../darshan/components/Post';
import Popularbrands from '../../../darshan/components/Popularbrands';
import Subscribe from '../common/Subscribe';
import Process from '../common/Process';
import Footer from '../footer/Footer';

const Category = () => {

    const { id } = useParams();
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposnse = await axios.get(`${BaseUrl}/api/getMainCategory/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // console.log("resposnse", resposnse.data.mainCategory);
                setProduct(resposnse.data.mainCategory);
            } catch (error) {
                console.error('Data fetching failed', error);
            }
        }
        fetchData();
    }, [id, BaseUrl, token]);

    return (
        <>
            {/* Header section start */}
            <Header />

            {/* Banner section Start */}
            {product && product.mainCategoryName === 'Women' ? (
                <Banner />
            ) : product && product.mainCategoryName === 'Men' ? (
                <MensBanner />
            ) : product && product.mainCategoryName === 'Baby & Kids' ? (
                <KidsBanner />
            ) : product && product.mainCategoryName === 'Luggage' ? (
                <LuggageBanner />
            ) : product && product.mainCategoryName === 'Sports' ? (
                <SportsBanner />
            ) : product && product.mainCategoryName === 'Beauty & Health' ? (
                <BeautyBanner />
            ) : product && product.mainCategoryName === 'Electronics & Mobiles' ? (
                <ElectronicsBanner />
            ) : product && product.mainCategoryName === 'Home & Kitchen' ? (
                <KitchenBanner />
            ) : null}

            {/* Banner section End */}

            {/* MinisSider section Start */}
            <Minisider />

            {/* MinisSider section End */}

            {/* Card section Start */}

            <Card />

            {/* Card section End */}

            {/* Trendign section start */}

            <Trending />

            {/* Trendign section end */}

            {/* Culture section start */}

            <Culture mainCategoryName={product?.mainCategoryName} />

            {/* Culture section end */}

            {/* Post section Start */}

            <Post />

            {/* Post section End */}

            {/* Popular Brands Section Start */}

            <Popularbrands />

            {/* Popular Brands Section End */}

            {/* Subscribe Section Start */}
            <Subscribe />

            {/* Subscribe Section End */}

            {/* Progress section Start */}
            <Process />
            {/* Progress section End */}

            {/* Footer section */}
            <Footer />

        </>
    )
}

export default Category;