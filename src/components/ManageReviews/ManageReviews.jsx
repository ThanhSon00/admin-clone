import React from "react";

export default function ManageReviews() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">



            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">eCommerce / </span>Manage reviews
            </h4>

            <div className="row mb-4 g-4">
                <div className="col-md-6">
                    <div className="card h-100">
                        <div className="card-body row widget-separator">
                            <div className="col-sm-5 border-shift border-end">
                                <h2 className="text-primary">4.89<i className='bx bxs-star mb-2 ms-1'></i></h2>
                                <p className="fw-medium mb-1">Total 187 reviews</p>
                                <p className="text-muted">All reviews are from genuine customers</p>
                                <span className="badge bg-label-primary p-2 mb-3 mb-sm-0">+5 This week</span>
                                <hr className="d-sm-none"/>
                            </div>

                            <div className="col-sm-7 gy-1 text-nowrap d-flex flex-column justify-content-between ps-4 gap-2 pe-3">
                                <div className="d-flex align-items-center gap-3">
                                    <small>5 Star</small>
                                    <div className="progress w-100" style={{height: "10px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="61.50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small className="w-px-20 text-end">124</small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <small>4 Star</small>
                                    <div className="progress w-100" style={{height: "10px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "30%"}} aria-valuenow="24" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small className="w-px-20 text-end">40</small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <small>3 Star</small>
                                    <div className="progress w-100" style={{height: "10px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "15%"}} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small className="w-px-20 text-end">12</small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <small>2 Star</small>
                                    <div className="progress w-100" style={{height: "10px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "10%"}} aria-valuenow="7" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small className="w-px-20 text-end">7</small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <small>1 Star</small>
                                    <div className="progress w-100" style={{height: "10px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "5%"}} aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small className="w-px-20 text-end">2</small>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100">
                        <div className="card-body row">
                            <div className="col-sm-5">
                                <div className="mb-5">
                                    <h4 className="mb-2 text-nowrap">Reviews statistics</h4>
                                    <p className="mb-0"> <span className="me-2">12 New reviews</span> <span className="badge bg-label-success">+8.4%</span></p>
                                </div>

                                <div>
                                    <h5 className="mb-2 fw-normal">
                                        <span className="text-success me-1">87%</span>Positive reviews
                                    </h5>
                                    <small className="text-muted">Weekly Report</small>
                                </div>
                            </div>
                            <div className="col-sm-7 d-flex justify-content-sm-end align-items-end">
                                <div id="reviewsChart"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-datatable table-responsive">
                    <table className="datatables-review table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Product</th>
                                <th className="text-nowrap">Reviewer</th>
                                <th>Review</th>
                                <th>Date</th>
                                <th className="text-nowrap">Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>


        </div>
    )
}