import styled from "styled-components";

export const PageProductWrapper = styled.div`

background-color: #F5F5F5;
font-family: timenewsroman;

.product{
    display: flex;
    width: 85%;
    height: 100vh;
    background-color: white;
    margin: auto;
    margin-top: -15px;
}

.image_product{
    padding-right: -50px;
}

img{
    width: 50%;
    margin-top: 100px;
    margin-left: 100px;
    border: 1px solid #cacaca;
}

.image_item{
    display: flex;
}

.request{
    color: white;
    background-color: #EE4D2D;
    padding: 10px 20px;
    border-radius: 3px;
    margin-left: 100px;
    margin-top: 30px;
    cursor: pointer;
    transition: 1s;
}

.request:hover{
    background-color: white;
    color: #EE4D2D;
    border: 1px solid #EE4D2D;
    transition: 1s;
}

.contact {
    border: 1px solid #EE4D2D;
    padding: 10px 20px;
    margin-top: 30px;
    margin-left: 30px;
    cursor: pointer;
    color: #EE4D2D;
    border-radius: 3px;
    transition: 1s;
}

.contact:hover{
    background-color: #EE4D2D;
    color: white;
    transition: 1s;
}

.share{
    margin-left: 100px;
}

.share span{
    font-size: 18px;

}

.share img{
    width: 40px;
    margin-left: 20px;
    margin-top: 20px;
    border: none;
}

.infor_product{
    margin-top: 70px;
    margin-left: -100px;
}

.name{
    font-weight: bold;
    opacity: 0.8;
    font-size: 30px;
}

.evaluate img{
    width: 20px;
    border: none;
    margin-left: 10px;
    margin-top: 1px;
}

.evaluate span{
    font-size: 20px;
}

.price{
    font-size: 15px;
    background-color: #F5F5F5;
    padding: 30px 50px;
}

.price_item{
    color: #EE4D2D;
    font-size: 40px;
    text-align: center;
}

.price_custom{
    color: white;
    background-color: #EE4D2D;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 30px;
}

.note{
    font-style: italic;
}

.status{
    font-size: 20px;
}

.status_item{
    color: #EE4D2D;
    font-weight: bold;
}

.delivery{
    font-size: 20px;
}

.code{
    font-size: 20px;
}

.level1{
    border: 3px dashed #EE4D2D;
    margin-left: 10px;
    padding: 5px 20px;
    cursor: pointer;
    transition: 1s;
}

.level1:hover{
    background-color: #AEF35A;
    transition: 1s;
}

.level2{
    border: 3px dashed #EE4D2D;
    margin-left: 10px;
    padding: 5px 20px;
    cursor: pointer;
    transition: 1s;
}

.level2:hover{
    background-color: yellow;
    transition: 1s;
}

.level3{
    border: 3px dashed #EE4D2D;
    margin-left: 10px;
    padding: 5px 20px;
    cursor: pointer;
    transition: 1s;
}

.level3:hover{
    background-color: orange;
    transition: 1s;
}

.combo{
    font-size: 20px;
}

.combo_item{
    text-decoration: underline;
    color: #EE4D2D;
    font-weight: bold;
}

.button{
    font-size: 20px;
}

button{
    padding: 1px 30px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: transparent;
    border: 1px solid #EE4D2D;
    color: #EE4D2D;
    font-size: 30px;
    cursor: pointer;
    border-radius: 5px;
    transition: 1s;
}

button:hover{
    background-color: #EE4D2D;
    color: white;
    transition: 1s;
}

.cash{
    display: flex;
}

.cart{
    font-size: 20px;
    background-color: #EE4D2D;
    padding: 15px 30px;
    width: 155px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 1s;
}

.cart:hover{
    background-color: white;
    color: #EE4D2D;
    border: 1px solid #EE4D2D;
    transition: 1s;
}

.buy{
    border: 1px solid #EE4D2D;
    padding: 15px 20px;
    border-radius: 5px;
    margin-left: 30px;
    cursor: pointer;
    color: #EE4D2D;
    transition: 1s;
    font-size: 20px;
}

.buy:hover{
    background-color: #EE4D2D;
    color: white;
    transition: 1s;
}

`