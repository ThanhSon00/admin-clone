import React from "react";

export default function DetailsBilling() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">


            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">eCommerce / Customer Details /</span> Address & Billing
            </h4>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between mb-4 text-center text-sm-start gap-2">
                <div className="mb-2 mb-sm-0">
                    <h4 className="mb-1">
                        Customer ID #634759
                    </h4>
                    <p className="mb-0">
                        Aug 17, 2020, 5:48 (ET)
                    </p>
                </div>
                <button type="button" className="btn btn-label-danger delete-customer">Delete Customer</button>
            </div>


            <div className="row">

                <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">

                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="customer-avatar-section">
                                <div className="d-flex align-items-center flex-column">
                                    <img className="img-fluid rounded my-3" src="./assets/img/avatars/12.png" height="110" width="110" alt="User avatar" />
                                    <div className="customer-info text-center">
                                        <h4 className="mb-1">Lorine Hischke</h4>
                                        <small>Customer ID #634759</small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around flex-wrap mt-4 py-3">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="avatar">
                                        <div className="avatar-initial rounded bg-label-primary"><i className='bx bx-cart-alt bx-sm'></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">184</h5>
                                        <span>Orders</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="avatar">
                                        <div className="avatar-initial rounded bg-label-primary"><i className='bx bx-dollar bx-sm'></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">$12,378</h5>
                                        <span>Spent</span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-container">
                                <small className="d-block pt-4 border-top fw-normal text-uppercase text-muted my-3">DETAILS</small>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <span className="fw-medium me-2">Username:</span>
                                        <span>lorine.hischke</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fw-medium me-2">Email:</span>
                                        <span>vafgot@vultukir.org</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fw-medium me-2">Status:</span>
                                        <span className="badge bg-label-success">Active</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fw-medium me-2">Contact:</span>
                                        <span>(123) 456-7890</span>
                                    </li>

                                    <li className="mb-3">
                                        <span className="fw-medium me-2">Country:</span>
                                        <span>USA</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <a href="" className="btn btn-primary me-3" data-bs-target="#editUser" data-bs-toggle="modal">Edit Details</a>

                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="card mb-4 bg-gradient-primary">
                        <div className="card-body">
                            <div className="row justify-content-between mb-3">
                                <div className="col-md-12 col-lg-7 col-xl-12 col-xxl-7 text-center text-lg-start text-xl-center text-xxl-start order-1  order-lg-0 order-xl-1 order-xxl-0">
                                    <h4 className="card-title text-white text-nowrap">Upgrade to premium</h4>
                                    <p className="card-text text-white">Upgrade customer to premium membership to access pro features.</p>
                                </div>
                                <span className="col-md-12 col-lg-5 col-xl-12 col-xxl-5 text-center mx-auto mx-md-0 mb-2"><img src="./assets/img/illustrations/rocket.png" className="w-px-75 m-2" alt="3dRocket" /></span>
                            </div>
                            <button className="btn btn-white text-primary w-100 fw-medium shadow-sm" data-bs-target="#upgradePlanModal" data-bs-toggle="modal">Upgrade to premium</button>
                        </div>
                    </div>


                </div>




                <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">

                    <ul className="nav nav-pills flex-column flex-md-row mb-4">
                        <li className="nav-item"><a className="nav-link" href=""><i className="bx bx-user me-1"></i>Overview</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><i className="bx bx-lock-alt me-1"></i>Security</a></li>
                        <li className="nav-item"><a className="nav-link active" href=""><i className="bx bx-detail me-1"></i>Address & Billing</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><i className="bx bx-bell me-1"></i>Notifications</a></li>
                    </ul>




                    <div className="card card-action mb-4">
                        <div className="card-header align-items-center flex-wrap gap-3 py-4">
                            <h5 className="card-action-title mb-0">Address Book</h5>
                            <div className="card-action-element">
                                <button className="btn btn-label-primary" type="button" data-bs-toggle="modal" data-bs-target="#addNewAddress">Add new address</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="accordion accordion-flush accordion-arrow-left" id="ecommerceBillingAccordionAddress">

                                <div className="accordion-item">
                                    <div className="accordion-header d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap" id="headingHome">
                                        <a className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ecommerceBillingAddressHome" aria-expanded="false" aria-controls="headingHome" role="button">
                                            <span>
                                                <span className="d-flex gap-2 align-items-baseline">
                                                    <span className="h6 mb-0">Home</span>
                                                    <span className="badge bg-label-success">Default Address</span>
                                                </span>
                                                <span className="mb-0 text-muted">23 Shatinon Mekalan</span>
                                            </span>
                                        </a>
                                        <div className="d-flex gap-3 p-4 p-sm-0 pt-0 ms-1 ms-sm-0">
                                            <a href=""><i className="bx bx-pencil text-secondary fs-4"></i></a>
                                            <a href=""><i className="bx bx-trash text-secondary fs-4"></i></a>
                                            <button className="btn p-0" data-bs-toggle="dropdown" aria-expanded="false" role="button"><i className="bx bx-dots-vertical-rounded text-secondary fs-4"></i></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="">Set as default address</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="ecommerceBillingAddressHome" className="accordion-collapse collapse" data-bs-parent="#ecommerceBillingAccordionAddress">
                                        <div className="accordion-body ps-4 ms-1">
                                            <h6 className="mb-1">Violet Mendoza</h6>
                                            <p className="mb-1">23 Shatinon Mekalan,</p>
                                            <p className="mb-1">Melbourne, VIC 3000,</p>
                                            <p className="mb-1">LondonUK</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-header d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap" id="headingOffice">
                                        <a className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ecommerceBillingAddressOffice" aria-expanded="false" aria-controls="headingOffice" role="button">
                                            <span className="d-flex flex-column">
                                                <span className="h6 mb-0">Office</span>
                                                <span className="mb-0 text-muted">45 Roker Terrace</span>
                                            </span>
                                        </a>
                                        <div className="d-flex gap-3 p-4 p-sm-0 pt-0 ms-1 ms-sm-0">
                                            <a href=""><i className="bx bx-pencil text-secondary fs-4"></i></a>
                                            <a href=""><i className="bx bx-trash text-secondary fs-4"></i></a>
                                            <button className="btn p-0" data-bs-toggle="dropdown" aria-expanded="false" role="button"><i className="bx bx-dots-vertical-rounded text-secondary fs-4"></i></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="">Set as default address</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="ecommerceBillingAddressOffice" className="accordion-collapse collapse" aria-labelledby="headingOffice" data-bs-parent="#ecommerceBillingAccordionAddress">
                                        <div className="accordion-body ps-4 ms-1">
                                            <h6 className="mb-1">Violet Mendoza</h6>
                                            <p className="mb-1">45 Roker Terrace,</p>
                                            <p className="mb-1">Latheronwheel,</p>
                                            <p className="mb-1">KW5 8NW</p>
                                            <p className="mb-1">LondonUK</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-header d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap" id="headingFamily">
                                        <a className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ecommerceBillingAddressFamily" aria-expanded="false" aria-controls="headingFamily" role="button">
                                            <span className="d-flex flex-column">
                                                <span className="h6 mb-0">Family</span>
                                                <span className="mb-0 text-muted">512 Water Plant</span>
                                            </span>
                                        </a>
                                        <div className="d-flex gap-3 p-4 p-sm-0 pt-0 ms-1 ms-sm-0">
                                            <a href=""><i className="bx bx-pencil text-secondary fs-4"></i></a>
                                            <a href=""><i className="bx bx-trash text-secondary fs-4"></i></a>
                                            <button className="btn p-0" data-bs-toggle="dropdown" aria-expanded="false" role="button"><i className="bx bx-dots-vertical-rounded text-secondary fs-4"></i></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="">Set as default address</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="ecommerceBillingAddressFamily" className="accordion-collapse collapse" aria-labelledby="headingFamily" data-bs-parent="#ecommerceBillingAccordionAddress">
                                        <div className="accordion-body ps-4 ms-1">
                                            <h6 className="mb-1">Violet Mendoza</h6>
                                            <p className="mb-1">512 Water Plant,</p>
                                            <p className="mb-1">Melbourne, NY 10036,</p>
                                            <p className="mb-1">New York,</p>
                                            <p className="mb-1">United States</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="card card-action mb-4">
                        <div className="card-header align-items-center flex-wrap gap-3 py-4">
                            <h5 className="card-action-title mb-0">Payment Methods</h5>
                            <div className="card-action-element">
                                <button className="btn btn-label-primary" type="button" data-bs-toggle="modal" data-bs-target="#addNewCCModal">Add payment methods</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="accordion accordion-flush accordion-arrow-left" id="ecommerceBillingAccordionPayment">

                                <div className="accordion-item">
                                    <div className="accordion-header d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap" id="headingPaymentMaster">
                                        <a className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ecommerceBillingPaymentMaster" aria-expanded="false" aria-controls="headingPaymentMaster" role="button">
                                            <span className="accordion-button-information d-flex align-items-center gap-3">
                                                <span className="accordion-button-image">
                                                    <img src="./assets/img/icons/payments/master-light.png" className="img-fluid w-px-50 h-px-30" alt="master-card" data-app-light-img="icons/payments/master-light.png" data-app-dark-img="icons/payments/master-dark.html" />
                                                </span>
                                                <span className="d-flex flex-column">
                                                    <span className="h6 mb-0">Mastercard</span>
                                                    <span className="mb-0 text-muted">Expires Apr 2028</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="d-flex gap-3 p-4 p-sm-0 pt-0 ms-1 ms-sm-0">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#editCCModal"><i className="bx bx-pencil text-secondary fs-4"></i></a>
                                            <a href=""><i className="bx bx-trash text-secondary fs-4"></i></a>
                                            <button className="btn p-0" data-bs-toggle="dropdown" aria-expanded="false" role="button"><i className="bx bx-dots-vertical-rounded text-secondary fs-4"></i></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="">Set as Primary</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="ecommerceBillingPaymentMaster" className="accordion-collapse collapse" data-bs-parent="#ecommerceBillingAccordionPayment">
                                        <div className="accordion-body d-flex align-items-baseline flex-wrap flex-xl-nowrap flex-sm-nowrap flex-md-wrap">
                                            <table className="table table-sm table-borderless text-nowrap">
                                                <tr>
                                                    <td className="w-50">Name</td>
                                                    <td className="fw-medium">Violet Mendoza</td>
                                                </tr>
                                                <tr>
                                                    <td>Number</td>
                                                    <td className="fw-medium">**** 4487</td>
                                                </tr>
                                                <tr>
                                                    <td>Expires</td>
                                                    <td className="fw-medium">04/2028</td>
                                                </tr>
                                                <tr>
                                                    <td>Type</td>
                                                    <td className="fw-medium">Visa credit card</td>
                                                </tr>
                                                <tr>
                                                    <td>Issuer</td>
                                                    <td className="fw-medium">VICBANK</td>
                                                </tr>
                                                <tr>
                                                    <td>ID</td>
                                                    <td className="fw-medium">id_w2r84jdy723</td>
                                                </tr>
                                            </table>
                                            <table className="table table-sm table-borderless text-nowrap">
                                                <tr>
                                                    <td className="w-50">Billing Phone</td>
                                                    <td className="fw-medium">USA</td>
                                                </tr>
                                                <tr>
                                                    <td>Number</td>
                                                    <td className="fw-medium">+7634 983 637</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td className="fw-medium">vafgot@vultukir.org</td>
                                                </tr>
                                                <tr>
                                                    <td>Origin</td>
                                                    <td className="fw-medium">United States <i className="fis fi fi-us rounded-circle me-2 fs-5"> </i></td>
                                                </tr>
                                                <tr>
                                                    <td>CVC check</td>
                                                    <td className="fw-medium">Passed <span className="badge bg-label-success rounded-pill p-0"><i className='bx bx-check'></i></span></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-header d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap" id="headingPaymentExpress">
                                        <a className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ecommerceBillingPaymentExpress" aria-expanded="false" aria-controls="headingPaymentExpress" role="button">
                                            <span className="accordion-button-information d-flex align-items-center gap-3">
                                                <span className="accordion-button-image">
                                                    <img src="./assets/img/icons/payments/ae-light.png" className="img-fluid w-px-50 h-px-30" alt="american-express-card" data-app-light-img="icons/payments/ae-light.png" data-app-dark-img="icons/payments/ae-dark.html" />
                                                </span>
                                                <span>
                                                    <span className="d-flex gap-2 flex-wrap align-items-baseline">
                                                        <span className="h6 mb-0 text-nowrap">American Express</span>
                                                        <span className="badge bg-label-success">Primary</span>
                                                    </span>
                                                    <span className="mb-0 text-muted">45 Roker Terrace</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="d-flex gap-3 p-4 p-sm-0 pt-0 ms-1 ms-sm-0">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#editCCModal"><i className="bx bx-pencil text-secondary fs-4"></i></a>
                                            <a href=""><i className="bx bx-trash text-secondary fs-4"></i></a>
                                            <button className="btn p-0" data-bs-toggle="dropdown" aria-expanded="false" role="button"><i className="bx bx-dots-vertical-rounded text-secondary fs-4"></i></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="">Set as Primary</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="ecommerceBillingPaymentExpress" className="accordion-collapse collapse" aria-labelledby="headingPaymentExpress" data-bs-parent="#ecommerceBillingAccordionPayment">
                                        <div className="accordion-body d-flex align-items-baseline flex-wrap flex-xl-nowrap flex-sm-nowrap flex-md-wrap">
                                            <table className="table table-sm table-borderless text-nowrap">
                                                <tr>
                                                    <td className="w-50">Name</td>
                                                    <td className="fw-medium">Violet Mendoza</td>
                                                </tr>
                                                <tr>
                                                    <td>Number</td>
                                                    <td className="fw-medium">**** 4487</td>
                                                </tr>
                                                <tr>
                                                    <td>Expires</td>
                                                    <td className="fw-medium">08/2028</td>
                                                </tr>
                                                <tr>
                                                    <td>Type</td>
                                                    <td className="fw-medium">Visa credit card</td>
                                                </tr>
                                                <tr>
                                                    <td>Issuer</td>
                                                    <td className="fw-medium">VICBANK</td>
                                                </tr>
                                                <tr>
                                                    <td>ID</td>
                                                    <td className="fw-medium">id_w2r84jdy723</td>
                                                </tr>
                                            </table>
                                            <table className="table table-sm table-borderless text-nowrap">
                                                <tr>
                                                    <td className="w-50">Billing Phone</td>
                                                    <td className="fw-medium">USA</td>
                                                </tr>
                                                <tr>
                                                    <td>Number</td>
                                                    <td className="fw-medium">+7634 983 637</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td className="fw-medium">vafgot@vultukir.org</td>
                                                </tr>
                                                <tr>
                                                    <td>Origin</td>
                                                    <td className="fw-medium">United States <i className="fis fi fi-us rounded-circle me-2 fs-5"> </i></td>
                                                </tr>
                                                <tr>
                                                    <td>CVC check</td>
                                                    <td className="fw-medium">Passed <span className="badge bg-label-success rounded-pill p-0"><i className='bx bx-check'></i></span></td>
                                                </tr>
                                            </table>
                                        </div>

                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-header d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap" id="headingPaymentVisa">
                                        <a className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#ecommerceBillingPaymentVisa" aria-expanded="false" aria-controls="headingPaymentVisa" role="button">
                                            <span className="accordion-button-information d-flex align-items-center gap-3">
                                                <span className="accordion-button-image">
                                                    <img src="./assets/img/icons/payments/visa-light.png" className="img-fluid w-px-50 h-px-30" alt="visa-card" data-app-light-img="icons/payments/visa-light.png" data-app-dark-img="icons/payments/visa-dark.html" />
                                                </span>
                                                <span className="d-flex flex-column">
                                                    <span className="h6 mb-0">Visa</span>
                                                    <span className="mb-0 text-muted">512 Water Plant</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="d-flex gap-3 p-4 p-sm-0 pt-0 ms-1 ms-sm-0">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#editCCModal"><i className="bx bx-pencil text-secondary fs-4"></i></a>
                                            <a href=""><i className="bx bx-trash text-secondary fs-4"></i></a>
                                            <button className="btn p-0" data-bs-toggle="dropdown" aria-expanded="false" role="button"><i className="bx bx-dots-vertical-rounded text-secondary fs-4"></i></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="">Set as Primary</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="ecommerceBillingPaymentVisa" className="accordion-collapse collapse" aria-labelledby="headingPaymentVisa" data-bs-parent="#ecommerceBillingAccordionPayment">
                                        <div className="accordion-body d-flex align-items-baseline flex-wrap flex-xl-nowrap flex-sm-nowrap flex-md-wrap">
                                            <table className="table table-sm table-borderless text-nowrap">
                                                <tr>
                                                    <td className="w-50">Name</td>
                                                    <td className="fw-medium">Violet Mendoza</td>
                                                </tr>
                                                <tr>
                                                    <td>Number</td>
                                                    <td className="fw-medium">**** 5155</td>
                                                </tr>
                                                <tr>
                                                    <td>Expires</td>
                                                    <td className="fw-medium">02/2022</td>
                                                </tr>
                                                <tr>
                                                    <td>Type</td>
                                                    <td className="fw-medium">Visa credit card</td>
                                                </tr>
                                                <tr>
                                                    <td>Issuer</td>
                                                    <td className="fw-medium">VICBANK</td>
                                                </tr>
                                                <tr>
                                                    <td>ID</td>
                                                    <td className="fw-medium">id_w2r84jdy723</td>
                                                </tr>
                                            </table>
                                            <table className="table table-sm table-borderless text-nowrap">
                                                <tr>
                                                    <td className="w-50">Billing Phone</td>
                                                    <td className="fw-medium">USA</td>
                                                </tr>
                                                <tr>
                                                    <td>Number</td>
                                                    <td className="fw-medium">+7634 983 637</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td className="fw-medium">vafgot@vultukir.org</td>
                                                </tr>
                                                <tr>
                                                    <td>Origin</td>
                                                    <td className="fw-medium">United States <i className="fis fi fi-us rounded-circle me-2 fs-5"> </i></td>
                                                </tr>
                                                <tr>
                                                    <td>CVC check</td>
                                                    <td className="fw-medium">Passed <span className="badge bg-label-success rounded-pill p-0"><i className='bx bx-check'></i></span></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>




            <div className="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center mb-4">
                                <h3>Edit User Information</h3>
                                <p>Updating user details will receive a privacy audit.</p>
                            </div>
                            <form id="editUserForm" className="row g-3" onsubmit="return false">
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserFirstName">First Name</label>
                                    <input type="text" id="modalEditUserFirstName" name="modalEditUserFirstName" className="form-control" placeholder="John" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserLastName">Last Name</label>
                                    <input type="text" id="modalEditUserLastName" name="modalEditUserLastName" className="form-control" placeholder="Doe" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" for="modalEditUserName">Username</label>
                                    <input type="text" id="modalEditUserName" name="modalEditUserName" className="form-control" placeholder="john.doe.007" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserEmail">Email</label>
                                    <input type="text" id="modalEditUserEmail" name="modalEditUserEmail" className="form-control" placeholder="example@domain.com" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserStatus">Status</label>
                                    <select id="modalEditUserStatus" name="modalEditUserStatus" className="form-select" aria-label="Default select example">
                                        <option selected>Status</option>
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
                                        <option value="3">Suspended</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditTaxID">Tax ID</label>
                                    <input type="text" id="modalEditTaxID" name="modalEditTaxID" className="form-control modal-edit-tax-id" placeholder="123 456 7890" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserPhone">Phone Number</label>
                                    <div className="input-group input-group-merge">
                                        <span className="input-group-text">+1</span>
                                        <input type="text" id="modalEditUserPhone" name="modalEditUserPhone" className="form-control phone-number-mask" placeholder="202 555 0111" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserLanguage">Language</label>
                                    <select id="modalEditUserLanguage" name="modalEditUserLanguage" className="select2 form-select" multiple>
                                        <option value="">Select</option>
                                        <option value="english" selected>English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="french">French</option>
                                        <option value="german">German</option>
                                        <option value="dutch">Dutch</option>
                                        <option value="hebrew">Hebrew</option>
                                        <option value="sanskrit">Sanskrit</option>
                                        <option value="hindi">Hindi</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserCountry">Country</label>
                                    <select id="modalEditUserCountry" name="modalEditUserCountry" className="select2 form-select" data-allow-clear="true">
                                        <option value="">Select</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Korea">Korea, Republic of</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Russia">Russian Federation</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="switch">
                                        <input type="checkbox" className="switch-input" />
                                        <span className="switch-toggle-slider">
                                            <span className="switch-on"></span>
                                            <span className="switch-off"></span>
                                        </span>
                                        <span className="switch-label">Use as a billing address?</span>
                                    </label>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                                    <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="editCCModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-simple modal-add-new-cc">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center mb-4">
                                <h3>Edit Card</h3>
                                <p>Edit your saved card details</p>
                            </div>
                            <form id="editCCForm" className="row g-3" onsubmit="return false">
                                <div className="col-12">
                                    <label className="form-label w-100" for="modalEditCard">Card Number</label>
                                    <div className="input-group input-group-merge">
                                        <input id="modalEditCard" name="modalEditCard" className="form-control credit-card-mask-edit" type="text" placeholder="4356 3215 6548 7898" value="4356 3215 6548 7898" aria-describedby="modalEditCard2" />
                                        <span className="input-group-text cursor-pointer p-1" id="modalEditCard2"><span className="card-type-edit"></span></span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditName">Name</label>
                                    <input type="text" id="modalEditName" className="form-control" placeholder="John Doe" value="John Doe" />
                                </div>
                                <div className="col-6 col-md-3">
                                    <label className="form-label" for="modalEditExpiryDate">Exp. Date</label>
                                    <input type="text" id="modalEditExpiryDate" className="form-control expiry-date-mask-edit" placeholder="MM/YY" value="08/28" />
                                </div>
                                <div className="col-6 col-md-3">
                                    <label className="form-label" for="modalEditCvv">CVV Code</label>
                                    <div className="input-group input-group-merge">
                                        <input type="text" id="modalEditCvv" className="form-control cvv-code-mask-edit" maxlength="3" placeholder="654" value="XXX" />
                                        <span className="input-group-text cursor-pointer" id="modalEditCvv2"><i className="bx bx-help-circle text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Card Verification Value"></i></span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="switch">
                                        <input type="checkbox" className="switch-input" />
                                        <span className="switch-toggle-slider">
                                            <span className="switch-on"></span>
                                            <span className="switch-off"></span>
                                        </span>
                                        <span className="switch-label">Set as primary card</span>
                                    </label>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1 mt-3">Submit</button>
                                    <button type="reset" className="btn btn-label-secondary mt-3" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="addNewAddress" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-add-new-address">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center mb-4">
                                <h3 className="address-title">Add New Address</h3>
                                <p className="address-subtitle">Add new address for express delivery</p>
                            </div>
                            <form id="addNewAddressForm" className="row g-3" onsubmit="return false">

                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md mb-md-0 mb-3">
                                            <div className="form-check custom-option custom-option-icon">
                                                <label className="form-check-label custom-option-content" for="customRadioHome">
                                                    <span className="custom-option-body">
                                                        <i className="bx bx-home"></i>
                                                        <span className="custom-option-title">Home</span>
                                                        <small> Delivery time (9am – 9pm) </small>
                                                    </span>
                                                    <input name="customRadioIcon" className="form-check-input" type="radio" value="" id="customRadioHome" checked />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md mb-md-0 mb-3">
                                            <div className="form-check custom-option custom-option-icon">
                                                <label className="form-check-label custom-option-content" for="customRadioOffice">
                                                    <span className="custom-option-body">
                                                        <i className='bx bx-briefcase'></i>
                                                        <span className="custom-option-title"> Office </span>
                                                        <small> Delivery time (9am – 5pm) </small>
                                                    </span>
                                                    <input name="customRadioIcon" className="form-check-input" type="radio" value="" id="customRadioOffice" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalAddressFirstName">First Name</label>
                                    <input type="text" id="modalAddressFirstName" name="modalAddressFirstName" className="form-control" placeholder="John" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalAddressLastName">Last Name</label>
                                    <input type="text" id="modalAddressLastName" name="modalAddressLastName" className="form-control" placeholder="Doe" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" for="modalAddressCountry">Country</label>
                                    <select id="modalAddressCountry" name="modalAddressCountry" className="select2 form-select" data-allow-clear="true">
                                        <option value="">Select</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Korea">Korea, Republic of</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Russia">Russian Federation</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                    </select>
                                </div>
                                <div className="col-12 ">
                                    <label className="form-label" for="modalAddressAddress1">Address Line 1</label>
                                    <input type="text" id="modalAddressAddress1" name="modalAddressAddress1" className="form-control" placeholder="12, Business Park" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" for="modalAddressAddress2">Address Line 2</label>
                                    <input type="text" id="modalAddressAddress2" name="modalAddressAddress2" className="form-control" placeholder="Mall Road" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalAddressLandmark">Landmark</label>
                                    <input type="text" id="modalAddressLandmark" name="modalAddressLandmark" className="form-control" placeholder="Nr. Hard Rock Cafe" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalAddressCity">City</label>
                                    <input type="text" id="modalAddressCity" name="modalAddressCity" className="form-control" placeholder="Los Angeles" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalAddressLandmark">State</label>
                                    <input type="text" id="modalAddressState" name="modalAddressState" className="form-control" placeholder="California" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalAddressZipCode">Zip Code</label>
                                    <input type="text" id="modalAddressZipCode" name="modalAddressZipCode" className="form-control" placeholder="99950" />
                                </div>
                                <div className="col-12">
                                    <label className="switch">
                                        <input type="checkbox" className="switch-input" />
                                        <span className="switch-toggle-slider">
                                            <span className="switch-on"></span>
                                            <span className="switch-off"></span>
                                        </span>
                                        <span className="switch-label">Use as a billing address?</span>
                                    </label>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                                    <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="addNewCCModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center mb-4">
                                <h3>Add New Card</h3>
                                <p>Add new card to complete payment</p>
                            </div>
                            <form id="addNewCCForm" className="row g-3" onsubmit="return false">
                                <div className="col-12">
                                    <label className="form-label w-100" for="modalAddCard">Card Number</label>
                                    <div className="input-group input-group-merge">
                                        <input id="modalAddCard" name="modalAddCard" className="form-control credit-card-mask" type="text" placeholder="1356 3215 6548 7898" aria-describedby="modalAddCard2" />
                                        <span className="input-group-text cursor-pointer p-1" id="modalAddCard2"><span className="card-type"></span></span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalAddCardName">Name</label>
                                    <input type="text" id="modalAddCardName" className="form-control" placeholder="John Doe" />
                                </div>
                                <div className="col-6 col-md-3">
                                    <label className="form-label" for="modalAddCardExpiryDate">Exp. Date</label>
                                    <input type="text" id="modalAddCardExpiryDate" className="form-control expiry-date-mask" placeholder="MM/YY" />
                                </div>
                                <div className="col-6 col-md-3">
                                    <label className="form-label" for="modalAddCardCvv">CVV Code</label>
                                    <div className="input-group input-group-merge">
                                        <input type="text" id="modalAddCardCvv" className="form-control cvv-code-mask" maxlength="3" placeholder="654" />
                                        <span className="input-group-text cursor-pointer" id="modalAddCardCvv2"><i className="bx bx-help-circle text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Card Verification Value"></i></span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="switch">
                                        <input type="checkbox" className="switch-input" />
                                        <span className="switch-toggle-slider">
                                            <span className="switch-on"></span>
                                            <span className="switch-off"></span>
                                        </span>
                                        <span className="switch-label">Save card for future billing?</span>
                                    </label>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1 mt-3">Submit</button>
                                    <button type="reset" className="btn btn-label-secondary btn-reset mt-3" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="upgradePlanModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center mb-4">
                                <h3>Upgrade Plan</h3>
                                <p>Choose the best plan for user.</p>
                            </div>
                            <form id="upgradePlanForm" className="row g-3" onsubmit="return false">
                                <div className="col-sm-9">
                                    <label className="form-label" for="choosePlan">Choose Plan</label>
                                    <select id="choosePlan" name="choosePlan" className="form-select" aria-label="Choose Plan">
                                        <option selected>Choose Plan</option>
                                        <option value="standard">Standard - $99/month</option>
                                        <option value="exclusive">Exclusive - $249/month</option>
                                        <option value="Enterprise">Enterprise - $499/month</option>
                                    </select>
                                </div>
                                <div className="col-sm-3 d-flex align-items-end">
                                    <button type="submit" className="btn btn-primary">Upgrade</button>
                                </div>
                            </form>
                        </div>
                        <hr className="mx-md-n5 mx-n3" />
                        <div className="modal-body">
                            <h6 className="mb-0">User current plan is standard plan</h6>
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="d-flex justify-content-center me-2 mt-3">
                                    <sup className="h5 pricing-currency pt-1 mt-3 mb-0 me-1 text-primary">$</sup>
                                    <h1 className="display-3 mb-0 text-primary">99</h1>
                                    <sub className="h5 pricing-duration mt-auto mb-2">/month</sub>
                                </div>
                                <button className="btn btn-label-danger cancel-subscription mt-3">Cancel Subscription</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}