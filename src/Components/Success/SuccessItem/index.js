import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SuccessItemWrapper } from "./style";
import useLocalStorage from "use-local-storage";
import { useMutation } from "@tanstack/react-query";
import createAnonymousOrderRequest from "../../../api/order/createAnonymousOrderRequest";
import createAnonymousOrderDetailRequest from "../../../api/order/createAnonymousOrderDetailRequest";
import CircularProgress from "@mui/material/CircularProgress";

const SuccessItem = () => {
    const [order, getOrder] = useLocalStorage("order", {});
    const [cart, setCart] = useLocalStorage("cart", []);
    const [loading, setLoading] = useState(true);


    const resetCartShop = () => {
        setCart([]);
        getOrder({});
    };

    const createAnonymousOrder = useMutation(
        (data) => createAnonymousOrderRequest(data),
        {
            onSuccess: ({ data }) => {
                if (cart.length > 0) {
                    Promise.all(
                        (cart).map((cart) => {
                            createAnonymousOrderDetail.mutate({
                                watchId: cart.id,
                                quantity: cart.quantity,
                                orderSessionToken: data.orderSessionToken,
                            });
                        })
                    ).then(() => {
                        setLoading(false);
                        resetCartShop();
                    });
                }
            },
        }
    );
    const createAnonymousOrderDetail = useMutation(
        (data) =>
            createAnonymousOrderDetailRequest(data),
        {}
    );

    useEffect(() => {
        createAnonymousOrder.mutate({
            postCode: order.postCode,
            note: order.note,
            orderFirstName: order.orderFirstName,
            orderLastName: order.orderLastName,
            orderPhoneNumber: order.orderPhoneNumber,
            orderEmail: order.orderEmail != "" ? order.orderEmail : undefined,
            orderGender: order.orderGender,
            orderCity: order.orderCity,
            orderDistrict: order.orderDistrict,
            orderAddress: order.orderAddress,
            paymentMethod: "pay_on_receive",
        })
    }, []);

    return (
        <>
            {
                !loading ?
                    <SuccessItemWrapper>
                        < img src="../../../../assets/image/42.gif" />
                        <div>
                            <p>Chúc mừng !</p>
                            <p>Bạn đã tạo đơn hàng thành công</p>
                            <p>Hãy đợi trong giây lát, shop quản trị sẽ xác nhận đơn hàng của bạn trong ít phút</p>
                            <p>Cảm ơn bạn đã tin tưởng và chọn những sản phẩm của shop</p>
                            <p>Chúc bạn có những trải nghiệm mua sắm tuyệt vời tại Mona Watch</p>
                        </div>
                        <button><Link to="/">Quay trở lại trang chủ</Link></button>
                    </SuccessItemWrapper>
                    :
                    <CircularProgress size={50}></CircularProgress>
            }
        </>
    )
}

export default SuccessItem;