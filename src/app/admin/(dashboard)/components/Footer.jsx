import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="app-footer">
                {" "}
                {/*begin::To the end*/}
                <div className="float-end d-none d-sm-inline">Anything you want</div>{" "}
                {/*end::To the end*/} {/*begin::Copyright*/}{" "}
                <strong>
                    Copyright © 2014-2024&nbsp;
                    <a href="https://adminlte.io" className="text-decoration-none">
                        AdminLTE.io
                    </a>
                    .
                </strong>
                All rights reserved.
                {/*end::Copyright*/}
            </footer>
        </>
    )
}

export default Footer