import './App.css';
import Layout from './hoc/Layout/layout'
import { Component } from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Team from './componets/Team'

class App extends Component  {

  render () {

    let routes = (
      <Router>
        <Switch>
          <Route  exact path="/team/:id" component={Team} />
          <Route path='/' exact component={Layout}/>
        </Switch>
      </Router>
    )


  return (
    <div >
      {routes}
    </div>
  );
}
}

export default App;
