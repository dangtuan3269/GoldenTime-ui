import styled from "styled-components";

export const MenuItemWrapper = styled.div`

.menu{
    margin-top: -15px;
}

.menu ul {
    list-style-type: none;
    background-color: #333333;
    font-size: 15px;
    font-family: Timenewroman;
    padding: 6px 0;
    display: flex;
    align-items: center;
    padding-left: 55px;
    justify-content: space-between;
}

.menu ul li {
    color: white;
    display: inline-table;
    width: 100%;
    height: 30px;
    line-height: 30px;
    
}

.menu ul li a {
    color: white;
    text-decoration: none;
    display: block;
    transition: .25s ease-in;
    font-size: 15px;
}

.menu ul li a: hover {
    color: #C89672;
    border-decoration: underline;
}

`