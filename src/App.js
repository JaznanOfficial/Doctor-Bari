
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation';
import PrivateDoctor from './Components/PrivateDoctor/PrivateDoctor';
import Register from './Components/Register/Register';


function App() {
  return (
    
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/home'><Home></Home></Route>
          <Route path='/about'><About></About></Route>
          <Route path='/private-doctor'><PrivateDoctor></PrivateDoctor></Route>
        <Route path='/login'><Login></Login></Route>
        <Route path='/register'><Register></Register></Route>
        <Route path='*'><Error></Error></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
