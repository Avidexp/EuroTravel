import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Button, Jumbotron, Carousel, CarouselItem, Form, Col, FormGroup, FormControl, Checkbox, ControlLabel} from 'react-bootstrap';
import Signin from './components/Signin';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Index from './components/frontPage';




class Routes extends React.Component { 
    render(){
    return(
        <Router>
            <div className="nav">
                    <Button waves='red'><Link to="/" >Home</Link></Button>
                    <Button waves='red'><Link to="/signin" >Sign In</Link></Button>
                    <Button waves='red'><Link to="/signup" >Sign Up</Link></Button>
                    <Button waves='red'><Link to="/dashboard" >Dashboard</Link></Button>
                    <br/>
                    <br/>
            <Route exact path='/' component={Index} />
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/dashboard' component={Dashboard}/>
            
            </div>
        </Router>
        )
        }
};

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
