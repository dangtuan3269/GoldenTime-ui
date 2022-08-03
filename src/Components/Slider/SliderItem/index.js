import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DataDigitalSlider } from "../../../Data/DataHome/DataSlider/DataDigitalSlider";
import { SliderItemWrapper } from "./style";

const SliderItem = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <SliderItemWrapper>
            
            <Slider {...settings}>
                {DataDigitalSlider.map(item=>(
                     <div className="card">
                        <label className="title">Mona Watch</label> 
                        <span className="name">Đồng hồ Classico</span> 
                        <p className="content">Cùng với sự phát triển không ngừng của thời trang thế giới, Mona luôn ở đây để đồng hành cùng các bạn, đưa tới các bạn những trải nghiệm dịch vụ tuyệt vời nhất ở Mona với mặt hàng chất lượng, chương trình ưu đãi, chăm sóc khách hàng tận tâm, nhiệ tình và chu đáo ....... </p>
                        <button>XEM SẢN PHẨM</button>
                         <img src={item.linkImg}/>
                         {/* <h2>{item.title}</h2>
                         <p>{item.detail}</p> */}
                     </div>
                ))}
            </Slider>

        </SliderItemWrapper>
    )
}

export default SliderItem;