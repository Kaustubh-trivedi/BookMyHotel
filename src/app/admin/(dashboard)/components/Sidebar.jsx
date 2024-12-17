import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <>
            <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">

                <div className="sidebar-brand">
                    <Link href="./index.html" className="brand-link">

                        <img
                            src="/assets/img/AdminLTELogo.png"
                            alt="AdminLTE Logo"
                            className="brand-image opacity-75 shadow"
                        />
                        <span className="brand-text fw-light">AdminLTE 4</span>
                    </Link>
                </div>
                <div className="sidebar-wrapper">
                    <nav className="mt-2">
                        <ul
                            className="nav sidebar-menu flex-column"
                            data-lte-toggle="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item menu-open">

                                <Link href="#" className="nav-link active">

                                    <i className="nav-icon bi bi-speedometer" />
                                    <p>
                                        Dashboard
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                {/* <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="./index.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Dashboard v1</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="./index2.html" className="nav-link active">
                                            <p>
                                                <i className="fa-solid fa-circle-dot"></i>
                                            </p>
                                            <p>Dashboard v2</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./index3.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Dashboard v3</p>
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            <li className="nav-item">

                                <Link href="./generate/theme.html" className="nav-link">

                                    <i className="nav-icon bi bi-palette" />
                                    <p>Theme Generate</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-box-seam-fill" />
                                    <p>
                                        Widgets
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="./widgets/small-box.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Small Box</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./widgets/info-box.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>info Box</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./widgets/cards.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Cards</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-clipboard-fill" />
                                    <p>
                                        Layout Options
                                        <span className="nav-badge badge text-bg-secondary me-3">
                                            6
                                        </span>
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="./layout/unfixed-sidebar.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Default Sidebar</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./layout/fixed-sidebar.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Fixed Sidebar</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./layout/layout-custom-area.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>
                                                Layout <small>+ Custom Area </small>
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./layout/sidebar-mini.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Sidebar Mini</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./layout/collapsed-sidebar.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>
                                                Sidebar Mini <small>+ Collapsed</small>
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./layout/logo-switch.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>
                                                Sidebar Mini <small>+ Logo Switch</small>
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./layout/layout-rtl.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Layout RTL</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-tree-fill" />
                                    <p>
                                        UI Elements
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="./UI/general.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>General</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./UI/icons.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Icons</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./UI/timeline.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Timeline</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-pencil-square" />
                                    <p>
                                        Forms
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="./forms/general.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>General Elements</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-table" />
                                    <p>
                                        Tables
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="./tables/simple.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Simple Tables</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">EXAMPLES</li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-box-arrow-in-right" />
                                    <p>
                                        Auth
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="#" className="nav-link">

                                            <i className="nav-icon bi bi-box-arrow-in-right" />
                                            <p>
                                                Version 1
                                                <i className="nav-arrow bi bi-chevron-right" />
                                            </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">

                                                <Link href="./examples/login.html" className="nav-link">

                                                    <i className="nav-icon bi bi-circle" />
                                                    <p>Login</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">

                                                <Link href="./examples/register.html" className="nav-link">

                                                    <i className="nav-icon bi bi-circle" />
                                                    <p>Register</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="#" className="nav-link">

                                            <i className="nav-icon bi bi-box-arrow-in-right" />
                                            <p>
                                                Version 2
                                                <i className="nav-arrow bi bi-chevron-right" />
                                            </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">

                                                <Link href="./examples/login-v2.html" className="nav-link">

                                                    <i className="nav-icon bi bi-circle" />
                                                    <p>Login</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">

                                                <Link href="./examples/register-v2.html" className="nav-link">

                                                    <i className="nav-icon bi bi-circle" />
                                                    <p>Register</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="./examples/lockscreen.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Lockscreen</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">DOCUMENTATIONS</li>
                            <li className="nav-item">

                                <Link href="./docs/introduction.html" className="nav-link">

                                    <i className="nav-icon bi bi-download" />
                                    <p>Installation</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="./docs/layout.html" className="nav-link">

                                    <i className="nav-icon bi bi-grip-horizontal" />
                                    <p>Layout</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="./docs/color-mode.html" className="nav-link">

                                    <i className="nav-icon bi bi-star-half" />
                                    <p>Color Mode</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-ui-checks-grid" />
                                    <p>
                                        Components
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link
                                            href="./docs/components/main-header.html"
                                            className="nav-link"
                                        >

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Main Header</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link
                                            href="./docs/components/main-sidebar.html"
                                            className="nav-link"
                                        >

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Main Sidebar</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-filetype-js" />
                                    <p>
                                        Javascript
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="./docs/javascript/treeview.html" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Treeview</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="./docs/browser-support.html" className="nav-link">

                                    <i className="nav-icon bi bi-browser-edge" />
                                    <p>Browser Support</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="./docs/how-to-contribute.html" className="nav-link">

                                    <i className="nav-icon bi bi-hand-thumbs-up-fill" />
                                    <p>How To Contribute</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="./docs/faq.html" className="nav-link">

                                    <i className="nav-icon bi bi-question-circle-fill" />
                                    <p>FAQ</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="./docs/license.html" className="nav-link">

                                    <i className="nav-icon bi bi-patch-check-fill" />
                                    <p>License</p>
                                </Link>
                            </li>
                            <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-circle-fill" />
                                    <p>Level 1</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-circle-fill" />
                                    <p>
                                        Level 1
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">

                                        <Link href="#" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Level 2</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="#" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>
                                                Level 2
                                                <i className="nav-arrow bi bi-chevron-right" />
                                            </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">

                                                <Link href="#" className="nav-link">

                                                    <i className="nav-icon bi bi-record-circle-fill" />
                                                    <p>Level 3</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">

                                                <Link href="#" className="nav-link">

                                                    <i className="nav-icon bi bi-record-circle-fill" />
                                                    <p>Level 3</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">

                                                <Link href="#" className="nav-link">

                                                    <i className="nav-icon bi bi-record-circle-fill" />
                                                    <p>Level 3</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">

                                        <Link href="#" className="nav-link">

                                            <i className="nav-icon bi bi-circle" />
                                            <p>Level 2</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-circle-fill" />
                                    <p>Level 1</p>
                                </Link>
                            </li>
                            <li className="nav-header">LABELS</li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-circle text-danger" />
                                    <p className="text">Important</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-circle text-warning" />
                                    <p>Warning</p>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link href="#" className="nav-link">

                                    <i className="nav-icon bi bi-circle text-info" />
                                    <p>Informational</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidebar