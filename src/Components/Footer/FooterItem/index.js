import React from "react";
import { FooterItemWrapper } from "./style";

const FooterItem = () => {
    return (
        <FooterItemWrapper>
            <div className="footer">
                <div className="contact">
                    <span>THÔN TIN LIÊN HỆ</span>
                    <ul>
                        <li><a href="#"> 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</a></li>
                        <li><a href="#">076 922 0162</a></li>
                        <li><a href="#">demonhunterg@gmail.com</a></li>
                        <li><a href="#">mon@mona.media</a></li>
                        <li><a href="#">demonhunterp</a></li>
                    </ul>
                </div>

                <div className="link">
                    <span>LIÊN KẾT</span>
                    <ul>
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#">Đồng hồ nam</a></li>
                        <li><a href="#">Đồng hồ nữ</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Liên kết</a></li>
                    </ul>
                </div>

                <div className="support">
                    <span>HỖ TRỢ</span>
                    <ul>
                        <li><a href="#">Hướng dẫn mua hàng</a></li>
                        <li><a href="#">Hưỡng dẫn thanh toán</a></li>
                        <li><a href="#">Chính sách bảo hành</a></li>
                        <li><a href="#">Chính sách đổi trả</a></li>
                        <li><a href="#">Tư vấn khách hàng</a></li>
                    </ul>
                </div>

                <div className="download">
                    <span>TẢI ỨNG DỤNG TRÊN</span> <br/> <br/>
                    <label>Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay.</label> <br/> <br/>
                    <img src="../../../../image/23.jpg"/> <br/>
                    <img src="../../../../image/24.jpg"/> <br/>
                    <img src="../../../../image/25.png"/> <br/>
                    <img src="../../../../image/26.png"/>
                </div>
            </div>

        </FooterItemWrapper>
    )
}

export default FooterItem;