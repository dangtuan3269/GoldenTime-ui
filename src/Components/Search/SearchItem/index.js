import React from "react";
import { SearchItemWrapper } from "./style";

const SearchItem = () => {
    return (
        <SearchItemWrapper>
            <div className="search">
            <img src="image/1.png"></img>
            <input type="text" placeholder="Tìm kiếm sản phẩm ...."></input>
            <img src="image/2.png"></img>
            </div>
        </SearchItemWrapper>
    )
}

export default SearchItem;