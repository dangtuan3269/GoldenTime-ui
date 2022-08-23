import axios from "axios";
import { GOLDENTIME_API_DOMAIN } from "../../config/domain";


const getWatchRequest = (data)=> axios.get(GOLDENTIME_API_DOMAIN + "/watch/" + data.shoesId);
export default getWatchRequest;