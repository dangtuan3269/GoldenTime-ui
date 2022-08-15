import React from "react";
import { DataDigitalHistory } from "../../Data/DataHistory/DataHistory/DataDigitalHistory";
import HistoryItem from "./HistoryItem";
import {HistoryWrapper} from "./style";

const History = () => {
    return (
        <HistoryWrapper>
            <HistoryItem DataDigitalHistory={DataDigitalHistory}/>
        </HistoryWrapper>
    )
}

export default History;