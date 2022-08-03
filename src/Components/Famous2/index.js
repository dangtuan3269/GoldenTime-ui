import React from "react";
import Famous2Item from "./Famous2Item";
import { Famous2Wrapper } from "./style";
import {DataDigitalFamous2} from "../../Data/DataHome/DataFamous2/DataDigitalFamous2"

const Famous2 = () => {
    return (
        <Famous2Wrapper>
            <Famous2Item DataDigitalFamous2={DataDigitalFamous2}></Famous2Item>
        </Famous2Wrapper>
    )
}

export default Famous2;