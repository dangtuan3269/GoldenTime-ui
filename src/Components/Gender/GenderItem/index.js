import React from "react";
import { GenderItemWrapper } from "./style";

const GenderItem = () => {
    return (
        <GenderItemWrapper>
            <div className="Gender">
                <div className="male">
                    <span>Xu hướng 2019</span>
                    <hr></hr>
                    <p>ĐỒNG HỒ NAM</p>
                </div>
                <div className="female">
                    <span>Xu hướng 2019</span>
                    <hr></hr>
                    <p>ĐỒNG HỒ NỮ</p>
                </div>
            </div>
            <h2>TOP NHỮNG SẢN PHẨM BÁN CHẠY NHẤT TRANG WEB</h2>
        </GenderItemWrapper>
    )
}

export default GenderItem;