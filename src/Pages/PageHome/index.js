import React from "react";
import Slider from "../../Components/Slider";
import Gender from "../../Components/Gender";
import Selling from "../../Components/Selling";
import Type from "../../Components/Type";
import Famous1 from "../../Components/Famous1";
import Famous2 from "../../Components/Famous2";
import News from "../../Components/News";
import Contact from "../../Components/Contact";
import Search from "../../Components/Search";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";

const PageHome = () => {
    return (
        <div>
        <Slider/>
        <Gender/>
        <Selling/>
        <Type/>
        <Famous1/>
        <Famous2/>
        <News/>
        </div>
    )
}

export default PageHome;