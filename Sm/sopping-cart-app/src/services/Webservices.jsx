import axios from "axios";

class Webservices{

        GetAPICall(url)
        {
            var result = axios.get(url)
            return result;
        }
}
export default new Webservices();