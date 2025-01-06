import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;
//module 68 is still undone
//STARTING MODULE 69