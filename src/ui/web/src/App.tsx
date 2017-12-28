import * as React from 'react';

// STYLES
import './styles/reset.css'
import './styles/App.css';

// COMPONENTS
import Test from './components/Test/TestContainer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Test/>
            </div>
        );
    }
}

export default App;
