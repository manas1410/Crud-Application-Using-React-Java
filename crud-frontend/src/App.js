import logo from './logo.svg';
import './App.css';
import ListEmployeeComponents from './componets/ListEmployeeComponents';
import Header from './componets/Header';
import Footer from './componets/Footer';
import { BrowserRouter as Router,Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className="container">
            <Routes> 
              <Route path='/' element = {<ListEmployeeComponents/>}></Route>
              <Route path='/employees' element = {<ListEmployeeComponents/>}></Route>
            </Routes>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
