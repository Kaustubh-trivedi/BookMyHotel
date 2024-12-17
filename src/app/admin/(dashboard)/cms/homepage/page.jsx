"use client"
import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"

const page = () => {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        try {
            axios.post(`http://localhost:3000/api/cms/homepage`, data)
                .then(res => {
                    if (res.status == 200) {
                        console.log("Data submitted successfully.")
                    } else {
                        console.log("Something is missing.")
                    }
                }).catch(err => {
                    console.log(err.message);
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <main className="app-main">
                <div className="app-content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="mb-0">Homepage Form</h3>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-end">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">CMS</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Homepage form
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="app-content">
                    <div className="container-fluid">

                        <div className="col-md-12">
                            <div className="card card-primary card-outline mb-4">

                                <div className="card-header">
                                    <div className="card-title">Basic Details</div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="card-body">
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="banner-heading-first" className="form-label">
                                                        First Banner Heading
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="banner-heading-first"
                                                        {...register("banner_heading_first", { required: "Required Field" })}
                                                    />
                                                    {errors.banner_heading_first && <div className="error">{errors.banner_heading_first.message}</div>}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="banner_heading_second" className="form-label">
                                                        Second Banner Heading
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="banner_heading_second"
                                                        {...register("banner_heading_second", { required: "Required Field" })}
                                                    />
                                                    {errors.banner_heading_second && <div className="error">{errors.banner_heading_second.message}</div>}
                                                </div>

                                                <div className="col-md-12">
                                                    <label htmlFor="banner_description" className="form-label">
                                                        Banner Description
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="banner_description"
                                                        {...register("banner_description", { required: "Required Field" })}
                                                    ></textarea>
                                                    {errors.banner_description && <div className="error">{errors.banner_description.message}</div>}
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <label className="form-label" htmlFor="banner">
                                                        Upload Banner
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="banner"
                                                        {...register("banner_", { required: "Required Field" })}
                                                    />
                                                    {errors.banner && <div className="error">{errors.banner.message}</div>}

                                                </div> */}
                                                <div className="col-md-6">
                                                    <label htmlFor="category_heading" className="form-label">
                                                        Category Heading
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="category_heading"
                                                        {...register("category_heading", { required: "Required Field" })}
                                                    />
                                                    {errors.category_heading && <div className="error">{errors.category_heading.message}</div>}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="featured_hotels_heading" className="form-label">
                                                        Featured Hotels Heading
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="featured_hotels_heading"
                                                        {...register("featured_hotels_heading", { required: "Required Field" })}
                                                    />
                                                    {errors.featured_hotels_heading && <div className="error">{errors.featured_hotels_heading.message}</div>}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="services_heading" className="form-label">
                                                        Services Heading
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="services_heading"
                                                        {...register("services_heading", { required: "Required Field" })}
                                                    />
                                                    {errors.services_heading && <div className="error">{errors.services_heading.message}</div>}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="our_all_hotels_heading" className="form-label">
                                                        All our Hotels Heading
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="our_all_hotels_heading"
                                                        {...register("our_all_hotels_heading", { required: "Required Field" })}
                                                    />
                                                    {errors.our_all_hotels_heading && <div className="error">{errors.our_all_hotels_heading.message}</div>}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="testimonials_heading" className="form-label">
                                                        Testimonials Heading
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="testimonials_heading"
                                                        {...register("testimonials_heading", { required: "Required Field" })}
                                                    />
                                                    {errors.testimonials_heading && <div className="error">{errors.testimonials_heading.message}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Body*/} {/*begin::Footer*/}
                                    <div className="card-footer">

                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </div>
                                    {/*end::Footer*/}
                                </form>
                                {/*end::Form*/}
                            </div>


                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default page;