import React from "react";
import { MenuItemWrapper } from "./style";
import {Link} from "react-router-dom"

const MenuItem = () => {
    return (
        <MenuItemWrapper>
        <div className="menu">
            <ul>
                <li> <Link to="/">Trang chủ</Link> </li>
                <li> <Link to="/notification">Thông báo</Link> </li>
                <li> <Link to="/signup">Đăng ký, đăng nhập</Link> </li>
                <li> <Link to="/admin">Admin</Link> </li>
                <li> <Link to="/order">Quản lý đơn hàng</Link> </li>
                <li> <Link to="/information">Thông tin cá nhân</Link> </li>
                <li> <Link to="/history">Lịch sử đơn hàng</Link> </li>
                <li> <Link to="/cart">Giỏ hàng</Link> </li>
            </ul>
        </div>
        </MenuItemWrapper>
    )
}

export default MenuItem;