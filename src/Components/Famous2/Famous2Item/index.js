import React from "react";
import { Famous2ItemWrapper } from "./style";
import { Link } from "react-router-dom";


const Famous2Item = ({DataDigitalFamous2}) => {
  const formater = new Intl.NumberFormat('vi', {
    style:"currency",
    currency: "VND"
})
    return (
      <Famous2ItemWrapper>
        {DataDigitalFamous2.map((item) => {
          {
            console.log("item ========", item);
          }
          return (
            <div className="product_item">
              {/* <Link to={`/PageDetail2/${item.id}`}> */}
                <img src={item.img}></img> <br />
                <span className="product_item_name">{item.title}</span> <br/> <br/>
                <span className="product_item_price">{formater.format(item.price)}</span> <br/> <br/>
                <button className="product_item_button" onClick={()=>{
                  window.location.href = `/PageDetail2/${item.id}`;
                }}>XEM CHI TIẾT</button>
                {/* </Link> */}
            </div>
          );
        })}
      </Famous2ItemWrapper>
    );
}

export default Famous2Item;