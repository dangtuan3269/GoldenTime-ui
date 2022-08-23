import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import { PageDetail2Wrapper } from "./style";
import Rating from "@mui/material/Rating";
import useLocalStorage from "use-local-storage";


const PageDetail2 = ({DataDigitalFamous2}) => {
    const [cart, setCart] = useLocalStorage("cart", []);
    const {id} = useParams()
    const selling = DataDigitalFamous2.find(item => item.id === id)
    const {img, title, price} = selling

    const [counter, setCounter] = useState(0);

    const handleIncrement = () =>
    {setCounter(counter+1);}

    const handleDecrement = () => 
    {setCounter((counter)=> Math.max(0, counter-1))}

    const addToCart = ()=>{
        cart.push({
            ...selling,
            quantity: counter
        });
        setCart([...cart]);
    }

    const formater = new Intl.NumberFormat('vi', {
        style:"currency",
        currency: "VND"
    })

    return (
        <PageDetail2Wrapper>
        <div className="product">
            <div className="image_product">
               <img src={img}></img>
               <div className="image_item">
               <div className="request">Yêu cầu thêm hình ảnh </div>
               <div className="contact">Liên hệ tư vấn</div>
               </div> <br/>
               <div className="share">
                <span>Chia sẻ cho bạn bè qua các phương tiện thông tin: </span> <br/>
                <img src="/image/36.png"/>
                <img src="/image/37.png"/>
                <img src="/image/38.jpg"/>
                <img src="/image/39.png"/>
                <img src="/image/40.png"/>
               </div>
            </div>
        <div className="infor_product">
            <p className="name">Tên sản phẩm: {title}</p>
            <p className="evaluate">
                <span>Đánh giá khách hàng: </span>
                <Rating name="read-only" value={3.5} precision={0.5} readOnly />
                <img src="/image/35.png"/>
                <img src="/image/35.png"/>
                <img src="/image/35.png"/>
                <img src="/image/35.png"/>
                <img src="/image/35.png"/>
            </p>
            <p className="price">
                <span className="price_item">{formater.format(price)}</span>
                <span className="price_custom">Giá ưu đãi khách hàng và thành viên</span>
                <br/> <br/>
                <span className="note">(Giá tốt nhất trên thị trường thương mại điện tử website bán đồng hồ)</span>
                </p>
            <p className="status">Trạng thái: <span className="status_item">còn hàng</span></p>
            <p className="delivery">Phương thức vận chuyển: vận chuyển đường bộ</p>
            <p className="code">
                Mã giảm giá: 
                <span className="level1">Giảm 15%</span>
                <span className="level2">Giảm 50k</span>
                <span className="level3">Giảm 99k</span>
            </p>
            <p className="combo">Combo khuyến mãi: <span className="combo_item">mua 5 tặng 1</span></p>
            <div className="button">
                Số lượng:
                <button onClick={handleIncrement}>+</button>
                <span>{counter}</span>
                <button onClick={handleDecrement}>-</button>
            </div> <br/> <br/>
            <div className="cash">
            <div className="cart" onClick={addToCart}>Thêm vào giỏ hàng</div>
            <div className="buy">Mua ngay</div>
            </div>
        </div>
        </div>
        </PageDetail2Wrapper>
    )
}

export default PageDetail2;