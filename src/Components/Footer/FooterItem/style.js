import styled from "styled-components";

export const FooterItemWrapper = styled.div`

.footer{
    width: 100%;
    height: 350px;
    background-color: #333333;
    display: flex;
    padding-top: 40px;
}

.contact{
    width: 28%;
    text-align: center;
    margin-left: 5%;
    text-align: center;
}

.contact span{
    margin-left: 50px;
}

.link{
    width: 10%;
    margin-left: 5%;
    text-align: center;
}

.link span{
    margin-left: 40px;
}

.support{
    width: 15%;
    margin-left: 5%;
    text-align: center;
}

.support span{
    margin-left: 30px;
}

.download{
    width: 20%;
    margin-left: 5%;
    text-align: center;
}

label{
    color: white;
}

.footer div span{
    color: white;
    font-weight: bold;
    font-size: 20px;
}

.footer div ul{
    list-style-type: none;
}

.footer div ul li{
    line-height: 5px;
    margin-top: 30px;
}

.footer div ul li a{
    color: white;
    text-decoration: none;
    font-weight: 100;
}

.footer div ul li a:hover{
    color: #C89979;
}

`