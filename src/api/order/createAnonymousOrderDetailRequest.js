import axios from "axios";
import { GOLDENTIME_API_DOMAIN } from "../../config/domain";


const createAnonymousOrderDetailRequest = ({orderSessionToken,...data})=> axios.post(GOLDENTIME_API_DOMAIN+"/order/anonymous/detail", {
    ...data
},{
    headers: {
        "order-session": orderSessionToken
    }
});

export default createAnonymousOrderDetailRequest;