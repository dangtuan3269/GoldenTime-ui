import axios from "axios";
import { GOLDENTIME_API_DOMAIN } from "../../config/domain";


const getWatchRequest = (watchId)=> axios.get(GOLDENTIME_API_DOMAIN + "/watch/" + watchId);
export default getWatchRequest;