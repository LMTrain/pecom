import React from "react";
// import { List, ListItem } from "../List";
import { Card, CardHeader, CardBody, Row, Col} from 'reactstrap';
import "../SearchResults/style.css";


function SearchResults(props) {
  
  return (
    <Row>
      <Card item-row-display>
        <div className = "item-row-display">                    
            {props.Items.map(result => (
              <Col key={result.itemId} md="3">
                <div className="item-card">
                  <div className="img-container">                
                    <img 
                        key={result.itemId} 
                        alt={result.name} width="120" height="180" className="img-fluid" 
                        src={result.largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.largeImage} />
                  </div>
                  <div>
                    <div className="content">
                      <p>{result.name}</p>
                      <p><b>Rating :</b> {result.customerRating}</p>
                      <p><b>${result.salePrice}</b></p>
                    </div>
                    <span>
                      <button key={result.itemId} id={result.itemId} onClick={() => props.addItemToCart(result.itemId)} className="btn btn-success">Add to cart</button>
                      <span><button key={result.itemId} id={result.itemId} onClick={() => props.additemDetails(result.itemId)} className="btn btn-success">Item Details</button></span>
                      <span><button key={result.itemId} id={result.itemId} onClick={() => props.addItemToSaveForLater(result.itemId)} className="btn btn-success">Save For Later</button></span>                             
                    </span>                  
                  </div>
                </div>
              </Col> 
            ))}
        </div>
      </Card>
    </Row>
    
  );
  
}



export default SearchResults;
