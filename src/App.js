import './App.css';
import Layout from './hoc/Layout/layout'
import { Component } from 'react'
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Team from './componets/Team'

class App extends Component  {

  render () {

    let routes = (
      <Switch>
      <Route path="/team" component={Team} />
      <Redirect to='/'/>
      </Switch>
    )


  return (
    <div >
      <Layout>
        {routes}
      </Layout>
    </div>
  );
  }
}

export default withRouter(App);
