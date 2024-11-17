"use client";
import React, { useEffect, useState } from 'react'
import "../../../styles/package/aos.css";
import "../../../styles/package/bootstrap-5.3.2.min.css";
import "../../../styles/package/lity.min.css";
import "../../../styles/package/main.css";
import "../../../styles/package/nice-select.css";
import "../../../styles/package/nouislider.min.css";
import "../../../styles/package/swiper-bundle.min.css";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add event listener on scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className="header">
                <div className={`header-section d-none d-lg-block ${isScrolled ? "nav-bg" : ""}`}>
                    {/* header-top */}
                    <div className="header-top">
                        <div className="container">
                            <div className="header-top-section">
                                <ul className="header-list">
                                    <li>
                                        <a href="contact-us.html" className="list-item no-link">
                                            <span className="list-icon">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 12V7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H8M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M2 15H8M2 18H8"
                                                        stroke="white"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="list-text">
                                                <span
                                                    className="__cf_email__"
                                                    data-cfemail="185077757d5b2b2c587f75797174367b7775"
                                                >
                                                    [email&nbsp;protected]
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html" className="list-item no-link">
                                            <span className="list-icon">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15 16L14.8529 16.7354C15.1846 16.8018 15.5196 16.6379 15.6708 16.3354L15 16ZM8 9L7.66459 8.32918C7.36208 8.48043 7.19824 8.81544 7.26456 9.14709L8 9ZM8.35402 8.82299L8.68943 9.49381L8.68943 9.49381L8.35402 8.82299ZM9.31654 6.29136L10.0129 6.01281L9.31654 6.29136ZM8.50289 4.25722L7.80653 4.53576L8.50289 4.25722ZM19.7428 15.4971L19.4642 16.1935L19.7428 15.4971ZM17.7086 14.6835L17.9872 13.9871H17.9872L17.7086 14.6835ZM15.177 15.646L15.8478 15.9814V15.9814L15.177 15.646ZM16.25 11C16.25 11.4142 16.5858 11.75 17 11.75C17.4142 11.75 17.75 11.4142 17.75 11H16.25ZM16.6955 9.46927L17.3884 9.18225L16.6955 9.46927ZM14.5307 7.30448L14.8177 6.61157L14.5307 7.30448ZM13 6.25C12.5858 6.25 12.25 6.58579 12.25 7C12.25 7.41421 12.5858 7.75 13 7.75V6.25ZM20.25 11C20.25 11.4142 20.5858 11.75 21 11.75C21.4142 11.75 21.75 11.4142 21.75 11H20.25ZM20.391 7.93853L21.0839 7.65152L20.391 7.93853ZM16.0615 3.60896L16.3485 2.91605V2.91605L16.0615 3.60896ZM13 2.25C12.5858 2.25 12.25 2.58579 12.25 3C12.25 3.41421 12.5858 3.75 13 3.75V2.25ZM20.25 17.3541V19H21.75V17.3541H20.25ZM5 3.75H6.64593V2.25H5V3.75ZM15 16C15.1471 15.2646 15.1473 15.2646 15.1475 15.2646C15.1476 15.2647 15.1477 15.2647 15.1479 15.2647C15.1481 15.2648 15.1483 15.2648 15.1484 15.2648C15.1487 15.2649 15.1488 15.2649 15.1488 15.2649C15.1488 15.2649 15.1482 15.2648 15.147 15.2645C15.1447 15.264 15.14 15.2631 15.1331 15.2615C15.1193 15.2585 15.0967 15.2533 15.0659 15.2459C15.0044 15.2309 14.9104 15.2066 14.7898 15.1711C14.5482 15.1 14.2016 14.9847 13.7954 14.8106C12.9796 14.461 11.9439 13.8833 11.0303 12.9697L9.96967 14.0303C11.0561 15.1167 12.2704 15.789 13.2046 16.1894C13.6734 16.3903 14.0768 16.525 14.3665 16.6101C14.5115 16.6528 14.6285 16.6832 14.7114 16.7034C14.7529 16.7135 14.7859 16.721 14.8097 16.7263C14.8217 16.7289 14.8313 16.7309 14.8385 16.7325C14.8421 16.7332 14.8451 16.7339 14.8475 16.7343C14.8487 16.7346 14.8498 16.7348 14.8507 16.735C14.8511 16.7351 14.8515 16.7352 14.8519 16.7352C14.8521 16.7353 14.8523 16.7353 14.8524 16.7353C14.8527 16.7354 14.8529 16.7354 15 16ZM11.0303 12.9697C10.1167 12.0561 9.53901 11.0204 9.18936 10.2046C9.01527 9.79836 8.89996 9.45184 8.8289 9.21025C8.79342 9.08962 8.76912 8.99565 8.75414 8.93406C8.74666 8.90329 8.74151 8.88065 8.73847 8.86687C8.73695 8.85999 8.73595 8.85532 8.73546 8.85296C8.73521 8.85178 8.73509 8.85118 8.73508 8.85117C8.73508 8.85116 8.73511 8.8513 8.73517 8.85159C8.7352 8.85174 8.73524 8.85192 8.73528 8.85214C8.7353 8.85225 8.73534 8.85244 8.73535 8.8525C8.73539 8.8527 8.73544 8.85291 8 9C7.26456 9.14709 7.26461 9.14732 7.26466 9.14756C7.26468 9.14765 7.26473 9.1479 7.26477 9.14809C7.26484 9.14846 7.26492 9.14887 7.26501 9.14932C7.2652 9.15022 7.26541 9.15127 7.26566 9.15247C7.26615 9.15488 7.26677 9.15789 7.26753 9.1615C7.26905 9.16873 7.27111 9.17834 7.27374 9.19026C7.279 9.21408 7.28655 9.2471 7.29664 9.28859C7.31682 9.37154 7.34721 9.48851 7.38985 9.6335C7.47504 9.92316 7.60973 10.3266 7.81064 10.7954C8.21099 11.7296 8.88325 12.9439 9.96967 14.0303L11.0303 12.9697ZM8.33541 9.67082L8.68943 9.49381L8.01861 8.15217L7.66459 8.32918L8.33541 9.67082ZM10.0129 6.01281L9.19925 3.97868L7.80653 4.53576L8.62018 6.5699L10.0129 6.01281ZM20.0213 14.8008L17.9872 13.9871L17.4301 15.3798L19.4642 16.1935L20.0213 14.8008ZM14.5062 15.3106L14.3292 15.6646L15.6708 16.3354L15.8478 15.9814L14.5062 15.3106ZM17.9872 13.9871C16.6592 13.4559 15.1458 14.0313 14.5062 15.3106L15.8478 15.9814C16.1386 15.3999 16.8265 15.1384 17.4301 15.3798L17.9872 13.9871ZM8.68943 9.49381C9.96868 8.85419 10.5441 7.34076 10.0129 6.01281L8.62018 6.5699C8.86163 7.17351 8.60008 7.86143 8.01861 8.15217L8.68943 9.49381ZM6.64593 3.75C7.15706 3.75 7.6167 4.06119 7.80653 4.53576L9.19925 3.97868C8.78162 2.93462 7.77042 2.25 6.64593 2.25V3.75ZM21.75 17.3541C21.75 16.2296 21.0654 15.2184 20.0213 14.8008L19.4642 16.1935C19.9388 16.3833 20.25 16.8429 20.25 17.3541H21.75ZM19 20.25C10.5777 20.25 3.75 13.4223 3.75 5H2.25C2.25 14.2508 9.74923 21.75 19 21.75V20.25ZM19 21.75C20.5188 21.75 21.75 20.5188 21.75 19H20.25C20.25 19.6904 19.6904 20.25 19 20.25V21.75ZM3.75 5C3.75 4.30964 4.30964 3.75 5 3.75V2.25C3.48122 2.25 2.25 3.48122 2.25 5H3.75ZM17.75 11C17.75 10.3762 17.6271 9.75855 17.3884 9.18225L16.0026 9.75628C16.1659 10.1506 16.25 10.5732 16.25 11H17.75ZM17.3884 9.18225C17.1497 8.60596 16.7998 8.08232 16.3588 7.64124L15.2981 8.7019C15.5999 9.00369 15.8393 9.36197 16.0026 9.75628L17.3884 9.18225ZM16.3588 7.64124C15.9177 7.20016 15.394 6.85028 14.8177 6.61157L14.2437 7.99739C14.638 8.16072 14.9963 8.40011 15.2981 8.7019L16.3588 7.64124ZM14.8177 6.61157C14.2415 6.37286 13.6238 6.25 13 6.25V7.75C13.4268 7.75 13.8494 7.83406 14.2437 7.99739L14.8177 6.61157ZM21.75 11C21.75 9.85093 21.5237 8.71312 21.0839 7.65152L19.6981 8.22554C20.0625 9.10516 20.25 10.0479 20.25 11H21.75ZM21.0839 7.65152C20.6442 6.58992 19.9997 5.62533 19.1872 4.81282L18.1265 5.87348C18.7997 6.5467 19.3338 7.34593 19.6981 8.22554L21.0839 7.65152ZM19.1872 4.81282C18.3747 4.0003 17.4101 3.35578 16.3485 2.91605L15.7745 4.30187C16.6541 4.66622 17.4533 5.20025 18.1265 5.87348L19.1872 4.81282ZM16.3485 2.91605C15.2869 2.47633 14.1491 2.25 13 2.25V3.75C13.9521 3.75 14.8948 3.93753 15.7745 4.30187L16.3485 2.91605Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="list-text">+00 23904 0248</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="header-list">
                                    <li id="allsec">
                                        <a
                                            href="#"
                                            className="list-item no-link"
                                        //onClick="selectBoxHandler('allsec')"
                                        >
                                            <span className="list-icon">
                                                <svg
                                                    width={22}
                                                    height={22}
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <ellipse
                                                        cx="11.0001"
                                                        cy={11}
                                                        rx={4}
                                                        ry={10}
                                                        stroke="white"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        d="M11 13.2222L11 13.9722L11 13.2222ZM1.00383 10.7205L0.254112 10.7L1.00383 10.7205ZM20.25 11C20.25 16.1086 16.1086 20.25 11 20.25V21.75C16.9371 21.75 21.75 16.9371 21.75 11H20.25ZM11 20.25C5.89137 20.25 1.75 16.1086 1.75 11H0.25C0.25 16.9371 5.06294 21.75 11 21.75V20.25ZM20.52 10.1411C19.7374 10.7842 18.4549 11.3736 16.7847 11.8001C15.1276 12.2232 13.1421 12.4722 11 12.4722L11 13.9722C13.2528 13.9722 15.3642 13.7109 17.1558 13.2535C18.9344 12.7993 20.4526 12.1379 21.4723 11.3L20.52 10.1411ZM11 1.75C16.0221 1.75 20.1096 5.75241 20.2465 10.7411L21.7459 10.7C21.5868 4.90141 16.8367 0.25 11 0.25V1.75ZM20.2465 10.7411C20.2488 10.8271 20.25 10.9134 20.25 11H21.75C21.75 10.8997 21.7486 10.7997 21.7459 10.7L20.2465 10.7411ZM11 12.4722C8.85789 12.4722 6.87237 12.2232 5.21526 11.8001C3.54505 11.3736 2.26261 10.7842 1.47999 10.1411L0.527673 11.3C1.54741 12.1379 3.0656 12.7993 4.84417 13.2535C6.63583 13.7109 8.74723 13.9722 11 13.9722L11 12.4722ZM1.75 11C1.75 10.9134 1.75119 10.8271 1.75355 10.7411L0.254112 10.7C0.251376 10.7997 0.25 10.8997 0.25 11H1.75ZM1.75355 10.7411C1.89043 5.75241 5.97793 1.75 11 1.75V0.25C5.16329 0.25 0.413218 4.90141 0.254112 10.7L1.75355 10.7411Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="list-text">Eng</span>
                                            <span className="list-icon">
                                                <svg
                                                    width={12}
                                                    height={6}
                                                    viewBox="0 0 12 6"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 0.633816C11.9468 0.446997 11.8569 0.28353 11.6806 0.158011C11.3811 -0.0492418 10.9485 -0.0550799 10.649 0.155092C10.5925 0.195958 10.5359 0.239744 10.4826 0.286449C9.02519 1.56499 7.5644 2.84645 6.10694 4.125C6.07367 4.15419 6.04705 4.18922 5.96719 4.24176C5.94389 4.20673 5.93059 4.16294 5.89731 4.13375C4.42654 2.84062 2.95245 1.5504 1.48168 0.257257C1.22213 0.0295716 0.922652 -0.0579998 0.563279 0.0412478C0.0408573 0.1872 -0.172104 0.776848 0.157321 1.16216C0.193924 1.20595 0.237182 1.24681 0.280439 1.28768C1.97748 2.7764 3.67119 4.26511 5.36823 5.75091C5.67769 6.02238 6.07034 6.07492 6.42639 5.89394C6.5129 5.85015 6.58944 5.78594 6.65931 5.72464C8.30644 4.27971 9.95024 2.83478 11.6007 1.39277C11.7837 1.23222 11.9468 1.06875 12 0.838149C12 0.771011 12 0.703873 12 0.633816Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                        <div className="slectbox-body" style={{ display: "none" }}>
                                            <div
                                                className="clickAway position-fixed"
                                            //onClick="selectBoxHandler('allsec')"
                                            />
                                            <ul className="country-options">
                                                <li className="all-option">
                                                    <span className="option-text list-text">Bangla</span>
                                                </li>
                                                <li className="all-option">
                                                    <span className="option-text list-text">Hindi</span>
                                                </li>
                                                <li className="all-option">
                                                    <span className="option-text list-text">Spanish</span>
                                                </li>
                                                <li className="all-option">
                                                    <span className="option-text list-text">Dutch</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="list-item no-link"
                                        //onClick="modalAction('.ticket')"
                                        >
                                            <span className="list-icon">
                                                <svg
                                                    width={18}
                                                    height={22}
                                                    viewBox="0 0 18 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <ellipse
                                                        cx="8.77799"
                                                        cy="17.1112"
                                                        rx="7.77799"
                                                        ry="3.88899"
                                                        stroke="white"
                                                        strokeWidth="1.4"
                                                        strokeLinejoin="round"
                                                    />
                                                    <circle
                                                        cx="8.77718"
                                                        cy="5.44456"
                                                        r="4.44456"
                                                        stroke="white"
                                                        strokeWidth="1.4"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="list-text">Login</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* header-menu */}
                    <div className="header-nav">
                        <div className="container">
                            <div className="header-nav-section">
                                <div className="header-navigation">
                                    <div className="header-logo">
                                        <a href="index-2.html">
                                            <img src="assets/img/logo/logo-1.png" alt="logo" />
                                        </a>
                                    </div>
                                    <ul className="header-menu header-list">
                                        <li className="nav-list">
                                            <a href="index-2.html" className="list-item no-link">
                                                <span className="list-text">Home</span>
                                            </a>
                                            <ul className="header-sub-menu">
                                                <li>
                                                    <a href="index-2.html" className="list-item no-link">
                                                        <span className="list-text">Homepage-01</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="home-two.html" className="list-item no-link">
                                                        <span className="list-text">Homepage-02</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="home-three.html" className="list-item no-link">
                                                        <span className="list-text">Homepage-03</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-list">
                                            <a href="about-us.html" className="list-item no-link">
                                                <span className="list-text">About</span>
                                            </a>
                                        </li>
                                        <li className="nav-list">
                                            <a href="#" className="list-item no-link">
                                                <span className="list-text">Hotel</span>
                                            </a>
                                            <ul className="header-sub-menu">
                                                <li>
                                                    <a href="hotel-ameneties.html" className="list-item no-link">
                                                        <span className="list-text">Hotel-Ameneties</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="hotel-details.html" className="list-item no-link">
                                                        <span className="list-text">Hotel-Details</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="hotel-list.html" className="list-item no-link">
                                                        <span className="list-text">Hotel-List</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="agent-profile.html" className="list-item no-link">
                                                        <span className="list-text">Agent-Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="hotel-error.html" className="list-item no-link">
                                                        <span className="list-text">Hotel-Error</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-list">
                                            <a href="#" className="list-item no-link">
                                                <span className="list-text">Blog</span>
                                            </a>
                                            <ul className="header-sub-menu">
                                                <li>
                                                    <a href="blog-details.html" className="list-item no-link">
                                                        <span className="list-text">Blog-Details</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-errors.html" className="list-item no-link">
                                                        <span className="list-text">Blog-Error</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid.html" className="list-item no-link">
                                                        <span className="list-text">Blog-Grid</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-sidebar.html" className="list-item no-link">
                                                        <span className="list-text">Blog-Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-list">
                                            <a href="#" className="list-item no-link">
                                                <span className="list-text">Pages</span>
                                            </a>
                                            <ul className="header-sub-menu">
                                                <li>
                                                    <a href="pricing.html" className="list-item no-link">
                                                        <span className="list-text">Pricing</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="payment-mathod.html" className="list-item no-link">
                                                        <span className="list-text">Payment-Method</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html" className="list-item no-link">
                                                        <span className="list-text">Privacy-Policy</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="terms-condition.html" className="list-item no-link">
                                                        <span className="list-text">Terms &amp; Condition</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="maintenance.html" className="list-item no-link">
                                                        <span className="list-text">Maintenance</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-list">
                                            <a href="faq.html" className="list-item no-link">
                                                <span className="list-text">Faq</span>
                                            </a>
                                        </li>
                                        <li className="nav-list">
                                            <a href="contact-us.html" className="list-item no-link">
                                                <span className="list-text">Contact</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-btn">
                                    <a href="hotel-list.html" className="primary-btn">
                                        <span>
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2V14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14V2Z" />
                                                <path d="M14 6C15.1046 6 16 6.89543 16 8C16 9.10457 15.1046 10 14 10L2 10C0.89543 10 -4.82823e-08 9.10457 0 8C4.82823e-08 6.89543 0.895431 6 2 6L14 6Z" />
                                            </svg>
                                        </span>
                                        <span> Add Hotel </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile-menu */}
                <nav className="mobile-menu d-block d-lg-none">
                    <div className="mobile-header">
                        <div className="header-logo">
                            <img src="assets/img/logo/logo-1.png" alt="img" />
                        </div>
                        <button
                            className="btn"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasWithBothOptions"
                            aria-controls="offcanvasWithBothOptions"
                        >
                            <span>
                                <svg
                                    width={22}
                                    height={14}
                                    viewBox="0 0 22 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.5 0.875C0.5 0.391751 0.891751 0 1.375 0H20.625C21.1082 0 21.5 0.391751 21.5 0.875C21.5 1.35825 21.1082 1.75 20.625 1.75H1.375C0.891751 1.75 0.5 1.35825 0.5 0.875ZM0.5 7C0.5 6.51675 0.891751 6.125 1.375 6.125H20.625C21.1082 6.125 21.5 6.51675 21.5 7C21.5 7.48325 21.1082 7.875 20.625 7.875H1.375C0.891751 7.875 0.5 7.48325 0.5 7ZM10.125 13.125C10.125 12.6418 10.5168 12.25 11 12.25H20.625C21.1082 12.25 21.5 12.6418 21.5 13.125C21.5 13.6082 21.1082 14 20.625 14H11C10.5168 14 10.125 13.6082 10.125 13.125Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div
                        className="offcanvas offcanvas-start"
                        data-bs-scroll="true"
                        tabIndex={-1}
                        id="offcanvasWithBothOptions"
                    >
                        <div className="offcanvas-header">
                            <a href="#" className="mobile-logo">
                                <img src="assets/img/logo/mobile-logo.png" alt="logo" />
                            </a>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <div className="mobile-menu-section">
                                <h4 className="title">Menu</h4>
                                <ul className="header-menu header-list">
                                    <li className="nav-list">
                                        <a href="#" className="list-item no-link">
                                            <span className="list-text">Home</span>
                                        </a>
                                        <ul className="d-menu">
                                            <li>
                                                <a href="index-2.html" className="list-item no-link">
                                                    Home-01{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-two.html" className="list-item no-link">
                                                    Home-02
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-three.html" className="list-item no-link">
                                                    Home-03
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-list">
                                        <a href="about-us.html" className="list-item no-link">
                                            <span className="list-text">About</span>
                                        </a>
                                    </li>
                                    <li className="nav-list">
                                        <a href="#" className="list-item no-link">
                                            <span className="list-text">Hotel</span>
                                        </a>
                                        <ul className="d-menu">
                                            <li>
                                                <a href="hotel-ameneties.html" className="list-item no-link">
                                                    <span className="list-text">Hotel-Ameneties</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="hotel-details.html" className="list-item no-link">
                                                    <span className="list-text">Hotel-List</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="agent-profile.html" className="list-item no-link">
                                                    <span className="list-text">Agent-Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="hotel-error.html" className="list-item no-link">
                                                    <span className="list-text">Hotel-Error</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-list">
                                        <a href="#" className="list-item no-link">
                                            <span className="list-text">Blog</span>
                                        </a>
                                        <ul className="d-menu">
                                            <li>
                                                <a href="blog-details.html" className="list-item no-link">
                                                    <span className="list-text">Blog-Details</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-errors.html" className="list-item no-link">
                                                    <span className="list-text">Blog-Error</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-grid.html" className="list-item no-link">
                                                    <span className="list-text">Blog-Grid</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-sidebar.html" className="list-item no-link">
                                                    <span className="list-text">Blog-Sidebar</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-list">
                                        <a href="#" className="list-item no-link">
                                            <span className="list-text">Pages</span>
                                        </a>
                                        <ul className="d-menu">
                                            <li>
                                                <a href="pricing.html" className="list-item no-link">
                                                    <span className="list-text">Pricing</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="payment-mathod.html" className="list-item no-link">
                                                    <span className="list-text">Payment-Method</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="privacy-policy.html" className="list-item no-link">
                                                    <span className="list-text">Privacy-Policy</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="terms-condition.html" className="list-item no-link">
                                                    <span className="list-text">Terms &amp; Condition</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="maintenance.html" className="list-item no-link">
                                                    <span className="list-text">Maintenance</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-list">
                                        <a href="faq.html" className="list-item no-link">
                                            <span className="list-text">FAQ</span>
                                        </a>
                                    </li>
                                    <li className="nav-list">
                                        <a href="contact-us.html" className="list-item no-link">
                                            <span className="list-text">Contact</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar