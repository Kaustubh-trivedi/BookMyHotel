import React from 'react'

const Category = () => {
    return (
        <>
            <section className="category section-padding">
                <div className="container">
                    <div
                        className="section-title center-item"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={1000}
                    >
                        <span className="subtitle">Categories</span>
                        <h2 className="heading">Most Demanding Categories</h2>
                    </div>
                    <div className="category-section">
                        <a
                            href="hotel-details.html"
                            className="category-wrapper center-item no-link"
                            data-aos="fade-right"
                            data-aos-delay={250}
                        >
                            <div className="wrapper-icon">
                                <img src="assets/img/wrapper-img/cat-img-1.svg" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h3 className="wrapper-title">Villa</h3>
                                <p className="wrapper-detail">2 Items</p>
                            </div>
                        </a>
                        <a
                            href="hotel-details.html"
                            className="category-wrapper center-item no-link"
                            data-aos="fade-right"
                            data-aos-delay={350}
                        >
                            <div className="wrapper-icon">
                                <img src="assets/img/wrapper-img/cat-img-2.svg" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h3 className="wrapper-title">Hotel</h3>
                                <p className="wrapper-detail">4 Items</p>
                            </div>
                        </a>
                        <a
                            href="hotel-details.html"
                            className="category-wrapper center-item no-link"
                            data-aos="fade-right"
                            data-aos-delay={450}
                        >
                            <div className="wrapper-icon">
                                <img src="assets/img/wrapper-img/cat-img-3.svg" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h3 className="wrapper-title">Resort</h3>
                                <p className="wrapper-detail">12 Items</p>
                            </div>
                        </a>
                        <a
                            href="hotel-details.html"
                            className="category-wrapper center-item no-link"
                            data-aos="fade-right"
                            data-aos-delay={550}
                        >
                            <div className="wrapper-icon">
                                <img src="assets/img/wrapper-img/cat-img-4.svg" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h3 className="wrapper-title">Cottage</h3>
                                <p className="wrapper-detail">8 Items</p>
                            </div>
                        </a>
                        <a
                            href="hotel-details.html"
                            className="category-wrapper center-item no-link"
                            data-aos="fade-right"
                            data-aos-delay={650}
                        >
                            <div className="wrapper-icon">
                                <img src="assets/img/wrapper-img/cat-img-5.svg" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h3 className="wrapper-title">Bungalow</h3>
                                <p className="wrapper-detail">6 Items</p>
                            </div>
                        </a>
                        <a
                            href="hotel-details.html"
                            className="category-wrapper center-item no-link"
                            data-aos="fade-right"
                            data-aos-delay={750}
                        >
                            <div className="wrapper-icon">
                                <img src="assets/img/wrapper-img/cat-img-6.svg" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h3 className="wrapper-title">Duplex</h3>
                                <p className="wrapper-detail">4 Items</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category