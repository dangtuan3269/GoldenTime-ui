import React from "react";
import { NewsItemWrapper } from "./style";

const NewsItem = () => {
    return (
        <NewsItemWrapper>
            <div class="news">
            <h2>NHỮNG TIN TỨC CỰC HOT HIT TRONG NGÀY</h2> <br/>
            <div class="hotnews">
                <div class="news1">
                    <img src="../../../../image/21.jpg"/>
                    <p>8 THƯƠNG HIỆU ĐỒNG HỒ NỔI TIẾNG CHO NHỮNG TÍN ĐỒ THỜI TRANG ĐANG ĐƯỢC SĂN ĐÓN</p>
                    <span>Bảng xếp hạng 8 thương hiệu đồng hồ được bình chọn nhiều nhất bởi người tiêu dùng trong những năm vừa qua</span>
                </div>
                <div class="news2">
                    <img src="../../../../image/22.jpg"/>
                    <p>ĐỒNG HỒ PIERRE LANNIER LÀ CỦA NƯỚC NÀO? GIẢI MÃ SỨC HÚT CỦA ĐỒNG HỒ HOT</p>
                    <span>Hãy cùng tìm hiểu hãng đồng hồ Pierre Lannier đến từ một đất nước vô cùng diệu kỳ trên thế giới</span>
                </div>
                <div class="news3">
                    <img src="../../../../image/21.jpg"/>
                    <p>HỌA TIẾT ĐỒNG HỒ GUILLOCHE: MỘT TƯỢNG ĐÀI CỦA NGHỆ THUẬT ĐỒNG HỒ</p>
                    <span>Một trong những đồng hồ được bán chạy nhất trên thế giới bởi họa tiết vô cùng phong phú</span>
                </div>
            </div>
        </div>
        </NewsItemWrapper>
    )
}

export default NewsItem;