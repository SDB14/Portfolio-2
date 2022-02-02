import logo from './logo.svg';
// import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
// import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav></Nav> */}
        <Switch>
          <Route exact path='/About' component={About}></Route>
          <Route exact path='/Contact' component={Contact}></Route>
          <Route exact path='/Portfolio' component={Portfolio}></Route>
          <Route exact path='/' component={About}></Route>

        </Switch>
    
      </Router>
    </div>
  );
}

export default App;
