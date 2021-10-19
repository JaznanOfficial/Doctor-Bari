
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation';
import PrivateDoctor from './Components/PrivateDoctor/PrivateDoctor';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route exact path='/home'><Home></Home></Route>
        <Route exact path='/service/:doctorId'><DoctorDetails></DoctorDetails></Route>
        <Route exact path='/about'><About></About></Route>
        <Route exact path='/private-doctor'><PrivateDoctor></PrivateDoctor></Route>
        <Route exact path='/login'><Login></Login></Route>
        <Route exact path='/register'><Register></Register></Route>
        <Route path='*'><Error></Error></Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
