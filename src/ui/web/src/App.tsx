import * as React from 'react';

// STYLES
import './styles/reset.css';
import './styles/App.css';

// COMPONENTS
import Test from './components/Test/TestContainer';
import Login from './components/Login/LoginContainer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Login/>
                <Test/>
            </div>
        );
    }
}

export default App;
