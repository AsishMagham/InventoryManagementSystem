import axios from "axios";
import Inventory from "./Inventory.js";
class InventoryService {
    static getAllInventory() {
        return axios.get('http://localhost:8081');
    }
    static getOneInventory(e: number) {
        return axios.get('http://localhost:8081/' + e);
    }

    static getCat(e: String) {
        return axios.get('http://localhost:8081/category/' + e);
    }
    static insertInventory(e: Inventory) {
        return axios.post("http://localhost:8081", e);
    }
    static modifyInventory(e: Inventory) {
        return axios.put("http://localhost:8081", e);
    }
    static deleteInventory(e: Number) {
        return axios.delete("http://localhost:8081/" + e);
    }
}
export default InventoryService;