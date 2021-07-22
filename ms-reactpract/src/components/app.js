import React, { Component } from 'react';
import TitleBar from './Titlebar/titleBar';
import BookViewer from './BookViewer/bookViewer';
import './app.css';
import BookCreator from './BookCreator/bookCreator';


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

    addNewBook(book) {
        this.books.push(book);
        this.setState({
            bookNumber: this.books.length -1
        });
    }

    goToNextBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length -1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });

    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={() => this.goToNextBook()} previousBook={()=> this.goToPreviousBook()}/>
                <BookCreator addNewBook={this.addNewBook.bind(this)}/>
                </div>
        );
    }
}

export default App;