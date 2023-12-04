import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './Layout/Admin/Layout';
import CategoryList from './components/CategoryList/CategoryList';
import CustomerAll from './components/CustomerAll/CustomerAll';
import DetailsBilling from './components/DetailsBilling/DetailsBilling';
import Dashboard from './components/Dashboard/Dashboard';
import ManageReviews from './components/ManageReviews/ManageReviews';
import OrderDetails from './components/OrderDetails/OrderDetails';
import OrderList from './components/OrderList/OrderList';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';
import Referral from './components/Referral/Referral';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/customer-all" element={<CustomerAll />} />
          <Route path="/details-billing" element={<DetailsBilling />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-reviews" element={<ManageReviews />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/referral" element={<Referral />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
