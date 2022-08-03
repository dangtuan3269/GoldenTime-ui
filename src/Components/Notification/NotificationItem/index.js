import React from "react";
import { NotificationItemWrapper } from "./style";


const NotificationItem = ({DataDigitalNotification}) => {
    return (
      <NotificationItemWrapper>
        {DataDigitalNotification.map((item) => {
          {
            console.log("item ========", item);
          }
          return (
            
                <div className="notification_item">
                    <div className="image">
                        <img src={item.img}></img>
                    </div>
                    <div className="content">
                        <span>{item.title}</span> <br/> <br/>
                        <label>{item.date}</label>
                        <p>{item.content}</p>
                    </div>
                </div>
          
          );
        })}
      </NotificationItemWrapper>
    );
}

export default NotificationItem;