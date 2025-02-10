import axios from "axios";


let instance = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxiosPublic = () => {
    return instance;
};

export default UseAxiosPublic;