import React from 'react'
import Navbar from './website/Common/Navbar'
import Banner from './website/Components/Banner'
import Category from './website/Components/Category'
import FeaturedHotels from './website/Components/FeaturedHotels'

const page = () => {
    return (
        <>
            <>
                {/*------------------ header-section ------------------*/}
                <Navbar />
                {/* ticket-modal */}
                <div className="modal-wrapper ticket">
                    <div //onClick="modalAction('.ticket')" 
                        className="anywhere-away" />
                    {/* change this */}
                    <div className="login-section account-section modal-main">
                        <div className="contact-form">
                            <div className="section-head">
                                <div className="section-title">
                                    <h3 className="title">Log in</h3>
                                    <p className="section-detail">Welcome to Hotelsun</p>
                                </div>
                                <span className="close-btn" //onClick="modalAction('.ticket')"
                                >
                                    <svg
                                        width={32}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={16} cy={16} r={16} fill="#FF385C" />
                                        <path
                                            d="M22.2188 9.77734L8.88614 23.1107"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22.2188 23.1099L8.88614 9.77654"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="form-section">
                                <div className="form-input">
                                    <div className="form-item">
                                        <label htmlFor="name">Name*</label>
                                        <input
                                            type="text"
                                            className="name form-control"
                                            id="name"
                                            placeholder="Name Here"
                                        />
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="password">Password*</label>
                                        <input
                                            type="password"
                                            className="password form-control"
                                            id="password"
                                            placeholder="******"
                                        />
                                    </div>
                                </div>
                                <div className="form-input forget-pass">
                                    <div className="form-item remember">
                                        <input type="checkbox" className="input-check" id="remember" />
                                        <label htmlFor="remember">Remeber Me</label>
                                    </div>
                                    <div className="form-item">
                                        <a href="#" className="forget text-end">
                                            Forget Password
                                        </a>
                                    </div>
                                </div>
                                <div className="form-input">
                                    <a href="dashboard.html" className="primary-btn">
                                        <span>Login</span>
                                        <span>
                                            <svg
                                                width={7}
                                                height={15}
                                                viewBox="0 0 7 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.25 10.5L5.04289 6.70711C5.37623 6.37377 5.54289 6.20711 5.54289 6C5.54289 5.79289 5.37623 5.62623 5.04289 5.29289L1.25 1.5"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <h4 className="option">OR</h4>
                                <div className="wrapper-social">
                                    <div className="social-item">
                                        <a href="#" className="icon-box">
                                            <span className="social-icon">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M18 12H22"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M20 14L20 10"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M8.5 12H15C15 15.5899 12.0899 18.5 8.5 18.5C4.91015 18.5 2 15.5899 2 12C2 8.41015 4.91015 5.5 8.5 5.5C10.2949 5.5 11.9199 6.22754 13.0962 7.40381"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="#" className="icon-box">
                                            <span className="social-icon">
                                                <svg
                                                    width={22}
                                                    height={22}
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x={1}
                                                        y={1}
                                                        width={20}
                                                        height={20}
                                                        rx={4}
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx={17}
                                                        cy={5}
                                                        r={1}
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                    <circle
                                                        cx={11}
                                                        cy={11}
                                                        r={5}
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="#" className="icon-box">
                                            <span className="social-icon">
                                                <svg
                                                    width={22}
                                                    height={21}
                                                    viewBox="0 0 22 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M21 16C19.8979 16 19.1559 16 18.6353 16.5886C18.0274 17.2761 17.3562 18 16.4384 18H15.6667C15.2339 18 14.8129 18.1404 14.4667 18.4L13.4 19.2C11.9778 20.2667 10.0222 20.2667 8.60001 19.2L7.53333 18.4C7.18714 18.1404 6.76608 18 6.33334 18L5.56154 18C4.64381 18 3.97263 17.2761 3.36467 16.5886C2.84415 16 2.10208 16 1 16L3.39999 14.2C4.40722 13.4446 5 12.259 5 11V10.5L4.49999 10.5C3.67157 10.5 3 9.82843 3 9C3 8.17158 3.67158 7.5 4.50001 7.5H5V7.00001C5 3.6863 7.6863 1 11 1.00001C14.3137 1.00001 17 3.6863 17 7.00001V7.5H17.5C18.3284 7.5 19 8.17158 19 9C19 9.82843 18.3284 10.5 17.5 10.5L17 10.5V11C17 12.259 17.5928 13.4446 18.6 14.2L21 16Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <span className="account">
                                        Dont’t have an aceount ? <a href="#">Create Account</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* change this */}
                </div>
                {/*-------------------- hero-section --------------------*/}
                <Banner />
                {/*-------------------- category-section --------------------*/}
                <Category />
                {/*-------------------- featured-section --------------------*/}
                <FeaturedHotels />
                {/*-------------------- service-section --------------------*/}
                <section className="service section-padding">
                    <div className="container">
                        <div
                            className="section-head"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={1000}
                        >
                            <div className="section-title">
                                <span className="subtitle">Services</span>
                                <h2 className="heading">Our Hotel Services</h2>
                            </div>
                            <a href="#" className="primary-btn">
                                <span>View More</span>
                                <span>
                                    <svg
                                        width={7}
                                        height={12}
                                        viewBox="0 0 7 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.25 10.5L5.04289 6.70711C5.37623 6.37377 5.54289 6.20711 5.54289 6C5.54289 5.79289 5.37623 5.62623 5.04289 5.29289L1.25 1.5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="service-section"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <div className="service-wrapper">
                            <div className="wrapper-inner">
                                <div className="wrapper-img">
                                    <a href="#">
                                        <img src="assets/img/wrapper-img/s-img-1.webp" alt="img" />
                                    </a>
                                </div>
                                <div className="wrapper-item">
                                    <div className="wrapper-content">
                                        <div className="room-inner">
                                            <p className="wrapper-title text-white">Gym</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Transform Your Body, Elevate Fitness
                                            </a>
                                        </div>
                                        <div className="room-inner room-inner-two">
                                            <p className="wrapper-title text-white">Gym</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Transform Your Body, Elevate Fitness
                                            </a>
                                            <p className="wrapper-description text-white">
                                                Experience culinary excellences our restaurant, where <br />
                                                every dish is crafted with passion &amp; precision. Indulge{" "}
                                                <br />
                                                in a symphony of flavors that promises.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-wrapper">
                            <div className="wrapper-inner">
                                <div className="wrapper-img">
                                    <a href="#">
                                        <img src="assets/img/wrapper-img/s-img-2.webp" alt="img" />
                                    </a>
                                </div>
                                <div className="wrapper-item">
                                    <div className="wrapper-content">
                                        <div className="room-inner">
                                            <p className="wrapper-title text-white">Pick Up &amp; Drop</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Effortless Transportation Pick Up &amp; Drop
                                            </a>
                                        </div>
                                        <div className="room-inner room-inner-two">
                                            <p className="wrapper-title text-white">Gym</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Transform Your Body, Elevate Fitness
                                            </a>
                                            <p className="wrapper-description text-white">
                                                Experience culinary excellences our restaurant, where <br />
                                                every dish is crafted with passion &amp; precision. Indulge{" "}
                                                <br />
                                                in a symphony of flavors that promises.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-wrapper is-active">
                            <div className="wrapper-inner">
                                <div className="wrapper-img">
                                    <a href="#">
                                        <img src="assets/img/wrapper-img/s-img-3.webp" alt="img" />
                                    </a>
                                </div>
                                <div className="wrapper-item">
                                    <div className="wrapper-content">
                                        <div className="room-inner">
                                            <p className="wrapper-title text-white">Restaurant</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                The Restaurant Center
                                            </a>
                                        </div>
                                        <div className="room-inner room-inner-two">
                                            <p className="wrapper-title text-white">Restaurant</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                The Restaurant Center
                                            </a>
                                            <p className="wrapper-description text-white">
                                                Experience culinary excellences our restaurant, where <br />
                                                every dish is crafted with passion &amp; precision. Indulge{" "}
                                                <br />
                                                in a symphony of flavors that promises.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-wrapper">
                            <div className="wrapper-inner">
                                <div className="wrapper-img">
                                    <a href="#">
                                        <img src="assets/img/wrapper-img/s-img-4.webp" alt="img" />
                                    </a>
                                </div>
                                <div className="wrapper-item">
                                    <div className="wrapper-content">
                                        <div className="room-inner">
                                            <p className="wrapper-title text-white">Swimming Pool</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Dive Into Refreshing Aquatic Bliss
                                            </a>
                                        </div>
                                        <div className="room-inner room-inner-two">
                                            <p className="wrapper-title text-white">Swimming Pool</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Dive Into Refreshing Aquatic Bliss
                                            </a>
                                            <p className="wrapper-description text-white">
                                                Experience culinary excellences our restaurant, where <br />
                                                every dish is crafted with passion &amp; precision. Indulge{" "}
                                                <br />
                                                in a symphony of flavors that promises.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-wrapper">
                            <div className="wrapper-inner">
                                <div className="wrapper-img">
                                    <a href="#">
                                        <img src="assets/img/wrapper-img/s-img-5.webp" alt="img" />
                                    </a>
                                </div>
                                <div className="wrapper-item">
                                    <div className="wrapper-content">
                                        <div className="room-inner">
                                            <p className="wrapper-title text-white">Parking Space</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Convenient Parking Secure Your Spot!
                                            </a>
                                        </div>
                                        <div className="room-inner room-inner-two">
                                            <p className="wrapper-title text-white">Parking Space</p>
                                            <a href="#" className="wrapper-detail text-white">
                                                Convenient Parking Secure Your Spot!
                                            </a>
                                            <p className="wrapper-description text-white">
                                                Experience culinary excellences our restaurant, where <br />
                                                every dish is crafted with passion &amp; precision. Indulge{" "}
                                                <br />
                                                in a symphony of flavors that promises.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-------------------- gallery-section --------------------*/}
                <section className="hotels section-padding">
                    <div className="container">
                        <div className="section-head" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="section-title">
                                <span className="subtitle">Our All Hotels</span>
                                <h2 className="heading">See all the Our Hotels</h2>
                            </div>
                            <div className="hotel-categories">
                                <a href="#" className="primary-btn">
                                    <span>All</span>
                                </a>
                                <a href="#" className="primary-btn">
                                    <span>Hotel</span>
                                </a>
                                <a href="#" className="primary-btn">
                                    <span>Villa</span>
                                </a>
                                <a href="#" className="primary-btn">
                                    <span>Resort</span>
                                </a>
                                <a href="#" className="primary-btn">
                                    <span>Duplex</span>
                                </a>
                            </div>
                        </div>
                        <div className="hotels-section">
                            <div className="row g-4 gy-5">
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-5.webp" alt="img" />
                                            <span className="wrapper-meta">Villa</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$4,999</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    A living room with a blue couch
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-6.webp" alt="img" />
                                            <span className="wrapper-meta">Hotel</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$4,000</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    Beautiful bedroom suite hotel&nbsp;
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-7.webp" alt="img" />
                                            <span className="wrapper-meta">Resort</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$3,500</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    Rendering modern bedroom
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-8.webp" alt="img" />
                                            <span className="wrapper-meta">Duplex</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$5,999</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    Modern luxury cozy bedroom
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-9.webp" alt="img" />
                                            <span className="wrapper-meta">Hotel</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$5,000</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    Modern bedroom suite in hotel
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-10.webp" alt="img" />
                                            <span className="wrapper-meta">Villa</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$2,500</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    Luxury Defined Bedrom Awaits
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-11.webp" alt="img" />
                                            <span className="wrapper-meta">Duplex</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$8,999</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    A bedroom with a large bed
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3">
                                    <div
                                        className="wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                        data-aos-duration={1000}
                                    >
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/w-img-12.webp" alt="img" />
                                            <span className="wrapper-meta">Resort</span>
                                            <a href="#" className="wrapper-icon">
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={40} height={40} rx={4} />
                                                    <path
                                                        d="M20.612 14.324L20 14.9633L19.388 14.324C17.6979 12.5587 14.9577 12.5587 13.2676 14.324C11.5775 16.0893 11.5775 18.9515 13.2676 20.7168L18.7759 26.4704C19.452 27.1765 20.548 27.1765 21.2241 26.4704L26.7324 20.7168C28.4225 18.9515 28.4225 16.0893 26.7324 14.324C25.0423 12.5587 22.3021 12.5587 20.612 14.324Z"
                                                        strokeWidth="1.3"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="wrapper-item">
                                            <div className="wrapper-content">
                                                <h4 className="wrapper-price">
                                                    <span className="price">$7,999</span>
                                                    <span className="price-text">Start from</span>
                                                </h4>
                                                <a href="hotel-details.html" className="c-wrapper-title">
                                                    A living room with a couch
                                                </a>
                                                <ul className="wrapper-list">
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={17}
                                                                viewBox="0 0 20 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.4438 5.98926V3.28373C18.4438 2.52959 17.9596 1.47626 15.6537 0.74081C14.1562 0.263066 12.1483 0 10 0C7.85172 0 5.84381 0.263066 4.34616 0.74081C2.04041 1.47626 1.55624 2.52959 1.55624 3.28373V5.98926C0.66925 6.16397 0 6.9178 0 7.81847V15.4042C0 15.8377 0.35141 16.1905 0.783234 16.1905H2.9245C3.35648 16.1905 3.70789 15.8378 3.70789 15.4042V14.0771H16.2923V15.4042C16.2923 15.8377 16.6435 16.1905 17.0755 16.1905H19.2168C19.6486 16.1905 20 15.8378 20 15.4042V7.81847C20 6.9178 19.3307 6.16397 18.4438 5.98926ZM2.34314 3.28373C2.34314 2.34799 3.74741 1.7603 4.5845 1.49326C6.00708 1.0394 7.9303 0.789656 10 0.789656C12.0695 0.789656 13.9928 1.0394 15.4153 1.49326C16.2524 1.7603 17.6569 2.34799 17.6569 3.28373V5.95098H16.7334V5.27142C16.7334 4.63351 16.2164 4.11473 15.5812 4.11473H12.1318C11.4964 4.11473 10.9796 4.63351 10.9796 5.27142V5.95098H9.13895V5.27142C9.13895 4.63351 8.62213 4.11473 7.98676 4.11473H4.53735C3.90213 4.11473 3.38516 4.63351 3.38516 5.27142V5.95098H2.34314V3.28373ZM11.7664 5.95098V5.27142C11.7664 5.07236 11.9337 4.90423 12.1318 4.90423H15.5812C15.7826 4.90423 15.9465 5.06899 15.9465 5.27142V5.95098H11.7664ZM4.17191 5.95098V5.27142C4.17191 5.06884 4.33594 4.90423 4.53735 4.90423H7.98676C8.18817 4.90423 8.3522 5.06899 8.3522 5.27142V5.95098H4.17191ZM0.786743 7.81847C0.786743 7.22404 1.30844 6.74063 1.94977 6.74063H18.0502C18.6916 6.74063 19.2133 7.22404 19.2133 7.81847V11.1732H11.5602C11.3429 11.1732 11.1668 11.3499 11.1668 11.568C11.1668 11.786 11.3429 11.9627 11.5602 11.9627H19.2133V13.2877H0.786743V11.9627H8.43979C8.65707 11.9627 8.83316 11.786 8.83316 11.568C8.83316 11.3499 8.65707 11.1732 8.43979 11.1732H0.786743V7.81847ZM2.92099 15.401H0.786743V14.0772H2.92099V15.401ZM17.079 15.401V14.0772H19.2133V15.401H17.079Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 3 Room </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.75 9.92578H1.25C0.56082 9.92578 0 10.4866 0 11.1758C0 11.865 0.56082 12.4258 1.25 12.4258H18.75C19.4392 12.4258 20 11.865 20 11.1758C20 10.4866 19.4392 9.92578 18.75 9.92578ZM18.75 11.5924H1.25C1.02082 11.5924 0.83332 11.4057 0.83332 11.1757C0.83332 10.9457 1.02082 10.7591 1.25 10.7591H18.75C18.9792 10.7591 19.1667 10.9457 19.1667 11.1757C19.1667 11.4057 18.9792 11.5924 18.75 11.5924Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.8652 11.6084C18.6394 11.5459 18.4127 11.6734 18.3502 11.8951L17.2019 15.9151C16.9477 16.8043 16.1236 17.4259 15.1986 17.4259H4.80273C3.87773 17.4259 3.05441 16.8043 2.79941 15.9151L1.65105 11.8951C1.58855 11.6734 1.36105 11.5459 1.13605 11.6084C0.914373 11.6717 0.786873 11.9017 0.850232 12.1234L1.99855 16.1434C2.35437 17.3892 3.50687 18.2592 4.80273 18.2592H15.1977C16.4936 18.2592 17.6469 17.3892 18.0027 16.1434L19.1511 12.1234C19.2144 11.9026 19.0869 11.6718 18.8652 11.6084Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M4.80161 15.76C4.61661 15.76 4.45243 15.635 4.40079 15.4575L3.85997 13.5625C3.79747 13.3417 3.56829 13.2125 3.34497 13.2759C3.12415 13.3392 2.99579 13.5692 3.05915 13.7909L3.59997 15.6859C3.75165 16.22 4.24665 16.5925 4.80165 16.5925C5.03165 16.5925 5.21833 16.4067 5.21833 16.1767C5.21829 15.9467 5.03161 15.76 4.80161 15.76Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M5.60235 17.4693C5.39653 17.3685 5.14735 17.4493 5.04317 17.656L4.20985 19.3226C4.10735 19.5285 4.19067 19.7785 4.39653 19.8818C4.45735 19.9118 4.52071 19.926 4.58321 19.926C4.73571 19.926 4.88239 19.8418 4.95571 19.6952L5.78903 18.0285C5.89153 17.8226 5.80817 17.5726 5.60235 17.4693Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.789 19.3234L14.9557 17.6567C14.8524 17.45 14.6024 17.3675 14.3965 17.47C14.1907 17.5733 14.1073 17.8233 14.2098 18.0292L15.0432 19.6959C15.1165 19.8417 15.2632 19.9259 15.4157 19.9259C15.4782 19.9259 15.5415 19.9117 15.6023 19.8825C15.8082 19.7792 15.8915 19.5292 15.789 19.3234Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M16.7382 0C16.3132 0 15.9132 0.16582 15.6123 0.46668L14.2898 1.78918C14.1273 1.95168 14.1273 2.21586 14.2898 2.37836C14.4523 2.54086 14.7165 2.54086 14.879 2.37836L16.2015 1.05668C16.344 0.913359 16.5348 0.83418 16.7423 0.83418C17.1606 0.83418 17.5006 1.17418 17.5006 1.5925V10.3425C17.5006 10.5725 17.6873 10.7592 17.9173 10.7592C18.1473 10.7592 18.334 10.5725 18.3348 10.3417V1.59168C18.3348 0.71418 17.6215 0 16.7382 0Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M15.2967 2.20662L14.4634 1.37329C14.3676 1.27747 14.2351 1.23329 14.1009 1.25662L12.0176 1.5983C11.8643 1.62247 11.7384 1.7308 11.6893 1.8783C11.6401 2.0258 11.6776 2.1883 11.7859 2.29912L14.2859 4.87412C14.3643 4.95662 14.4734 5.0008 14.5843 5.0008C14.6234 5.0008 14.6634 4.99498 14.7034 4.98412C14.8518 4.9408 14.9643 4.8183 14.9943 4.66662L15.4109 2.5833C15.4384 2.44662 15.3951 2.30494 15.2967 2.20662ZM14.3309 3.72494L12.9384 2.2908L14.0242 2.1133L14.5484 2.63747L14.3309 3.72494Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M9.87836 5.04839C9.71586 4.88589 9.45168 4.88589 9.28918 5.04839L8.45586 5.88171C8.29336 6.04421 8.29336 6.30839 8.45586 6.47089C8.53754 6.55171 8.64418 6.59257 8.75086 6.59257C8.85754 6.59257 8.96418 6.55175 9.04504 6.47089L9.87836 5.63757C10.0409 5.47503 10.0409 5.21089 9.87836 5.04839Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11.5444 6.71489C11.3819 6.55239 11.1177 6.55239 10.9552 6.71489L10.1219 7.54821C9.95938 7.71071 9.95938 7.97489 10.1219 8.13739C10.2036 8.21821 10.3102 8.25907 10.4169 8.25907C10.5236 8.25907 10.6302 8.21825 10.7111 8.13739L11.5444 7.30407C11.7069 7.14157 11.7069 6.87739 11.5444 6.71489Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M12.3784 4.21489C12.2159 4.05239 11.9517 4.05239 11.7892 4.21489L10.9559 5.04821C10.7934 5.21071 10.7934 5.47489 10.9559 5.63739C11.0375 5.71821 11.1442 5.75907 11.2509 5.75907C11.3575 5.75907 11.4642 5.71825 11.545 5.63739L12.3784 4.80407C12.5409 4.64157 12.5409 4.37739 12.3784 4.21489Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 1 Bathroom </span>
                                                    </li>
                                                    <li className="list-item">
                                                        <span className="list-icon">
                                                            <svg
                                                                width={19}
                                                                height={19}
                                                                viewBox="0 0 19 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.56202 2.37448C3.46068 2.37448 3.35934 2.33569 3.28176 2.25889L1.97863 0.954978L0.675511 2.25889C0.521131 2.41327 0.270165 2.41327 0.115785 2.25889C-0.038595 2.10451 -0.038595 1.85355 0.115785 1.69917L1.69917 0.115785C1.85355 -0.038595 2.10451 -0.038595 2.25889 0.115785L3.84228 1.69917C3.99666 1.85355 3.99666 2.10451 3.84228 2.25889C3.76469 2.33569 3.66335 2.37448 3.56202 2.37448Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.021 19C16.9197 19 16.8184 18.9612 16.7408 18.8845C16.5864 18.7301 16.5864 18.4791 16.7408 18.3247L18.0439 17.0216L16.7408 15.7185C16.5864 15.5641 16.5864 15.3131 16.7408 15.1588C16.8952 15.0044 17.1461 15.0044 17.3005 15.1588L18.8839 16.7421C19.0383 16.8965 19.0383 17.1475 18.8839 17.3019L17.3005 18.8852C17.2237 18.9612 17.1224 19 17.021 19Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M1.97983 18.9999C1.76132 18.9999 1.58398 18.8226 1.58398 18.6041V0.593111C1.58398 0.374605 1.76132 0.197266 1.97983 0.197266C2.19834 0.197266 2.37568 0.374605 2.37568 0.593111V18.6041C2.37568 18.8226 2.19834 18.9999 1.97983 18.9999Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M18.4068 17.4167H0.395846C0.177339 17.4167 0 17.2394 0 17.0208C0 16.8023 0.177339 16.625 0.395846 16.625H18.4068C18.6253 16.625 18.8027 16.8023 18.8027 17.0208C18.8027 17.2394 18.6253 17.4167 18.4068 17.4167Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 7.91641C10.2435 7.91641 10.1953 7.9077 10.1493 7.89028L5.00334 5.91105C4.85054 5.85247 4.75 5.70521 4.75 5.54133C4.75 5.37745 4.85054 5.2302 5.00334 5.17161L10.1493 3.19239C10.2404 3.15755 10.3425 3.15755 10.4336 3.19239L15.5795 5.17161C15.7331 5.2302 15.8337 5.37745 15.8337 5.54133C15.8337 5.70521 15.7331 5.85247 15.5803 5.91105L10.4343 7.89028C10.3884 7.9077 10.3401 7.91641 10.2918 7.91641ZM6.24867 5.54133L10.2918 7.09622L14.335 5.54133L10.2918 3.98645L6.24867 5.54133Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2918 14.25C10.2435 14.25 10.1953 14.2413 10.1493 14.2238L5.00334 12.2446C4.85054 12.186 4.75 12.0388 4.75 11.8749V5.54135C4.75 5.32285 4.92734 5.14551 5.14585 5.14551C5.36435 5.14551 5.54169 5.32285 5.54169 5.54135V11.6033L10.2918 13.4306L15.042 11.6033V5.54135C15.042 5.32285 15.2193 5.14551 15.4378 5.14551C15.6563 5.14551 15.8337 5.32285 15.8337 5.54135V11.8749C15.8337 12.0388 15.7331 12.186 15.5803 12.2446L10.4343 14.2238C10.3884 14.2413 10.3401 14.25 10.2918 14.25Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.2923 14.2497C10.0738 14.2497 9.89648 14.0724 9.89648 13.8539V7.52036C9.89648 7.30185 10.0738 7.12451 10.2923 7.12451C10.5108 7.12451 10.6882 7.30185 10.6882 7.52036V13.8539C10.6882 14.0724 10.5108 14.2497 10.2923 14.2497Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="list-text"> 8x9 m2 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper-review">
                                                <div className="wrapper-list">
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={16}
                                                                height={18}
                                                                viewBox="0 0 16 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15 8.11111C15 12.0385 10.625 17 8 17C5.375 17 1 12.0385 1 8.11111C1 4.18375 4.13401 1 8 1C11.866 1 15 4.18375 15 8.11111Z"
                                                                    stroke="currentColor"
                                                                />
                                                                <path
                                                                    d="M10.3333 8.2C10.3333 9.52548 9.28866 10.6 8 10.6C6.71134 10.6 5.66667 9.52548 5.66667 8.2C5.66667 6.87452 6.71134 5.8 8 5.8C9.28866 5.8 10.3333 6.87452 10.3333 8.2Z"
                                                                    stroke="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">Finland</p>
                                                    </div>
                                                    <div className="devider" />
                                                    <div className="list-item">
                                                        <span>
                                                            <svg
                                                                width={96}
                                                                height={16}
                                                                viewBox="0 0 96 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M83.7759 10.2321L82.9144 15.5234C82.8911 15.6783 82.9493 15.8291 83.0696 15.9229C83.1899 16.0126 83.3491 16.0248 83.4771 15.9555L87.9981 13.4525L92.519 15.9514C92.5772 15.984 92.6393 15.9963 92.7014 15.9963C92.7829 15.9963 92.8605 15.9718 92.9304 15.9188C93.0507 15.8291 93.1089 15.6742 93.0856 15.5193L92.2241 10.228L95.8835 6.48167C95.9883 6.3716 96.0271 6.21262 95.9805 6.06179C95.934 5.91503 95.8137 5.80497 95.6662 5.78458L90.6097 5.01412L88.3473 0.207903C88.2154 -0.0693009 87.7807 -0.0693009 87.6527 0.207903L85.3903 5.0182L80.3338 5.79274C80.1863 5.81312 80.066 5.92319 80.0195 6.06994C79.9729 6.21669 80.0117 6.37976 80.1165 6.48982L83.7759 10.2321ZM85.7007 5.79681C85.8288 5.77643 85.9374 5.6949 85.9918 5.5726L87.9981 1.30856L90.0005 5.5726C90.0587 5.6949 90.1673 5.77643 90.2915 5.79681L94.7698 6.48167L91.5294 9.79996C91.4363 9.89372 91.3975 10.0282 91.4169 10.1628L92.1814 14.8508L88.1766 12.6372C88.1184 12.6046 88.0563 12.5924 87.9942 12.5924C87.9321 12.5924 87.87 12.6087 87.8118 12.6372L83.8108 14.8467L84.5753 10.1587C84.5986 10.0282 84.5559 9.88964 84.4628 9.79588L81.2225 6.47759L85.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M63.7759 10.2321L62.9144 15.5234C62.8911 15.6783 62.9493 15.8291 63.0696 15.9229C63.1899 16.0126 63.3491 16.0248 63.4771 15.9555L67.9981 13.4525L72.519 15.9514C72.5772 15.984 72.6393 15.9963 72.7014 15.9963C72.7829 15.9963 72.8605 15.9718 72.9304 15.9188C73.0507 15.8291 73.1089 15.6742 73.0856 15.5193L72.2241 10.228L75.8835 6.48167C75.9883 6.3716 76.0271 6.21262 75.9805 6.06179C75.934 5.91503 75.8137 5.80497 75.6662 5.78458L70.6097 5.01412L68.3473 0.207903C68.2154 -0.0693009 67.7807 -0.0693009 67.6527 0.207903L65.3903 5.0182L60.3338 5.79274C60.1863 5.81312 60.066 5.92319 60.0195 6.06994C59.9729 6.21669 60.0117 6.37976 60.1165 6.48982L63.7759 10.2321ZM65.7007 5.79681C65.8288 5.77643 65.9374 5.6949 65.9918 5.5726L67.9981 1.30856L70.0005 5.5726C70.0587 5.6949 70.1673 5.77643 70.2915 5.79681L74.7698 6.48167L71.5294 9.79996C71.4363 9.89372 71.3975 10.0282 71.4169 10.1628L72.1814 14.8508L68.1766 12.6372C68.1184 12.6046 68.0563 12.5924 67.9942 12.5924C67.9321 12.5924 67.87 12.6087 67.8118 12.6372L63.8108 14.8467L64.5753 10.1587C64.5986 10.0282 64.5559 9.88964 64.4628 9.79588L61.2225 6.47759L65.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M67.5 1.5L66.5 3.5L65.5 5.5L60.5 6.5L64.5 10.5L63.5 15.5L68 13L72.5 15.5V14L72 11.5L71.5 10H72L72.5 9.5L73.5 8.5L74 7.5L75 7L75.5 6H75H73L71.5 5.5H70.5L70 5L69.5 3.5L68.5 2L68 0.5L67.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M43.7759 10.2321L42.9144 15.5234C42.8911 15.6783 42.9493 15.8291 43.0696 15.9229C43.1899 16.0126 43.3491 16.0248 43.4771 15.9555L47.9981 13.4525L52.519 15.9514C52.5772 15.984 52.6393 15.9963 52.7014 15.9963C52.7829 15.9963 52.8605 15.9718 52.9304 15.9188C53.0507 15.8291 53.1089 15.6742 53.0856 15.5193L52.2241 10.228L55.8835 6.48167C55.9883 6.3716 56.0271 6.21262 55.9805 6.06179C55.934 5.91503 55.8137 5.80497 55.6662 5.78458L50.6097 5.01412L48.3473 0.207903C48.2154 -0.0693009 47.7807 -0.0693009 47.6527 0.207903L45.3903 5.0182L40.3338 5.79274C40.1863 5.81312 40.066 5.92319 40.0195 6.06994C39.9729 6.21669 40.0117 6.37976 40.1165 6.48982L43.7759 10.2321ZM45.7007 5.79681C45.8288 5.77643 45.9374 5.6949 45.9918 5.5726L47.9981 1.30856L50.0005 5.5726C50.0587 5.6949 50.1673 5.77643 50.2915 5.79681L54.7698 6.48167L51.5294 9.79996C51.4363 9.89372 51.3975 10.0282 51.4169 10.1628L52.1814 14.8508L48.1766 12.6372C48.1184 12.6046 48.0563 12.5924 47.9942 12.5924C47.9321 12.5924 47.87 12.6087 47.8118 12.6372L43.8108 14.8467L44.5753 10.1587C44.5986 10.0282 44.5559 9.88964 44.4628 9.79588L41.2225 6.47759L45.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M47.5 1.5L46.5 3.5L45.5 5.5L40.5 6.5L44.5 10.5L43.5 15.5L48 13L52.5 15.5V14L52 11.5L51.5 10H52L52.5 9.5L53.5 8.5L54 7.5L55 7L55.5 6H55H53L51.5 5.5H50.5L50 5L49.5 3.5L48.5 2L48 0.5L47.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M23.7759 10.2321L22.9144 15.5234C22.8911 15.6783 22.9493 15.8291 23.0696 15.9229C23.1899 16.0126 23.3491 16.0248 23.4771 15.9555L27.9981 13.4525L32.519 15.9514C32.5772 15.984 32.6393 15.9963 32.7014 15.9963C32.7829 15.9963 32.8605 15.9718 32.9304 15.9188C33.0507 15.8291 33.1089 15.6742 33.0856 15.5193L32.2241 10.228L35.8835 6.48167C35.9883 6.3716 36.0271 6.21262 35.9805 6.06179C35.934 5.91503 35.8137 5.80497 35.6662 5.78458L30.6097 5.01412L28.3473 0.207903C28.2154 -0.0693009 27.7807 -0.0693009 27.6527 0.207903L25.3903 5.0182L20.3338 5.79274C20.1863 5.81312 20.066 5.92319 20.0195 6.06994C19.9729 6.21669 20.0117 6.37976 20.1165 6.48982L23.7759 10.2321ZM25.7007 5.79681C25.8288 5.77643 25.9374 5.6949 25.9918 5.5726L27.9981 1.30856L30.0005 5.5726C30.0587 5.6949 30.1673 5.77643 30.2915 5.79681L34.7698 6.48167L31.5294 9.79996C31.4363 9.89372 31.3975 10.0282 31.4169 10.1628L32.1814 14.8508L28.1766 12.6372C28.1184 12.6046 28.0563 12.5924 27.9942 12.5924C27.9321 12.5924 27.87 12.6087 27.8118 12.6372L23.8108 14.8467L24.5753 10.1587C24.5986 10.0282 24.5559 9.88964 24.4628 9.79588L21.2225 6.47759L25.7007 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M27.5 1.5L26.5 3.5L25.5 5.5L20.5 6.5L24.5 10.5L23.5 15.5L28 13L32.5 15.5V14L32 11.5L31.5 10H32L32.5 9.5L33.5 8.5L34 7.5L35 7L35.5 6H35H33L31.5 5.5H30.5L30 5L29.5 3.5L28.5 2L28 0.5L27.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M3.77592 10.2321L2.91442 15.5234C2.89114 15.6783 2.94935 15.8291 3.06965 15.9229C3.18995 16.0126 3.34905 16.0248 3.47711 15.9555L7.99806 13.4525L12.519 15.9514C12.5772 15.984 12.6393 15.9963 12.7014 15.9963C12.7829 15.9963 12.8605 15.9718 12.9304 15.9188C13.0507 15.8291 13.1089 15.6742 13.0856 15.5193L12.2241 10.228L15.8835 6.48167C15.9883 6.3716 16.0271 6.21262 15.9805 6.06179C15.934 5.91503 15.8137 5.80497 15.6662 5.78458L10.6097 5.01412L8.34732 0.207903C8.21537 -0.0693009 7.78074 -0.0693009 7.65268 0.207903L5.39027 5.0182L0.333795 5.79274C0.186331 5.81312 0.0660312 5.92319 0.0194635 6.06994C-0.0271041 6.21669 0.0117023 6.37976 0.11648 6.48982L3.77592 10.2321ZM5.70072 5.79681C5.82878 5.77643 5.93744 5.6949 5.99177 5.5726L7.99806 1.30856L10.0005 5.5726C10.0587 5.6949 10.1673 5.77643 10.2915 5.79681L14.7698 6.48167L11.5294 9.79996C11.4363 9.89372 11.3975 10.0282 11.4169 10.1628L12.1814 14.8508L8.17657 12.6372C8.11836 12.6046 8.05627 12.5924 7.99418 12.5924C7.93209 12.5924 7.87 12.6087 7.81179 12.6372L3.81085 14.8467L4.57534 10.1587C4.59862 10.0282 4.55593 9.88964 4.4628 9.79588L1.22246 6.47759L5.70072 5.79681Z"
                                                                    fill="#FBB03B"
                                                                />
                                                                <path
                                                                    d="M7.5 1.5L6.5 3.5L5.5 5.5L0.5 6.5L4.5 10.5L3.5 15.5L8 13L12.5 15.5V14L12 11.5L11.5 10H12L12.5 9.5L13.5 8.5L14 7.5L15 7L15.5 6H15H13L11.5 5.5H10.5L10 5L9.5 3.5L8.5 2L8 0.5L7.5 1.5Z"
                                                                    fill="#FBB03B"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <p className="list-text">1.5k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-btn">
                                <a href="#" className="primary-btn">
                                    <span>View More</span>
                                    <span>
                                        <svg
                                            width={7}
                                            height={12}
                                            viewBox="0 0 7 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.25 10.5L5.04289 6.70711C5.37623 6.37377 5.54289 6.20711 5.54289 6C5.54289 5.79289 5.37623 5.62623 5.04289 5.29289L1.25 1.5"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-------------------- customer-section --------------------*/}
                <section
                    className="customer"
                    style={{
                        background:
                            "url(assets/img/background/customer-bg.webp) no-repeat center / cover"
                    }}
                >
                    <div className="container">
                        <div className="customer-section">
                            <div
                                className="customer-intro"
                                style={{
                                    background:
                                        "url(assets/img/background/customer-ng-1.webp) no-repeat center / cover"
                                }}
                                data-aos="zoom-in"
                                data-aos-duration={1000}
                            >
                                <div className="wrapper-vedio">
                                    <div className="video-main">
                                        <div className="promo-video">
                                            <div className="waves-block">
                                                <div className="waves wave-1" />
                                                <div className="waves wave-2" />
                                                <div className="waves wave-3" />
                                            </div>
                                        </div>
                                        <a
                                            href="https://www.youtube.com/watch?v=BqI0Q7e4kbk"
                                            className="video video-popup mfp-iframe"
                                            data-lity=""
                                        >
                                            <span>
                                                <svg
                                                    width={17}
                                                    height={20}
                                                    viewBox="0 0 17 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.0312 8.80859C16.1211 9.47656 16.1211 11.0586 15.0312 11.7266L2.65625 19.0391C1.53125 19.707 0.125 18.8984 0.125 17.5625V2.9375C0.125 1.49609 1.63672 0.898438 2.65625 1.49609L15.0312 8.80859Z"
                                                        fill="#086AD8"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="counterup-section">
                                <div className="counter-wrapper">
                                    <div className="counterup">
                                        <h2
                                            className="counter-text"
                                            data-scroll-qs="scroll"
                                            data-count-qs={86}
                                            data-type-qs="k+"
                                            data-speed-qs={600}
                                        />
                                    </div>
                                    <div className="devider" />
                                    <p className="wrapper-detail">Satisfactions Customer</p>
                                </div>
                                <div className="counter-wrapper">
                                    <div className="counterup">
                                        <h2
                                            className="counter-text"
                                            data-scroll-qs="scroll"
                                            data-count-qs={12}
                                            data-type-qs="+"
                                            data-speed-qs={600}
                                        />
                                    </div>
                                    <div className="devider" />
                                    <p className="wrapper-detail">Years Of Experience</p>
                                </div>
                                <div className="counter-wrapper">
                                    <div className="counterup">
                                        <h2
                                            className="counter-text"
                                            data-scroll-qs="scroll"
                                            data-count-qs={986}
                                            data-type-qs="+"
                                            data-speed-qs={600}
                                        />
                                    </div>
                                    <div className="devider" />
                                    <p className="wrapper-detail">Total Hotel</p>
                                </div>
                                <div className="counter-wrapper">
                                    <div className="counterup">
                                        <h2
                                            className="counter-text"
                                            data-scroll-qs="scroll"
                                            data-count-qs={11}
                                            data-type-qs="k+"
                                            data-speed-qs={600}
                                        />
                                    </div>
                                    <div className="devider" />
                                    <p className="wrapper-detail">Total Staffs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-------------------- testimonial-section --------------------*/}
                <section className="testimonial section-padding">
                    <div className="container">
                        <div
                            className="section-title center-item"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={1000}
                        >
                            <span className="subtitle">Testimonial</span>
                            <h2 className="heading">Customer Say About Our Services</h2>
                        </div>
                        <div className="testimonial-section">
                            <div className="qs-wrapper">
                                <div className="qs-slide">
                                    <div className="testimonial-wrapper">
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/t-img-1.webp" alt="img" />
                                        </div>
                                        <div className="wrapper-item">
                                            <span className="wrapper-quote">
                                                <svg
                                                    width={60}
                                                    height={46}
                                                    viewBox="0 0 60 46"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z"
                                                        fill="#2B74FE"
                                                    />
                                                    <path
                                                        d="M22.3404 4.98866C19.599 1.94659 16.2947 0.404053 12.519 0.404053C9.11988 0.404053 6.25406 1.61554 4.0016 4.00476C1.76848 6.37335 0.636094 9.31429 0.636094 12.746C0.636094 15.9922 1.79766 18.885 4.08832 21.3442C6.10488 23.5089 8.61996 24.8875 11.5775 25.4524C11.0569 29.451 7.55414 33.0693 1.14562 36.221L0 36.7842L4.65094 45.596L5.73832 45.0474C19.4621 38.1226 26.4207 28.3352 26.4207 15.9572C26.4206 11.6838 25.0477 7.99347 22.3404 4.98866ZM5.70223 42.2725L3.3777 37.8681C10.5118 34.1011 14.1267 29.5734 14.1267 24.3977V23.2921L13.0282 23.1653C10.1236 22.8301 7.79297 21.6812 5.90367 19.6528C4.02855 17.64 3.11719 15.3807 3.11719 12.746C3.11719 9.92894 3.99703 7.62632 5.80676 5.70691C7.5968 3.80823 9.79254 2.88515 12.519 2.88515C15.6047 2.88515 18.2146 4.11644 20.497 6.64956C22.8135 9.22019 23.9395 12.2648 23.9395 15.9572C23.9395 21.6289 22.3352 26.7496 19.1708 31.1768C16.152 35.4002 11.6243 39.1294 5.70223 42.2725Z"
                                                        fill="#2B74FE"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="wrapper-review">
                                                <p className="review-text">Quality Service</p>
                                                <span className="review-icon">
                                                    <svg
                                                        width={134}
                                                        height={18}
                                                        viewBox="0 0 134 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M36.2295 1.14427C36.9537 -0.381422 39.0462 -0.381425 39.7705 1.14427L41.0221 3.78106C41.3097 4.38691 41.8656 4.80684 42.5087 4.904L45.3074 5.32682C46.9268 5.57148 47.5734 7.64059 46.4016 8.82817L44.3764 10.8806C43.9111 11.3522 43.6988 12.0317 43.8086 12.6976L44.2867 15.5957C44.5633 17.2726 42.8704 18.5514 41.422 17.7596L38.9187 16.3913C38.3436 16.0769 37.6564 16.0769 37.0813 16.3913L34.578 17.7596C33.1296 18.5514 31.4367 17.2726 31.7133 15.5957L32.1914 12.6976C32.3012 12.0317 32.0889 11.3522 31.6236 10.8806L29.5984 8.82818C28.4266 7.64059 29.0732 5.57148 30.6926 5.32682L33.4913 4.904C34.1344 4.80684 34.6903 4.38691 34.9779 3.78106L36.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M65.2295 1.14427C65.9537 -0.381422 68.0462 -0.381425 68.7705 1.14427L70.0221 3.78106C70.3097 4.38691 70.8656 4.80684 71.5087 4.904L74.3074 5.32682C75.9268 5.57148 76.5734 7.64059 75.4016 8.82817L73.3764 10.8806C72.9111 11.3522 72.6988 12.0317 72.8086 12.6976L73.2867 15.5957C73.5633 17.2726 71.8704 18.5514 70.422 17.7596L67.9187 16.3913C67.3436 16.0769 66.6564 16.0769 66.0813 16.3913L63.578 17.7596C62.1296 18.5514 60.4367 17.2726 60.7133 15.5957L61.1914 12.6976C61.3012 12.0317 61.0889 11.3522 60.6236 10.8806L58.5984 8.82818C57.4266 7.64059 58.0732 5.57148 59.6926 5.32682L62.4913 4.904C63.1344 4.80684 63.6903 4.38691 63.9779 3.78106L65.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M94.2295 1.14427C94.9537 -0.381422 97.0462 -0.381425 97.7705 1.14427L99.0221 3.78106C99.3097 4.38691 99.8656 4.80684 100.509 4.904L103.307 5.32682C104.927 5.57148 105.573 7.64059 104.402 8.82817L102.376 10.8806C101.911 11.3522 101.699 12.0317 101.809 12.6976L102.287 15.5957C102.563 17.2726 100.87 18.5514 99.422 17.7596L96.9187 16.3913C96.3436 16.0769 95.6564 16.0769 95.0813 16.3913L92.578 17.7596C91.1296 18.5514 89.4367 17.2726 89.7133 15.5957L90.1914 12.6976C90.3012 12.0317 90.0889 11.3522 89.6236 10.8806L87.5984 8.82818C86.4266 7.64059 87.0732 5.57148 88.6926 5.32682L91.4913 4.904C92.1344 4.80684 92.6903 4.38691 92.9779 3.78106L94.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M123.23 1.14427C123.954 -0.381422 126.046 -0.381425 126.77 1.14427L128.022 3.78106C128.31 4.38691 128.866 4.80684 129.509 4.904L132.307 5.32682C133.927 5.57148 134.573 7.64059 133.402 8.82817L131.376 10.8806C130.911 11.3522 130.699 12.0317 130.809 12.6976L131.287 15.5957C131.563 17.2726 129.87 18.5514 128.422 17.7596L125.919 16.3913C125.344 16.0769 124.656 16.0769 124.081 16.3913L121.578 17.7596C120.13 18.5514 118.437 17.2726 118.713 15.5957L119.191 12.6976C119.301 12.0317 119.089 11.3522 118.624 10.8806L116.598 8.82818C115.427 7.64059 116.073 5.57148 117.693 5.32682L120.491 4.904C121.134 4.80684 121.69 4.38691 121.978 3.78106L123.23 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="wrapper-content">
                                                <p className="wrapper-detail">
                                                    In this everi evolving digital understand the significance{" "}
                                                    <br />
                                                    of staying ahead as through our blog invite explore the{" "}
                                                    <br />
                                                    dynamic our world of IT with us decoding algorithms to{" "}
                                                    <br />
                                                    unraveling It is a long established.
                                                </p>
                                            </div>
                                            <div className="aurthor">
                                                <div className="aurthor-img">
                                                    <img src="assets/img/wrapper-img/aurthor-1.png" alt="img" />
                                                </div>
                                                <div className="aurthor-content">
                                                    <h5 className="aurthor-title">Matthew C. Lansberry</h5>
                                                    <p className="aurthor-detail">CEO &amp; Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="qs-slide">
                                    <div className="testimonial-wrapper">
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/t-img-2.webp" alt="img" />
                                        </div>
                                        <div className="wrapper-item">
                                            <span className="wrapper-quote">
                                                <svg
                                                    width={60}
                                                    height={46}
                                                    viewBox="0 0 60 46"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z"
                                                        fill="#2B74FE"
                                                    />
                                                    <path
                                                        d="M22.3404 4.98866C19.599 1.94659 16.2947 0.404053 12.519 0.404053C9.11988 0.404053 6.25406 1.61554 4.0016 4.00476C1.76848 6.37335 0.636094 9.31429 0.636094 12.746C0.636094 15.9922 1.79766 18.885 4.08832 21.3442C6.10488 23.5089 8.61996 24.8875 11.5775 25.4524C11.0569 29.451 7.55414 33.0693 1.14562 36.221L0 36.7842L4.65094 45.596L5.73832 45.0474C19.4621 38.1226 26.4207 28.3352 26.4207 15.9572C26.4206 11.6838 25.0477 7.99347 22.3404 4.98866ZM5.70223 42.2725L3.3777 37.8681C10.5118 34.1011 14.1267 29.5734 14.1267 24.3977V23.2921L13.0282 23.1653C10.1236 22.8301 7.79297 21.6812 5.90367 19.6528C4.02855 17.64 3.11719 15.3807 3.11719 12.746C3.11719 9.92894 3.99703 7.62632 5.80676 5.70691C7.5968 3.80823 9.79254 2.88515 12.519 2.88515C15.6047 2.88515 18.2146 4.11644 20.497 6.64956C22.8135 9.22019 23.9395 12.2648 23.9395 15.9572C23.9395 21.6289 22.3352 26.7496 19.1708 31.1768C16.152 35.4002 11.6243 39.1294 5.70223 42.2725Z"
                                                        fill="#2B74FE"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="wrapper-review">
                                                <p className="review-text">Quality Service</p>
                                                <span className="review-icon">
                                                    <svg
                                                        width={134}
                                                        height={18}
                                                        viewBox="0 0 134 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M36.2295 1.14427C36.9537 -0.381422 39.0462 -0.381425 39.7705 1.14427L41.0221 3.78106C41.3097 4.38691 41.8656 4.80684 42.5087 4.904L45.3074 5.32682C46.9268 5.57148 47.5734 7.64059 46.4016 8.82817L44.3764 10.8806C43.9111 11.3522 43.6988 12.0317 43.8086 12.6976L44.2867 15.5957C44.5633 17.2726 42.8704 18.5514 41.422 17.7596L38.9187 16.3913C38.3436 16.0769 37.6564 16.0769 37.0813 16.3913L34.578 17.7596C33.1296 18.5514 31.4367 17.2726 31.7133 15.5957L32.1914 12.6976C32.3012 12.0317 32.0889 11.3522 31.6236 10.8806L29.5984 8.82818C28.4266 7.64059 29.0732 5.57148 30.6926 5.32682L33.4913 4.904C34.1344 4.80684 34.6903 4.38691 34.9779 3.78106L36.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M65.2295 1.14427C65.9537 -0.381422 68.0462 -0.381425 68.7705 1.14427L70.0221 3.78106C70.3097 4.38691 70.8656 4.80684 71.5087 4.904L74.3074 5.32682C75.9268 5.57148 76.5734 7.64059 75.4016 8.82817L73.3764 10.8806C72.9111 11.3522 72.6988 12.0317 72.8086 12.6976L73.2867 15.5957C73.5633 17.2726 71.8704 18.5514 70.422 17.7596L67.9187 16.3913C67.3436 16.0769 66.6564 16.0769 66.0813 16.3913L63.578 17.7596C62.1296 18.5514 60.4367 17.2726 60.7133 15.5957L61.1914 12.6976C61.3012 12.0317 61.0889 11.3522 60.6236 10.8806L58.5984 8.82818C57.4266 7.64059 58.0732 5.57148 59.6926 5.32682L62.4913 4.904C63.1344 4.80684 63.6903 4.38691 63.9779 3.78106L65.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M94.2295 1.14427C94.9537 -0.381422 97.0462 -0.381425 97.7705 1.14427L99.0221 3.78106C99.3097 4.38691 99.8656 4.80684 100.509 4.904L103.307 5.32682C104.927 5.57148 105.573 7.64059 104.402 8.82817L102.376 10.8806C101.911 11.3522 101.699 12.0317 101.809 12.6976L102.287 15.5957C102.563 17.2726 100.87 18.5514 99.422 17.7596L96.9187 16.3913C96.3436 16.0769 95.6564 16.0769 95.0813 16.3913L92.578 17.7596C91.1296 18.5514 89.4367 17.2726 89.7133 15.5957L90.1914 12.6976C90.3012 12.0317 90.0889 11.3522 89.6236 10.8806L87.5984 8.82818C86.4266 7.64059 87.0732 5.57148 88.6926 5.32682L91.4913 4.904C92.1344 4.80684 92.6903 4.38691 92.9779 3.78106L94.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M123.23 1.14427C123.954 -0.381422 126.046 -0.381425 126.77 1.14427L128.022 3.78106C128.31 4.38691 128.866 4.80684 129.509 4.904L132.307 5.32682C133.927 5.57148 134.573 7.64059 133.402 8.82817L131.376 10.8806C130.911 11.3522 130.699 12.0317 130.809 12.6976L131.287 15.5957C131.563 17.2726 129.87 18.5514 128.422 17.7596L125.919 16.3913C125.344 16.0769 124.656 16.0769 124.081 16.3913L121.578 17.7596C120.13 18.5514 118.437 17.2726 118.713 15.5957L119.191 12.6976C119.301 12.0317 119.089 11.3522 118.624 10.8806L116.598 8.82818C115.427 7.64059 116.073 5.57148 117.693 5.32682L120.491 4.904C121.134 4.80684 121.69 4.38691 121.978 3.78106L123.23 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="wrapper-content">
                                                <p className="wrapper-detail">
                                                    In this everi evolving digital understand the significance{" "}
                                                    <br />
                                                    of staying ahead as through our blog invite explore the{" "}
                                                    <br />
                                                    dynamic our world of IT with us decoding algorithms to{" "}
                                                    <br />
                                                    unraveling It is a long established.
                                                </p>
                                            </div>
                                            <div className="aurthor">
                                                <div className="aurthor-img">
                                                    <img src="assets/img/wrapper-img/author-2.webp" alt="img" />
                                                </div>
                                                <div className="aurthor-content">
                                                    <h5 className="aurthor-title">Sajjad M. Hossain</h5>
                                                    <p className="aurthor-detail">CEO &amp; Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="qs-slide">
                                    <div className="testimonial-wrapper">
                                        <div className="wrapper-img">
                                            <img src="assets/img/wrapper-img/t-img-3.webp" alt="img" />
                                        </div>
                                        <div className="wrapper-item">
                                            <span className="wrapper-quote">
                                                <svg
                                                    width={60}
                                                    height={46}
                                                    viewBox="0 0 60 46"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z"
                                                        fill="#2B74FE"
                                                    />
                                                    <path
                                                        d="M22.3404 4.98866C19.599 1.94659 16.2947 0.404053 12.519 0.404053C9.11988 0.404053 6.25406 1.61554 4.0016 4.00476C1.76848 6.37335 0.636094 9.31429 0.636094 12.746C0.636094 15.9922 1.79766 18.885 4.08832 21.3442C6.10488 23.5089 8.61996 24.8875 11.5775 25.4524C11.0569 29.451 7.55414 33.0693 1.14562 36.221L0 36.7842L4.65094 45.596L5.73832 45.0474C19.4621 38.1226 26.4207 28.3352 26.4207 15.9572C26.4206 11.6838 25.0477 7.99347 22.3404 4.98866ZM5.70223 42.2725L3.3777 37.8681C10.5118 34.1011 14.1267 29.5734 14.1267 24.3977V23.2921L13.0282 23.1653C10.1236 22.8301 7.79297 21.6812 5.90367 19.6528C4.02855 17.64 3.11719 15.3807 3.11719 12.746C3.11719 9.92894 3.99703 7.62632 5.80676 5.70691C7.5968 3.80823 9.79254 2.88515 12.519 2.88515C15.6047 2.88515 18.2146 4.11644 20.497 6.64956C22.8135 9.22019 23.9395 12.2648 23.9395 15.9572C23.9395 21.6289 22.3352 26.7496 19.1708 31.1768C16.152 35.4002 11.6243 39.1294 5.70223 42.2725Z"
                                                        fill="#2B74FE"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="wrapper-review">
                                                <p className="review-text">Quality Service</p>
                                                <span className="review-icon">
                                                    <svg
                                                        width={134}
                                                        height={18}
                                                        viewBox="0 0 134 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M36.2295 1.14427C36.9537 -0.381422 39.0462 -0.381425 39.7705 1.14427L41.0221 3.78106C41.3097 4.38691 41.8656 4.80684 42.5087 4.904L45.3074 5.32682C46.9268 5.57148 47.5734 7.64059 46.4016 8.82817L44.3764 10.8806C43.9111 11.3522 43.6988 12.0317 43.8086 12.6976L44.2867 15.5957C44.5633 17.2726 42.8704 18.5514 41.422 17.7596L38.9187 16.3913C38.3436 16.0769 37.6564 16.0769 37.0813 16.3913L34.578 17.7596C33.1296 18.5514 31.4367 17.2726 31.7133 15.5957L32.1914 12.6976C32.3012 12.0317 32.0889 11.3522 31.6236 10.8806L29.5984 8.82818C28.4266 7.64059 29.0732 5.57148 30.6926 5.32682L33.4913 4.904C34.1344 4.80684 34.6903 4.38691 34.9779 3.78106L36.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M65.2295 1.14427C65.9537 -0.381422 68.0462 -0.381425 68.7705 1.14427L70.0221 3.78106C70.3097 4.38691 70.8656 4.80684 71.5087 4.904L74.3074 5.32682C75.9268 5.57148 76.5734 7.64059 75.4016 8.82817L73.3764 10.8806C72.9111 11.3522 72.6988 12.0317 72.8086 12.6976L73.2867 15.5957C73.5633 17.2726 71.8704 18.5514 70.422 17.7596L67.9187 16.3913C67.3436 16.0769 66.6564 16.0769 66.0813 16.3913L63.578 17.7596C62.1296 18.5514 60.4367 17.2726 60.7133 15.5957L61.1914 12.6976C61.3012 12.0317 61.0889 11.3522 60.6236 10.8806L58.5984 8.82818C57.4266 7.64059 58.0732 5.57148 59.6926 5.32682L62.4913 4.904C63.1344 4.80684 63.6903 4.38691 63.9779 3.78106L65.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M94.2295 1.14427C94.9537 -0.381422 97.0462 -0.381425 97.7705 1.14427L99.0221 3.78106C99.3097 4.38691 99.8656 4.80684 100.509 4.904L103.307 5.32682C104.927 5.57148 105.573 7.64059 104.402 8.82817L102.376 10.8806C101.911 11.3522 101.699 12.0317 101.809 12.6976L102.287 15.5957C102.563 17.2726 100.87 18.5514 99.422 17.7596L96.9187 16.3913C96.3436 16.0769 95.6564 16.0769 95.0813 16.3913L92.578 17.7596C91.1296 18.5514 89.4367 17.2726 89.7133 15.5957L90.1914 12.6976C90.3012 12.0317 90.0889 11.3522 89.6236 10.8806L87.5984 8.82818C86.4266 7.64059 87.0732 5.57148 88.6926 5.32682L91.4913 4.904C92.1344 4.80684 92.6903 4.38691 92.9779 3.78106L94.2295 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                        <path
                                                            d="M123.23 1.14427C123.954 -0.381422 126.046 -0.381425 126.77 1.14427L128.022 3.78106C128.31 4.38691 128.866 4.80684 129.509 4.904L132.307 5.32682C133.927 5.57148 134.573 7.64059 133.402 8.82817L131.376 10.8806C130.911 11.3522 130.699 12.0317 130.809 12.6976L131.287 15.5957C131.563 17.2726 129.87 18.5514 128.422 17.7596L125.919 16.3913C125.344 16.0769 124.656 16.0769 124.081 16.3913L121.578 17.7596C120.13 18.5514 118.437 17.2726 118.713 15.5957L119.191 12.6976C119.301 12.0317 119.089 11.3522 118.624 10.8806L116.598 8.82818C115.427 7.64059 116.073 5.57148 117.693 5.32682L120.491 4.904C121.134 4.80684 121.69 4.38691 121.978 3.78106L123.23 1.14427Z"
                                                            fill="#FEC461"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="wrapper-content">
                                                <p className="wrapper-detail">
                                                    In this everi evolving digital understand the significance{" "}
                                                    <br />
                                                    of staying ahead as through our blog invite explore the{" "}
                                                    <br />
                                                    dynamic our world of IT with us decoding algorithms to{" "}
                                                    <br />
                                                    unraveling It is a long established.
                                                </p>
                                            </div>
                                            <div className="aurthor">
                                                <div className="aurthor-img">
                                                    <img
                                                        src="assets/img/wrapper-img/aurthor-3.webp"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="aurthor-content">
                                                    <h5 className="aurthor-title">John H. Cena</h5>
                                                    <p className="aurthor-detail">CEO &amp; Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-btn">
                                <button className="next-btn">
                                    <span>
                                        <svg
                                            width={6}
                                            height={12}
                                            viewBox="0 0 6 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.25 1.5L1.45711 5.29289C1.12377 5.62623 0.957107 5.79289 0.957107 6C0.957107 6.20711 1.12377 6.37377 1.45711 6.70711L5.25 10.5"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <button className="prev-btn">
                                    <span>
                                        <svg
                                            width={6}
                                            height={12}
                                            viewBox="0 0 6 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.75 10.5L4.54289 6.70711C4.87623 6.37377 5.04289 6.20711 5.04289 6C5.04289 5.79289 4.87623 5.62623 4.54289 5.29289L0.75 1.5"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-------------------- newsletter-section --------------------*/}
                <section className="newsletter">
                    <div className="newsletter-img">
                        <img src="assets/img/background/newsletter-bg.png" alt="img" />
                    </div>
                    <div className="container">
                        <div className="newsletter-section">
                            <div className="location">
                                <div className="section-title">
                                    <span className="subtitle">Explore our Rooms</span>
                                    <h2 className="heading">
                                        Perfect Location for a <br />
                                        Relaxing Vacation
                                    </h2>
                                </div>
                                <a href="contact-us.html" className="primary-btn">
                                    <span>Contact Us</span>
                                    <span>
                                        <svg
                                            width={7}
                                            height={11}
                                            viewBox="0 0 7 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="subscribe">
                                <div className="section-title">
                                    <span className="subtitle">Newsletter</span>
                                    <h2 className="heading">Subscribe To Our Newsletter</h2>
                                </div>
                                <div className="subscribe-btn">
                                    <input type="email" placeholder="Email Address" />
                                    <a href="contact-us.html" className="primary-btn">
                                        <span>Sign Up</span>
                                        <span>
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-------------------- footer-section --------------------*/}
                <footer
                    className="footer"
                    style={{ background: "url(assets/img/background/footer-bg.png)" }}
                >
                    <div className="container">
                        <div className="footer-section">
                            <div className="row gy-5 gy-sm-0">
                                <div className="col-lg-4">
                                    <div className="footer-content-section">
                                        <div className="footer-logo">
                                            <img src="assets/img/logo/footer-logo.png" alt="img" />
                                        </div>
                                        <div className="footer-content">
                                            <p className="footer-detail">
                                                SEO agencies typically work businesses of <br />
                                                all sizes across various industries to help <br />
                                                them achieve their online
                                            </p>
                                        </div>
                                        <div className="social-item">
                                            <a
                                                href="https://twitter.com/?lang=en"
                                                target="_blank"
                                                className="icon-box"
                                            >
                                                <span className="social-icon">
                                                    <svg
                                                        width={20}
                                                        height={18}
                                                        viewBox="0 0 20 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M13.286 1C11.1821 1 9.47661 2.79086 9.47661 5C9.47661 5.33382 9.51555 5.65809 9.58893 5.96808C7.3 5.96808 3.7 5.44444 1 1.88889C1 10.7778 4.6 13.2963 6.4 13.4444C5.05 14.7778 2.9465 15.7647 1 15.9503C1.83744 16.7106 4.46043 16.9669 5.66725 17C11.9081 17 16.9805 11.7471 17.0934 5.22229C18.2903 4.44391 18.8588 2.33377 19 1.88889C18.4169 2.50119 17.2 2.77778 16.2303 2.46181C15.5317 1.56927 14.4721 1 13.286 1Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                            <a
                                                href="https://www.instagram.com/"
                                                target="_blank"
                                                className="icon-box"
                                            >
                                                <span className="social-icon">
                                                    <svg
                                                        width={22}
                                                        height={22}
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            x={1}
                                                            y={1}
                                                            width={20}
                                                            height={20}
                                                            rx={4}
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                        <circle
                                                            cx={17}
                                                            cy={5}
                                                            r={1}
                                                            fill="currentColor"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                        <circle
                                                            cx={11}
                                                            cy={11}
                                                            r={5}
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                            <a
                                                href="https://www.snapchat.com/"
                                                target="_blank"
                                                className="icon-box"
                                            >
                                                <span className="social-icon">
                                                    <svg
                                                        width={22}
                                                        height={21}
                                                        viewBox="0 0 22 21"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21 16C19.8979 16 19.1559 16 18.6353 16.5886C18.0274 17.2761 17.3562 18 16.4384 18H15.6667C15.2339 18 14.8129 18.1404 14.4667 18.4L13.4 19.2C11.9778 20.2667 10.0222 20.2667 8.60001 19.2L7.53333 18.4C7.18714 18.1404 6.76608 18 6.33334 18L5.56154 18C4.64381 18 3.97263 17.2761 3.36467 16.5886C2.84415 16 2.10208 16 1 16L3.39999 14.2C4.40722 13.4446 5 12.259 5 11V10.5L4.49999 10.5C3.67157 10.5 3 9.82843 3 9C3 8.17158 3.67158 7.5 4.50001 7.5H5V7.00001C5 3.6863 7.6863 1 11 1.00001C14.3137 1.00001 17 3.6863 17 7.00001V7.5H17.5C18.3284 7.5 19 8.17158 19 9C19 9.82843 18.3284 10.5 17.5 10.5L17 10.5V11C17 12.259 17.5928 13.4446 18.6 14.2L21 16Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                            <a
                                                href="https://www.pinterest.com/"
                                                target="_blank"
                                                className="icon-box"
                                            >
                                                <span className="social-icon">
                                                    <svg
                                                        width={22}
                                                        height={22}
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5 19.0005C2.57111 17.1761 1 14.2714 1 10.9998C1 5.47691 5.47715 0.999756 11 0.999756C16.5228 0.999756 21 5.47691 21 10.9998C21 16.5226 16.5228 20.9998 11 20.9998C9.9064 20.9998 8.8538 20.8242 7.86884 20.4998L10.5 10.4998"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M9.17253 15.6553C9.73859 15.8776 10.355 15.9998 11 15.9998C13.7614 15.9998 16 13.7612 16 10.9998C16 8.23833 13.7614 5.99976 11 5.99976C8.23858 5.99976 6 8.23833 6 10.9998C6 11.9105 6.24349 12.7643 6.66891 13.4998"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="footer-link-section">
                                        <div className="row gy-5">
                                            <div className="col-sm-6 col-lg-4">
                                                <div className="footer-link">
                                                    <h3 className="title">Services</h3>
                                                    <ul className="section-list">
                                                        <li>
                                                            <a href="hotel-details.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text"> GYM and Spa </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="hotel-details.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Pick Up &amp; Drop</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="hotel-details.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Restaurant</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="hotel-details.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Swimming Pool</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="hotel-details.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Parking Space</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <div className="footer-link">
                                                    <h3 className="title">Popular links</h3>
                                                    <ul className="section-list">
                                                        <li>
                                                            <a href="contact-us.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Help &amp; Support</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="terms-condition.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Trust &amp; Safety</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="faq.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">FAQ’s</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="hotel-details.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Feature Hotels</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="hotel-details.html" className="list-item">
                                                                <span>
                                                                    <svg
                                                                        width={6}
                                                                        height={11}
                                                                        viewBox="0 0 6 11"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.5625 0.414062C0.679688 0.296875 0.84375 0.296875 0.960938 0.414062L5.88281 5.3125C5.97656 5.42969 5.97656 5.59375 5.88281 5.71094L0.960938 10.6094C0.84375 10.7266 0.679688 10.7266 0.5625 10.6094L0.09375 10.1641C0 10.0469 0 9.85938 0.09375 9.76562L4.33594 5.5L0.09375 1.25781C0 1.16406 0 0.976562 0.09375 0.859375L0.5625 0.414062Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="list-text">Hotel Booking</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <div className="footer-link contact-link">
                                                    <h3 className="title">Contact Us</h3>
                                                    <div className="section-list">
                                                        <div className="contact-box">
                                                            <div className="icon">
                                                                <svg
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 18 18"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M11.6667 12.5557L11.5196 13.2911C11.8512 13.3574 12.1862 13.1936 12.3375 12.8911L11.6667 12.5557ZM5.44444 6.33346L5.10903 5.66263C4.80653 5.81389 4.64268 6.1489 4.70901 6.48054L5.44444 6.33346ZM5.75913 6.17612L6.09454 6.84694H6.09454L5.75913 6.17612ZM6.6147 3.92577L7.31106 3.64723L6.6147 3.92577ZM5.89146 2.11765L5.1951 2.39619V2.39619L5.89146 2.11765ZM15.8825 12.1087L15.6039 12.805L15.8825 12.1087ZM14.0744 11.3854L14.3529 10.6891L14.0744 11.3854ZM11.824 12.241L12.4948 12.5764V12.5764L11.824 12.241ZM12.6944 8.11123C12.6944 8.52545 13.0302 8.86123 13.4444 8.86123C13.8587 8.86123 14.1944 8.52545 14.1944 8.11123H12.6944ZM13.1738 6.75058L13.8667 6.46357L13.1738 6.75058ZM11.2495 4.82633L11.5366 4.13342L11.2495 4.82633ZM9.88889 3.80568C9.47468 3.80568 9.13889 4.14146 9.13889 4.55568C9.13889 4.96989 9.47468 5.30568 9.88889 5.30568V3.80568ZM16.25 8.11123C16.25 8.52545 16.5858 8.86123 17 8.86123C17.4142 8.86123 17.75 8.52545 17.75 8.11123H16.25ZM16.4587 5.38993L17.1516 5.10292L16.4587 5.38993ZM12.6102 1.54142L12.8972 0.848513V0.848513L12.6102 1.54142ZM9.88889 0.250122C9.47468 0.250122 9.13889 0.585909 9.13889 1.00012C9.13889 1.41434 9.47468 1.75012 9.88889 1.75012V0.250122ZM16.25 13.7593V15.2223H17.75V13.7593H16.25ZM2.77778 1.75012H4.24083V0.250122H2.77778V1.75012ZM11.6667 12.5557C11.8138 11.8202 11.814 11.8203 11.8142 11.8203C11.8142 11.8203 11.8144 11.8204 11.8145 11.8204C11.8148 11.8204 11.815 11.8205 11.8151 11.8205C11.8154 11.8206 11.8156 11.8206 11.8157 11.8206C11.8158 11.8207 11.8154 11.8206 11.8145 11.8204C11.8127 11.82 11.8088 11.8192 11.803 11.8179C11.7913 11.8153 11.7717 11.8109 11.745 11.8044C11.6914 11.7913 11.6092 11.7701 11.5033 11.7389C11.2912 11.6766 10.9864 11.5751 10.6288 11.4219C9.91014 11.1139 8.99947 10.6056 8.197 9.80313L7.13634 10.8638C8.11164 11.8391 9.20097 12.4419 10.0379 12.8006C10.4581 12.9807 10.8199 13.1015 11.08 13.178C11.2103 13.2163 11.3155 13.2436 11.3904 13.2619C11.4279 13.271 11.4579 13.2778 11.4796 13.2826C11.4905 13.285 11.4993 13.2869 11.506 13.2883C11.5093 13.289 11.5121 13.2896 11.5144 13.2901C11.5155 13.2903 11.5165 13.2905 11.5174 13.2907C11.5178 13.2908 11.5182 13.2908 11.5186 13.2909C11.5188 13.291 11.519 13.291 11.5191 13.291C11.5194 13.2911 11.5196 13.2911 11.6667 12.5557ZM8.197 9.80313C7.39453 9.00066 6.88623 8.08998 6.57825 7.37135C6.42499 7.01376 6.32357 6.70891 6.26119 6.49683C6.23005 6.39096 6.20879 6.3087 6.19576 6.25515C6.18926 6.22839 6.18481 6.20884 6.18223 6.19716C6.18094 6.19131 6.18012 6.18744 6.17974 6.18561C6.17954 6.1847 6.17946 6.1843 6.17949 6.18442C6.1795 6.18448 6.17954 6.18468 6.1796 6.185C6.17964 6.18516 6.17968 6.18536 6.17972 6.18558C6.17975 6.1857 6.17979 6.18589 6.1798 6.18595C6.17984 6.18616 6.17988 6.18637 5.44444 6.33346C4.70901 6.48054 4.70905 6.48077 4.7091 6.48101C4.70912 6.4811 4.70917 6.48135 4.70921 6.48153C4.70928 6.48189 4.70936 6.48229 4.70945 6.48272C4.70962 6.48359 4.70983 6.48459 4.71006 6.48572C4.71053 6.488 4.71111 6.49081 4.71181 6.49416C4.71322 6.50085 4.71511 6.50967 4.71751 6.52054C4.7223 6.54227 4.72915 6.5722 4.73826 6.60968C4.75649 6.6846 4.78384 6.78984 4.82214 6.92008C4.89865 7.18022 5.01945 7.54204 5.19953 7.96223C5.55821 8.79915 6.16103 9.88848 7.13634 10.8638L8.197 9.80313ZM5.77985 7.00428L6.09454 6.84694L5.42372 5.50529L5.10903 5.66263L5.77985 7.00428ZM7.31106 3.64723L6.58781 1.83911L5.1951 2.39619L5.91835 4.20432L7.31106 3.64723ZM16.161 11.4123L14.3529 10.6891L13.7958 12.0818L15.6039 12.805L16.161 11.4123ZM11.1532 11.9056L10.9958 12.2203L12.3375 12.8911L12.4948 12.5764L11.1532 11.9056ZM14.3529 10.6891C13.1323 10.2008 11.7411 10.7297 11.1532 11.9056L12.4948 12.5764C12.7339 12.0983 13.2995 11.8833 13.7958 12.0818L14.3529 10.6891ZM6.09454 6.84694C7.27041 6.259 7.79932 4.86787 7.31106 3.64723L5.91835 4.20432C6.11687 4.70062 5.90182 5.26624 5.42372 5.50529L6.09454 6.84694ZM4.24083 1.75012C4.66109 1.75012 5.03902 2.00599 5.1951 2.39619L6.58781 1.83911C6.20394 0.879416 5.27445 0.250122 4.24083 0.250122V1.75012ZM17.75 13.7593C17.75 12.7257 17.1207 11.7962 16.161 11.4123L15.6039 12.805C15.9941 12.9611 16.25 13.339 16.25 13.7593H17.75ZM15.2222 16.2501C7.78172 16.2501 1.75 10.2184 1.75 2.7779H0.25C0.25 11.0468 6.95329 17.7501 15.2222 17.7501V16.2501ZM15.2222 17.7501C16.6183 17.7501 17.75 16.6184 17.75 15.2223H16.25C16.25 15.79 15.7898 16.2501 15.2222 16.2501V17.7501ZM1.75 2.7779C1.75 2.21027 2.21015 1.75012 2.77778 1.75012V0.250122C1.38172 0.250122 0.25 1.38185 0.25 2.7779H1.75ZM14.1944 8.11123C14.1944 7.54582 14.0831 6.98594 13.8667 6.46357L12.4809 7.03759C12.6219 7.37798 12.6944 7.7428 12.6944 8.11123H14.1944ZM13.8667 6.46357C13.6503 5.94119 13.3332 5.46655 12.9334 5.06675L11.8727 6.12741C12.1332 6.38793 12.3399 6.69721 12.4809 7.03759L13.8667 6.46357ZM12.9334 5.06675C12.5336 4.66694 12.0589 4.34979 11.5366 4.13342L10.9625 5.51924C11.3029 5.66023 11.6122 5.86689 11.8727 6.12741L12.9334 5.06675ZM11.5366 4.13342C11.0142 3.91704 10.4543 3.80568 9.88889 3.80568V5.30568C10.2573 5.30568 10.6221 5.37825 10.9625 5.51924L11.5366 4.13342ZM17.75 8.11123C17.75 7.0789 17.5467 6.05667 17.1516 5.10292L15.7658 5.67694C16.0855 6.44871 16.25 7.27588 16.25 8.11123H17.75ZM17.1516 5.10292C16.7566 4.14916 16.1775 3.28256 15.4475 2.55259L14.3869 3.61325C14.9776 4.20393 15.4461 4.90518 15.7658 5.67694L17.1516 5.10292ZM15.4475 2.55259C14.7176 1.82262 13.851 1.24357 12.8972 0.848513L12.3232 2.23433C13.0949 2.55401 13.7962 3.02256 14.3869 3.61325L15.4475 2.55259ZM12.8972 0.848513C11.9435 0.453456 10.9212 0.250122 9.88889 0.250122V1.75012C10.7242 1.75012 11.5514 1.91466 12.3232 2.23433L12.8972 0.848513Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="content">
                                                                <p className="list-item">+(323) 750-1234</p>
                                                            </div>
                                                        </div>
                                                        <div className="contact-box">
                                                            <div className="icon">
                                                                <svg
                                                                    width={18}
                                                                    height={16}
                                                                    viewBox="0 0 18 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 8.00012V4.11123C1 2.39301 2.43269 1.00012 4.2 1.00012H13.8C15.5673 1.00012 17 2.39301 17 4.11123V11.889C17 13.6072 15.5673 15.0001 13.8 15.0001H5.8M4.2 4.88901L7.22496 6.84963C8.29984 7.54631 9.70016 7.54631 10.775 6.84963L13.8 4.88901M1 10.3335H5.8M1 12.6668H5.8"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="content">
                                                                <p className="list-item">
                                                                    <a
                                                                        href="https://quomodothemes.website/cdn-cgi/l/email-protection"
                                                                        className="__cf_email__"
                                                                        data-cfemail="523b3c343d2b3d27203d2026373c31372b12353f333b3e7c313d3f"
                                                                    >
                                                                        [email&nbsp;protected]
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="contact-box">
                                                            <div className="icon">
                                                                <svg
                                                                    width={18}
                                                                    height={22}
                                                                    viewBox="0 0 18 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 20.2501C2.58579 20.2501 2.25 20.5859 2.25 21.0001C2.25 21.4143 2.58579 21.7501 3 21.7501V20.2501ZM15 21.7501C15.4142 21.7501 15.75 21.4143 15.75 21.0001C15.75 20.5859 15.4142 20.2501 15 20.2501V21.7501ZM15.75 8.50012C15.75 10.2066 14.6599 12.4137 13.1547 14.247C12.4148 15.1482 11.6072 15.918 10.8465 16.4555C10.0624 17.0096 9.42269 17.2501 9 17.2501V18.7501C9.88982 18.7501 10.8438 18.2941 11.7121 17.6805C12.6038 17.0505 13.5071 16.1816 14.314 15.1988C15.9026 13.2639 17.25 10.721 17.25 8.50012H15.75ZM9 17.2501C8.59247 17.2501 7.95947 16.9994 7.171 16.4075C6.409 15.8354 5.59932 15.018 4.85679 14.0669C3.34675 12.1328 2.25 9.8251 2.25 8.11123H0.75C0.75 10.3247 2.09075 12.9615 3.67446 14.99C4.4788 16.0202 5.38006 16.9386 6.27041 17.607C7.13428 18.2556 8.09503 18.7501 9 18.7501V17.2501ZM2.25 8.11123C2.25 4.48071 5.47857 1.75012 9 1.75012V0.250122C4.78944 0.250122 0.75 3.51953 0.75 8.11123H2.25ZM9 1.75012C12.4938 1.75012 15.75 4.45516 15.75 8.50012H17.25C17.25 3.54509 13.2382 0.250122 9 0.250122V1.75012ZM11.25 8.00012C11.25 9.24276 10.2426 10.2501 9 10.2501V11.7501C11.0711 11.7501 12.75 10.0712 12.75 8.00012H11.25ZM9 10.2501C7.75736 10.2501 6.75 9.24276 6.75 8.00012H5.25C5.25 10.0712 6.92893 11.7501 9 11.7501V10.2501ZM6.75 8.00012C6.75 6.75748 7.75736 5.75012 9 5.75012V4.25012C6.92893 4.25012 5.25 5.92905 5.25 8.00012H6.75ZM9 5.75012C10.2426 5.75012 11.25 6.75748 11.25 8.00012H12.75C12.75 5.92905 11.0711 4.25012 9 4.25012V5.75012ZM3 21.7501H15V20.2501H3V21.7501Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="content">
                                                                <p className="list-item">
                                                                    374 A Tower, megas William Road Blvd, Melbourne
                                                                    2721, IL, USA
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-counter">
                                                        <div className="counter-wrapper">
                                                            <h3 className="wrapper-title">47,49,248</h3>
                                                            <p className="list-item">Total Booking</p>
                                                        </div>
                                                        <div className="counter-wrapper">
                                                            <h3 className="wrapper-title">99,472,554</h3>
                                                            <p className="list-item">Active Users</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="copyright-section">
                                <div className="row gy-3 gy-sm-0">
                                    <div className="col-md-6">
                                        <p className="list-item">
                                            2024 © All rights reserved by
                                            <span className="inner-text"> Quomodotheme</span>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="copyright-item">
                                            <a href="privacy-policy.html" className="list-item">
                                                Privacy Policy{" "}
                                            </a>
                                            <div className="devider" />
                                            <a href="terms-condition.html" className="list-item">
                                                Terms &amp; Conditions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*---- backto-top-section---*/}
                <div className="backto-top">
                    <span>
                        <svg
                            width={39}
                            height={75}
                            viewBox="0 0 39 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.235 75.0033L18.3095 74.9033C18.3095 74.8866 18.3144 74.87 18.3168 74.8533C18.0878 74.8295 17.8612 74.7866 17.6322 74.7842C15.744 74.7771 13.9751 74.246 12.2526 73.5553C8.50789 72.0526 5.51357 69.6305 3.26965 66.3344C1.58854 63.8623 0.51897 61.145 0.192494 58.1918C0.0268193 56.6914 0.0195101 55.172 0.0146374 53.6597C-0.00485375 47.2818 0.0073282 40.904 1.90292e-05 34.5261C-0.00485375 30.6394 0.925847 27.0099 3.08205 23.7233C5.88146 19.4579 9.78943 16.6548 14.7986 15.3687C16.9281 14.8234 19.0989 14.6257 21.3014 14.8638C27.6384 15.5497 32.5185 18.5529 36.0001 23.7566C37.4546 25.931 38.3902 28.3245 38.7678 30.899C38.9311 32.0183 38.9847 33.1615 38.9896 34.2951C39.0066 41.1397 38.9993 47.982 38.992 54.8267C38.992 55.8531 39.0066 56.8867 38.9092 57.906C38.7021 60.0685 38.0735 62.1238 37.0965 64.0743C35.2741 67.711 32.5843 70.5569 28.9809 72.5384C26.793 73.7435 24.4443 74.5247 21.9348 74.789C21.4987 74.8343 21.0553 74.8319 20.6119 74.8914C20.7386 74.9271 20.8653 74.9652 20.9919 75.001H17.2399L17.235 75.0033ZM3.08449 44.8407H3.08692C3.08692 48.3321 3.06743 51.8235 3.09911 55.3149C3.10885 56.3985 3.18925 57.4893 3.3598 58.5586C3.7618 61.114 4.80458 63.4313 6.40772 65.4747C9.05851 68.8565 12.5133 70.988 16.8355 71.7001C18.8869 72.0383 20.9432 72.024 22.9654 71.5786C26.8271 70.726 30.0236 68.7898 32.4649 65.7152C34.8891 62.662 36.0001 59.1897 35.9831 55.322C35.9489 48.2225 35.9684 41.1207 35.9757 34.0188C35.9757 32.7566 35.8344 31.511 35.5372 30.2893C34.7015 26.8598 32.94 23.9686 30.1698 21.699C26.1522 18.4052 21.5401 17.1835 16.3994 18.1242C12.8374 18.7768 9.82841 20.4748 7.38959 23.1327C4.53901 26.2382 3.12103 29.8797 3.09423 34.0403C3.07231 37.6412 3.08936 41.2398 3.08936 44.8407H3.08449Z"
                                fill="#2B74FE"
                            />
                            <path
                                d="M38.9361 56.4858C38.9216 56.381 38.8901 56.2762 38.8901 56.1738C38.8877 48.8671 38.8853 41.5605 38.8877 34.2538C38.8877 34.049 38.9192 33.8442 38.9361 33.6394V56.4882V56.4858Z"
                                fill="#2B74FE"
                            />
                            <path
                                d="M11.0364 8.95544C10.9997 8.54635 11.2855 8.24579 11.5541 7.9421C13.5504 5.68165 15.5488 3.42432 17.5473 1.16595C17.7576 0.92801 17.9582 0.681719 18.1815 0.456299C18.7973 -0.166735 19.5609 -0.150037 20.1411 0.504305C22.4113 3.06323 24.6773 5.62529 26.941 8.19048C27.4328 8.74777 27.4005 9.48664 26.8839 9.91556C26.3349 10.3706 25.6479 10.3142 25.1238 9.72667C23.2677 7.6478 21.4234 5.55954 19.577 3.47337C19.1327 2.97139 19.1402 2.97244 18.6765 3.49842C16.8808 5.53345 15.0808 7.5664 13.2829 9.60144C12.9896 9.9333 12.6563 10.1702 12.1764 10.1462C11.5196 10.1149 11.0364 9.63066 11.0364 8.95544Z"
                                fill="#2B74FE"
                            />
                            <path
                                d="M16.0442 34.875C16.0442 34.0653 16.0004 33.2508 16.054 32.4434C16.1612 30.8002 17.5231 29.4831 19.2042 29.445C20.9609 29.4046 22.2668 30.6144 22.5275 32.0791C22.6079 32.5339 22.6395 33.0031 22.6395 33.4651C22.6395 34.7393 22.6517 36.0158 22.5908 37.2899C22.508 38.9856 21.0242 40.3217 19.3187 40.3098C17.5694 40.2979 16.1417 38.9737 16.0589 37.2471C16.0223 36.4588 16.0515 35.6657 16.0515 34.875C16.0515 34.875 16.0491 34.875 16.0467 34.875H16.0442Z"
                                fill="#2B74FE"
                            />
                        </svg>
                    </span>
                </div>
            </>

        </>
    )
}

export default page