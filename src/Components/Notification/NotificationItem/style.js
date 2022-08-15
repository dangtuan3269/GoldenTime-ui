import styled from "styled-components";

export const NotificationItemWrapper = styled.div`


    background-image: url("../../../../image/27.jpg");
    width: 100%;
    height: 100vh;
    border: 1px solid;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: -15px;

.notification_item{
    background-color: white;
    width: 80%;
    height: 150px;
    margin-top: 50px;
    margin-left: 150px;
    display:flex;
    box-shadow: 0 0 30px yellow;
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.3));
    transition: 1s;
}

.notification_item:hover{
    background-color: orange;
    transition: 1s;
}

.image img{
    height: auto;
    width: 120px;
    margin-left: 10px;
    margin-top: 15px;
}

.content{
    padding-top: 15px;
}

.content span{
    margin-left: 50px;
    font-family: timenewroman;
    font-weight: bold;
    font-size: 20px;
    margin-top: -20px;
}

.content label{
    margin-left: 50px;
    font-style: italic;
    color: gray;
    font-family: timenewroman;
}

.content p{
    margin-left: 50px;
    font-family: timenewroman;
}

`