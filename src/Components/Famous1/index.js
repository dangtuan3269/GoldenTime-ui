import React from "react";
import Famous1Item from "./Famous1Item";
import { Famous1Wrapper } from "./style";
import {DataDigitalFamous1} from "../../Data/DataHome/DataFamous1/DataDigitalFamous1"

const Famous1 = () => {
    return (
        <Famous1Wrapper>
            <Famous1Item DataDigitalFamous1={DataDigitalFamous1}></Famous1Item>
        </Famous1Wrapper>
    )
}

export default Famous1;