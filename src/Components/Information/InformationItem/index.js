import React from "react";
import { InformationItemWrapper } from "./style";


const InformationItem = ({DataDigitalInformation}) => {
    return (
      <InformationItemWrapper>
        {DataDigitalInformation.map((item) => {
          {
            console.log("item ========", item);
          }
          return (
            
                <div className="information_item">
                    <div className="image">
                        <img src={item.img}></img>  <br/> <br/> <br/>
                    </div>
                    <div className="infor">
                        <span>Họ và tên: <label>{item.name}</label></span> <br/> <br/>
                        <span>Số điện thoại: <label>{item.phone}</label></span>  <br/> <br/>
                        <span>Địa chỉ: <label>{item.address}</label></span> <br/> <br/>
                        <span>Mail: <label>{item.mail}</label></span> <br/> <br/>
                        <span>Giới tính: <label>{item.gender}</label></span> <br/> <br/>
                    </div>
                </div>
          
          );
        })}
      </InformationItemWrapper>
    );
}

export default InformationItem;