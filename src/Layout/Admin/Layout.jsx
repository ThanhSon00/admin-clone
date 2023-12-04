import SneatBar from '../../components/SneatBar/SneatBar';
import SneatNavBar from '../../components/SneatNavBar/SneatNavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
    return (

        <>
            <noscript><iframe title="unique" src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP" height="0" width="0" /></noscript>
            <div className="layout-wrapper layout-content-navbar  ">
                <div className="layout-container">
                    <SneatBar />
                    <div className="layout-page">
                        <SneatNavBar />
                        <div className="content-wrapper">
                            <Outlet />
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                    <div className="mb-2 mb-md-0">
                                        ©
                                        {' '}
                                        <script>
                                            document.write(new Date().getFullYear())

                                        </script>
                                        , made with ❤️ by
                                        {' '}
                                        <a href="https://themeselection.com/" target="_blank" className="footer-link fw-medium" rel="noreferrer">ThemeSelection</a>
                                    </div>
                                    <div className="d-none d-lg-inline-block">

                                        <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank" rel="noreferrer">License</a>
                                        <a href="https://themeselection.com/" target="_blank" className="footer-link me-4" rel="noreferrer">More Themes</a>

                                        <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4" rel="noreferrer">Documentation</a>

                                        <a href="https://themeselection.com/support/" target="_blank" className="footer-link d-none d-sm-inline-block" rel="noreferrer">Support</a>

                                    </div>
                                </div>
                            </footer>
                            <div className="content-backdrop fade" />
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle" />
                <div className="drag-target" />
            </div>
        </>
    );
}
