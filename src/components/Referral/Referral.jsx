import React from "react";

export default function Referral() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">



            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">eCommerce / </span> Referrals
            </h4>

            <div className="row mb-4 g-3">
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="content-left">
                                    <h3 className="mb-0">$24,983</h3>
                                    <small>Total Earning</small>
                                </div>
                                <span className="badge bg-label-primary rounded-circle p-2">
                                    <i className="bx bx-dollar bx-sm"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="content-left">
                                    <h3 className="mb-0">$8,647</h3>
                                    <small>Unpaid Earning</small>
                                </div>
                                <span className="badge bg-label-success rounded-circle p-2">
                                    <i className="bx bx-gift bx-sm"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="content-left">
                                    <h3 className="mb-0">2,367</h3>
                                    <small>Signups</small>
                                </div>
                                <span className="badge bg-label-danger rounded-circle p-2">
                                    <i className="bx bx-user bx-sm"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="content-left">
                                    <h3 className="mb-0">4.5%</h3>
                                    <small>Conversion Rate</small>
                                </div>
                                <span className="badge bg-label-info rounded-circle p-2">
                                    <i className="bx bx-infinite bx-sm"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4 g-4">
                <div className="col-lg-7">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="mb-1">How to use</h5>
                            <p className="mb-4">Integrate your referral code in 3 easy steps.</p>
                            <div className="d-flex flex-column flex-sm-row justify-content-between text-center gap-3">
                                <div className="d-flex flex-column align-items-center">
                                    <span><i className='bx bx-rocket text-primary bx-md p-3 border border-primary rounded-circle border-dashed mb-0'></i></span>
                                    <p className="mt-3 mb-2 w-75">Create & validate your referral link and get</p>
                                    <h5 className="text-primary mb-0">$50</h5>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <span><i className='bx bxs-user-badge text-primary bx-md p-3 border border-primary rounded-circle border-dashed mb-0'></i></span>
                                    <p className="mt-3 mb-2 w-75">For every new signup you get</p>
                                    <h5 className="text-primary mb-0">10%</h5>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <span><i className='bx bxs-paper-plane text-primary bx-md p-3 border border-primary rounded-circle border-dashed mb-0'></i></span>
                                    <p className="mt-3 mb-2 w-75">Get other friends to generate link and get</p>
                                    <h5 className="text-primary mb-0">$100</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <form className="referral-form" onsubmit="return false">
                                <div className="mb-4 mt-1">
                                    <h5>Invite your friends</h5>
                                    <div className="d-flex flex-wrap flex-lg-nowrap gap-3 align-items-end">
                                        <div className="w-75">
                                            <label className="form-label mb-0" for="referralEmail">Enter friend’s email address and invite them</label>
                                            <input type="email" id="referralEmail" name="referralEmail" className="form-control w-100" placeholder="Email address" />
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5>Share the referral link</h5>
                                    <div className="d-flex flex-wrap flex-lg-nowrap gap-3 align-items-end">
                                        <div className="w-75">
                                            <label className="form-label mb-0" for="referralLink">Share referral link in social media</label>
                                            <input type="text" id="referralLink" name="referralLink" className="form-control w-100" placeholder="pixinvent.com/?ref=6479" />
                                        </div>
                                        <div className="d-flex">
                                            <button type="button" className="btn btn-facebook btn-icon me-2"><i className='bx bxl-facebook text-white bx-sm'></i></button>
                                            <button type="button" className="btn btn-twitter btn-icon"><i className='bx bxl-twitter text-white bx-sm'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-datatable table-responsive">
                    <table className="datatables-referral table border-top">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Users</th>
                                <th className="text-nowrap">Referred ID</th>
                                <th>Status</th>
                                <th>Value</th>
                                <th className="text-nowrap">Earnings</th>
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>


        </div>
    )
}