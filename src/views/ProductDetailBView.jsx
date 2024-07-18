import React from "react";
import styled from "styled-components";
import Iphone15pro from "../components/product/Iphone15pro";
import ColumnLeft from "@/components/product/ColumnLeft";
import ColumnRight from "@/components/product/ColumnRight";
import InformationView from "@/components/product/InformationView";

const ProductDetailBViewBlock = styled.div`
    padding: 20px 200px;
`;

const LeftRight = styled.div`
    overflow: hidden;
`;

const ProductDetailBView = () => {
    return (
        <ProductDetailBViewBlock>
            <Iphone15pro />
            <LeftRight>
                <ColumnLeft />
                <ColumnRight />
            </LeftRight>
            <InformationView />
        </ProductDetailBViewBlock>
    );
};

export default ProductDetailBView;
