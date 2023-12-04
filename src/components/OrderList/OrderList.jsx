import React from "react";

export default function OrderList() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            
            

        <h4 className="py-3 mb-4">
          <span className="text-muted fw-light">eCommerce /</span> Order List
        </h4>
        
        
        
        <div className="card mb-4">
          <div className="card-widget-separator-wrapper">
            <div className="card-body card-widget-separator">
              <div className="row gy-4 gy-sm-1">
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-3 pb-sm-0">
                    <div>
                      <h3 className="mb-2">56</h3>
                      <p className="mb-0">Pending Payment</p>
                    </div>
                    <div className="avatar me-sm-4">
                      <span className="avatar-initial rounded bg-label-secondary">
                        <i className="bx bx-calendar bx-sm"></i>
                      </span>
                    </div>
                  </div>
                  <hr className="d-none d-sm-block d-lg-none me-4"/>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-3 pb-sm-0">
                    <div>
                      <h3 className="mb-2">12,689</h3>
                      <p className="mb-0">Completed</p>
                    </div>
                    <div className="avatar me-lg-4">
                      <span className="avatar-initial rounded bg-label-secondary">
                        <i className="bx bx-check-double bx-sm"></i>
                      </span>
                    </div>
                  </div>
                  <hr className="d-none d-sm-block d-lg-none"/>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start border-end pb-3 pb-sm-0 card-widget-3">
                    <div>
                      <h3 className="mb-2">124</h3>
                      <p className="mb-0">Refunded</p>
                    </div>
                    <div className="avatar me-sm-4">
                      <span className="avatar-initial rounded bg-label-secondary">
                        <i className="bx bx-wallet bx-sm"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="mb-2">32</h3>
                      <p className="mb-0">Failed</p>
                    </div>
                    <div className="avatar">
                      <span className="avatar-initial rounded bg-label-secondary">
                        <i className="bx bx-error-alt bx-sm"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="card">
          <div className="card-datatable table-responsive">
            <table className="datatables-order table border-top">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>order</th>
                  <th>date</th>
                  <th>customers</th>
                  <th>payment</th>
                  <th>status</th>
                  <th>method</th>
                  <th>actions</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        
        
                  </div>
    )
}