import axios from 'axios'

const USER_API_BASE_URL='http://localhost:8080/users'

class ApiService{

    addUser(user){  //Adding the User
        return axios.post(USER_API_BASE_URL, user)
    }

    fetchUsers(){   // Getting list of users
        return axios.get(USER_API_BASE_URL)
    }

    fetchUserById(userId){
        return axios.get(USER_API_BASE_URL+'/getUser'+'/'+userId)
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL+'/updateUser',user)
    }
}

export default new ApiService()