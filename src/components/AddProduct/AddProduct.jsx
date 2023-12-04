import React from "react";

export default function AddProduct() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">



            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">eCommerce /</span><span> Add Product</span>
            </h4>

            <div className="app-ecommerce">

                
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">

                    <div className="d-flex flex-column justify-content-center">
                        <h4 className="mb-1 mt-3">Add a new Product</h4>
                        <p className="text-muted">Orders placed across your store</p>
                    </div>
                    <div className="d-flex align-content-center flex-wrap gap-3">
                        <button className="btn btn-label-secondary">Discard</button>
                        <button className="btn btn-label-primary">Save draft</button>
                        <button type="submit" className="btn btn-primary">Publish product</button>
                    </div>

                </div>

                <div className="row">

                    
                    <div className="col-12 col-lg-8">
                        
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="card-tile mb-0">Product information</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label" for="ecommerce-product-name">Name</label>
                                    <input type="text" className="form-control" id="ecommerce-product-name" placeholder="Product title" name="productTitle" aria-label="Product title"/>
                                </div>
                                <div className="row mb-3">
                                    <div className="col"><label className="form-label" for="ecommerce-product-sku">SKU</label>
                                        <input type="number" className="form-control" id="ecommerce-product-sku" placeholder="SKU" name="productSku" aria-label="Product SKU"/></div>
                                    <div className="col"><label className="form-label" for="ecommerce-product-barcode">Barcode</label>
                                        <input type="text" className="form-control" id="ecommerce-product-barcode" placeholder="0123-4567" name="productBarcode" aria-label="Product barcode"/></div>
                                </div>
                                
                                <div>
                                    <label className="form-label">Description <span className="text-muted">(Optional)</span></label>
                                    <div className="form-control p-0 pt-1">
                                        <div className="comment-toolbar border-0 border-bottom">
                                            <div className="d-flex justify-content-start">
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
                                        <div className="comment-editor border-0 pb-4" id="ecommerce-category-description">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="card mb-4">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 card-title">Media</h5>
                                <a href="javascript:void(0);" className="fw-medium">Add media from URL</a>
                            </div>
                            <div className="card-body">
                                <form action="https://demos.themeselection.com/upload" className="dropzone needsclick" id="dropzone-basic">
                                    <div className="dz-message needsclick my-5">
                                        <p className="fs-4 note needsclick my-2">Drag and drop your image here</p>
                                        <small className="text-muted d-block fs-6 my-2">or</small>
                                        <span className="note needsclick btn bg-label-primary d-inline" id="btnBrowse">Browse image</span>
                                    </div>
                                    <div className="fallback">
                                        <input name="file" type="file" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Variants</h5>
                            </div>
                            <div className="card-body">
                                <form className="form-repeater">
                                    <div data-repeater-list="group-a">
                                        <div data-repeater-item>
                                            <div className="row">

                                                <div className="mb-3 col-4">
                                                    <label className="form-label" for="form-repeater-1-1">Options</label>
                                                    <select id="form-repeater-1-1" className="select2 form-select" data-placeholder="Size">
                                                        <option value="">Size</option>
                                                        <option value="size">Size</option>
                                                        <option value="color">Color</option>
                                                        <option value="weight">Weight</option>
                                                        <option value="smell">Smell</option>
                                                    </select>
                                                </div>

                                                <div className="mb-3 col-8">
                                                    <label className="form-label invisible" for="form-repeater-1-2">Not visible</label>
                                                    <input type="number" id="form-repeater-1-2" className="form-control" placeholder="Enter size" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" data-repeater-create>
                                            Add another option
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Inventory</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    
                                    <div className="col-12 col-md-4 mx-auto card-separator">
                                        <div className="d-flex justify-content-between flex-column mb-3 mb-md-0 pe-md-3">
                                            <ul className="nav nav-align-left nav-pills flex-column">
                                                <li className="nav-item">
                                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#restock">
                                                        <i className="bx bx-cube me-2"></i>
                                                        <span className="align-middle">Restock</span>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#shipping">
                                                        <i className="bx bx-car me-2"></i>
                                                        <span className="align-middle">Shipping</span>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#global-delivery">
                                                        <i className="bx bx-globe me-2"></i>
                                                        <span className="align-middle">Global Delivery</span>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#attributes">
                                                        <i className="bx bx-link me-2"></i>
                                                        <span className="align-middle">Attributes</span>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#advanced">
                                                        <i className="bx bx-lock me-2"></i>
                                                        <span className="align-middle">Advanced</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="col-12 col-md-8 pt-4 pt-md-0">
                                        <div className="tab-content p-0 pe-md-5 ps-md-3">
                                            
                                            <div className="tab-pane fade show active" id="restock" role="tabpanel">
                                                <h5>Options</h5>
                                                <label className="form-label" for="ecommerce-product-stock">Add to Stock</label>
                                                <div className="row mb-3 g-3">
                                                    <div className="col-12 col-sm-9">
                                                        <input type="number" className="form-control" id="ecommerce-product-stock" placeholder="Quantity" name="quantity" aria-label="Quantity"/></div>
                                                    <div className="col-12 col-sm-3">
                                                        <button className="btn btn-primary"><i className='bx bx-check me-2'></i>Confirm</button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Product in stock now: <span className="text-muted">54</span></h6>
                                                    <h6>Product in transit: <span className="text-muted">390</span></h6>
                                                    <h6>Last time restocked: <span className="text-muted">24th June, 2023</span></h6>
                                                    <h6>Total stock over lifetime: <span className="text-muted">2430</span></h6>
                                                </div>
                                            </div>
                                            
                                            <div className="tab-pane fade" id="shipping" role="tabpanel">
                                                <h5 className="mb-4">Shipping Type</h5>
                                                <div>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="radio" name="shippingType" id="seller"/>
                                                            <label className="form-check-label" for="seller">
                                                                <span className="mb-1 h6">Fulfilled by Seller</span>
                                                                <small className="text-muted">You'll be responsible for product delivery.<br/>
                                                                    Any damage or delay during shipping may cost you a Damage fee.</small>
                                                            </label>
                                                    </div>
                                                    <div className="form-check mb-5">
                                                        <input className="form-check-input" type="radio" name="shippingType" id="companyName" checked/>
                                                            <label className="form-check-label" for="companyName">
                                                                <span className="mb-1 h6">Fulfilled by Company name &nbsp;<span className="badge rounded-2 badge-warning bg-label-warning fs-tiny py-1">RECOMMENDED</span></span>
                                                                <br/><small className="text-muted">Your product, Our responsibility.<br/>
                                                                    For a measly fee, we will handle the delivery process for you.</small>
                                                            </label>
                                                    </div>
                                                    <p className="mb-0">See our <a href="javascript:void(0);">Delivery terms and conditions</a> for details</p>
                                                </div>
                                            </div>
                                            
                                            <div className="tab-pane fade" id="global-delivery" role="tabpanel">
                                                <h5 className="mb-4">Global Delivery</h5>
                                                
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" name="globalDel" id="worldwide"/>
                                                        <label className="form-check-label" for="worldwide">
                                                            <span className="mb-1 h6">Worldwide delivery</span>
                                                            <small className="text-muted">Only available with Shipping method:
                                                                <a href="javascript:void(0);">Fulfilled by Company name</a></small>
                                                        </label>
                                                </div>
                                                
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" name="globalDel" checked/>
                                                        <label className="form-check-label w-75 pe-5" for="country-selected">
                                                            <span className="mb-2 h6">Selected Countries</span>
                                                            <input type="text" className="form-control" placeholder="Type Country name" id="country-selected"/>
                                                        </label>
                                                </div>
                                                
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="globalDel" id="local"/>
                                                        <label className="form-check-label" for="local">
                                                            <span className="mb-1 h6">Local delivery</span>
                                                            <small className="text-muted">Deliver to your country of residence :
                                                                <a href="javascript:void(0);">Change profile address</a></small>
                                                        </label>
                                                </div>
                                            </div>
                                            
                                            <div className="tab-pane fade" id="attributes" role="tabpanel">
                                                <h5 className="mb-4">Attributes</h5>
                                                <div>
                                                    
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="checkbox" value="fragile" id="fragile"/>
                                                            <label className="form-check-label" for="fragile">
                                                                <span className="mb-0 h6">Fragile Product</span>
                                                            </label>
                                                    </div>
                                                    
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="checkbox" value="biodegradable" id="biodegradable"/>
                                                            <label className="form-check-label" for="biodegradable">
                                                                <span className="mb-0 h6">Biodegradable</span>
                                                            </label>
                                                    </div>
                                                    
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="checkbox" value="frozen" checked/>
                                                            <label className="form-check-label w-75 pe-5" for="frozen">
                                                                <span className="mb-1 h6">Frozen Product</span>
                                                                <input type="number" className="form-control" placeholder="Max. allowed Temperature" id="frozen"/>
                                                            </label>
                                                    </div>
                                                    
                                                    <div className="form-check mb-4">
                                                        <input className="form-check-input" type="checkbox" value="expDate" id="expDate" checked/>
                                                            <label className="form-check-label w-75 pe-5" for="date-input">
                                                                <span className="mb-1 h6">Expiry Date of Product</span>
                                                                <input type="date" className="product-date form-control" id="date-input"/>
                                                            </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className="tab-pane fade" id="advanced" role="tabpanel">
                                                <h5 className="mb-4">Advanced</h5>
                                                <div className="row">
                                                    
                                                    <div className="col">
                                                        <label className="form-label" for="product-id">
                                                            <span className="mb-0 h6">Product ID Type</span>
                                                        </label>
                                                        <select id="product-id" className="select2 form-select" data-placeholder="ISBN">
                                                            <option value="">ISBN</option>
                                                            <option value="ISBN">ISBN</option>
                                                            <option value="UPC">UPC</option>
                                                            <option value="EAN">EAN</option>
                                                            <option value="JAN">JAN</option>
                                                        </select>
                                                    </div>
                                                    
                                                    <div className="col">
                                                        <label className="form-label" for="product-id-1">
                                                            <span className="mb-0 h6">Product ID</span>
                                                        </label>
                                                        <input type="number" id="product-id-1" className="form-control" placeholder="ISBN Number" />
                                                    </div>

                                                </div>
                                            </div>
                                            

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    

                    
                    <div className="col-12 col-lg-4">
                        
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Pricing</h5>
                            </div>
                            <div className="card-body">
                                
                                <div className="mb-3">
                                    <label className="form-label" for="ecommerce-product-price">Base Price</label>
                                    <input type="number" className="form-control" id="ecommerce-product-price" placeholder="Price" name="productPrice" aria-label="Product price"/>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label" for="ecommerce-product-discount-price">Discounted Price</label>
                                    <input type="number" className="form-control" id="ecommerce-product-discount-price" placeholder="Discounted Price" name="productDiscountedPrice" aria-label="Product discounted price"/>
                                </div>
                                
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="price-charge-tax" checked/>
                                        <label className="form-label" for="price-charge-tax">
                                            Charge tax on this product
                                        </label>
                                </div>
                                
                                <div className="d-flex justify-content-between align-items-center border-top pt-3">
                                    <span className="mb-0 h6">In stock</span>
                                    <div className="w-25 d-flex justify-content-end">
                                        <label className="switch switch-primary switch-sm me-4 pe-2">
                                            <input type="checkbox" className="switch-input" checked=""/>
                                                <span className="switch-toggle-slider">
                                                    <span className="switch-on">
                                                        <span className="switch-off"></span>
                                                    </span>
                                                </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Organize</h5>
                            </div>
                            <div className="card-body">
                                
                                <div className="mb-3 col ecommerce-select2-dropdown">
                                    <label className="form-label mb-1" for="vendor">
                                        Vendor
                                    </label>
                                    <select id="vendor" className="select2 form-select" data-placeholder="Select Vendor">
                                        <option value="">Select Vendor</option>
                                        <option value="men-clothing">Men's Clothing</option>
                                        <option value="women-clothing">Women's-clothing</option>
                                        <option value="kid-clothing">Kid's-clothing</option>
                                    </select>
                                </div>
                                
                                <div className="mb-3 col ecommerce-select2-dropdown">
                                    <label className="form-label mb-1 d-flex justify-content-between align-items-center" for="category-org">
                                        <span>Category</span><a href="javascript:void(0);" className="fw-medium">Add new category</a>
                                    </label>
                                    <select id="category-org" className="select2 form-select" data-placeholder="Select Category">
                                        <option value="">Select Category</option>
                                        <option value="Household">Household</option>
                                        <option value="Management">Management</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Office">Office</option>
                                        <option value="Automotive">Automotive</option>
                                    </select>
                                </div>
                                
                                <div className="mb-3 col ecommerce-select2-dropdown">
                                    <label className="form-label mb-1" for="collection">Collection
                                    </label>
                                    <select id="collection" className="select2 form-select" data-placeholder="Collection">
                                        <option value="">Collection</option>
                                        <option value="men-clothing">Men's Clothing</option>
                                        <option value="women-clothing">Women's-clothing</option>
                                        <option value="kid-clothing">Kid's-clothing</option>
                                    </select>
                                </div>
                                
                                <div className="mb-3 col ecommerce-select2-dropdown">
                                    <label className="form-label mb-1" for="status-org">Status
                                    </label>
                                    <select id="status-org" className="select2 form-select" data-placeholder="Published">
                                        <option value="">Published</option>
                                        <option value="Published">Published</option>
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                
                                <div className="mb-3">
                                    <label for="ecommerce-product-tags" className="form-label mb-1">Tags</label>
                                    <input id="ecommerce-product-tags" className="form-control" name="ecommerce-product-tags" value="Normal,Standard,Premium" aria-label="Product Tags" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}