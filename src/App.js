import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/user/:id" exact component={User}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
