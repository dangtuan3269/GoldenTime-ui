import React from "react";
import { Famous1ItemWrapper } from "./style";


const Famous1Item = ({DataDigitalFamous1}) => {
    return (
      <Famous1ItemWrapper>
        {DataDigitalFamous1.map((item) => {
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
      </Famous1ItemWrapper>
    );
}

export default Famous1Item;