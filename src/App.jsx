import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import ProductDetailView from "@/views/ProductDetailView";
import LoginView from "@/views/LoginView";
import SignUpView from "@/views/SignUpView";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<ProductDetailView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/Sign_up" element={<SignUpView />} />
            </Route>
        </Routes>
    );
};
export default App;
