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

const Product = () => {

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
            <Header />
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

            <Minisider/>

            <Culture  mainCategoryName={product?.mainCategoryName} />
        </>
    )
}

export default Product;