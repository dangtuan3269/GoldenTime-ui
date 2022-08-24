import React from "react";
import Famous1Item from "./Famous1Item";
import { Famous1Wrapper } from "./style";
import {DataDigitalFamous1} from "../../Data/DataHome/DataFamous1/DataDigitalFamous1"
import { useQuery } from "@tanstack/react-query";
import getAllWatchRequest, {GetAllWatchQueryKey} from "../../api/watch/getAllWatchRequest";
import { GOLDENTIME_API_DOMAIN } from "../../config/domain";

const Famous1 = () => {

    
    //Query để gọi api đến server
    const getAllWatchQuery = useQuery([GetAllWatchQueryKey], () => {
        return getAllWatchRequest({})
    }, {
        //Khi thành công, thực hiện lấy dữ liệu tuỳ chỉnh
        select: (data) => data.data,
    });

    //biến đổi thuộc tính dữ liệu để component có thể đọc được
    const list = (getAllWatchQuery.data?.data ?? []).map((item)=>({
        id: item.watchId,
        img: `${GOLDENTIME_API_DOMAIN}/${item.watchImage}`,
        title: item.watchName,
        price: parseFloat(item.price),
    }));

    return (
        <Famous1Wrapper>
            <Famous1Item DataDigitalFamous1={list}></Famous1Item>
        </Famous1Wrapper>
    )
}

export default Famous1;