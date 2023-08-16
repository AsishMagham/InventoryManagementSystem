import axios from "axios";
import Inventory from "./Inventory.js";
import User from './User.js'
class UserService {
    static getOneUser(e: String) {
        return axios.get('http://localhost:8081/user/' + e);
    }
    static insertOneUser(e: User) {
        return axios.post('http://localhost:8081/user/', e);
    }
}
export default UserService;