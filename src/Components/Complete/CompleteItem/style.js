import styled from "styled-components";

export const CompleteItemWrapper = styled.div`

background-image: url("../../../../assets/image/43.jpg");
width: 100%;
height: 120vh;
border: 1px solid;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
margin-top: -15px;
font-family: timenewroman;

h1{
    color: white;
    margin-top: 100px;
    text-align: center;
}

h2{
    color: white;
    margin-top: 20px;
    text-align: center;
}

p{
    color: white;
    margin-top: 20px;
    text-align: center;
    font-style: italic;
}

form{
    margin-left: 620px;
    color: white;
}

.write{
    width: 400px;
    height: 40px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding-left: 20px;
    outline: none;
}

.write::placeholder{
    color: white;
}

.choose{
    margin-left: 20px;
    transition: 1s;
}

input:hover{
    border: 2px solid yellow;
}

button{
    width: 200px;
    height: 50px;
    background-color: transparent;
    border: 5px solid white;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    font-weight: bold;
}

button a{
    color: white;
    text-decoration: none;
}

.return{
    margin-left: 20px;
}

`