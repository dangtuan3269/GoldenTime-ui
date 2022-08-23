import React from "react";
import SearchItem from "./SearchItem";
import { SearchWrapper } from "./style";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <SearchWrapper>
            <SearchItem></SearchItem>
            <div className="">
                <Link to="/signup"><span className="icon-user"><FontAwesomeIcon icon={faUsers}/></span><span className="login-logout">Đăng nhập/Đăng ký</span></Link>
            </div>
        </SearchWrapper>
    )
}

export default Search;