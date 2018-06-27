import React, { Component } from 'react';
import { Grid,Row,Col ,Panel,PanelGroup,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import  './Books.css'


class Books extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          activeKey: '1'
        };
      }
    handleSelect(activeKey) {
        this.setState({ activeKey });
      }

  render() {
      let bookItems;
      if(this.props.books){
         
        bookItems=this.props.books.map((book)=>{
        let bookId=book.id;
        let title=book.volumeInfo.title;
        let bookDescription = book.volumeInfo.description;
        let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let category = book.volumeInfo.categories;
        let author = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.volumeInfo.buyLink;
            return (
                <Panel eventKey={bookId} key={bookId}>
                <Panel.Heading>
                  <Panel.Title toggle>{title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={3} md={3} lg={3} >
                                <img src={thumbnail} role="Presentation"/>>
                              </Col>
                              <Col xs={3} md={3} lg={3} >
                                 <ListGroup>
                                     <ListGroupItem><strong>Category:</strong>{category}</ListGroupItem>
                                     <ListGroupItem><strong>Author:</strong>{author}</ListGroupItem>
                                     <ListGroupItem><strong>Pusblihser:</strong>{publisher}</ListGroupItem>
                                     <ListGroupItem><strong>Published Date:</strong>{publishedDate}</ListGroupItem>
                                     <ListGroupItem><strong> Number of Pages :</strong>{pageCount}</ListGroupItem>
                                     <ListGroupItem><strong> Number of Pages :</strong>{pageCount}</ListGroupItem>
                                     <ListGroupItem><strong> Rating :</strong><span className="rating">{averageRating}</span></ListGroupItem>
                                 </ListGroup>
                              </Col>
                          </Row>
                          <Row>
                          <Col xs={11} md={11} lg={11} >
                             <h2>Book Description</h2>
                             
                             {bookDescription}
                             <hr/>
                             <Button href={buyLink} bsStyle="primary">Order Now</Button>

                          </Col>
                              
                          </Row>
                      </Grid>

                </Panel.Body>
              </Panel>
              )
          })
      }
    return (
  

         <PanelGroup  accordion  id="accordion-controlled-example" activeKey={this.state.activeKey}
     onSelect={this.handleSelect}
   >
      {bookItems}
   </PanelGroup>
 
   
    
    );
  }
}

export default Books;
