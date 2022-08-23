import axios from "axios";
import { GOLDENTIME_API_DOMAIN } from "../../config/domain";
import * as qs from "qs";

export const GetAllWatchQueryKey = "GetAllWatch";

const getAllWatchRequest = (data)=> axios.get(GOLDENTIME_API_DOMAIN + "/watch",{
    params:{
        ...data
    },
    paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: 'brackets'})
    }
});
export default getAllWatchRequest;