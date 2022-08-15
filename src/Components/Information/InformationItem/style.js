import styled from "styled-components";

export const InformationItemWrapper = styled.div`


    background-image: url("../../../../image/31.jpg");
    width: 100%;
    height: 100vh;
    border: 1px solid;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: -15px;
    display: flex;

.information_item{
    background-color: white;
    width: 30%;
    height: 500px;
    margin-top: 50px;
    margin-left: 35px;
    box-shadow: 0 0 30px yellow;
    transition: 1s;
    border-radius: 30px;
    cursor: pointer;
}

.information_item:hover{
    background-color: orange;
    transition: 1s;
}

.image{
    text-align: center;
}

.image img{
    height: auto;
    width: 120px;
    margin-left: 10px;
    margin-top: 35px;
    border: 5px solid blue;
    border-radius: 100%;
    box-shadow: 0 0 20px blue;
}

.infor{
    padding-left: 20px;
}

span{
    font-weight: bold;
}

label{
    font-weight: 100;
}

`