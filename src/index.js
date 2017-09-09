import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Button, Jumbotron, Form, Col, FormGroup, FormControl, Checkbox, ControlLabel} from 'react-bootstrap';
import Signin from './components/Signin';
import Signup from './components/signup';




class App extends React.Component {
    render(){
        return(
            <div>
                <Jumbotron>
    <h1>Euro Travel</h1>
    <p>The worlds finest travel accommodation accessory</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
            </div>
        )
    }
}

class Routes extends React.Component { 
    render(){
    return(
        <Router>
            <div className="nav">
                    <Button waves='red'><Link to="/" >Home</Link></Button>
                    <Button waves='red'><Link to="/signin" >Sign In</Link></Button>
                    <Button waves='red'><Link to="/signup" >Sign Up</Link></Button>
                    <br/>
                    <br/>
            <Route exact path='/' component={App} />
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            
            </div>
        </Router>
        )
        }
};

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
