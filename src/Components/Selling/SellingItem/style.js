import styled from "styled-components";

export const SellingItemWrapper = styled.div`


*{
    box-sizing: border-box;
}

    width: 100%;
    height: 400px;
    background-color: #F5F5F5;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    overflow-x: hidden;
    padding-top: 10px;

.product_item{
    width: calc((100% - 500px)/4);
    height: 350px;
    background-color: white;
    overflow: hidden;
    margin-left: 30px;
    text-align: center;
    border: 1px solid #cacaca;
    border-radius: 5px;
}

.product_item:hover .product_item_name{
    color: #cd1916;
}

.product_item:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.product_item a {
    display: flex;
    flex-direction: column;
    align-item: center;
    text-decoration: none;
}

.product_item img{
    height: 200px;
    max-width: 100%;
    object-fit: scale-down;
}

.product_item_name{
    text-decoration: none;
    text-align: center;
    padding: 0px 4px 0px 4px;
    font-weight: bold;
}

.product_item_price{
    color: #C89775;
    text-align: center;
    padding-bottom: 10px;
    font-weight: bold;
}

.product_item_button {
    background-color: #C89775;
    color: white;
    font-weight: bold;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.5s;
}

.product_item_button:hover{
    color: #C89775;
    background-color: #FFFF;
    border: 1px solid #C89775;
    transition: 0.5s;
}
`