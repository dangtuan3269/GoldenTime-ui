import axios from "axios";
import { GOLDENTIME_API_DOMAIN } from "../../config/domain";


const createAnonymousOrderRequest = (data)=> axios.post(GOLDENTIME_API_DOMAIN+"/order/anonymous", {
    ...data
});

export default createAnonymousOrderRequest;