import React, { Component } from 'react';
import TitleBar from './Titlebar/titlebar';

class App extends Component {
    state = { }
    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        )
    }
}

export default App;