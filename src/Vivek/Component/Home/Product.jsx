import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Process from '../common/Process';
import Subscribe from '../common/Subscribe';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty, IoMdHeart, IoMdClose } from 'react-icons/io';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoClose, IoSearch } from 'react-icons/io5';
import ReactSlider from 'react-slider';
import Header from '../header/Header';
import axios from 'axios';

const Product = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isActivecategory, setIsActivecategory] = useState(true);
    const [isActiveDiscounts, setIsActiveDiscounts] = useState(true);
    const [isActivePrice, setIsActivePrice] = useState(true);
    const [isActiveSize, setIsActiveSize] = useState(true);
    const [isActiveBrand, setIsActiveBrand] = useState(true);
    const [isActiveColor, setIsActiveColor] = useState(true);
    const [isActiveRating, setIsActiveRating] = useState(true);
    const [isActiveSleeve, setIsActiveSleeve] = useState(true);
    const [isActiveMaterial, setIsActiveMaterial] = useState(true);
    const [isActivePattern, setIsActivePattern] = useState(true);
    const [isActiveStyle, setIsActiveStyle] = useState(true);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showMore, setShowMore] = useState({
        size: false,
        brand: false,
        color: false,
        occasion: false,
        material: false,
        pattern: false,
        style: false,
    });
    const [searchbrand, setSearchbrand] = useState("");
    const [searchmaterial, setSearchmaterial] = useState("");
    const [searchstyle, setSearchstyle] = useState("");
    const [checkedFilters, setCheckedFilters] = useState({
        categories: {},
        discounts: {},
        sizes: {},
        brands: {},
        colors: {},
        ratings: {},
        sleeves: {},
        materials: {},
        occasions: {},
        patterns: {},
        styles: {},
    });
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [subCategory, setSubCategory] = useState([]);
    const [brands, setBrands] = useState([]);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [styles, setStyles] = useState([]);
    const [sleeves, setSleeves] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [isSelectedwishlist, setIsSelectedWishlist] = useState([]);
    const [sortOption, setSortOption] = useState('default');

    const location = useLocation();
    const { id } = useParams();


    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const mainCategoryId = location.state.mainCategoryId;


    // Function to fetch wishlist data from server
    const fetchWishlist = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getMyWishList`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const wishlistIds = response.data.wishlist.map(item => item.productId || item._id);
            setIsSelectedWishlist(wishlistIds);
            localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
        } catch (error) {
            console.error("Error fetching wishlist:", error);
        }
    };

    // Function to sync wishlist with localStorage
    const syncWishlistWithLocalStorage = () => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (JSON.stringify(storedWishlist) !== JSON.stringify(isSelectedwishlist)) {
            setIsSelectedWishlist(storedWishlist);
        }
    };

    // Initial fetch of wishlist data
    useEffect(() => {
        fetchWishlist();
    }, []);

    // Listen for custom event from Wishlist component
    useEffect(() => {
        const handleWishlistUpdate = () => {
            syncWishlistWithLocalStorage();
        };

        // Add event listeners
        window.addEventListener('wishlistUpdated', handleWishlistUpdate);
        window.addEventListener('storage', (e) => {
            if (e.key === 'wishlist') {
                handleWishlistUpdate();
            }
        });

        // Set up interval to check for changes
        const intervalId = setInterval(syncWishlistWithLocalStorage, 1000);

        // Clean up
        return () => {
            window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
            window.removeEventListener('storage', handleWishlistUpdate);
            clearInterval(intervalId);
        };
    }, [isSelectedwishlist]);


    const handleClickwishlist = async (item, e) => {
        e.preventDefault();
        const itemId = item.productId || item._id || item.id;

        setIsSelectedWishlist(prev => {
            let updatedWishlist;
            if (prev.includes(itemId)) {
                updatedWishlist = prev.filter(id => id !== itemId);
            } else {
                updatedWishlist = [...prev, itemId];
            }

            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

            // Dispatch custom event to notify other components
            window.dispatchEvent(new CustomEvent('wishlistUpdated'));

            return updatedWishlist;
        });

        try {
            await axios.post(`${BaseUrl}/api/createWishList`, {
                productId: itemId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error("Error updating wishlist:", error);
        }
    };

    const fetchData = async () => {
        if (!mainCategoryId || !id || !token) return;
        try {

            const bestSellerResponse = await axios.get(`${BaseUrl}/api/topProducts`);
            const BestSellarId = bestSellerResponse.data.data.map(product => product.productId);

            const newArrivalResponse = await axios.get(`${BaseUrl}/api/newArivalProduct`);
            const NewArrivalId = newArrivalResponse.data.map(product => product._id);

            const response = await axios.get(`${BaseUrl}/api/getProductByMainCategory/${mainCategoryId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const filteredProducts = response.data.products.filter(product =>
                product.mainCategoryId === mainCategoryId &&
                product.categoryId === id
            );

            // Enhance filtered products with best seller and new arrival flags
            const enhancedFilteredProducts = filteredProducts.map(product => {
                const productId = product.productId || product._id || product.id;

                return {
                    ...product,
                    isBestSeller: BestSellarId.includes(productId),
                    isNewArrival: NewArrivalId.includes(productId)
                };
            });
            setFilteredProducts(enhancedFilteredProducts);
            // Find max price from all product variants
            let maxPrice = 0;
            enhancedFilteredProducts.forEach(product => {
                if (product.productVariantData && product.productVariantData.length > 0) {
                    const originalPrice = parseFloat(product.productVariantData[0].originalPrice);
                    if (originalPrice > maxPrice) {
                        maxPrice = originalPrice;
                    }
                }
            });

            // Set the max price (rounded up to nearest 100 or 1000 for better UI)
            const roundedMaxPrice = Math.ceil(maxPrice / 1000) * 1000;
            setPriceRange([0, roundedMaxPrice]);

            // Extract specifications from products
            const extractedBrands = {};
            const extractedMaterials = {};
            const extractedStyles = {};
            const extractedSleeves = {};
            const extractedPatterns = {};
            const extractedSizes = {};
            const extractedColors = {};

            filteredProducts.forEach(product => {
                if (product.productVariantData && product.productVariantData.length > 0) {

                    // For Size conversion
                    if (product.productVariantData[0].size) {
                        // Split the size string into an array
                        const sizeArray = product.productVariantData[0].size.split(',').map(size => size.trim());

                        sizeArray.forEach(size => {
                            if (!extractedSizes[size]) {
                                extractedSizes[size] = 1;
                            } else {
                                extractedSizes[size]++;
                            }
                        });
                    }
                    // For Color conversion
                    if (product.productVariantData[0].colorName) {
                        const colorArray = product.productVariantData[0].colorName.split(',').map(color => color.trim());

                        colorArray.forEach(color => {
                            if (!extractedColors[color]) {
                                extractedColors[color] = 1;
                            } else {
                                extractedColors[color]++;
                            }
                        });
                    }

                    const specs = product.productVariantData[0].specifications;
                    if (specs) {
                        // Extract brand
                        if (specs.Brand) {
                            if (!extractedBrands[specs.Brand]) {
                                extractedBrands[specs.Brand] = 1;
                            } else {
                                extractedBrands[specs.Brand]++;
                            }
                        }

                        // Extract Material
                        if (specs.Material) {
                            if (!extractedMaterials[specs.Material]) {
                                extractedMaterials[specs.Material] = 1;
                            } else {
                                extractedMaterials[specs.Material]++;
                            }
                        }

                        // Extract Style
                        if (specs.Style) {
                            if (!extractedStyles[specs.Style]) {
                                extractedStyles[specs.Style] = 1;
                            } else {
                                extractedStyles[specs.Style]++;
                            }
                        }

                        // Extract Sleeve Length
                        if (specs["Sleeve Length"]) {
                            if (!extractedSleeves[specs["Sleeve Length"]]) {
                                extractedSleeves[specs["Sleeve Length"]] = 1;
                            } else {
                                extractedSleeves[specs["Sleeve Length"]]++;
                            }
                        }

                        // Extract Pattern
                        if (specs.Pattern) {
                            if (!extractedPatterns[specs.Pattern]) {
                                extractedPatterns[specs.Pattern] = 1;
                            } else {
                                extractedPatterns[specs.Pattern]++;
                            }
                        }
                    }
                }
            });

            // Convert to array format for filter components
            const brandArray = Object.entries(extractedBrands).map(([brandname, count], index) => ({
                id: index + 1,
                brandname,
                count
            }));

            const materialArray = Object.entries(extractedMaterials).map(([materialname, count], index) => ({
                id: index + 1,
                materialname,
                count
            }));

            const sleeveArray = Object.entries(extractedSleeves).map(([sleevename, count], index) => ({
                id: index + 1,
                sleevename,
                count
            }));

            const patternArray = Object.entries(extractedPatterns).map(([patternname, count], index) => ({
                id: index + 1,
                patternname,
                count
            }));
            const sizeArray = Object.entries(extractedSizes).map(([sizename, count], index) => ({
                id: index + 1,
                sizename,
                count
            }));

            const colorArray = Object.entries(extractedColors).map(([colorname, count], index) => ({
                id: index + 1,
                colorname,
                count
            }));

            const styleArray = Object.entries(extractedStyles).map(([stylename, count], index) => ({
                id: index + 1,
                stylename,
                count
            }));

            // Set the state for each filter
            setSize(sizeArray);
            setColor(colorArray);
            setBrands(brandArray);
            setMaterials(materialArray);
            setStyles(styleArray);
            setSleeves(sleeveArray);
            setPatterns(patternArray);
        } catch (error) {
            console.error('Data fetching failed:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [mainCategoryId, BaseUrl, token, id]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getCategory/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setCategoryName(response.data.category.categoryName);
            } catch (error) {
                console.error('Data Fetching Error:', error);
            }
        }
        fetchCategory();
    }, [id, BaseUrl, token]);

    useEffect(() => {
        const fetchSubCategory = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getCategoryBySubCategory/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // console.log("resposne>>>>>>>>",response.data.subCategory);
                setSubCategory(response.data.subCategory)
            } catch (error) {
                console.error('Data Fetching Error:', error);
            }
        }
        fetchSubCategory();
    }, [id, BaseUrl, token]);


    const discount = [
        { id: 1, no: "10" },
        { id: 2, no: "20" },
        { id: 3, no: "30" },
        { id: 4, no: "40" },
        { id: 5, no: "50" },
    ];

    const rating = [
        { id: 1, rating: 4 },
        { id: 2, rating: 3 },
        { id: 3, rating: 2 },
    ]

    // handle checkbox
    const handleCheckboxChange = (type, id, label) => {

        setCheckedFilters(prev => {
            const newFilters = {
                ...prev,
                [type]: {
                    ...prev[type],
                    [id]: !prev[type]?.[id]
                }
            };
            return newFilters;
        });

        setSelectedFilters(prev => {
            let newSelectedFilters;
            if (!checkedFilters[type]?.[id]) {
                newSelectedFilters = [...prev, { type, id, label }];
            } else {
                newSelectedFilters = prev.filter(filter => !(filter.type === type && filter.id === id));
            }
            return newSelectedFilters;
        });
    };

    // Remove individual filter
    const handleRemoveFilter = (type, id) => {
        if (type && id !== undefined) {
            setCheckedFilters(prev => ({
                ...prev,
                [type]: {
                    ...prev[type],
                    [id]: false
                }
            }));
            setSelectedFilters(prev =>
                prev.filter(filter => !(filter.type === type && filter.id === id))
            );
        }
    };

    // Filter logic
    const applyFilters = () => {
        const hasActiveFilters = Object.values(checkedFilters).some(filterGroup =>
            Object.values(filterGroup).some(value => value)
        );

        if (!hasActiveFilters && priceRange[0] === 0 && priceRange[1] === Math.max(...filteredProducts.map(product =>
            parseFloat(product.productVariantData?.[0]?.originalPrice || 0)
        ))) {
            return filteredProducts;  // Return all original products if no filters are active
        }

        return filteredProducts.filter(product => {
            const productVariant = product.productVariantData?.[0] || {};
            const specs = productVariant.specifications || {};

            // Price Range Filter
            const originalPrice = parseFloat(productVariant.originalPrice || 0);
            const isPriceInRange = originalPrice >= priceRange[0] && originalPrice <= priceRange[1];

            // Category Filter
            const isCategoryMatched =
                Object.keys(checkedFilters.categories).length === 0 ||
                Object.keys(checkedFilters.categories).some(catId =>
                    checkedFilters.categories[catId] &&
                    product.subCategoryId === catId  // Ensure this matches your data structure
                );

            // Discount Filter
            const discountPercentage = productVariant.discountPrice || 0;

            const isDiscountMatched = Object.keys(checkedFilters.discounts).length === 0 ||
                Object.keys(checkedFilters.discounts).some(discId => {
                    const minDiscount = parseInt(discount.find(d => d.id.toString() === discId)?.no || 0);

                    const originalPrice = parseFloat(productVariant.originalPrice || 0);
                    const discountedPrice = parseFloat(productVariant.discountPrice || 0);

                    if (originalPrice > 0 && discountedPrice > 0) {
                        return discountPercentage >= minDiscount;
                    }

                    return false;
                });

            // Size Filter
            const sizeArray = (productVariant.size || '').split(',').map(s => s.trim());
            const isSizeMatched = Object.keys(checkedFilters.sizes).length === 0 ||
                sizeArray.some(productSize =>
                    Object.keys(checkedFilters.sizes).some(sizeId =>
                        checkedFilters.sizes[sizeId] &&
                        productSize.trim() === size.find(s => s.id.toString() === sizeId)?.sizename
                    )
                );

            // Brand Filter
            const isBrandMatched = Object.keys(checkedFilters.brands).length === 0 ||
                Object.keys(checkedFilters.brands).some(brandId =>
                    checkedFilters.brands[brandId] &&
                    specs.Brand === brands.find(b => b.id.toString() === brandId)?.brandname
                );

            // Color Filter
            const colorArray = (productVariant.colorName || '').split(',').map(c => c.trim());
            const isColorMatched = Object.keys(checkedFilters.colors).length === 0 ||
                colorArray.some(colorName =>
                    Object.keys(checkedFilters.colors).some(colorId =>
                        checkedFilters.colors[colorId] &&
                        colorName === color.find(c => c.id.toString() === colorId)?.colorname
                    )
                );

            // Rating Filter
            const productRating = productVariant.averageRating || 0;
            const isRatingMatched = Object.keys(checkedFilters.ratings).length === 0 ||
                Object.keys(checkedFilters.ratings).some(ratingId => {
                    const minRating = rating.find(r => r.id.toString() === ratingId)?.rating || 0;
                    return productRating >= minRating;
                });

            // Sleeve Length Filter
            const isSleeveLengthMatched = Object.keys(checkedFilters.sleeves).length === 0 ||
                Object.keys(checkedFilters.sleeves).some(sleeveId =>
                    checkedFilters.sleeves[sleeveId] &&
                    specs["Sleeve Length"] === sleeves.find(s => s.id.toString() === sleeveId)?.sleevename
                );

            // Material Filter
            const isMaterialMatched = Object.keys(checkedFilters.materials).length === 0 ||
                Object.keys(checkedFilters.materials).some(materialId =>
                    checkedFilters.materials[materialId] &&
                    specs.Material === materials.find(m => m.id.toString() === materialId)?.materialname
                );

            // Pattern Filter
            const isPatternMatched = Object.keys(checkedFilters.patterns).length === 0 ||
                Object.keys(checkedFilters.patterns).some(patternId =>
                    checkedFilters.patterns[patternId] &&
                    specs.Pattern === patterns.find(p => p.id.toString() === patternId)?.patternname
                );

            // Style Filter
            const isStyleMatched = Object.keys(checkedFilters.styles).length === 0 ||
                Object.keys(checkedFilters.styles).some(styleId =>
                    checkedFilters.styles[styleId] &&
                    specs.Style === styles.find(s => s.id.toString() === styleId)?.stylename
                );

            // Combine all filter conditions
            return isPriceInRange &&
                isCategoryMatched &&
                isDiscountMatched &&
                isSizeMatched &&
                isBrandMatched &&
                isColorMatched &&
                isRatingMatched &&
                isSleeveLengthMatched &&
                isMaterialMatched &&
                isPatternMatched &&
                isStyleMatched;
        });
    };
    const applySorting = (products) => {
        if (sortOption === 'default') return products;
        switch (sortOption) {
            case 'price-low-to-high':
                return [...products].sort((a, b) => {
                    const priceA = parseFloat(a.productVariantData[0]?.originalPrice || 0);
                    const priceB = parseFloat(b.productVariantData[0]?.originalPrice || 0);
                    return priceA - priceB;
                });

            case 'price-high-to-low':
                return [...products].sort((a, b) => {
                    const priceA = parseFloat(a.productVariantData[0]?.originalPrice || 0);
                    const priceB = parseFloat(b.productVariantData[0]?.originalPrice || 0);
                    return priceB - priceA;
                });

            case 'popularity':
                return [...products].sort((a, b) => {
                    // Assuming you have a popularity metric, otherwise use best sellers
                    return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
                });

            case 'best-sellers':
                return [...products].filter(product => product.isBestSeller);

            case 'new-arrivals':
                return [...products].filter(product => product.isNewArrival);

            default:
                return products;
        }
    };

    useEffect(() => {
        // Update filtered products based on selected filters
        const filteredProductsList = applyFilters();
        const sortedProductsList = applySorting(filteredProductsList);
        // setFilteredProducts(filteredProductsList);
        setFilteredProducts(sortedProductsList);

    }, [priceRange, selectedFilters, checkedFilters, sortOption]);

    // Clear all filters
    const handleClearAll = (e) => {
        e.preventDefault();

        setCheckedFilters({
            categories: {},
            discounts: {},
            sizes: {},
            brands: {},
            colors: {},
            ratings: {},
            sleeves: {},
            materials: {},
            occasions: {},
            patterns: {},
            styles: {},
        });

        // Clear selected filters
        setSelectedFilters([]);

        const maxPrice = Math.max(...filteredProducts.map(product =>
            parseFloat(product.productVariantData?.[0]?.originalPrice || 0)
        ));
        const roundedMaxPrice = Math.ceil(maxPrice / 1000) * 1000;
        setPriceRange([0, roundedMaxPrice]);

        fetchData();
    };

    // Price Range

    const handleSliderChange = (newValue) => {
        // Ensure newValue is an array and the max is not 0
        if (Array.isArray(newValue) && priceRange[1] > 0) {
            setPriceRange(newValue);
        }
    }

    // Number of items to display before "Show More" is clicked
    const initialDisplayCount = 5;

    // size
    const displayedSizes = showMore.size ? size : size.slice(0, initialDisplayCount);

    const handleShowMore = (e, section) => {
        e.preventDefault();
        setShowMore((prevShowMore) => ({
            ...prevShowMore,
            [section]: !prevShowMore[section], // Toggle the specific section
        }));
    };

    // search Filter

    const handleSearchChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;

        if (name === "brand") {
            setSearchbrand(value);
        } else if (name === "material") {
            setSearchmaterial(value);
        }
        else if (name === "style") {
            setSearchstyle(value);
        }

    };

    // Brands 
    const filteredBrands = brands.filter(brand =>
        brand.brandname.toLowerCase().includes(searchbrand.toLowerCase())
    );
    const displayedbrands = showMore.brand ? filteredBrands : filteredBrands.slice(0, initialDisplayCount);
    // color
    const displayedcolor = showMore.color ? color : color.slice(0, initialDisplayCount);

    // Sleeve
    const displayedsleeve = showMore.sleeve ? sleeves : sleeves.slice(0, initialDisplayCount);

    // Material
    const filteredmaterial = materials.filter(material =>
        material.materialname.toLowerCase().includes(searchmaterial.toLowerCase())
    );
    const displayedmaterial = showMore.material ? filteredmaterial : filteredmaterial.slice(0, initialDisplayCount);

    // Pattern
    const displayedpattern = showMore.pattern ? patterns : patterns.slice(0, initialDisplayCount);

    // style
    const filteredstyle = styles.filter(style =>
        style.stylename.toLowerCase().includes(searchstyle.toLowerCase())
    );
    const displayedstyle = showMore.style ? filteredstyle : filteredstyle.slice(0, initialDisplayCount);

    // Toggle dropdown visibility
    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevent immediate closure on toggle click
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 575);
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {
        const handleClickOutside = () => {
            if (isDropdownOpen) {
                setIsDropdownOpen(false); // Close dropdown
            }
        };

        // Bind click event listener to document when dropdown is open
        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        // Cleanup event listener on component unmount or dropdown close
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const calculateDiscountPrice = (originalPrice, discountPercentage) => {
        if (!originalPrice || !discountPercentage) return originalPrice;

        const discountAmount = (originalPrice * discountPercentage) / 100;
        return originalPrice - discountAmount;
    };


    return (
        <>

            {/* Header section start */}
            <Header />

            {/* Banner section Start */}

            <section>
                <div className="d_bannerbg">
                    <div className="d_container">
                        <div className="row justify-content-sm-end justify-content-center align-items-center">
                            <div className=" col-12 col-sm-5">
                                <h2>Gorgeous designs that perfectly express your stories</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner section End */}

            {/* Main section Start */}

            <section className="d_p-80 d_womenfilter">
                <div className="container-fluid">
                    <div className="d_filtermargin">
                        <div className="row ">
                            <div className="col-12 d-block d-sm-none text-end">
                                <button
                                    className="d_btn"
                                    onClick={() => setShowOffcanvas(true)}
                                >
                                    <img src={require('../../../darshan/d_img/filter.png')} className='me-2' alt="" />
                                    Filters
                                </button>
                            </div>

                            {/* Desktop Filter Section */}
                            <div className="col-12 col-sm-4 col-lg-4 col-xl-3 d-none d-sm-block">
                                <div className="d_left">
                                    <div className="d_head d-flex justify-content-between">
                                        <h5 className='mb-0'>Filters</h5>
                                        <div className="d_cta">
                                            <Link to="" className='text-decoration-none' onClick={handleClearAll}>Clear All</Link>
                                        </div>
                                    </div>
                                    <div className="d_category">
                                        <div className="d_filterlist d-flex flex-wrap">
                                            {selectedFilters.map((filter, index) => (
                                                <div key={index} className="d_close">
                                                    <div className="d-flex align-items-center">
                                                        {/* Show color circle for color filters */}
                                                        {filter.type === 'colors' && (
                                                            <div
                                                                className="d_circle"
                                                                style={{ background: filter.label }}
                                                            />
                                                        )}

                                                        {/* Show discount text */}
                                                        {filter.type === 'discounts' ? (
                                                            `${filter.label}% & more`
                                                        ) : (
                                                            // Show rating with star icon
                                                            filter.type === 'ratings' ? (
                                                                <span>
                                                                    {filter.label} <FaStar className="d_staricon" /> & above
                                                                </span>
                                                            ) : (
                                                                // Show regular label
                                                                filter.label
                                                            )
                                                        )}

                                                        {/* Close button */}
                                                        <IoClose
                                                            className="d_closeicon d_cur"
                                                            onClick={() => handleRemoveFilter(filter.type, filter.id)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivecategory(!isActivecategory)}>
                                                        <div className='d_title'>Categories</div>
                                                        <div className='d_icon'>{isActivecategory ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActivecategory &&
                                                        <>
                                                            <div className='mt-3'>
                                                                {subCategory.map((category, index) => {
                                                                    return (
                                                                        <div
                                                                            key={index}
                                                                            className="d_cuscheckbox d_cur d-flex align-items-center"
                                                                        >
                                                                            <input
                                                                                type="checkbox"
                                                                                onChange={() => handleCheckboxChange('categories', category._id, category.subCategoryName)}
                                                                                checked={!!checkedFilters.categories[category._id]}
                                                                                id={`category-${category._id}`}
                                                                            />
                                                                            <label htmlFor={`category-${category._id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{category.subCategoryName}</p>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveDiscounts(!isActiveDiscounts)}>
                                                        <div className='d_title'>Discount</div>
                                                        <div className='d_icon'>{isActiveDiscounts ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>

                                                    {isActiveDiscounts &&
                                                        <>
                                                            <div className='mt-3'>
                                                                {discount.map((discount, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('discounts', discount.id, discount.no)} checked={!!checkedFilters.discounts[discount.id]} id={`discount-${discount.id}`} />
                                                                        <label htmlFor={`discount-${discount.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{discount.no}% or more</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivePrice(!isActivePrice)}>
                                                        <div className='d_title'>Price</div>
                                                        <div className='d_icon'>{isActivePrice ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActivePrice &&
                                                        <>
                                                            <div className='mt-3'>
                                                                <div className="d_price-range">
                                                                    <ReactSlider
                                                                        className="d_horisilder"
                                                                        thumbClassName="d_thumb"
                                                                        trackClassName="d_track"
                                                                        min={0}
                                                                        max={priceRange[1] || 1000}
                                                                        value={priceRange}
                                                                        onChange={handleSliderChange}
                                                                        minDistance={50}
                                                                        withTracks={true}
                                                                        pearling
                                                                        renderTrack={({ key, ...props }, state) => (
                                                                            <div {...props} className={`d_track ${state.index === 1 ? 'd_track-active' : ''}`}></div>
                                                                        )}
                                                                    />
                                                                    <div className="d_price-label d_price-min" style={{ left: `${(priceRange[0] / priceRange[1]) * 100}%` }}>
                                                                        ${priceRange[0]}
                                                                    </div>
                                                                    <div className="d_price-label d_price-max" style={{ left: `${(priceRange[1] / priceRange[1]) * 100}%` }}>
                                                                        ${priceRange[1]}
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveSize(!isActiveSize)}>
                                                        <div className='d_title'>Size</div>
                                                        <div className='d_icon'>{isActiveSize ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveSize && (
                                                        <>
                                                            <div className='mt-3'>
                                                                {displayedSizes.map((size, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('sizes', size.id, size.sizename)} checked={!!checkedFilters.sizes[size.id]} id={`size-${size.id}`} />
                                                                        <label htmlFor={`size-${size.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{size.sizename}</p>
                                                                    </div>
                                                                ))}
                                                                {size.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'size')} className='text-decoration-none'>
                                                                        {showMore.size ? 'Show Less' : `Show More (${size.length - initialDisplayCount})`}
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveBrand(!isActiveBrand)}>
                                                        <div className='d_title'>Brand</div>
                                                        <div className='d_icon'>{isActiveBrand ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveBrand &&
                                                        <>
                                                            <div className="d_search">
                                                                <IoSearch className='d_searchicon' />
                                                                <input type="text" name="brand" value={searchbrand} onChange={handleSearchChange} className="form-control " placeholder="Search" />
                                                            </div>
                                                            {displayedbrands.map((brand, index) => (
                                                                <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                    <input type="checkbox" onChange={() => handleCheckboxChange('brands', brand.id, brand.brandname)} checked={!!checkedFilters.brands[brand.id]} id={`brand-${brand.id}`} />
                                                                    <label htmlFor={`brand-${brand.id}`} className="d_checkmark"></label>
                                                                    <p className="mb-0">{brand.brandname}<span>({brand.count})</span></p>
                                                                </div>
                                                            ))}
                                                            {filteredBrands.length > initialDisplayCount && (
                                                                <Link href="" onClick={(e) => { e.preventDefault(); handleShowMore(e, 'brand') }} className='text-decoration-none'>
                                                                    {showMore.brand ? 'Show Less' : `Show More (${filteredBrands.length - initialDisplayCount})`}
                                                                </Link>
                                                            )}
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveColor(!isActiveColor)}>
                                                        <div className='d_title'>Color</div>
                                                        <div className='d_icon'>{isActiveColor ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveColor &&
                                                        <>
                                                            <div className='mt-3'>
                                                                {displayedcolor.map((color, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('colors', color.id, color.colorname)} checked={!!checkedFilters.colors[color.id]} id={`color-${color.id}`} />
                                                                        <label htmlFor={`color-${color.id}`} className="d_checkmark"></label>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="d_color" style={{ background: color.colorname }}></div>
                                                                            <p className='mb-0'>{color.colorname}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                                {color.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'color')} className='text-decoration-none'>
                                                                        {showMore.color ? 'Show Less' : `Show More (${color.length - initialDisplayCount})`}
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveRating(!isActiveRating)}>
                                                        <div className='d_title'>Rating</div>
                                                        <div className='d_icon'>{isActiveRating ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveRating &&
                                                        <>
                                                            <div className='mt-3'>
                                                                {rating.map((rate, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('ratings', rate.id, rate.rating)} checked={!!checkedFilters.ratings[rate.id]} id={`rate-${rate.id}`} />
                                                                        <label htmlFor={`rate-${rate.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{rate.rating} <FaStar className="d_staricon" /> & above</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {sleeves.length > 0 && (
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveSleeve(!isActiveSleeve)}>
                                                            <div className='d_title'>Sleeve Length</div>
                                                            <div className='d_icon'>{isActiveSleeve ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveSleeve && (
                                                            <>
                                                                <div className='mt-3'>
                                                                    {sleeves.slice(0, showMore.sleeve ? sleeves.length : initialDisplayCount)
                                                                        .map((sleeve, index) => (
                                                                            <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    onChange={() => handleCheckboxChange('sleeves', sleeve.id, sleeve.sleevename)}
                                                                                    checked={!!checkedFilters.sleeves[sleeve.id]}
                                                                                    id={`sleeve-${sleeve.id}`}
                                                                                />
                                                                                <label htmlFor={`sleeve-${sleeve.id}`} className="d_checkmark"></label>
                                                                                <p className="mb-0">{sleeve.sleevename}<span>({sleeve.count})</span></p>
                                                                            </div>
                                                                        ))}
                                                                    {sleeves.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'sleeve')} className='text-decoration-none'>
                                                                            {showMore.sleeve ? 'Show Less' : `Show More (${sleeves.length - initialDisplayCount})`}
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {materials.length > 0 && (
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveMaterial(!isActiveMaterial)}>
                                                            <div className='d_title'>Material</div>
                                                            <div className='d_icon'>{isActiveMaterial ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveMaterial && (
                                                            <>
                                                                <div className="d_search">
                                                                    <IoSearch className='d_searchicon' />
                                                                    <input type="text" name="material" value={searchmaterial} onChange={handleSearchChange} className="form-control" placeholder="Search" />
                                                                </div>
                                                                {/* Filter materials based on search input */}
                                                                {materials
                                                                    .filter(material => material.materialname.toLowerCase().includes(searchmaterial.toLowerCase()))
                                                                    .slice(0, showMore.material ? materials.length : initialDisplayCount)
                                                                    .map((material, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input
                                                                                type="checkbox"
                                                                                onChange={() => handleCheckboxChange('materials', material.id, material.materialname)}
                                                                                checked={!!checkedFilters.materials[material.id]}
                                                                                id={`material-${material.id}`}
                                                                            />
                                                                            <label htmlFor={`material-${material.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{material.materialname}<span>({material.count})</span></p>
                                                                        </div>
                                                                    ))}
                                                                {materials.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'material')} className='text-decoration-none'>
                                                                        {showMore.material ? 'Show Less' : `Show More (${materials.length - initialDisplayCount})`}
                                                                    </Link>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {patterns.length > 0 && (
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivePattern(!isActivePattern)}>
                                                            <div className='d_title'>Pattern</div>
                                                            <div className='d_icon'>{isActivePattern ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActivePattern && (
                                                            <>
                                                                <div className='mt-3'>
                                                                    {patterns.slice(0, showMore.pattern ? patterns.length : initialDisplayCount)
                                                                        .map((pattern, index) => (
                                                                            <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    onChange={() => handleCheckboxChange('patterns', pattern.id, pattern.patternname)}
                                                                                    checked={!!checkedFilters.patterns[pattern.id]}
                                                                                    id={`pattern-${pattern.id}`}
                                                                                />
                                                                                <label htmlFor={`pattern-${pattern.id}`} className="d_checkmark"></label>
                                                                                <p className="mb-0">{pattern.patternname}<span>({pattern.count})</span></p>
                                                                            </div>
                                                                        ))}
                                                                    {patterns.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'pattern')} className='text-decoration-none'>
                                                                            {showMore.pattern ? 'Show Less' : `Show More (${patterns.length - initialDisplayCount})`}
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {styles.length > 0 && (
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveStyle(!isActiveStyle)}>
                                                            <div className='d_title'>Style</div>
                                                            <div className='d_icon'>{isActiveStyle ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveStyle && (
                                                            <>
                                                                <div className="d_search">
                                                                    <IoSearch className='d_searchicon' />
                                                                    <input type="text" name="style" value={searchstyle} onChange={handleSearchChange} className="form-control" placeholder="Search" />
                                                                </div>
                                                                {styles
                                                                    .filter(style => style.stylename.toLowerCase().includes(searchstyle.toLowerCase()))
                                                                    .slice(0, showMore.style ? styles.length : initialDisplayCount)
                                                                    .map((style, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input
                                                                                type="checkbox"
                                                                                onChange={() => handleCheckboxChange('styles', style.id, style.stylename)}
                                                                                checked={!!checkedFilters.styles[style.id]}
                                                                                id={`style-${style.id}`}
                                                                            />
                                                                            <label htmlFor={`style-${style.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{style.stylename}<span>({style.count})</span></p>
                                                                        </div>
                                                                    ))}
                                                                {styles.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'style')} className='text-decoration-none'>
                                                                        {showMore.style ? 'Show Less' : `Show More (${styles.length - initialDisplayCount})`}
                                                                    </Link>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>

                            {/* Mobile Offcanvas */}
                            <div
                                className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`}
                                tabIndex="-1"
                                style={{
                                    visibility: showOffcanvas ? 'visible' : 'hidden',
                                    width: '320px'
                                }}
                            >
                                <div className="offcanvas-body">
                                    <div className="d_left">
                                        <div className="d_head d-flex justify-content-between">
                                            <h5 className='mb-0'>Filters</h5>
                                            <div className="d_cta">
                                                <Link to="" className='text-decoration-none' onClick={handleClearAll}>Clear All</Link>
                                            </div>
                                        </div>
                                        <div className="d_category">
                                            <div className="d_filterlist d-flex flex-wrap">
                                                {selectedFilters.map((filter, index) => (
                                                    <div key={index} className="d_close">
                                                        <div className="d-flex align-items-center">
                                                            {/* Show color circle for color filters */}
                                                            {filter.type === 'colors' && (
                                                                <div
                                                                    className="d_circle"
                                                                    style={{ background: filter.label }}
                                                                />
                                                            )}

                                                            {/* Show discount text */}
                                                            {filter.type === 'discounts' ? (
                                                                `${filter.label}% & more`
                                                            ) : (
                                                                // Show rating with star icon
                                                                filter.type === 'ratings' ? (
                                                                    <span>
                                                                        {filter.label} <FaStar className="d_staricon" /> & above
                                                                    </span>
                                                                ) : (
                                                                    // Show regular label
                                                                    filter.label
                                                                )
                                                            )}

                                                            {/* Close button */}
                                                            <IoClose
                                                                className="d_closeicon d_cur"
                                                                onClick={() => handleRemoveFilter(filter.type, filter.id)}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivecategory(!isActivecategory)}>
                                                            <div className='d_title'>Categories</div>
                                                            <div className='d_icon'>{isActivecategory ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActivecategory &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    {subCategory.map((category, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('categories', category.id, category.label)} checked={!!checkedFilters.categories[category.id]} id={`category-${category.id}`} />
                                                                            <label htmlFor={`category-${category.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{category.label}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveDiscounts(!isActiveDiscounts)}>
                                                            <div className='d_title'>Discount</div>
                                                            <div className='d_icon'>{isActiveDiscounts ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>

                                                        {isActiveDiscounts &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    {discount.map((discount, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('discounts', discount.id, discount.no)} checked={!!checkedFilters.discounts[discount.id]} id={`discount-${discount.id}`} />
                                                                            <label htmlFor={`discount-${discount.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{discount.no}% or more</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivePrice(!isActivePrice)}>
                                                            <div className='d_title'>Price</div>
                                                            <div className='d_icon'>{isActivePrice ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActivePrice &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    <div className="d_price-range">
                                                                        <ReactSlider
                                                                            className="d_horisilder"
                                                                            thumbClassName="d_thumb"
                                                                            trackClassName="d_track"
                                                                            min={0}
                                                                            max={5000}
                                                                            value={priceRange}
                                                                            onChange={handleSliderChange}
                                                                            minDistance={50}
                                                                            withTracks={true}
                                                                            pearling
                                                                            renderTrack={({ key, ...props }, state) => (
                                                                                <div {...props} className={`d_track ${state.index === 1 ? 'd_track-active' : ''}`}></div>
                                                                            )}
                                                                        />
                                                                        <div className="d_price-label d_price-min" style={{ left: `${(priceRange[0] / 5000) * 100}%` }}>
                                                                            ${priceRange[0]}
                                                                        </div>
                                                                        <div className="d_price-label d_price-max" style={{ left: `${(priceRange[1] / 5000) * 100}%` }}>
                                                                            ${priceRange[1]}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveSize(!isActiveSize)}>
                                                            <div className='d_title'>Size</div>
                                                            <div className='d_icon'>{isActiveSize ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveSize && (
                                                            <>
                                                                <div className='mt-3'>
                                                                    {displayedSizes.map((size, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('sizes', size.id, size.sizename)} checked={!!checkedFilters.sizes[size.id]} id={`size-${size.id}`} />
                                                                            <label htmlFor={`size-${size.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{size.sizename}</p>
                                                                        </div>
                                                                    ))}
                                                                    {size.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'size')} className='text-decoration-none'>
                                                                            {showMore.size ? 'Show Less' : `Show More (${size.length - initialDisplayCount})`}
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveBrand(!isActiveBrand)}>
                                                            <div className='d_title'>Brand</div>
                                                            <div className='d_icon'>{isActiveBrand ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveBrand &&
                                                            <>
                                                                <div className="d_search">
                                                                    <IoSearch className='d_searchicon' />
                                                                    <input type="text" name="brand" value={searchbrand} onChange={handleSearchChange} className="form-control " placeholder="Search" />
                                                                </div>
                                                                {displayedbrands.map((brand, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('brands', brand.id, brand.brandname)} checked={!!checkedFilters.brands[brand.id]} id={`brand-${brand.id}`} />
                                                                        <label htmlFor={`brand-${brand.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{brand.brandname}<span>({brand.count})</span></p>
                                                                    </div>
                                                                ))}
                                                                {filteredBrands.length > initialDisplayCount && (
                                                                    <Link href="" onClick={(e) => { e.preventDefault(); handleShowMore(e, 'brand') }} className='text-decoration-none'>
                                                                        {showMore.brand ? 'Show Less' : `Show More (${filteredBrands.length - initialDisplayCount})`}
                                                                    </Link>
                                                                )}
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveColor(!isActiveColor)}>
                                                            <div className='d_title'>Color</div>
                                                            <div className='d_icon'>{isActiveColor ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveColor &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    {displayedcolor.map((color, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('colors', color.id, color.colorname)} checked={!!checkedFilters.colors[color.id]} id={`color-${color.id}`} />
                                                                            <label htmlFor={`color-${color.id}`} className="d_checkmark"></label>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="d_color" style={{ background: color.colorname }}></div>
                                                                                <p className='mb-0'>{color.colorname}</p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                    {color.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'color')} className='text-decoration-none'>
                                                                            {showMore.color ? 'Show Less' : `Show More (${color.length - initialDisplayCount})`}
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveRating(!isActiveRating)}>
                                                            <div className='d_title'>Rating</div>
                                                            <div className='d_icon'>{isActiveRating ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveRating &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    {rating.map((rate, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('ratings', rate.id, rate.rating)} checked={!!checkedFilters.ratings[rate.id]} id={`rate-${rate.id}`} />
                                                                            <label htmlFor={`rate-${rate.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{rate.rating} <FaStar className="d_staricon" /> & above</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            {sleeves.length > 0 && (
                                                <div className="d_categorylist">
                                                    <div className="d_acc">
                                                        <div className="d_accitem">
                                                            <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveSleeve(!isActiveSleeve)}>
                                                                <div className='d_title'>Sleeve Length</div>
                                                                <div className='d_icon'>{isActiveSleeve ? <FaMinus /> : <FaPlus />}</div>
                                                            </div>
                                                            {isActiveSleeve && (
                                                                <>
                                                                    <div className='mt-3'>
                                                                        {sleeves.slice(0, showMore.sleeve ? sleeves.length : initialDisplayCount)
                                                                            .map((sleeve, index) => (
                                                                                <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        onChange={() => handleCheckboxChange('sleeves', sleeve.id, sleeve.sleevename)}
                                                                                        checked={!!checkedFilters.sleeves[sleeve.id]}
                                                                                        id={`sleeve-${sleeve.id}`}
                                                                                    />
                                                                                    <label htmlFor={`sleeve-${sleeve.id}`} className="d_checkmark"></label>
                                                                                    <p className="mb-0">{sleeve.sleevename}<span>({sleeve.count})</span></p>
                                                                                </div>
                                                                            ))}
                                                                        {sleeves.length > initialDisplayCount && (
                                                                            <Link to="" onClick={(e) => handleShowMore(e, 'sleeve')} className='text-decoration-none'>
                                                                                {showMore.sleeve ? 'Show Less' : `Show More (${sleeves.length - initialDisplayCount})`}
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {materials.length > 0 && (
                                                <div className="d_categorylist">
                                                    <div className="d_acc">
                                                        <div className="d_accitem">
                                                            <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveMaterial(!isActiveMaterial)}>
                                                                <div className='d_title'>Material</div>
                                                                <div className='d_icon'>{isActiveMaterial ? <FaMinus /> : <FaPlus />}</div>
                                                            </div>
                                                            {isActiveMaterial && (
                                                                <>
                                                                    <div className="d_search">
                                                                        <IoSearch className='d_searchicon' />
                                                                        <input type="text" name="material" value={searchmaterial} onChange={handleSearchChange} className="form-control" placeholder="Search" />
                                                                    </div>
                                                                    {/* Filter materials based on search input */}
                                                                    {materials
                                                                        .filter(material => material.materialname.toLowerCase().includes(searchmaterial.toLowerCase()))
                                                                        .slice(0, showMore.material ? materials.length : initialDisplayCount)
                                                                        .map((material, index) => (
                                                                            <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    onChange={() => handleCheckboxChange('materials', material.id, material.materialname)}
                                                                                    checked={!!checkedFilters.materials[material.id]}
                                                                                    id={`material-${material.id}`}
                                                                                />
                                                                                <label htmlFor={`material-${material.id}`} className="d_checkmark"></label>
                                                                                <p className="mb-0">{material.materialname}<span>({material.count})</span></p>
                                                                            </div>
                                                                        ))}
                                                                    {materials.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'material')} className='text-decoration-none'>
                                                                            {showMore.material ? 'Show Less' : `Show More (${materials.length - initialDisplayCount})`}
                                                                        </Link>
                                                                    )}
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {patterns.length > 0 && (
                                                <div className="d_categorylist">
                                                    <div className="d_acc">
                                                        <div className="d_accitem">
                                                            <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivePattern(!isActivePattern)}>
                                                                <div className='d_title'>Pattern</div>
                                                                <div className='d_icon'>{isActivePattern ? <FaMinus /> : <FaPlus />}</div>
                                                            </div>
                                                            {isActivePattern && (
                                                                <>
                                                                    <div className='mt-3'>
                                                                        {patterns.slice(0, showMore.pattern ? patterns.length : initialDisplayCount)
                                                                            .map((pattern, index) => (
                                                                                <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        onChange={() => handleCheckboxChange('patterns', pattern.id, pattern.patternname)}
                                                                                        checked={!!checkedFilters.patterns[pattern.id]}
                                                                                        id={`pattern-${pattern.id}`}
                                                                                    />
                                                                                    <label htmlFor={`pattern-${pattern.id}`} className="d_checkmark"></label>
                                                                                    <p className="mb-0">{pattern.patternname}<span>({pattern.count})</span></p>
                                                                                </div>
                                                                            ))}
                                                                        {patterns.length > initialDisplayCount && (
                                                                            <Link to="" onClick={(e) => handleShowMore(e, 'pattern')} className='text-decoration-none'>
                                                                                {showMore.pattern ? 'Show Less' : `Show More (${patterns.length - initialDisplayCount})`}
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {styles.length > 0 && (
                                                <div className="d_categorylist">
                                                    <div className="d_acc">
                                                        <div className="d_accitem">
                                                            <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveStyle(!isActiveStyle)}>
                                                                <div className='d_title'>Style</div>
                                                                <div className='d_icon'>{isActiveStyle ? <FaMinus /> : <FaPlus />}</div>
                                                            </div>
                                                            {isActiveStyle && (
                                                                <>
                                                                    <div className="d_search">
                                                                        <IoSearch className='d_searchicon' />
                                                                        <input type="text" name="style" value={searchstyle} onChange={handleSearchChange} className="form-control" placeholder="Search" />
                                                                    </div>
                                                                    {styles
                                                                        .filter(style => style.stylename.toLowerCase().includes(searchstyle.toLowerCase()))
                                                                        .slice(0, showMore.style ? styles.length : initialDisplayCount)
                                                                        .map((style, index) => (
                                                                            <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    onChange={() => handleCheckboxChange('styles', style.id, style.stylename)}
                                                                                    checked={!!checkedFilters.styles[style.id]}
                                                                                    id={`style-${style.id}`}
                                                                                />
                                                                                <label htmlFor={`style-${style.id}`} className="d_checkmark"></label>
                                                                                <p className="mb-0">{style.stylename}<span>({style.count})</span></p>
                                                                            </div>
                                                                        ))}
                                                                    {styles.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'style')} className='text-decoration-none'>
                                                                            {showMore.style ? 'Show Less' : `Show More (${styles.length - initialDisplayCount})`}
                                                                        </Link>
                                                                    )}
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="col-12 col-sm-8 col-lg-8 col-xl-9">
                                <div className="d_right">
                                    <div className="d_heading">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2 className='mb-0'>{categoryName}</h2>
                                            {sortOption !== 'default' ? (
                                                <button className='d_dropbtn' onClick={() =>{ setSortOption('default'); fetchData();}} ><IoMdClose className='me-2' />Cancel</button>
                                            ) : (
                                                <div className="d_dropdown">
                                                    <button className="d_dropbtn" onClick={toggleDropdown}>Sort by<MdKeyboardArrowDown className='ms-2' /></button>
                                                    {isDropdownOpen && (
                                                        <div className="d_dropcon">
                                                            <p onClick={() => {
                                                                setSortOption('price-low-to-high');
                                                                setIsDropdownOpen(false);
                                                            }}>Price : Low to High</p>
                                                            <p onClick={() => {
                                                                setSortOption('price-high-to-low');
                                                                setIsDropdownOpen(false);
                                                            }}>Price : High to Low</p>
                                                            <p onClick={() => {
                                                                setSortOption('popularity');
                                                                setIsDropdownOpen(false);
                                                            }}>Popularity</p>
                                                            <p onClick={() => {
                                                                setSortOption('best-sellers');
                                                                setIsDropdownOpen(false);
                                                            }}>Best Sellers</p>
                                                            <p onClick={() => {
                                                                setSortOption('new-arrivals');
                                                                setIsDropdownOpen(false);
                                                            }}>New Arrivals</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="d_trend mt-3">
                                        <div className="row gy-4">
                                            {filteredProducts.map((item) => {
                                                const itemId = item.productId || item._id || item.id;
                                                return (
                                                    <div key={itemId} className="col-12 col-sm-6 col-lg-6 col-xl-3">
                                                        <Link to={`/womendetails/${item._id}`} >
                                                            <div className="d_box">
                                                                <div className="d_img">
                                                                    <img src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} alt="" />
                                                                    {item.isBestSeller && (
                                                                        <div className="d_seller">Best Seller</div>
                                                                    )}
                                                                    {item.isNewArrival && (
                                                                        <div className="d_arrival">New Arrival</div>
                                                                    )}
                                                                    <div
                                                                        className="d_trendicon d-flex justify-content-center align-items-center d_cur"
                                                                        onClick={(e) => handleClickwishlist(item, e)}
                                                                    >
                                                                        {isSelectedwishlist.includes(itemId) ?
                                                                            <IoMdHeart className='d_icon' style={{ color: 'red' }} /> :
                                                                            <IoMdHeartEmpty className='d_icon' style={{ color: '#6a6a6a' }} />}
                                                                    </div>
                                                                </div>
                                                                <div className="d_content">
                                                                    <div className='d-flex flex-column h-100'>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="d_name">{item.productName || item.productDetails?.productName}</div>
                                                                            <div className='d-flex align-items-center'>
                                                                                <FaStar className='d_staricon me-1' />
                                                                                <div className="d_review">{item.rating || 0}</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d_desc">{item.productVariantData[0].description || item.productVariantData[0].shortDescription}</div>
                                                                        <div className="d-flex align-items-center justify-content-between mt-auto">
                                                                            <div className="d-flex align-items-center">
                                                                                {(item.productVariantData[0].colorName || '').split(',').map((color, i) => (
                                                                                    <div
                                                                                        key={i}
                                                                                        className={`d_color ${i === 0 ? 'active' : ""}`}
                                                                                        style={{ backgroundColor: color }}
                                                                                    ></div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="d-flex align-items-end">
                                                                                <div className="d_price">
                                                                                    ${item.productVariantData[0].originalPrice && item.productVariantData[0].discountPrice
                                                                                        ? calculateDiscountPrice(
                                                                                            parseInt(item.productVariantData[0].originalPrice),
                                                                                            parseInt(item.productVariantData[0].discountPrice)
                                                                                        )
                                                                                        : "0"}
                                                                                </div>
                                                                                <div className="d_disprice ms-1 text-decoration-line-through">
                                                                                    ${item.productVariantData[0].originalPrice}
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backdrop for mobile */}
                {showOffcanvas && (
                    <div
                        className="offcanvas-backdrop show"
                        onClick={() => setShowOffcanvas(false)}
                    ></div>
                )}
            </section>

            {/* Subscribe section */}
            <Subscribe />

            {/* Process section */}
            <Process />

            {/* Footer section */}
            <Footer />

        </>
    )
}

export default Product;