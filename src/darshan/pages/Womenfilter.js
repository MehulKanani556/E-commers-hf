import React, { useEffect, useState } from 'react'
import ReactSlider from 'react-slider';
import './../css/womenfilter.css'
import { IoClose, IoSearch } from 'react-icons/io5'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import './../css/trending.css'
import { Link } from 'react-router-dom';
import Header from '../../Vivek/Component/header/Header';
import Subscribe from '../../Vivek/Component/common/Subscribe';
import Process from '../../Vivek/Component/common/Process';
import Footer from '../../Vivek/Component/footer/Footer';

const Womenfilter = () => {

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
    const [isActiveOccasion, setIsActiveOccasion] = useState(true);
    const [isActiveStyle, setIsActiveStyle] = useState(true);
    const [priceRange, setPriceRange] = useState([0, 5000]);
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

    const filterItems = [
        {
            id: 1,
            image: "itemimg1.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Lehenga choli ",
            rating: 4.5,
            description: "Purple lehenga choli in silk",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 2,
            image: "itemimg2.png",
            isBestSeller: false,
            isNewArrial: false,
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
            image: "itemimg3.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Saree",
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
            image: "itemimg4.png",
            isBestSeller: false,
            isNewArrial: true,
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
            isNewArrial: false,
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
            isBestSeller: false,
            isNewArrial: false,
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
            isNewArrial: false,
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
            isBestSeller: false,
            isNewArrial: false,
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
        {
            id: 9,
            image: "itemimg1.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Lehenga choli",
            rating: 4.5,
            description: "Purple lehenga choli in silk",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 10,
            image: "itemimg2.png",
            isBestSeller: false,
            isNewArrial: false,
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
            id: 11,
            image: "itemimg3.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Saree",
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
            id: 12,
            image: "itemimg4.png",
            isBestSeller: false,
            isNewArrial: true,
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
            id: 13,
            image: "trend5.png",
            isBestSeller: true,
            isNewArrial: false,
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
            id: 14,
            image: "trend6.png",
            isBestSeller: false,
            isNewArrial: false,
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
            id: 15,
            image: "trend7.png",
            isBestSeller: true,
            isNewArrial: false,
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
            id: 16,
            image: "trend8.png",
            isBestSeller: false,
            isNewArrial: false,
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
        {
            id: 17,
            image: "itemimg1.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Lehenga choli",
            rating: 4.5,
            description: "Purple lehenga choli in silk",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 18,
            image: "itemimg2.png",
            isBestSeller: false,
            isNewArrial: false,
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
            id: 19,
            image: "itemimg3.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Saree",
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
            id: 20,
            image: "itemimg4.png",
            isBestSeller: false,
            isNewArrial: true,
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
            id: 21,
            image: "trend5.png",
            isBestSeller: true,
            isNewArrial: false,
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
            id: 22,
            image: "trend6.png",
            isBestSeller: false,
            isNewArrial: false,
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
            id: 23,
            image: "trend7.png",
            isBestSeller: true,
            isNewArrial: false,
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
            id: 24,
            image: "trend8.png",
            isBestSeller: false,
            isNewArrial: false,
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
        {
            id: 25,
            image: "itemimg2.png",
            isBestSeller: false,
            isNewArrial: false,
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
            id: 26,
            image: "itemimg3.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Saree",
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
            id: 27,
            image: "itemimg4.png",
            isBestSeller: false,
            isNewArrial: true,
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
            id: 28,
            image: "trend5.png",
            isBestSeller: true,
            isNewArrial: false,
            name: "Traditional Chaniya choli",
            rating: 4.5,
            description: "Cotton silk multi color chaniya choli",
            colors: [
                { id: 1, color: "#FFFFFF", isActive: true },
            ],
            price: 250,
            originalPrice: 300
        },
    ];

    const categories = [
        { id: 1, label: "Short Kurta" },
        { id: 2, label: "Long Kurta" },
        { id: 3, label: "Kurta set" },
        { id: 4, label: "Casual Saree" },
        { id: 5, label: "Designer Saree" },
        { id: 6, label: "Chaniya Choli" },
        { id: 7, label: "Salwar Suit" },
        { id: 8, label: "Co-ord set" },
        { id: 9, label: "Gown" },
        { id: 10, label: "Palazzo Set" },
        { id: 11, label: "Tunics & Tops" },
        { id: 12, label: "Dupattas" },
        { id: 13, label: "Leggings, Salwar & Chudidars" },
    ];


    const discount = [
        { id: 1, no: "10" },
        { id: 2, no: "20" },
        { id: 3, no: "30" },
        { id: 4, no: "40" },
        { id: 5, no: "50" },
    ];

    const size = [
        { id: 1, sizename: "XS" },
        { id: 2, sizename: "S" },
        { id: 3, sizename: "M" },
        { id: 4, sizename: "L" },
        { id: 5, sizename: "XL" },
        { id: 6, sizename: "XXL" },
        { id: 7, sizename: "X" },
    ]

    const brands = [
        { id: 1, brandname: "BIBA" },
        { id: 2, brandname: "BUTA & BUTI" },
        { id: 3, brandname: "Mitera" },
        { id: 4, brandname: "KALKI" },
        { id: 5, brandname: "RADHARANI" },
    ]

    const color = [
        { id: 1, colorname: "Black" },
        { id: 2, colorname: "white" },
        { id: 3, colorname: "Orange" },
        { id: 4, colorname: "Blue" },
        { id: 5, colorname: "Green" },
        { id: 6, colorname: "Pink" },
        { id: 7, colorname: "Yellow" },
    ]

    const rating = [
        { id: 1, rating: 4 },
        { id: 2, rating: 3 },
        { id: 3, rating: 2 },
    ]

    const sleeve = [
        { id: 1, sleevename: "Full Sleeve" },
        { id: 2, sleevename: "Half Sleeve" },
        { id: 3, sleevename: "Short Sleeve" },
        { id: 4, sleevename: "Sleeveless" },
        { id: 5, sleevename: "3/4 Sleeve" },
    ]

    const material = [
        { id: 1, materialname: "Georgette" },
        { id: 2, materialname: "Jacquard" },
        { id: 3, materialname: "Cotton Silk" },
        { id: 4, materialname: "Pure Silk" },
        { id: 5, materialname: "Silk Blend" },
    ]

    const pattern = [
        { id: 1, patternname: "Woven" },
        { id: 2, patternname: "Printed" },
        { id: 3, patternname: "Polka Print" },
        { id: 4, patternname: "Striped" },
        { id: 5, patternname: "Floral" },
    ]

    const occasion = [
        { id: 1, occasionname: "Casual" },
        { id: 2, occasionname: "Wedding" },
        { id: 3, occasionname: "Party" },
        { id: 4, occasionname: "Festive" },
    ]

    const style = [
        { id: 1, stylename: "Daily Wear" },
        { id: 2, stylename: "Bollywood" },
        { id: 3, stylename: "Banarasi" },
        { id: 4, stylename: "Kanjivaram" },
    ]


    // handle checkbox
    const handleCheckboxChange = (type, id, label) => {
        // Only proceed with updates if we have all required parameters
        if (type && id !== undefined) {
            setCheckedFilters(prev => ({
                ...prev,
                [type]: {
                    ...prev[type],
                    [id]: !prev[type]?.[id]
                }
            }));

            if (!checkedFilters[type]?.[id]) {
                setSelectedFilters(prev => [...prev, { type, id, label }]);
            } else {
                setSelectedFilters(prev =>
                    prev.filter(filter => !(filter.type === type && filter.id === id))
                );
            }
        }
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
        setSelectedFilters([]);
    };


    // const handleCheckboxChange = (type, id) => {
    //     debugger
    //     setCheckedFilters(prevState => ({
    //         ...prevState,
    //         [type]: {
    //             // Set all checkboxes in the section to false, then set the selected one to true
    //             ...Object.keys(prevState[type]).reduce((acc, key) => {
    //                 acc[key] = false;
    //                 return acc;
    //             }, {}),
    //             [id]: true
    //         }
    //     }));
    // };       

    // Price Range

    const handleSliderChange = (newValue) => {
        setPriceRange(newValue);
    };

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
    const displayedsleeve = showMore.sleeve ? sleeve : sleeve.slice(0, initialDisplayCount);

    // Material
    const filteredmaterial = material.filter(material =>
        material.materialname.toLowerCase().includes(searchmaterial.toLowerCase())
    );
    const displayedmaterial = showMore.material ? filteredmaterial : filteredmaterial.slice(0, initialDisplayCount);

    // Pattern
    const displayedpattern = showMore.pattern ? pattern : pattern.slice(0, initialDisplayCount);

    // Occasion
    const displayedoccasion = showMore.occasion ? occasion : occasion.slice(0, initialDisplayCount);

    // style
    const filteredstyle = style.filter(style =>
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
                                    <img src={require('./../d_img/filter.png')} className='me-2' alt="" />
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
                                        {/* <div className="d_filterlist d-flex flex-wrap">
                                            <div className="d_close">30% & more <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">M <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">BIBA <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">
                                                <div className="d-flex align-items-center">
                                                    <div className="d_circle"></div>
                                                    Orange <IoClose className="d_closeicon" />
                                                </div>
                                            </div>
                                            <div className="d_close">2 <FaStar className=" d_staricon" /> & above<IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Cotton Silk <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Polka Print <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Party <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Daily Wear <IoClose className="d_closeicon" /></div>
                                        </div> */}
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
                                                                {categories.map((category, index) => (
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
                                                                    <p className="mb-0">{brand.brandname}<span>(10)</span></p>
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
                                        <div className="d_categorylist">
                                            <div className="d_acc">
                                                <div className="d_accitem">
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveSleeve(!isActiveSleeve)}>
                                                        <div className='d_title'>Sleeve Length</div>
                                                        <div className='d_icon'>{isActiveSleeve ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveSleeve &&
                                                        <>
                                                            <div className='mt-3'>
                                                                {displayedsleeve.map((sleeve, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('sleeves', sleeve.id, sleeve.sleevename)} checked={!!checkedFilters.sleeves[sleeve.id]} id={`sleeve-${sleeve.id}`} />
                                                                        <label htmlFor={`sleeve-${sleeve.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{sleeve.sleevename}<span>(10)</span></p>
                                                                    </div>
                                                                ))}
                                                                {sleeve.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'sleeve')} className='text-decoration-none'>
                                                                        {showMore.sleeve ? 'Show Less' : `Show More (${sleeve.length - initialDisplayCount})`}
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
                                                    <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveMaterial(!isActiveMaterial)}>
                                                        <div className='d_title'>Material</div>
                                                        <div className='d_icon'>{isActiveMaterial ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveMaterial &&
                                                        <>
                                                            <div className="d_search">
                                                                <IoSearch className='d_searchicon' />
                                                                <input type="text" name="material" value={searchmaterial} onChange={handleSearchChange} className="form-control " placeholder="Search" />
                                                            </div>
                                                            {displayedmaterial.map((material, index) => (
                                                                <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                    <input type="checkbox" onChange={() => handleCheckboxChange('materials', material.id, material.materialname)} checked={!!checkedFilters.materials[material.id]} id={`material-${material.id}`} />
                                                                    <label htmlFor={`material-${material.id}`} className="d_checkmark"></label>
                                                                    <p className="mb-0">{material.materialname}<span>(10)</span></p>
                                                                </div>
                                                            ))}
                                                            {filteredmaterial.length > initialDisplayCount && (
                                                                <Link to="" onClick={(e) => handleShowMore(e, 'material')} className='text-decoration-none'>
                                                                    {showMore.material ? 'Show Less' : `Show More (${filteredmaterial.length - initialDisplayCount})`}
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
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivePattern(!isActivePattern)}>
                                                        <div className='d_title'>Pattern</div>
                                                        <div className='d_icon'>{isActivePattern ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActivePattern &&
                                                        <>
                                                            <div className='mt-3'>
                                                                {displayedpattern.map((pattern, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('patterns', pattern.id, pattern.patternname)} checked={!!checkedFilters.patterns[pattern.id]} id={`pattern-${pattern.id}`} />
                                                                        <label htmlFor={`pattern-${pattern.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{pattern.patternname}<span>(10)</span></p>
                                                                    </div>
                                                                ))}
                                                                {pattern.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'pattern')} className='text-decoration-none'>
                                                                        {showMore.pattern ? 'Show Less' : `Show More (${pattern.length - initialDisplayCount})`}
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
                                                    <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveOccasion(!isActiveOccasion)}>
                                                        <div className='d_title'>Occasion</div>
                                                        <div className='d_icon'>{isActiveOccasion ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveOccasion &&
                                                        <>
                                                            <div className='mt-3'>
                                                                {displayedoccasion.map((occasion, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('occasions', occasion.id, occasion.occasionname)} checked={!!checkedFilters.occasions[occasion.id]} id={`occasion-${occasion.id}`} />
                                                                        <label htmlFor={`occasion-${occasion.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{occasion.occasionname}<span>(10)</span></p>
                                                                    </div>
                                                                ))}
                                                                {occasion.length > initialDisplayCount && (
                                                                    <Link to="#" onClick={(e) => handleShowMore(e, 'occasion')} className='text-decoration-none'>
                                                                        {showMore.occasion ? 'Show Less' : `Show More (${occasion.length - initialDisplayCount})`}
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
                                                    <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveStyle(!isActiveStyle)}>
                                                        <div className='d_title'>Style</div>
                                                        <div className='d_icon'>{isActiveStyle ? <FaMinus /> : <FaPlus />}</div>
                                                    </div>
                                                    {isActiveStyle &&
                                                        <>
                                                            <div className="d_search">
                                                                <IoSearch className='d_searchicon' />
                                                                <input type="text" name="style" value={searchstyle} onChange={handleSearchChange} className="form-control " placeholder="Search" />

                                                            </div>
                                                            {displayedstyle.map((style, index) => (
                                                                <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                    <input type="checkbox" onChange={() => handleCheckboxChange('styles', style.id, style.stylename)} checked={!!checkedFilters.styles[style.id]} id={`style-${style.id}`} />
                                                                    <label htmlFor={`style-${style.id}`} className="d_checkmark"></label>
                                                                    <p className="mb-0">{style.stylename}<span>(10)</span></p>
                                                                </div>
                                                            ))}
                                                            {filteredstyle.length > initialDisplayCount && (
                                                                <Link to="" onClick={(e) => handleShowMore(e, 'style')} className='text-decoration-none'>
                                                                    {showMore.style ? 'Show Less' : `Show More (${filteredstyle.length - initialDisplayCount})`}
                                                                </Link>
                                                            )}
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Offcanvas */}
                            <div
                                className={`offcanvas d_offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`}
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
                                            {/* <div className="d_filterlist d-flex flex-wrap">
                                            <div className="d_close">30% & more <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">M <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">BIBA <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">
                                                <div className="d-flex align-items-center">
                                                    <div className="d_circle"></div>
                                                    Orange <IoClose className="d_closeicon" />
                                                </div>
                                            </div>
                                            <div className="d_close">2 <FaStar className=" d_staricon" /> & above<IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Cotton Silk <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Polka Print <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Party <IoClose className="d_closeicon" /></div>
                                            <div className="d_close">Daily Wear <IoClose className="d_closeicon" /></div>
                                        </div> */}
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
                                                                    {categories.map((category, index) => (
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
                                                                        <p className="mb-0">{brand.brandname}<span>(10)</span></p>
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
                                            <div className="d_categorylist">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveSleeve(!isActiveSleeve)}>
                                                            <div className='d_title'>Sleeve Length</div>
                                                            <div className='d_icon'>{isActiveSleeve ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveSleeve &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    {displayedsleeve.map((sleeve, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('sleeves', sleeve.id, sleeve.sleevename)} checked={!!checkedFilters.sleeves[sleeve.id]} id={`sleeve-${sleeve.id}`} />
                                                                            <label htmlFor={`sleeve-${sleeve.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{sleeve.sleevename}<span>(10)</span></p>
                                                                        </div>
                                                                    ))}
                                                                    {sleeve.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'sleeve')} className='text-decoration-none'>
                                                                            {showMore.sleeve ? 'Show Less' : `Show More (${sleeve.length - initialDisplayCount})`}
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
                                                        <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveMaterial(!isActiveMaterial)}>
                                                            <div className='d_title'>Material</div>
                                                            <div className='d_icon'>{isActiveMaterial ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveMaterial &&
                                                            <>
                                                                <div className="d_search">
                                                                    <IoSearch className='d_searchicon' />
                                                                    <input type="text" name="material" value={searchmaterial} onChange={handleSearchChange} className="form-control " placeholder="Search" />
                                                                </div>
                                                                {displayedmaterial.map((material, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('materials', material.id, material.materialname)} checked={!!checkedFilters.materials[material.id]} id={`material-${material.id}`} />
                                                                        <label htmlFor={`material-${material.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{material.materialname}<span>(10)</span></p>
                                                                    </div>
                                                                ))}
                                                                {filteredmaterial.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'material')} className='text-decoration-none'>
                                                                        {showMore.material ? 'Show Less' : `Show More (${filteredmaterial.length - initialDisplayCount})`}
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
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivePattern(!isActivePattern)}>
                                                            <div className='d_title'>Pattern</div>
                                                            <div className='d_icon'>{isActivePattern ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActivePattern &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    {displayedpattern.map((pattern, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('patterns', pattern.id, pattern.patternname)} checked={!!checkedFilters.patterns[pattern.id]} id={`pattern-${pattern.id}`} />
                                                                            <label htmlFor={`pattern-${pattern.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{pattern.patternname}<span>(10)</span></p>
                                                                        </div>
                                                                    ))}
                                                                    {pattern.length > initialDisplayCount && (
                                                                        <Link to="" onClick={(e) => handleShowMore(e, 'pattern')} className='text-decoration-none'>
                                                                            {showMore.pattern ? 'Show Less' : `Show More (${pattern.length - initialDisplayCount})`}
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
                                                        <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActiveOccasion(!isActiveOccasion)}>
                                                            <div className='d_title'>Occasion</div>
                                                            <div className='d_icon'>{isActiveOccasion ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveOccasion &&
                                                            <>
                                                                <div className='mt-3'>
                                                                    {displayedoccasion.map((occasion, index) => (
                                                                        <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                            <input type="checkbox" onChange={() => handleCheckboxChange('occasions', occasion.id, occasion.occasionname)} checked={!!checkedFilters.occasions[occasion.id]} id={`occasion-${occasion.id}`} />
                                                                            <label htmlFor={`occasion-${occasion.id}`} className="d_checkmark"></label>
                                                                            <p className="mb-0">{occasion.occasionname}<span>(10)</span></p>
                                                                        </div>
                                                                    ))}
                                                                    {occasion.length > initialDisplayCount && (
                                                                        <Link to="#" onClick={(e) => handleShowMore(e, 'occasion')} className='text-decoration-none'>
                                                                            {showMore.occasion ? 'Show Less' : `Show More (${occasion.length - initialDisplayCount})`}
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
                                                        <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveStyle(!isActiveStyle)}>
                                                            <div className='d_title'>Style</div>
                                                            <div className='d_icon'>{isActiveStyle ? <FaMinus /> : <FaPlus />}</div>
                                                        </div>
                                                        {isActiveStyle &&
                                                            <>
                                                                <div className="d_search">
                                                                    <IoSearch className='d_searchicon' />
                                                                    <input type="text" name="style" value={searchstyle} onChange={handleSearchChange} className="form-control " placeholder="Search" />

                                                                </div>
                                                                {displayedstyle.map((style, index) => (
                                                                    <div key={index} className="d_cuscheckbox d_cur d-flex align-items-center">
                                                                        <input type="checkbox" onChange={() => handleCheckboxChange('styles', style.id, style.stylename)} checked={!!checkedFilters.styles[style.id]} id={`style-${style.id}`} />
                                                                        <label htmlFor={`style-${style.id}`} className="d_checkmark"></label>
                                                                        <p className="mb-0">{style.stylename}<span>(10)</span></p>
                                                                    </div>
                                                                ))}
                                                                {filteredstyle.length > initialDisplayCount && (
                                                                    <Link to="" onClick={(e) => handleShowMore(e, 'style')} className='text-decoration-none'>
                                                                        {showMore.style ? 'Show Less' : `Show More (${filteredstyle.length - initialDisplayCount})`}
                                                                    </Link>
                                                                )}
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="col-12 col-sm-8 col-lg-8 col-xl-9">
                                <div className="d_right">
                                    <div className="d_heading">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2 className='mb-0'>Indian Wear</h2>
                                            <div className="d_dropdown">
                                                <button className="d_dropbtn" onClick={toggleDropdown}>Sort by<MdKeyboardArrowDown className='ms-2' /></button>
                                                {isDropdownOpen && (
                                                    <div className="d_dropcon">
                                                        <p>Price : Low to High</p>
                                                        <p>Price : High to Low</p>
                                                        <p>Popularity</p>
                                                        <p>Best Sellers</p>
                                                        <p>New Arrivals</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d_trend mt-3">
                                        <div className="row gy-4">
                                            {filterItems.map((item, index) => {
                                                return (
                                                    <div key={item.id} className="col-12 col-sm-6 col-lg-6 col-xl-3">
                                                        <Link to='/womendetails'>
                                                            <div className="d_box">
                                                                <div className="d_img">
                                                                    <img src={require(`./../d_img/${item.image}`)} alt="" />
                                                                    {item.isBestSeller &&
                                                                        (<div className="d_seller">Best Seller</div>)}
                                                                    {item.isNewArrial &&
                                                                        (<div className="d_arrival">New Arrival</div>)}
                                                                    <div className="d_trendicon d-flex justify-content-center align-items-center d_cur">
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

export default Womenfilter
