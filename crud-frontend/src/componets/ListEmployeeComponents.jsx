import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

class ListEmployeeComponents extends Component{
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }
    viewEmployee(id){
        this.props.navigate(`/view-employee/${id}`);
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        }
        );
    }

    
    render(){
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <Link to={{pathname:'/add-employee/_add'}}><button className='btn btn-primary' > Add Employee </button></Link>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Employee First Name </th> 
                                <th> Employee Last Name </th>
                                <th> Employee Email id </th> 
                                <th> Actions </th>  
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <Link to={{pathname:`/add-employee/${employee.id}`}}><button  className='btn btn-info'> Update </button></Link>
                                            <button onClick={ () => this.deleteEmployee(employee.id)} style={{marginLeft:"10px"}} className='btn btn-danger'> Delete </button>
                                            <button onClick={ () => this.viewEmployee(employee.id)} style={{marginLeft:"10px"}} className='btn btn-info'> View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <ListEmployeeComponents {...props} navigate={navigate} />
}

export default WithNavigate;