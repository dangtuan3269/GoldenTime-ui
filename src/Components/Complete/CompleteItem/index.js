import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CompleteItemWrapper } from "./style";
import { useForm, Controller } from "react-hook-form";
import genderList from "../../../api/genderList";
import useLocalStorage from "use-local-storage";
import { Stack, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, } from "@mui/material";

const CompleteItem = () => {
    const [order, setOrder] = useLocalStorage("order", {});

    const createForm = useForm({
        defaultValues: {
            orderGender: genderList[2].value,
            orderAddress: "",
            orderFirstName: "",
            orderLastName: "",
            orderPhoneNumber: "",
            orderEmail: "",
            postCode: "",
            orderCity: "",
            orderDistrict: "",
            note: "",
        }
    });

    useEffect(() => {
        const delay = setTimeout(() => {
            setOrder(createForm.getValues());
        }, 150);
        return () => clearTimeout(delay);
    }, [
        createForm.watch("orderFirstName"),
        createForm.watch("orderLastName"),
        createForm.watch("orderGender"),
        createForm.watch("orderDistrict"),
        createForm.watch("orderCity"),
        createForm.watch("orderAddress"),
        createForm.watch("postCode"),
        createForm.watch("orderPhoneNumber")
    ]);
    return (
        <CompleteItemWrapper>
            <h1>HOÀN THÀNH THÔNG TIN ĐƠN HÀNG</h1>
            <h2>THÔNG TIN NGƯỜI NHẬN</h2>
            <p>(Quý khách vui lòng điền thông tin cá nhân)</p>
            <br /> <br />
            <div className="complete_information">
                <form>
                    <Stack gap={5} sx={{ maxWidth: "570px" }}>
                        <Box>
                            <Typography variant="h5" fontWeight={"bold"} textTransform={"uppercase"} sx={{ marginBottom: "25px" }}>Thông tin khách hàng</Typography>
                            <Stack gap={2}>
                                <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
                                    <Controller
                                        name="orderLastName"
                                        control={createForm.control}
                                        render={({ field }) => (
                                            <TextField label="Họ" required fullWidth {...field} />
                                        )}
                                    />
                                    <Controller
                                        name="orderFirstName"
                                        control={createForm.control}
                                        render={({ field }) => (
                                            <TextField label="Tên" required fullWidth {...field} />
                                        )}
                                    />
                                </Stack>
                                <Controller
                                    name="orderGender"
                                    control={createForm.control}
                                    render={({ field }) => (
                                        <FormControl>
                                            <InputLabel id="gender-select-label">Giới tính</InputLabel>
                                            <Select
                                                label="Giới tính"
                                                {...field}
                                            >
                                                {
                                                    genderList.map((gender) => (
                                                        <MenuItem key={gender.id} value={gender.value}>{gender.title}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                                <Controller
                                    name="orderCity"
                                    control={createForm.control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            required
                                            label="Tỉnh / Thành phố"
                                        />)}
                                />
                                <Controller
                                    name="orderDistrict"
                                    control={createForm.control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            required
                                            label="Quận / Huyện"
                                        />)
                                    }
                                />
                                <Controller
                                    name="orderAddress"
                                    control={createForm.control}
                                    render={({ field }) => (
                                        <TextField label="Địa chỉ" required {...field} />
                                    )}
                                />
                                <TextField label="Mã bưu điện" fullWidth required {...createForm.register("postCode")}></TextField>
                                <TextField label="Ghi chú" fullWidth {...createForm.register("note")}></TextField>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight={"bold"} textTransform={"uppercase"} sx={{ marginBottom: "25px" }}>Thông tin liên hệ</Typography>
                            <Stack gap={2}>
                                <Controller
                                    name="orderPhoneNumber"
                                    control={createForm.control}
                                    render={({ field }) => (
                                        <TextField label="Số điện thoại" required fullWidth {...field}></TextField>
                                    )}
                                />
                                <Controller
                                    name="orderEmail"
                                    control={createForm.control}
                                    render={({ field }) => (
                                        <TextField label="Email" fullWidth {...field}></TextField>
                                    )}
                                />
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack direction="row" gap={2} sx={{marginTop:"25px"}}>
                        <Link to="/success"><Button variant="contained">Xác nhận đơn hàng</Button></Link>
                        <Link to="/cart"><Button>Quay lại giỏ hàng</Button></Link>
                    </Stack>
                </form>
            </div>
        </CompleteItemWrapper>
    )
}

export default CompleteItem;