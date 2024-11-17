"use client";
import React, { useEffect } from 'react'
import AOS from 'aos';
import "../../../styles/package/aos.css";
import "../../../styles/package/bootstrap-5.3.2.min.css";
import "../../../styles/package/lity.min.css";
import "../../../styles/package/main.css";
import "../../../styles/package/nice-select.css";
import "../../../styles/package/nouislider.min.css";
import "../../../styles/package/swiper-bundle.min.css";
const Banner = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <>
            <section className="hero">
                <div className="container m-0">
                    <div className="hero-img">
                        <img src="assets/img/background/hero-bg.webp" alt="img" />
                    </div>
                    <div className="hero-content">
                        <span className="subtitle" data-aos="fade-up" data-aos-duration={500}>
                            <span>
                                <svg
                                    width={20}
                                    height={21}
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0005 11.4371L0.0507812 8.12184C0.132029 7.9156 0.3164 7.76529 0.535144 7.73435L6.68811 6.82812L10.0005 11.4371Z"
                                        fill="#FEC461"
                                    />
                                    <path
                                        d="M10.0002 11.437V17.1775L4.49725 20.1149C4.28475 20.2274 4.03195 20.209 3.83789 20.0649L10.0002 11.437Z"
                                        fill="#AA8453"
                                    />
                                    <path
                                        d="M10.0005 11.437L3.83784 20.0646C3.64753 19.9243 3.55035 19.6837 3.59128 19.4431L4.64094 13.2248L10.0005 11.437Z"
                                        fill="#FEC461"
                                    />
                                    <path
                                        d="M10 11.4368L4.64079 13.2246L0.190595 8.81813C0.0190365 8.64938 -0.0437743 8.39595 0.0312237 8.16814C0.0377861 8.15252 0.0405985 8.13658 0.0502858 8.12158L10 11.4368Z"
                                        fill="#AA8453"
                                    />
                                    <path
                                        d="M9.99992 0.812012V11.4367L6.6875 6.82748L9.44055 1.16513C9.54368 0.949196 9.76242 0.812012 9.99992 0.812012Z"
                                        fill="#FEC461"
                                    />
                                    <path
                                        d="M13.3124 6.82748L10 11.4367V0.812012C10.2375 0.812012 10.4562 0.949196 10.5594 1.16513L13.3124 6.82748Z"
                                        fill="#AA8453"
                                    />
                                    <path
                                        d="M19.9497 8.12167L10 11.4369L13.3124 6.82764L19.4654 7.73386C19.6841 7.76511 19.8685 7.91511 19.9497 8.12167Z"
                                        fill="#FEC461"
                                    />
                                    <path
                                        d="M19.8123 8.81813L15.3592 13.2246L10 11.4368L19.9497 8.12158C19.9591 8.13689 19.9622 8.15283 19.9688 8.16814C20.0435 8.39626 19.981 8.64938 19.8123 8.81813Z"
                                        fill="#AA8453"
                                    />
                                    <path
                                        d="M16.1623 20.0646L10 11.437L15.3592 13.2248L16.4092 19.4431C16.4498 19.684 16.353 19.9243 16.1623 20.0646Z"
                                        fill="#FEC461"
                                    />
                                    <path
                                        d="M16.1623 20.0646C15.9686 20.2087 15.7155 20.2274 15.5033 20.1146L10 17.1775V11.437L16.1623 20.0646Z"
                                        fill="#AA8453"
                                    />
                                </svg>
                            </span>
                            <span> Enjoy Your Beautiful Moment</span>
                        </span>
                        <h1
                            className="heading-primary bookmyhotel-banner-heading"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            Unlock Your Next Adventure <br />
                            Book Your Hotel Stay
                        </h1>
                        <p className="hero-detail" data-aos="fade-up" data-aos-duration={1500}>
                            Discover Your Ideal Getaway Find the Perfect Hotel, Villa, or Cottage
                            by Name, Category, or Location!
                        </p>
                    </div>
                    {/* form */}
                    <div className="hero-form" data-aos="fade-right" data-aos-duration={1000}>
                        <div className="hero-form-item">
                            <form action="#" className="form-item">
                                <div className="hero-inner-form">
                                    <p className="input-title">Find Hotel</p>
                                    <input type="text" placeholder="Search here" />
                                </div>
                                <div className="hero-inner-form">
                                    <p className="input-title">Select Location</p>
                                    <select className="select-option form-control">
                                        <option value="one">Dhaka</option>
                                        <option value="one">Cumilla</option>
                                        <option value="three">Noakhali</option>
                                    </select>
                                </div>
                                <div className="hero-inner-form">
                                    <p className="input-title">Select Category</p>
                                    <select className="select-option form-control">
                                        <option value="one">Resort</option>
                                        <option value="two">Bunglow</option>
                                        <option value="three">Hotel</option>
                                    </select>
                                </div>
                                <div className="hero-inner-form">
                                    <p className="input-title">Select Rating</p>
                                    <select className="select-option form-control">
                                        <option value="one">4 Star</option>
                                        <option value="two">5 Star</option>
                                        <option value="three">3 Star</option>
                                    </select>
                                </div>
                            </form>
                            <a href="#" className="primary-btn no-link">
                                <span>
                                    <svg
                                        width={26}
                                        height={26}
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22 18.6491L24.306 20.9551C25.2313 21.8804 25.2313 23.3807 24.306 24.306C23.3807 25.2313 21.8804 25.2313 20.9551 24.306L18.6491 22M1 11.2C1 5.5667 5.56669 1 11.2 1C16.8333 1 21.4 5.5667 21.4 11.2C21.4 16.8333 16.8333 21.4 11.2 21.4C5.56669 21.4 1 16.8333 1 11.2Z"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span>Search</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner