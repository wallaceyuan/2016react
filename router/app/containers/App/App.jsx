import React,{Component} from 'react';
import {Router,Route,hashHistory,Link ,browserHistory,IndexRoute } from 'react-router';
import './index.css';


const Home = (props) =>
  <div>
    <Links/>
    <h1>Home</h1>
    {props.children}
  </div>;
const About = () =>
  <div>
    <h1>About</h1>
  </div>;
const Contact = () =>
  <div>
    <h1>Contact</h1>
  </div>;


const Links = () =>
  <nav>
    <Link activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to="/contact">Contact</Link>
    <Link activeClassName="active" to="/yuan">Yuan</Link>
  </nav>

const Message = (props) =>
  <div>
    <Links />
    {props.params.message||"Hello"}
  </div>


class App extends Component {
  render(){
    return(
      <Router history={browserHistory}>
          <Route path="/(:message)" component={Message}></Route>
      </Router>
    )
  }
}

export default App;
