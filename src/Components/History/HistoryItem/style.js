import styled from "styled-components";

export const HistoryItemWrapper = styled.div`


    background-image: url("../../../../assets/image/30.jpg");
    width: 100%;
    height: 100vh;
    border: 1px solid;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: -15px;
    font-family: timenewroman;

table{
    width: 90%;
    border: 1px solid white;
    color: white;
    margin: auto;
    margin-top: 50px;
    text-align: center;
    cursor: pointer;
}

.title{
    font-weight: bold;
    background-color: blue;
}

.id{
    color: black;
    background-color: white;
    width: 50px;
    height: 40px;
    transition: 1s;
}

.id:hover{
    background-color: blue;
    color: white;
    transition: 1s;
}

.name{
    color: black;
    background-color: white;
    transition: 1s;
}

.name:hover{
    background-color: yellow;
    color: black;
    transition: 1s;
}

.code{
    color: black;
    background-color: white;
    transition: 1s;
}

.code:hover{
    background-color: red;
    color: white;
    transition: 1s;
}

.price{
    color: black;
    background-color: white;
    width: 100px;
    transition: 1s;
}

.price:hover{
    background-color: green;
    color: white;
    transition: 1s;
}

.receiver{
    color: black;
    background-color: white;
    transition: 1s;
}

.receiver:hover{
    background-color: violet;
    color: black;
    transition: 1s;
}

.address{
    color: black;
    background-color: white;
    transition: 1s;
}

.address:hover{
    background-color: brown;
    color: white;
    transition: 1s;
}

.status{
    color: black;
    background-color: white;
    transition: 1s;
}

.status:hover{
    background-color: orange;
    color: black;
    transition: 1s;
}

`