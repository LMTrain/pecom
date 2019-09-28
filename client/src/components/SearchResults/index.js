import React from "react";
import { List, ListItem } from "../List";
import "../SearchResults/style.css";



function SearchResults(props) {

  // console.log('props', props)
  
  return (
    <div>
      <List>                
        {props.Items.map(result => (
          <ListItem>
            <div className="srcard">
              <div className="img-container">
                <img alt={result.volumeInfo.title} width="120" height="180" className="img-fluid" src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} /><span>     </span>
              </div>             
              <div className="content">
                <ul>    
                  <li>
                    <p><b>Item Name             :</b> {result.volumeInfo.title}</p>
                  </li>
                  <li>
                    <span><b>Price         :</b> {result.volumeInfo.authors} | |</span>
                    <span><b>Rating :</b> {result.volumeInfo.publishedDate}</span>
                  </li>                   
                </ul>
              </div>
            </div>
            <span><button id={result.etag}type="submit" onClick={() => props.addItemToCart(result.etag)} className="btn btn-success">Add to cart</button></span><span>  </span>
            <span><button id={result.etag} type="submit" onClick={() => props.saveForLater(result.etag)} className="btn btn-success">Item Details</button></span><span>  </span>
            <span><button id={result.etag} type="submit" onClick={() => props.saveForLater(result.etag)} className="btn btn-success">Save For Later</button></span><span>  </span>                             
          </ListItem> 
                    
                  
                    
                  ))}
                  
      </List>         
              
                          
    </div>
    
  );
  
}



export default SearchResults;
