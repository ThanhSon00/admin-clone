import React from "react";

export default function OrderDetails() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">



            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">eCommerce /</span> Order Details
            </h4>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">

                <div className="d-flex flex-column justify-content-center">
                    <h5 className="mb-1 mt-3">Order #32543 <span className="badge bg-label-success me-2 ms-2">Paid</span> <span className="badge bg-label-info">Ready to Pickup</span></h5>
                    <p className="text-body">Aug 17, <span id="orderYear"></span>, 5:48 (ET)</p>
                </div>
                <div className="d-flex align-content-center flex-wrap gap-2">
                    <button className="btn btn-label-danger delete-order">Delete Order</button>
                </div>
            </div>



            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title m-0">Order details</h5>
                            <h6 className="m-0"><a href=" javascript:void(0)">Edit</a></h6>
                        </div>
                        <div className="card-datatable table-responsive">
                            <table className="datatables-order-details table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className="w-50">products</th>
                                        <th className="w-25">price</th>
                                        <th className="w-25">qty</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="d-flex justify-content-end align-items-center m-3 mb-2 p-1">
                                <div className="order-calculations">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="w-px-100">Subtotal:</span>
                                        <span className="text-heading">$6398</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="w-px-100">Discount:</span>
                                        <span className="text-heading mb-0">$22</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="w-px-100">Tax:</span>
                                        <span className="text-heading">$30</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="w-px-100 mb-0">Total:</h6>
                                        <h6 className="mb-0">$6450</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <h5 className="card-title m-0">Shipping activity</h5>
                        </div>
                        <div className="card-body">
                            <ul className="timeline pb-0 mb-0">
                                <li className="timeline-item timeline-item-transparent border-primary">
                                    <span className="timeline-point-wrapper"><span className="timeline-point timeline-point-primary"></span></span>
                                    <div className="timeline-event">
                                        <div className="timeline-header">
                                            <h6 className="mb-0">Order was placed (Order ID: #32543)</h6>
                                            <span className="text-muted">Tuesday 11:29 AM</span>
                                        </div>
                                        <p className="mt-2">Your order has been placed successfully</p>
                                    </div>
                                </li>
                                <li className="timeline-item timeline-item-transparent border-primary">
                                    <span className="timeline-point-wrapper"><span className="timeline-point timeline-point-primary"></span></span>
                                    <div className="timeline-event">
                                        <div className="timeline-header">
                                            <h6 className="mb-0">Pick-up</h6>
                                            <span className="text-muted">Wednesday 11:29 AM</span>
                                        </div>
                                        <p className="mt-2">Pick-up scheduled with courier</p>
                                    </div>
                                </li>
                                <li className="timeline-item timeline-item-transparent border-primary">
                                    <span className="timeline-point-wrapper"><span className="timeline-point timeline-point-primary"></span></span>
                                    <div className="timeline-event">
                                        <div className="timeline-header">
                                            <h6 className="mb-0">Dispatched</h6>
                                            <span className="text-muted">Thursday 11:29 AM</span>
                                        </div>
                                        <p className="mt-2">Item has been picked up by courier</p>
                                    </div>
                                </li>
                                <li className="timeline-item timeline-item-transparent border-primary">
                                    <span className="timeline-point-wrapper"><span className="timeline-point timeline-point-primary"></span></span>
                                    <div className="timeline-event">
                                        <div className="timeline-header">
                                            <h6 className="mb-0">Package arrived</h6>
                                            <span className="text-muted">Saturday 15:20 AM</span>
                                        </div>
                                        <p className="mt-2">Package arrived at an Amazon facility, NY</p>
                                    </div>
                                </li>
                                <li className="timeline-item timeline-item-transparent border-left-dashed">
                                    <span className="timeline-point-wrapper"><span className="timeline-point timeline-point-primary"></span></span>
                                    <div className="timeline-event">
                                        <div className="timeline-header">
                                            <h6 className="mb-0">Dispatched for delivery</h6>
                                            <span className="text-muted">Today 14:12 PM</span>
                                        </div>
                                        <p className="mt-2">Package has left an Amazon facility, NY</p>
                                    </div>
                                </li>
                                <li className="timeline-item timeline-item-transparent border-transparent pb-0">
                                    <span className="timeline-point-wrapper"><span className="timeline-point timeline-point-secondary"></span></span>
                                    <div className="timeline-event pb-0">
                                        <div className="timeline-header">
                                            <h6 className="mb-0">Delivery</h6>
                                        </div>
                                        <p className="mt-2 mb-0">Package will be delivered by tomorrow</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">
                            <h6 className="card-title m-0">Customer details</h6>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-start align-items-center mb-4">
                                <div className="avatar me-2">
                                    <img src="../../assets/images/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="app-user-view-account.html" className="text-body text-nowrap">
                                        <h6 className="mb-0">Shamus Tuttle</h6>
                                    </a>
                                    <small className="text-muted">Customer ID: #58909</small></div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mb-4">
                                <span className="avatar rounded-circle bg-label-success me-2 d-flex align-items-center justify-content-center"><i className="bx bx-cart-alt bx-sm lh-sm"></i></span>
                                <h6 className="text-body text-nowrap mb-0">12 Orders</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Contact info</h6>
                                <h6><a href=" javascript:void(0)" data-bs-toggle="modal" data-bs-target="#editUser">Edit</a></h6>
                            </div>
                            <p className=" mb-1">Email: Shamus889@yahoo.com</p>
                            <p className=" mb-0">Mobile: +1 (609) 972-22-22</p>
                        </div>
                    </div>

                    <div className="card mb-4">

                        <div className="card-header d-flex justify-content-between">
                            <h6 className="card-title m-0">Shipping address</h6>
                            <h6 className="m-0"><a href=" javascript:void(0)" data-bs-toggle="modal" data-bs-target="#addNewAddress">Edit</a></h6>
                        </div>
                        <div className="card-body">
                            <p className="mb-0">45 Roker Terrace <br />Latheronwheel <br />KW5 8NW,London <br />UK</p>
                        </div>

                    </div>
                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between">
                            <h6 className="card-title m-0">Billing address</h6>
                            <h6 className="m-0"><a href=" javascript:void(0)" data-bs-toggle="modal" data-bs-target="#addNewAddress">Edit</a></h6>
                        </div>
                        <div className="card-body">
                            <p className="mb-4">45 Roker Terrace <br />Latheronwheel <br />KW5 8NW,London <br />UK</p>
                            <h6 className="mb-0 pb-2">Mastercard</h6>
                            <p className="mb-0">Card Number: ******4291</p>
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




        </div>
    )
}