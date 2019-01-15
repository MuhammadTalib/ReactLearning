import React, { Component } from 'react';
import './App.css';

/*
Use React and the data below to display a list of people alongside their books they like.

Fazal Deen's likes a Imran Series book.

For detailed instructions, refer to instructions.md.
*/

const chart = [
  {
    id: '1',
    peepsID: 1,
    bookLikedID: '1',
  },
  {
    id: 2,
    peepsID: '2',
    bookLikedID: '1',
  },
  {
    id: 3,
    peepsID: '4',
    bookLikedID: '5',
  },
  {
    id: 4,
    peepsID: '5',
    bookLikedID: '2',
  },
  {
    id: 5,
    peepsID: '3',
    bookLikedID: '5',
  },
  {
    id: 6,
    peepsID: '6',
    bookLikedID: '4',
  },
];

const peeps = {
  1: {
    id: 1,
    name: 'Fazal Deen',
    readerCategory: 'champ',
  },
  2: {
    id: 2,
    name: 'Irfan',
    readerCategory: 'rising-star',
  },
  3: {
    id: 3,
    name: 'Muneeb',
    readerCategory: 'beginner',
  },
  4: {
    id: 4,
    name: 'Osama',
    readerCategory: 'champ',
  },
  5: {
    id: 5,
    name: 'Najam',
    readerCategory: 'champ',
  },
  6: {
    id: 6,
    name: 'Aamir',
    readerCategory: 'beginner',
  },
};

const books = {
  1: {
    id: 1,
    name: 'Imran Series',
  },
  2: {
    id: 2,
    name: 'Harry Potter',
  },
  3: {
    id: 3,
    name: 'I Am Malala',
  },
  4: {
    id: 4,
    name: 'Bang-e-Dara by Allama Iqbal',
  },
  5: {
    id: 5,
    name: 'Jokes 101',
  },
};


class BookDetails extends Component{
  render(){
    const {bookList}=this.props
    return(
      Object.keys(bookList).map((book, index) => (
        <ul key={index}>
            <li key={book.id}>
              <h2>{bookList[book].name }</h2>{"Liked By"}
              <BookReader book={book} chart={chart}/>
            </li>
        </ul>
        ))
    )
  }
}
class BookReader extends Component{
  render(){
    const {book,chart}=this.props
        return(
          <ul key={chart.id}>
            <li key={book.id}>
            
            {chart.map((char,index)=>
              (char.bookLikedID===books[book].id.toString()?
              <li key={index}>
                {peeps[char.peepsID].name}
              </li>
              :""))}
             
            </li>
          </ul>)
  }

}
class App extends Component {
 
  render() {
    return (
      <BookDetails bookList={books}/>
  );
  }
}

export default App;
