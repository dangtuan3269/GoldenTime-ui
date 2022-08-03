import React from "react";
import { DataDigitalNotification } from "../../Data/DataNotification/DataNotification/DataDigitalNotification";
import NotificationItem from "./NotificationItem";
import { NotificationWrapper } from "./style";

const Notification = () => {
    return (
        <NotificationWrapper>
            <NotificationItem DataDigitalNotification={DataDigitalNotification}/>
        </NotificationWrapper>
    )
}

export default Notification;