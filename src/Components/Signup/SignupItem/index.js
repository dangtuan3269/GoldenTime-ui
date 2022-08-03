import React from "react";
import { SignupItemWrapper } from "./style";

const SignupItem = () => {
    return (
        <SignupItemWrapper>
            <div className="signup">
                <form>
                <h1>ĐĂNG NHẬP</h1>
                <input type="text" placeholder="Tên đăng nhập"/> <br/> <br/>
                <input type="password" placeholder="Mật khẩu"/> <br/> <br/>
                <button>Đăng nhập</button>
                </form>
            </div>
            <div className="login">
                <form>
                <h1>ĐĂNG KÝ</h1>
                <input className="css" type="text" placeholder="Tên đăng nhập"/> <br/> <br/>
                <input className="css" type="password" placeholder="Mật khẩu"/> <br/> <br/>
                <input className="css" type="password" placeholder="Nhập lại mật khẩu"/> <br/> <br/>
                <input className="css" type="text" placeholder="Họ và tên"/> <br/> <br/>
                <input type="radio" name="gender" value="nam"/> Nam
                <input type="radio" name="gender" value="nu"/> Nữ <br/> <br/>
                <input className="css" type="date" name="bday"/> <br/> <br/>
                <button>Đăng ký</button>
                </form>
            </div>
        </SignupItemWrapper>
    )
}

export default SignupItem;