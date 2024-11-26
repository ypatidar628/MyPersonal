import axios from "axios";

class WebService
{
    postAPICall(url,data)
    {
        var result = axios.post(url,data)
        return result;
    }
}
export default new WebService();