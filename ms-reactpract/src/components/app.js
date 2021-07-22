import React, { Component } from 'react';
import TitleBar from './Titlebar/titleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: 'Ready Player One', author: 'Ernest Cline'},
            {title: 'All the Light we Cannot See', author: 'Anthony Doerr'},
            {title: 'The First and Last Freedom', author: 'Jiddu Krisnamurti'}
        ];
        this.state = {
            bookNumber: 0
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row row-spacer">
                    <div className="col-md-12">
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[0].author} </h4>
                    </div>
                    <div className="col-md-12">
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[1].author} </h4>
                    </div>
                    <div className="col-md-12">
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[2].author} </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;