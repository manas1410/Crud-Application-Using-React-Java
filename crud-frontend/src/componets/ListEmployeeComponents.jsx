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
        this.addEmployee=this.addEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        }
        );
    }
    addEmployee( ){
        this.props.navigate('/add-employee/-1')
    }

    
    render(){
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}> Add Employee </button>
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