// Main App.js file for the frontend
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import AdminLogin from './Pages/AdminLogin';
import ScheduleBus from './Pages/ScheduleBus';
import ScheduleBusForm from './Pages/ScheduleBusForm';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
        <Route path="/" Component={AdminLogin}/>
        <Route path="/schedulebus" Component={ScheduleBus}/>
        <Route path="/schedulebus/schedulebusform" Component={ScheduleBusForm}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
