import { useState, useEffect } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

import useLocalStorage from "use-local-storage";
const CartItem = (props) => {
  const { id, img, title, price, quantity, onDelete } = props;
  const [cart, setCart] = useLocalStorage("cart", []);
  const [buyQuantity, setBuyQuantity] = useState(quantity);

  useEffect(() => {
    const delay = setTimeout(() => {
      const foundCart = cart.find((item) => item.id == id);
      if (foundCart) {
        foundCart.quantity = buyQuantity;
        setCart([...cart]);
      }
    }, 150);
    return () => clearTimeout(delay);
  }, [buyQuantity]);

  const formater = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });

  const changeQuantity = (number) => {
    setBuyQuantity(Math.max(0, number));
  };
  const deleteItem = () => {
    const foundIndex = cart.findIndex((item) => item.id == id);
    if (foundIndex != -1) {
      onDelete(foundIndex);
    }
  };
  return (
    <Stack key={id} direction={"row"} gap={2}>
      <Box>
        <img height={"150px"} width={"150px"} crossOrigin="anonymous" src={`${img}`} style={{objectFit: "cover",}} alt={title}></img>
      </Box>
      <Stack>
        <Typography>{title}</Typography>
        <Box sx={{ marginTop: "5px" }}>
          <Typography color={"error"} variant={"h6"}>
            {formater.format(price)}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}></Box>
        <Stack
          direction={"row"}
          gap={2}
          marginTop={"15px"}
          alignItems={"center"}
        >
          <TextField
            label="Số lượng"
            type={"number"}
            size="small"
            sx={{ width: "15ch" }}
            value={buyQuantity}
            onChange={(e) => changeQuantity(e.target.value)}
          ></TextField>

          <Box sx={{ flex: 1 }}></Box>
          <Button color="error" onClick={deleteItem}>
            Xoá
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartItem;
