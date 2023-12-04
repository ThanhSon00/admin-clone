import React from "react";

export default function Dashboard() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
                <div className="col-md-12 col-lg-4 mb-4">
                    <div className="card">
                        <div className="d-flex align-items-end row">
                            <div className="col-8">
                                <div className="card-body">
                                    <h6 className="card-title mb-1 text-nowrap">Congratulations Katie!</h6>
                                    <small className="d-block mb-3 text-nowrap">Best seller of the month</small>

                                    <h5 className="card-title text-primary mb-1">$48.9k</h5>
                                    <small className="d-block mb-4 pb-1 text-muted">78% of target</small>

                                    <a href="javascript:;" className="btn btn-sm btn-primary">View sales</a>
                                </div>
                            </div>
                            <div className="col-4 pt-3 ps-0">
                                <img src="./assets/img/illustrations/prize-light.png" width="90" height="140" className="rounded-start" alt="View Sales" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 mb-4">
                    <div className="card">
                        <div className="card-body row g-4">
                            <div className="col-md-6 pe-md-4 card-separator">
                                <div className="card-title d-flex align-items-start justify-content-between">
                                    <h5 className="mb-0">New Visitors</h5>
                                    <small>Last Week</small>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="mt-auto">
                                        <h2 className="mb-2">23%</h2>
                                        <small className="text-danger text-nowrap fw-medium"><i className='bx bx-down-arrow-alt'></i> -13.24%</small>
                                    </div>
                                    <div id="visitorsChart"></div>
                                </div>
                            </div>
                            <div className="col-md-6 ps-md-4">
                                <div className="card-title d-flex align-items-start justify-content-between">
                                    <h5 className="mb-0">Activity</h5>
                                    <small>Last Week</small>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="mt-auto">
                                        <h2 className="mb-2">82%</h2>
                                        <small className="text-success text-nowrap fw-medium"><i className='bx bx-up-arrow-alt'></i> 24.8%</small>
                                    </div>
                                    <div id="activityChart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-3 col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-start justify-content-between">
                                        <div className="avatar flex-shrink-0">
                                            <img src="./assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded" />
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="cardOpt6">
                                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="d-block">Sales</span>
                                    <h4 className="card-title mb-1">$4,679</h4>
                                    <small className="text-success fw-medium"><i className='bx bx-up-arrow-alt'></i> +28.42%</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-3 col-6 mb-4">
                            <div className="card">
                                <div className="card-body pb-2">
                                    <span className="d-block fw-medium">Profit</span>
                                    <h3 className="card-title mb-0">624k</h3>
                                    <div id="profitChart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-3 col-6 mb-4">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <span className="d-block fw-medium">Expenses</span>
                                </div>
                                <div id="expensesChart" className="mb-2"></div>
                                <div className="p-3 pt-2">
                                    <small className="text-muted d-block text-center">$21k Expenses more than last month</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-3 col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-start justify-content-between">
                                        <div className="avatar flex-shrink-0">
                                            <img src="./assets/img/icons/unicons/briefcase.png" alt="Credit Card" className="rounded" />
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn p-0" type="button" id="cardOpt1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt1">
                                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="d-block">Transactions</span>
                                    <h4 className="card-title mb-1">$14,857</h4>
                                    <small className="text-success fw-medium"><i className='bx bx-up-arrow-alt'></i> +28.14%</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-12 col-lg-8 mb-4">
                    <div className="card">
                        <div className="row row-bordered g-0">
                            <div className="col-md-8">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Total Income</h5>
                                    <small className="card-subtitle">Yearly report overview</small>
                                </div>
                                <div className="card-body">
                                    <div id="totalIncomeChart"></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-header d-flex justify-content-between">
                                    <div>
                                        <h5 className="card-title mb-0">Report</h5>
                                        <small className="card-subtitle">Monthly Avg. $45.578k</small>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn p-0" type="button" id="totalIncome" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="totalIncome">
                                            <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                                            <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                                            <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="report-list">
                                        <div className="report-list-item rounded-2 mb-3">
                                            <div className="d-flex align-items-start">
                                                <div className="report-list-icon shadow-sm me-2">
                                                    <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/svg/icons/paypal-icon.svg" width="22" height="22" alt="Paypal" />
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end w-100 flex-wrap gap-2">
                                                    <div className="d-flex flex-column">
                                                        <span>Income</span>
                                                        <h5 className="mb-0">$42,845</h5>
                                                    </div>
                                                    <small className="text-success">+2.34k</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="report-list-item rounded-2 mb-3">
                                            <div className="d-flex align-items-start">
                                                <div className="report-list-icon shadow-sm me-2">
                                                    <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/svg/icons/shopping-bag-icon.svg" width="22" height="22" alt="Shopping Bag" />
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end w-100 flex-wrap gap-2">
                                                    <div className="d-flex flex-column">
                                                        <span>Expense</span>
                                                        <h5 className="mb-0">$38,658</h5>
                                                    </div>
                                                    <small className="text-danger">-1.15k</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="report-list-item rounded-2">
                                            <div className="d-flex align-items-start">
                                                <div className="report-list-icon shadow-sm me-2">
                                                    <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/svg/icons/wallet-icon.svg" width="22" height="22" alt="Wallet" />
                                                </div>
                                                <div className="d-flex justify-content-between align-items-end w-100 flex-wrap gap-2">
                                                    <div className="d-flex flex-column">
                                                        <span>Profit</span>
                                                        <h5 className="mb-0">$18,220</h5>
                                                    </div>
                                                    <small className="text-success">+1.35k</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row">

                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">Performance</h5>
                            <div className="dropdown">
                                <button className="btn p-0" type="button" id="performanceId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="performanceId">
                                    <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <small>Earnings: <span className="fw-medium">$846.17</span></small>
                                </div>
                                <div className="col-6">
                                    <small>Sales: <span className="fw-medium">25.7M</span></small>
                                </div>
                            </div>
                        </div>
                        <div id="performanceChart"></div>
                    </div>
                </div>



                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <div className="card-title mb-0">
                                <h5 className="m-0 me-2">Conversion Rate</h5>
                                <small className="text-muted">Compared To Last Month</small>
                            </div>
                            <div className="dropdown">
                                <button className="btn p-0" type="button" id="conversionRate" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="conversionRate">
                                    <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Share</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center gap-1 mb-4">
                                    <h2 className="mb-2">8.72%</h2>
                                    <small className="text-success fw-medium">
                                        <i className='bx bx-chevron-up'></i>
                                        4.8%
                                    </small>
                                </div>
                                <div id="conversionRateChart"></div>
                            </div>
                            <ul className="p-0 m-0">
                                <li className="d-flex mb-4">
                                    <div className="d-flex w-100 flex-wrap justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Impressions</h6>
                                            <small className="text-muted">12.4k Visits</small>
                                        </div>
                                        <div className="user-progress">
                                            <i className='bx bx-up-arrow-alt text-success me-2'></i> <span>12.8%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4">
                                    <div className="d-flex w-100 flex-wrap justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Added To Cart</h6>
                                            <small className="text-muted">32 Product in cart</small>
                                        </div>
                                        <div className="user-progress">
                                            <i className='bx bx-down-arrow-alt text-danger me-2'></i> <span>- 8.5% </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4">
                                    <div className="d-flex w-100 flex-wrap justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Checkout</h6>
                                            <small className="text-muted">21 Products checkout</small>
                                        </div>
                                        <div className="user-progress">
                                            <i className='bx bx-up-arrow-alt text-success me-2'></i> <span>9.12%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div className="d-flex w-100 flex-wrap justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Purchased</h6>
                                            <small className="text-muted">12 Orders</small>
                                        </div>
                                        <div className="user-progress">
                                            <i className='bx bx-up-arrow-alt text-success me-2'></i> <span>2.83%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 col-lg-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-start justify-content-between">
                                        <div className="avatar flex-shrink-0">
                                            <img src="./assets/img/icons/unicons/cc-warning.png" alt="Credit Card" className="rounded" />
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn p-0" type="button" id="cardOpt5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt5">
                                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="d-block mb-1">Revenue</span>
                                    <h3 className="card-title text-nowrap mb-2">$42,389</h3>
                                    <small className="text-success fw-medium"><i className='bx bx-up-arrow-alt'></i> +52.18%</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <span className="d-block fw-medium">Sales</span>
                                    <h3 className="card-title mb-2">482k</h3>
                                    <span className="badge bg-label-info mb-3">+34%</span>
                                    <small className="text-muted d-block">Sales Target</small>
                                    <div className="d-flex align-items-center">
                                        <div className="progress w-75 me-2" style={{height: "8px"}}>
                                            <div className="progress-bar bg-info" style={{width: "78%"}} role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>78%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between gap-3">
                                        <div className="d-flex align-items-start flex-column justify-content-between">
                                            <div className="card-title">
                                                <h5 className="mb-0">Expenses</h5>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="mt-auto">
                                                    <h3 className="mb-2">$84.7k</h3>
                                                    <small className="text-danger text-nowrap fw-medium"><i className='bx bx-down-arrow-alt'></i> 8.2%</small>
                                                </div>
                                            </div>
                                            <span className="badge bg-label-secondary rounded-pill">2021 Year</span>
                                        </div>
                                        <div id="expensesBarChart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-8 mb-4 mb-md-0">
                    <div className="card">
                        <div className="table-responsive text-nowrap">
                            <table className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Category</th>
                                        <th>Payment</th>
                                        <th>Order Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="./assets/img/products/oneplus-lg.png" alt="Oneplus" height="32" width="32" className="me-2" />
                                                <div className="d-flex flex-column">
                                                    <span className="fw-medium lh-1">OnePlus 7Pro</span>
                                                    <small className="text-muted">OnePlus</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-label-primary rounded-pill badge-center p-3 me-2"><i className="bx bx-mobile-alt bx-xs"></i></span> Smart Phone</td>
                                        <td>
                                            <div className="text-muted lh-1"><span className="text-primary fw-medium">$120</span>/499</div>
                                            <small className="text-muted">Partially Paid</small>
                                        </td>
                                        <td><span className="badge bg-label-primary">Confirmed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Details</a>
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="./assets/img/products/magic-mouse.png" alt="Apple" height="32" width="32" className="me-2" />
                                                <div className="d-flex flex-column">
                                                    <span className="fw-medium lh-1">Magic Mouse</span>
                                                    <small className="text-muted">Apple</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-label-warning rounded-pill badge-center p-3 me-2"><i className="bx bx-mouse bx-xs"></i></span> Mouse</td>
                                        <td>
                                            <div className="lh-1"><span className="text-primary fw-medium">$149</span></div>
                                            <small className="text-muted">Fully Paid</small>
                                        </td>
                                        <td><span className="badge bg-label-success">Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Details</a>
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="./assets/img/products/imac-pro.png" alt="Apple" height="32" width="32" className="me-2" />
                                                <div className="d-flex flex-column">
                                                    <span className="fw-medium lh-1">iMac Pro</span>
                                                    <small className="text-muted">Apple</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-label-info rounded-pill badge-center p-3 me-2"><i className="bx bx-desktop bx-xs"></i></span> Computer</td>
                                        <td>
                                            <div className="text-muted lh-1"><span className="text-primary fw-medium">$0</span>/899</div>
                                            <small className="text-muted">Unpaid</small>
                                        </td>
                                        <td><span className="badge bg-label-danger">Cancelled</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Details</a>
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="./assets/img/products/note10.png" alt="Samsung" height="32" width="32" className="me-2" />
                                                <div className="d-flex flex-column">
                                                    <span className="fw-medium lh-1">Note 10</span>
                                                    <small className="text-muted">Samsung</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-label-primary rounded-pill badge-center p-3 me-2"><i className="bx bx-mobile-alt bx-xs"></i></span> Smart Phone</td>
                                        <td>
                                            <div className="lh-1"><span className="text-primary fw-medium">$149</span></div>
                                            <small className="text-muted">Fully Paid</small>
                                        </td>
                                        <td><span className="badge bg-label-success">Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Details</a>
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="./assets/img/products/iphone.png" alt="Apple" height="32" width="32" className="me-2" />
                                                <div className="d-flex flex-column">
                                                    <span className="fw-medium lh-1">iPhone 11 Pro</span>
                                                    <small className="text-muted">Apple</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-label-primary rounded-pill badge-center p-3 me-2"><i className="bx bx-mobile-alt bx-xs"></i></span> Smart Phone</td>
                                        <td>
                                            <div className="lh-1"><span className="text-primary fw-medium">$399</span></div>
                                            <small className="text-muted">Fully Paid</small>
                                        </td>
                                        <td><span className="badge bg-label-success">Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Details</a>
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="./assets/img/products/mi-tv.png" alt="Xiaomi" height="32" width="32" className="me-2" />
                                                <div className="d-flex flex-column">
                                                    <span className="fw-medium lh-1">Mi LED TV 4X</span>
                                                    <small className="text-muted">Xiaomi</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-label-danger rounded-pill badge-center p-3 me-2"><i className="bx bx-tv bx-xs"></i></span> Smart TV</td>
                                        <td>
                                            <div className="text-muted lh-1"><span className="text-primary fw-medium">$349</span>/2499</div>
                                            <small className="text-muted">Partially Paid</small>
                                        </td>
                                        <td><span className="badge bg-label-primary">Confirmed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Details</a>
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="./assets/img/products/logitech-mx.png" alt="Logitech" height="32" width="32" className="me-2" />
                                                <div className="d-flex flex-column">
                                                    <span className="fw-medium lh-1">Logitech MX</span>
                                                    <small className="text-muted">Logitech</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-label-warning rounded-pill badge-center p-3 me-2"><i className="bx bx-mouse bx-xs"></i></span> Mouse</td>
                                        <td>
                                            <div className="lh-1"><span className="text-primary fw-medium">$89</span></div>
                                            <small className="text-muted">Fully Paid</small>
                                        </td>
                                        <td><span className="badge bg-label-primary">Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded"></i></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Details</a>
                                                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">Total Balance</h5>
                            <div className="dropdown">
                                <button className="btn p-0" type="button" id="totalBalance" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="totalBalance">
                                    <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-start">
                                <div className="d-flex pe-4">
                                    <div className="me-3">
                                        <span className="badge bg-label-warning p-2"><i className="bx bx-wallet text-warning"></i></span>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">$2.54k</h6>
                                        <small>Wallet</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-3">
                                        <span className="badge bg-label-secondary p-2"><i className="bx bx-dollar text-secondary"></i></span>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">$4.2k</h6>
                                        <small>Paypal</small>
                                    </div>
                                </div>
                            </div>
                            <div id="totalBalanceChart" className="border-bottom mb-3"></div>
                            <div className="d-flex justify-content-between">
                                <small className="text-muted">You have done <span className="fw-medium">57.6%</span> more sales.<br />Check your new badge in your profile.</small>
                                <div>
                                    <span className="badge bg-label-warning p-2"><i className="bx bx-chevron-right text-warning scaleX-n1-rtl"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}