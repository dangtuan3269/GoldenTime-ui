import React from "react";
import { Famous2ItemWrapper } from "./style";


const Famous2Item = ({DataDigitalFamous2}) => {
    return (
      <Famous2ItemWrapper>
        {DataDigitalFamous2.map((item) => {
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
      </Famous2ItemWrapper>
    );
}

export default Famous2Item;