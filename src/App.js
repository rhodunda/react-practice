import './App.css';
import Layout from './hoc/Layout/layout'
import { Component } from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Team from './componets/Team'

class App extends Component  {

  render () {

    let routes = (
      <Router>
      <Route path="/team" component={Team} />
      <Route path='/' exact component={Layout}/>
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
