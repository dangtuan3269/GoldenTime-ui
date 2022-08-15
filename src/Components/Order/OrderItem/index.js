import React from "react";
import { OrderItemWrapper } from "./style";


const OrderItem = ({DataDigitalOrder}) => {
    return (
      <OrderItemWrapper>
        {DataDigitalOrder.map((item) => {
          {
            console.log("item ========", item);
          }
          return ( 
                <div className="order_item">
                    <span className="name">{item.name}</span> <br/> <br/>
                    <span className="code">Mã đơn hàng: <label>{item.code}</label></span> <br/>
                    <span className="price">Giá thành: <label>{item.price}</label></span> <br/>
                    <span className="receiver">Người nhận: <label>{item.receiver}</label></span> <br/>
                    <span className="address">Địa chỉ nhận hàng: <label>{item.address}</label></span> <br/>
                    <span className="status">Trạng thái đơn hàng: <label>{item.status}</label></span>
                </div>
          
          );
        })}
      </OrderItemWrapper>
    );
}

export default OrderItem;