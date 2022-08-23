import React from "react";
import { Stack } from "@mui/material";
import CartItem from "../../Components/CartItem";
import useLocalStorage from "use-local-storage";
import { PageCartWrapper } from "./style";
import {Link} from "react-router-dom"


const PageCart = () => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const onDelete = (foundIndex)=>{
    cart.splice(foundIndex, 1);
    setCart([...cart]);
  }

  return (
    <PageCartWrapper>
        <Stack gap={3} sx={{
            paddingX:"25px",
            paddingY: "50px",
            minHeight:"550px",
            alignItems:"center",
        }}>
        {cart.map(({ id, price, ...rest }) => {
            price = parseFloat(price);
            return <CartItem key={id} price={price} id={id} {...rest} onDelete={onDelete}></CartItem>;
        })}
        </Stack>
        <button className="payment"><Link to="/payment">Thanh toán đơn hàng</Link></button>
        <button className="comeHome"><Link to="/">Quay lại trang sản phẩm</Link></button>
    </PageCartWrapper>

  );
};

export default PageCart;
