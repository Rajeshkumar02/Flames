import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './Home';
import Next from './Next';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Next">
            <Next />
          </Route>
          <Route exact path="/next">
            <Next />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
