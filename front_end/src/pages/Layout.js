import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../UI/Navbar";
import Breadcrumb from "../UI/Breadcrumb";
import LoadingSpinner from "../UI/LoadingSpinner";

const Dashboard = React.lazy(() => import("./Dashboard"));
const InventoryPage = React.lazy(() => import("./Products/InventoryPage"));
const ProductDetails = React.lazy(() => import("./Products/ProductDetails"));
const OrderDetails = React.lazy(() => import("./Orders/OrderDetails"));
const PurchaseHistoryPage = React.lazy(() => import("./Orders/PurchaseHistoryPage"));
const SuppliersPage = React.lazy(() => import("./Suppliers/SuppliersPage"));

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Breadcrumb />
      <main>
        <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path="orders" element={<PurchaseHistoryPage />} />
            <Route path="orders/:orderId" element={<OrderDetails />} />
            <Route path="products" element={<InventoryPage />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="suppliers" element={<SuppliersPage />} />
          </Routes>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default Layout;
