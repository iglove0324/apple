import React from "react";
import ProductDetail from "@/components/productDetail_b/ProductDetail";
import ProductDetailBView from "@/views/ProductDetailBView";

const ProductDetailView = () => {
    return (
        <div>
            <ProductDetailBView />
            <ProductDetail />
        </div>
    );
};

export default ProductDetailView;
