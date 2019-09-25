import React from "react";
import "./style.css";
import { List, ListItem } from "../List";
import Row from "../Row";
import Col from "../Col";



function SearchResults(props) {

  console.log('props', props)
  
  return (
     
    <div className="row1">            
      <Row>              
        <Col size="md-4">
          <div>
            <ul className="list-group search-results">
              <List>

                {props.items.map(result => (   
                        
                  <ListItem key={result.etag} className="list-group-item">
                    <img alt={result.volumeInfo.title} width="200" height="220" className="img-fluid" src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} /><span>     </span>
                    
                    <span><button id={result.etag}type="submit" onClick={() => props.handleItemDetailsSubmit(result.id)} className="btn btn-success">Detail</button></span><span>  </span>   
                      
                    <span><button id={result.etag} type="submit" onClick={() => props.favoriteSubmit(result.id)} className="btn btn-success">Add to Favorite</button></span><span>  </span>                             
                  
                    <p><b>Title             :</b> {result.volumeInfo.title}</p>
                    <span><b>Authors         :</b> {result.volumeInfo.authors} | |</span>
                    <span><b>Published Date :</b> {result.volumeInfo.publishedDate}</span>
                    
                  </ListItem>          
                  
                ))}
              </List>
              
            </ul>
          
                        
          </div>
          
          
        </Col>              
      </Row>
    </div>
    
  );
  
}



export default SearchResults;
