import React from "react";
import { SearchItemWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

const SearchItem = () => {
  return (
    <SearchItemWrapper>
      <div className="search">
        <Link to="/"><img src="/assets/image/1.png"></img></Link>
        <div className="search_input">
        <div className="input">
        <input type="text" placeholder="Tìm kiếm sản phẩm ...."/>
        </div>
        <div className="search_button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        </div>
      </div>
    </SearchItemWrapper>
  );
};

export default SearchItem;
