import styled from "styled-components";

export const GenderItemWrapper = styled.div`

background-color: #F5F5F5;
padding-bottom: 50px;

.Gender{
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    margin-top: -5px;
    padding-top: 50px;
    width: 100%;
    height: 350px;
    font-family: timenewroman;
}

.male{
    width: 600px;
    height: 300px;
    background-image: url("/assets/image/5.jpg");
    color: white;
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: 80px;
    margin-right: 50px;
}

.male hr{
    width: 100px;
    background-color: #C89979;
    margin-left: 45px;
    margin-top: 20px;
}

.male span{
    margin-left: 45px;
    font-size: 25px;
}

.male p {
    margin-left: 45px;
    font-size: 30px;
    font-weight: bold;
}

.female{
    width: 600px;
    height: 300px;
    background-image: url("/assets/image/6.jpg");
    color: white;
    background-size: 121%;
    background-repeat: no-repeat;
    padding-top: 80px
}

.female hr{
    width: 100px;
    background-color: #C89979;
    margin-left: 45px;
    margin-top: 20px;
}

.female span{
    margin-left: 45px;
    font-size: 25px;
}

.female p {
    margin-left: 45px;
    font-size: 30px;
    font-weight: bold;
}

h2{
    text-align: center;
}
`