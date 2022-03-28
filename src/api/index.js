import axios from "axios";

let inals = axios.create({
    baseURL:"/api",
    timeout:3000
})
export default inals