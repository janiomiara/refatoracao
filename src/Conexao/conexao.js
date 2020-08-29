import axios from "axios"


const configaxios = axios.create({
        baseURL: 'https://api.wavecode.com.br',
        contentType: 'application/x-www-form-urlencoded',
        headers: { 'X-My-Custom-Header': 'Header-Value'
            //, 'Authorization': localStorage.getItem("token")
             }
});

export default configaxios



