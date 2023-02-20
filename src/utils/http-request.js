import axios from "axios";

export const uri = 'https://api.amanmedicare.org/v1.1/slim/' // staging
// export const uri = 'https://api.amanmedicare.com/v1.1/' // staging
export const uri2 = 'https://api.amanmedicare.org/v1.1/' // staging
const header =  {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
}

const Axios = axios.create({baseURL: uri, headers: header });


export default Axios;