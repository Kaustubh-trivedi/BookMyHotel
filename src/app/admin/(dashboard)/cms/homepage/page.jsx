"use client"
import React from 'react'
import { useForm } from "react-hook-form"

const page = () => {


    const { register, handleSubmit, watch,  formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                                <form >

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
                                                </div>
                                                {errors.banner_heading_first && <div className="error">{errors.banner_heading_first.message}</div>}
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
                                                </div>
                                                {errors.banner_heading_second && <div className="error">{errors.banner_heading_second.message}</div>}

                                                <div className="col-md-12">
                                                    <label htmlFor="banner_description" className="form-label">
                                                        Banner Description
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="banner_description"
                                                        {...register("banner_description", { required: "Required Field" })}
                                                    ></textarea>
                                                </div>
                                                {errors.banner_description && <div className="error">{errors.banner_description.message}</div>}
                                                <div className="col-md-6">
                                                    <label className="form-label" htmlFor="banner">
                                                        Upload Banner
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="banner"
                                                    />


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/*end::Body*/} {/*begin::Footer*/}
                                    <div className="card-footer">

                                        <button type="submit" className="btn btn-primary">
                                            Submit
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