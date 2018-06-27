import React, { Component } from 'react';
import Header from "./Component/Header";
import {Grid,Col,Row} from 'react-bootstrap';
import Books from './Component/Books';
import axios from 'axios'
import SearchInput from './Component/SearchInput' 
class App extends Component {
  constructor(){
    super();
    this.state={
      book:[],
      text:'Yoga'
    }
    temp:[]
  }

  componentWillMount(){
    this.getBooks();
  }

  // componentWillUnmount(){
  //   this.setState({books:[]});
  // }
  

  getBooks(){
    axios.request({
      method:'get',
      url:'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
    }).then((response) => {
      this.temp=response.data.items;
      this.temp.map((bookitem)=>{
        if(bookitem.volumeInfo.imageLinks.thumbnail  === 'undefined'){
          console.log(" Thumbnail Error")
        }
      })
     return this.setState({book: this.temp}, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      this.setState({book: []}, () => {
        console.log(this.state.book);
      });
    });
  }


  handlechange(text){
    this.setState({text:text},this.getBooks())
  }

 
  render() {
    return (
      <div className="App">
       <Header></Header>
       <Grid>
         <Row>
           <Col xs={12} md={12} lg={12}>
               <SearchInput value={this.state.text} onChange={this.handlechange.bind(this)}></SearchInput>
               <Books books={this.state.book}/>
           </Col>
         </Row>
       </Grid>
      </div>
    );
  }
}

export default App;
