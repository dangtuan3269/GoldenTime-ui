import React from "react";
import SellingItem from "./SellingItem";
import { SellingWrapper } from "./style";
import { DataDigitalSelling } from "../../Data/DataHome/DataSelling/DataDigitalSelling";

const Selling = () => {
    return (
        <SellingWrapper>
            <SellingItem DataDigitalSelling={DataDigitalSelling}></SellingItem>
        </SellingWrapper>
    )
}

export default Selling;