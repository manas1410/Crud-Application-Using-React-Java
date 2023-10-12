import './App.css';
import ListEmployeeComponents from './componets/ListEmployeeComponents';
import Header from './componets/Header';
import Footer from './componets/Footer';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import CreateEmployeeComponent from './componets/CreateEmployeeComponent';
//import UpdateEmployeeComponent from './componets/UpdateEmployeeComponent';
import ViewEmployeeComponent from './componets/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className="container">
            <Routes> 
              <Route path='/' exact element = {<ListEmployeeComponents/>}></Route>
              <Route path='/employees' element = {<ListEmployeeComponents/>}></Route>
              <Route path='/add-employee/:id' element = {<CreateEmployeeComponent/>}></Route>
              <Route path='/view-employee/:id' element = {<ViewEmployeeComponent/>}></Route>
              {/*<Route path='/update-employee/:id' element = {<UpdateEmployeeComponent/>}></Route>*/}
            </Routes>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
