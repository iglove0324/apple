import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import ProductDetailView from "@/views/ProductDetailView";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
