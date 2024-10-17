import React, { useState } from 'react'
import ReactSlider from 'react-slider';
import './../css/womenfilter.css'
import { IoClose, IoSearch } from 'react-icons/io5'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'

const Womenfilter = () => {

    const [isActivecategory, setIsActivecategory] = useState(true);
    const [isActiveDiscounts, setIsActiveDiscounts] = useState(true);
    const [isActivePrice, setIsActivePrice] = useState(true);
    const [isActiveSize, setIsActiveSize] = useState(true);
    const [isActiveBrand, setIsActiveBrand] = useState(true);
    const [priceRange, setPriceRange] = useState([100, 1000]);
    const [showMore, setShowMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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

    const handleSliderChange = (newValue) => {
        setPriceRange(newValue);
    };

    // Number of items to display before "Show More" is clicked
    const initialDisplayCount = 5;

    // Logic to determine how many items to show
    const displayedSizes = showMore ? size : size.slice(0, initialDisplayCount);

    const handleShowMore = (e) => {
        e.preventDefault();
        setShowMore(!showMore);
    };

    

    // Filter brands based on the search term (case-insensitive)
    const filteredBrands = brands.filter(brand =>
        brand.brandname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const displayedbrands = showMore ? filteredBrands : filteredBrands.slice(0, initialDisplayCount);

    return (
        <>

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

            <section className='d_p-80 d_womenfilter'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-lg-3">
                            <div className="d_left">
                                <div className="d_head d-flex justify-content-between">
                                    <h5 className='mb-0'>Filters</h5>
                                    <div className="d_cta">
                                        <a href="" className='text-decoration-none'>Clear All</a>
                                    </div>
                                </div>
                                <div className="d_category">
                                    <div className="d_filterlist d-flex flex-wrap">
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
                                                        {categories.map((category, index) => (
                                                            <div key={index} class="d_cuscheckbox d_cur d-flex align-items-center">
                                                                <input type="checkbox" id={`category-${category.id}`} />
                                                                <label htmlFor={`category-${category.id}`} class="d_checkmark"></label>
                                                                <p class="mb-0">{category.label}</p>
                                                            </div>
                                                        ))}
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
                                                        {discount.map((discount, index) => (
                                                            <div key={index} class="d_cuscheckbox d_cur d-flex align-items-center">
                                                                <input type="checkbox" id={`discount-${discount.id}`} />
                                                                <label htmlFor={`discount-${discount.id}`} class="d_checkmark"></label>
                                                                <p class="mb-0">{discount.no}% or more</p>
                                                            </div>
                                                        ))}
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
                                                                renderTrack={(props, state) => (
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
                                                {isActiveSize &&
                                                    <>
                                                        {displayedSizes.map((size, index) => (
                                                            <div key={index} class="d_cuscheckbox d_cur d-flex align-items-center">
                                                                <input type="checkbox" id={`size-${size.id}`} />
                                                                <label htmlFor={`size-${size.id}`} class="d_checkmark"></label>
                                                                <p class="mb-0">{size.sizename}</p>
                                                            </div>
                                                        ))}
                                                        {size.length > initialDisplayCount && (
                                                            <a href="#" onClick={handleShowMore} className='text-decoration-none'>
                                                                {showMore ? 'Show Less' : `Show More (${size.length - initialDisplayCount})`}
                                                            </a>
                                                        )}
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d_categorylist">
                                        <div className="d_acc">
                                            <div className="d_accitem">
                                                <div className="d_acctitle mb-0 d-flex justify-content-between" onClick={() => setIsActiveBrand(!isActiveBrand)}>
                                                    <div className='d_title'>Brand</div>
                                                    <div className='d_icon'>{isActiveBrand ? <FaMinus /> : <FaPlus />}</div>
                                                </div>
                                                <div class="d_search">
                                                    <IoSearch className='d_searchicon' />
                                                    <input type="text" value={searchTerm} onChange={handleSearchChange}  class="form-control " placeholder="Search" />

                                                </div>
                                                {isActiveBrand &&
                                                    <>
                                                        {displayedbrands.map((brand, index) => (
                                                            <div key={index} class="d_cuscheckbox d_cur d-flex align-items-center">
                                                                <input type="checkbox" id={`brand-${brand.id}`} />
                                                                <label htmlFor={`brand-${brand.id}`} class="d_checkmark"></label>
                                                                <p class="mb-0">{brand.brandname}<span>(10)</span></p>
                                                            </div>
                                                        ))}
                                                        {filteredBrands.length > initialDisplayCount && (
                                                            <a href="#" onClick={handleShowMore} className='text-decoration-none'>
                                                                {showMore ? 'Show Less' : `Show More (${filteredBrands.length - initialDisplayCount})`}
                                                            </a>
                                                        )}
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-lg-9"></div>
                    </div>
                </div>
            </section>

            {/* Main section End */}

        </>
    )
}

export default Womenfilter
