import axios from "axios";

const Employee_Api_Base_Url = "http://localhost:8080/api/v1/employees";
class EmployeeService{
    getEmployees(){
        return axios.get(Employee_Api_Base_Url);
    }
    createEmployee(employee){
        return axios.post(Employee_Api_Base_Url,employee);
    }
}

export default new EmployeeService();