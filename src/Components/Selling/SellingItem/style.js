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
    padding-left: 180px;
    overflow-x: hidden;
    padding-top: 10px;

.product_item{
    width: calc((100% - 500px)/4);
    height: 350px;
    background-color: white;
    box-shadow: 0 0 3px;
    overflow: hidden;
    margin-left: 30px;
    text-align: center;
}

.product_item a {
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
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
}
`