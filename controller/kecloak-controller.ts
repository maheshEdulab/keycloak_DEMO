import axios from "axios"

var baseurl = "http://localhost:8080";

class KeycloakController {

    admin_login = async (username: string, password: string) => {
         
        const response = await axios.post(`${baseurl}/realms/myrealm/protocol/openid-connect/token`,
            {
                grant_type: 'password',
                client_id: 'myclient',
                username: username,
                password: password
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
      
        return response.data.access_token;
        
    }

    create_User = async (user, token: string) => {
        // console.log(user[1].credentials)
        const response = await axios.post(`${baseurl}/admin/realms/myrealm/users`, user, {
            headers: {
                Authorization: token
                , 'Content-Type': 'application/json',
            }
        })
        console.log(response.status)
        return response;
    }

    read_User = async (token: string) => {
        const response = await axios.get(`${baseurl}/admin/realms/myrealm/users`, {
            headers: {
                 Authorization: token
            }

        })
        return response.data;
    }

    update_User = async (id, body, token) => {
        const response = await axios.put(`${baseurl}/admin/realms/myrealm/users/${id}`, body, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            }
        })
        return response.status;
    }

    delete_User = async (id, token) => {
        const response = await axios.delete(`${baseurl}/admin/realms/myrealm/users/${id}`, {
            headers: {
                Authorization: token
                , 'Content-Type': 'application/json',
            }
        })
        return response.status;
    }
}

export default new KeycloakController()