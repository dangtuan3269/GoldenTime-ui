import styled from "styled-components";

export const SliderItemWrapper = styled.div`

margin-top: -15px;
overflow: hidden;
position: relative;

.title{
    position:absolute;
    color:white;
    font-weight: bold;
    font-size: 30px;
    margin-left: 150px;
    margin-top: 150px;
}

.name{
    position:absolute;
    color:white;
    margin-left: 150px;
    margin-top: 200px;
    font-size: 50px;
    font-weight: bold;
}

.content{
    position:absolute;
    color:white;
    margin-left: 150px;
    margin-top: 300px;
    max-width: 600px;
}

button{
    position:absolute;
    color: white;
    background-color: transparent;
    margin-left: 150px;
    margin-top: 420px;
    padding: 15px 40px;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 10px;
}

button: hover{
    background-color: #C89979;
    border: 1px solid #C89979;
}

img {
    height: auto;
    max-width: 1700px;
    margin: auto;
}

`