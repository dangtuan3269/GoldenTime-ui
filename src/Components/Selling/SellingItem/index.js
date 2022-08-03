import React from "react";
import { SellingItemWrapper } from "./style";


const SellingItem = ({DataDigitalSelling}) => {
    return (
      <SellingItemWrapper>
        {DataDigitalSelling.map((item) => {
          {
            console.log("item ========", item);
          }
          return (
            <div className="product_item">
                <img src={item.img}></img> <br />
                <span className="product_item_name">{item.title}</span> <br/> <br/>
                <span className="product_item_price">{item.price}</span> <br/> <br/>
                <button className="product_item_button">THÊM VÀO GIỎ</button>
            </div>
          );
        })}
      </SellingItemWrapper>
    );
}

export default SellingItem;