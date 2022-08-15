import React from "react";
import { DataDigitalOrder } from "../../Data/DataOrder/DataOrder/DataDigitalOrder";
import OrderItem from "./OrderItem";
import { OrderWrapper } from "./style";

const Order = () => {
    return (
        <OrderWrapper>
            <OrderItem DataDigitalOrder={DataDigitalOrder}/>
        </OrderWrapper>
    )
}

export default Order;