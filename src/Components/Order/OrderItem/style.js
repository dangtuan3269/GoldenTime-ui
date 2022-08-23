import styled from "styled-components";

export const OrderItemWrapper = styled.div`


    background-image: url("../../../../assets/image/30.jpg");
    width: 100%;
    height: 100vh;
    border: 1px solid;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: -15px;
    font-family: timenewroman;

.order_item{
    background-color: white;
    width: 80%;
    height: 170px;
    margin-top: 50px;
    margin-left: 150px;
    box-shadow: 0 0 30px yellow;
    padding-top: 20px;
    padding-left: 20px;
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.3));
    transition: 1s;
    cursor: pointer;
}

.order_item:hover{
    background-color: #bf9375;
    transition: 1s;
}

span{
    font-weight: bold;
}

label{
    font-weight: 100;
}

.name{
    font-size: 30px;
    font-weight: bold;
}

.status{
    color: red;
    font-style: italic;
}

}

`