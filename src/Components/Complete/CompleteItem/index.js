import React from "react";
import { Link } from "react-router-dom";
import { CompleteItemWrapper } from "./style";

const CompleteItem = () => {
    return (
        <CompleteItemWrapper>
            <h1>HOÀN THÀNH THÔNG TIN ĐƠN HÀNG</h1>
            <h2>THÔNG TIN NGƯỜI NHẬN</h2>
            <p>(Quý khách vui lòng điền thông tin cá nhân)</p>
            <br/> <br/>
            <div className="complete_information">
                <form>
                <input className="write" type="text" placeholder="Họ *"/> <br/> <br/>
                <input className="write" type="text" placeholder="Tên *"/> <br/> <br/>
                Giới tính:
                <input className="choose" type="radio" name="gender" value="nam"/> Nam
                <input className="choose" type="radio" name="gender" value="nu"/> Nữ <br/> <br/>
                <input className="write" type="text" placeholder="Số điện thoại *"/> <br/> <br/>
                <input className="write" type="text" placeholder="Email* "/> <br/> <br/>
                <input className="write" type="text" placeholder="Tỉnh/Thành phố *"/> <br/> <br/>
                <input className="write" type="text" placeholder="Quận/Huyện *"/> <br/> <br/>
                <input className="write" type="text" placeholder="Địa chỉ nhận hàng *"/> <br/> <br/>
                <input className="write" type="text" placeholder="Mã bưu điện"/> <br/> <br/>
                <input className="write" type="text" placeholder="Ghi chú"/> <br/> <br/>
                <button className="confirm"><Link to="/success">Xác nhận đơn hàng</Link></button>
                <button className="return"><Link to="/cart">Quay lại giỏ hàng</Link></button>
                </form>
            </div>
        </CompleteItemWrapper>
    )
}

export default CompleteItem;