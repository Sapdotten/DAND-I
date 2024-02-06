import axios from "axios";

import API_HOSTNAME_URL from "../..";

class AuthUser{
    login(user){
        return axios({
            method:'POST',
            url: API_HOSTNAME_URL + '/login',
            data:user
        })

    }
}