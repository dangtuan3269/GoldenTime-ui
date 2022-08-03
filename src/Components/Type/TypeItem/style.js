import styled from "styled-components";

export const TypeItemWrapper = styled.div`

background-color: #F5F5F5;
padding-bottom: 50px;
overflow: hidden;

.type{
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    margin-top: -5px;
    padding-top: 50px;
    width: 100%;
    height: 350px;
    font-family: timenewroman;
}

.basic{
    width: 600px;
    height: 300px;
    background-image: url("image/11.jpg");
    color: white;
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: 80px;
    margin-right: 50px;
}

.basic span{
    margin-left: 50px;
    font-size: 35px;
    font-weight: bold;
}

.basic p {
    margin-left: 50px;
    font-size: 20px;
    font-style: italic;
}

.smart{
    width: 600px;
    height: 300px;
    background-image: url("image/12.jpg");
    color: white;
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: 80px
}

.smart span{
    margin-left: 50px;
    font-size: 35px;
    font-weight: bold;
}

.smart p {
    margin-left: 50px;
    font-size: 20px;
    font-style: italic;
}

h2{
    text-align: center;
}

`