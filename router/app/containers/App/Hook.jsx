import React ,{Component} from 'react';
import {Router,Route,hashHistory,Link,Redirect} from 'react-router';


class Home extends Component {
  render(){
    return <div>
      <h1>Home</h1>
      <Links />
    </div>
  }
}

const About = ()=>
  <div>
    <h1>About</h1>
  </div>


const Contact = ()=>
  <div>
    <h1>Contact</h1>
  </div>

const Inbox = ()=>
  <div>
    <h1>Inbox</h1>
  </div>


const Links  = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
  </nav>

const Message  = (props) =>
  <div>
    <h1>{props.params.messages || 'Hello'}</h1>
  </div>



const Dashboard = () =>
  <div>Welcome to the app!</div>


const routeConfig = [
  { path: '/',
    component: Home,
    indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'inbox',
        component: Inbox,
        childRoutes: [
          { path: '/messages/:id', component: Message },
          { path: 'messages/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]

class Hook extends Component {
  render(){
    return(
      <Router history={hashHistory}  routes={routeConfig} />
    )
  }
}

export default Hook;
