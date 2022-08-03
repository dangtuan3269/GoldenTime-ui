import styled from "styled-components";

export const SignupItemWrapper = styled.div`

background-image: url("../../../../image/29.jpg");
    width: 100%;
    height: 100vh;
    border: 1px solid;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: -15px;
    display: flex;
    transition: 1s;

.signup{
    width: 500px;
    height: 300px;
    background-color: white;
    margin-left: 150px;
    margin-top: 100px;
    margin-right: 100px;
    text-align: center;
    background: transparent;
    box-shadow: 0 0 10px yellow;
    border-radius: 30px;
}

.signup input{
    height: 40px;
    width: 250px;
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    padding-left: 20px;
    outline: none;
    transition: 1s;
}

.signup input: hover{
    border: 3px solid yellow;
    width: 350px;
    transition: 1s;
}

.login{
    width: 500px;
    height: 550px;
    background-color: white;
    margin-top: 100px;
    text-align: center;
    background: transparent;
    box-shadow: 0 0 10px yellow;
    border-radius: 30px;
    color: white;
}

.login .css{
    height: 40px;
    width: 250px;
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    padding-left: 20px;
    outline: none;
    transition: 1s;
}

.login .css:hover{
    border: 3px solid yellow;
    width: 350px;
    transition: 1s;
}

h1 {
    color: white;
}

button{
    padding: 10px 40px;
    background: transparent;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    transition: 1s;
}

button:hover{
    background-color: white;
    color: black;
    padding: 15px 50px;
    transition: 0.5s;
    box-shadow: 0 0 20px yellow;
}

input::placeholder{
    color: white;
}

`