import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import { PageDetail1Wrapper } from "./style";
// 
import Rating from "@mui/material/Rating";
import useLocalStorage from "use-local-storage";
import {useQuery} from "@tanstack/react-query";
import getWatchRequest from "../../api/watch/getWatchRequest";
import { GOLDENTIME_API_DOMAIN } from "../../config/domain";

const PageDetail1 = ({DataDigitalFamous1}) => {
    //==
    const [cart, setCart] = useLocalStorage("cart", []);


    const {id} = useParams();
    //Chuẩn bị query lấy chi tiết đồng hồ từ server
    const getWatch = useQuery(
        ["GetRelatedShoesQueryKey"],
        () =>
        getWatchRequest(id),
        {
          select: ({data}) => {
            const item = data.data;
            return {
                id: item.watchId,
                img: `${GOLDENTIME_API_DOMAIN}/${item.watchImage}`,
                title: item.watchName,
                price: parseFloat(item.price),
            };
          },
        }
      );
      
      // const selling = DataDigitalFamous1.find(item => item.id === id)
      // const {img, title, price} = selling
      const selling = getWatch.data;
    const {img, title, price} = selling ?? {img:"", title:"",  price: 0};


    const [counter, setCounter] = useState(0);

    const handleIncrement = () =>
    {setCounter(counter+1)}

    const handleDecrement = () => 
    // 
    {setCounter((counter)=> Math.max(0, counter-1))}

    //===
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
        <PageDetail1Wrapper>
        <div className="product">
            <div className="image_product">
               <img crossOrigin="anonymous" src={img}></img>
               <div className="image_item">
               <div className="request">Yêu cầu thêm hình ảnh </div>
               <div className="contact">Liên hệ tư vấn</div>
               </div> <br/>
               <div className="share">
                <span>Chia sẻ cho bạn bè qua các phương tiện thông tin: </span> <br/>
                <img src="/assets/image/36.png"/>
                <img src="/assets/image/37.png"/>
                <img src="/assets/image/38.jpg"/>
                <img src="/assets/image/39.png"/>
                <img src="/assets/image/40.png"/>
               </div>
            </div>
        <div className="infor_product">
            <p className="name">Tên sản phẩm: {title}</p>
            <p className="evaluate">
                <span>Đánh giá khách hàng: </span>
                {/*  */}
                <Rating name="read-only" value={3.5} precision={0.5} readOnly />
            </p>
            <p className="price">
                {/*  */}
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
                {/*  */}
            <div className="cart" onClick={addToCart}>Thêm vào giỏ hàng</div>
            <div className="buy">Mua ngay</div>
            </div>
        </div>
        </div>
        </PageDetail1Wrapper>
    )
}

export default PageDetail1;