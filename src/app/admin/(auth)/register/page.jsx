import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className='register-page bg-body-secondary'>
                <div className="register-box">
                    <div className="register-logo">
                        {" "}
                        <a href="../index2.html">
                            <b>Admin</b>LTE
                        </a>{" "}
                    </div>{" "}
                    {/* /.register-logo */}
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="register-box-msg">Register a new membership</p>
                            <form action="../index3.html" method="post">
                                <div className="input-group mb-3">
                                    {" "}
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                    <div className="input-group-text">
                                        {" "}
                                        <span className="bi bi-person" />{" "}
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    {" "}
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-text">
                                        {" "}
                                        <span className="bi bi-envelope" />{" "}
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    {" "}
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                    <div className="input-group-text">
                                        {" "}
                                        <span className="bi bi-lock-fill" />{" "}
                                    </div>
                                </div>{" "}
                                {/*begin::Row*/}
                                <div className="row">
                                    <div className="col-8">
                                        <div className="form-check">
                                            {" "}
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefault"
                                            />{" "}
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                I agree to the <a href="#">terms</a>{" "}
                                            </label>{" "}
                                        </div>
                                    </div>{" "}
                                    {/* /.col */}
                                    <div className="col-4">
                                        <div className="d-grid gap-2">
                                            {" "}
                                            <button type="submit" className="btn btn-primary">
                                                Sign In
                                            </button>{" "}
                                        </div>
                                    </div>{" "}
                                    {/* /.col */}
                                </div>{" "}
                                {/*end::Row*/}
                            </form>
                            <div className="social-auth-links text-center mb-3 d-grid gap-2">
                                <p>- OR -</p>{" "}
                                <a href="#" className="btn btn-primary">
                                    {" "}
                                    <i className="bi bi-facebook me-2" /> Sign in using Facebook
                                </a>{" "}
                                <a href="#" className="btn btn-danger">
                                    {" "}
                                    <i className="bi bi-google me-2" /> Sign in using Google+
                                </a>
                            </div>{" "}
                            {/* /.social-auth-links */}
                            <p className="mb-0">
                                {" "}
                                <Link href="/admin/login" className="text-center">
                                    I already have a membership
                                </Link>{" "}
                            </p>
                        </div>{" "}
                        {/* /.register-card-body */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register