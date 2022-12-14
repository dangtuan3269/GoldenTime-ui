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
                            <p>Ch??c m???ng !</p>
                            <p>B???n ???? t???o ????n h??ng th??nh c??ng</p>
                            <p>H??y ?????i trong gi??y l??t, shop qu???n tr??? s??? x??c nh???n ????n h??ng c???a b???n trong ??t ph??t</p>
                            <p>C???m ??n b???n ???? tin t?????ng v?? ch???n nh???ng s???n ph???m c???a shop</p>
                            <p>Ch??c b???n c?? nh???ng tr???i nghi???m mua s???m tuy???t v???i t???i Mona Watch</p>
                        </div>
                        <button><Link to="/">Quay tr??? l???i trang ch???</Link></button>
                    </SuccessItemWrapper>
                    :
                    <CircularProgress size={50}></CircularProgress>
            }
        </>
    )
}

export default SuccessItem;