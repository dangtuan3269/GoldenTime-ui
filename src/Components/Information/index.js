import React from "react";
import { DataDigitalInformation } from "../../Data/DataInformation/DataInformation/DataDigitalIformation";
import InformationItem from "./InformationItem";
import { InformationWrapper } from "./style";

const Information = () => {
    return (
        <InformationWrapper>
            <InformationItem DataDigitalInformation={DataDigitalInformation}/>
        </InformationWrapper>
    )
}

export default Information;