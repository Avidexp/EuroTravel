import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Euro Travel </h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
