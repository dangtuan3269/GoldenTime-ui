import React from "react";
import { TypeItemWrapper } from "./style";

const TypeItem = () => {
    return (
        <TypeItemWrapper>
            <div className="type">
                <div className="basic">
                    <span>CỔ ĐIỂN</span>
                    <p>Đa dạng về phong cách</p>
                </div>
                <div className="smart">
                    <span>SMART WATCH</span>
                    <p>Đa dạng về tính năng</p>
                </div>
            </div>
            <h2>TOP NHỮNG SẢN PHẨM PHỔ BIẾN NHẤT TRANG WEB</h2>
        </TypeItemWrapper>
    )
}

export default TypeItem;