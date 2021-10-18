
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/home'><Home></Home></Route>
        <Route path='/about'><About></About></Route>
        <Route path='/log-in'><Login></Login></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
