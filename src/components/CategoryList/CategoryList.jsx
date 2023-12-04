import React from 'react';

export default function CategoryList() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">eCommerce /</span> Category List
            </h4>

            <div className="app-ecommerce-category">
                <div className="card">
                    <div className="card-datatable table-responsive">
                        <table className="datatables-category-list table border-top">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Categories</th>
                                    <th className="text-nowrap text-sm-end">Total Products &nbsp;</th>
                                    <th className="text-nowrap text-sm-end">Total Earning</th>
                                    <th className="text-lg-center">Actions</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEcommerceCategoryList" aria-labelledby="offcanvasEcommerceCategoryListLabel">
                    <div className="offcanvas-header py-4">
                        <h5 id="offcanvasEcommerceCategoryListLabel" className="offcanvas-title">Add Category</h5>
                        <button type="button" className="btn-close bg-label-secondary text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body border-top">
                        <form className="pt-0" id="eCommerceCategoryListForm" onsubmit="return true">
                            <div className="mb-3">
                                <label className="form-label" for="ecommerce-category-title">Title</label>
                                <input type="text" className="form-control" id="ecommerce-category-title" placeholder="Enter category title" name="categoryTitle" aria-label="category title"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="ecommerce-category-slug">Slug</label>
                                <input type="text" id="ecommerce-category-slug" className="form-control" placeholder="Enter slug" aria-label="slug" name="slug"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="ecommerce-category-image">Attachment</label>
                                <input className="form-control" type="file" id="ecommerce-category-image"/>
                            </div>
                            <div className="mb-3 ecommerce-select2-dropdown">
                                <label className="form-label" for="ecommerce-category-parent-category">Parent category</label>
                                <select id="ecommerce-category-parent-category" className="select2 form-select" data-placeholder="Select parent category">
                                    <option value="">Select parent Category</option>
                                    <option value="Household">Household</option>
                                    <option value="Management">Management</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Office">Office</option>
                                    <option value="Automotive">Automotive</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <div className="form-control p-0 pt-1">
                                    <div className="comment-editor border-0" id="ecommerce-category-description">
                                    </div>
                                    <div className="comment-toolbar border-0 rounded">
                                        <div className="d-flex justify-content-end">
                                            <span className="ql-formats me-0">
                                                <button className="ql-bold"></button>
                                                <button className="ql-italic"></button>
                                                <button className="ql-underline"></button>
                                                <button className="ql-list" value="ordered"></button>
                                                <button className="ql-list" value="bullet"></button>
                                                <button className="ql-link"></button>
                                                <button className="ql-image"></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-4 ecommerce-select2-dropdown">
                                <label className="form-label">Select category status</label>
                                <select id="ecommerce-category-status" className="select2 form-select" data-placeholder="Select category status">
                                    <option value="">Select category status</option>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Publish">Publish</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Add</button>
                                <button type="reset" className="btn bg-label-danger" data-bs-dismiss="offcanvas">Discard</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}