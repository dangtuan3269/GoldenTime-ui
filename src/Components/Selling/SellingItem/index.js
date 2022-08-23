import React from "react";
import { SellingItemWrapper } from "./style";

const SellingItem = ({DataDigitalSelling}) => {
  const formater = new Intl.NumberFormat('vi', {
    style:"currency",
    currency: "VND"
})
    return (
      <SellingItemWrapper>
        {DataDigitalSelling?.map((item) => {
          return (
            <div className="product_item">
              {/* <Link to={`/PageProduct/${item.id}`}> */}
                <img src={item.img}></img> <br />
                <span className="product_item_name">{item.title}</span> <br/> <br/>
                <span className="product_item_price">{formater.format(item.price)}</span> <br/> <br/>
                <button className="product_item_button" onClick={()=>{
                  window.location.href = `/PageProduct/${item.id}`;
                }}>XEM CHI TIẾT</button>
              {/* </Link> */}
            </div>
          );
        })}
      </SellingItemWrapper>
    );
}

export default SellingItem;