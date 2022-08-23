import React from "react";
import { Link } from "react-router-dom";
import { SuccessItemWrapper } from "./style";

const SuccessItem = () => {
    return (
        <SuccessItemWrapper>
            <img src="../../../../assets/image/42.gif"/>
            <div>
                <p>Chúc mừng !</p>
                <p>Bạn đã tạo đơn hàng thành công</p>
                <p>Hãy đợi trong giây lát, shop quản trị sẽ xác nhận đơn hàng của bạn trong ít phút</p>
                <p>Cảm ơn bạn đã tin tưởng và chọn những sản phẩm của shop</p>
                <p>Chúc bạn có những trải nghiệm mua sắm tuyệt vời tại Mona Watch</p>
            </div>
            <button><Link to="/">Quay trở lại trang chủ</Link></button>
        </SuccessItemWrapper>
    )
}

export default SuccessItem;