import React from "react";
import { Famous1ItemWrapper } from "./style";



const Famous1Item = ({ DataDigitalFamous1 }) => {
  const formater = new Intl.NumberFormat('vi', {
    style: "currency",
    currency: "VND"
  })

  return (
    <Famous1ItemWrapper>
      {DataDigitalFamous1.map((item) => {
        console.log("item ========", item);
        return (
          <div className="product_item">
            {/* <Link to={`/PageDetail1/${item.id}`}> */}
            <img crossOrigin="anonymous" src={item.img} alt={item.title}></img> <br />
            <span className="product_item_name">{item.title}</span> <br /> <br />
            <span className="product_item_price">{formater.format(item.price)}</span> <br /> <br />
            <button className="product_item_button" onClick={() => {
              window.location.href = `/PageDetail1/${item.id}`;
            }}>XEM CHI TIẾT</button>
            {/* </Link> */}
          </div>
        );
      })}
    </Famous1ItemWrapper>
  );
}

export default Famous1Item;