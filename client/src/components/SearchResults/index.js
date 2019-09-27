import React from "react";
import "./style.css";



function SearchResults(props) {

  // console.log('props', props)
  
  return (
             
    <div>
      <ul className="list-group search-results">
        {props.Items.map(result => (   
                 
          <li key={result.etag} className="list-group-item">
            <img alt={result.volumeInfo.title} width="120" height="180" className="img-fluid" src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} /><span>     </span>
            
            <span><button id={result.etag}type="submit" onClick={() => props.handleItemDetailsSubmit(result.etag)} className="btn btn-success">Detail</button></span><span>  </span>   
              
            <span><button id={result.etag} type="submit" onClick={() => props.favoriteSubmit(result.etag)} className="btn btn-success">Add to Favorite</button></span><span>  </span>                             
           
            <p><b>Item Name             :</b> {result.volumeInfo.title}</p>
            <span><b>Price         :</b> {result.volumeInfo.authors} | |</span>
            <span><b>Rating :</b> {result.volumeInfo.publishedDate}</span>
            
          </li>          
          
        ))}
        
      </ul>
     
                  
    </div>
    
  );
  
}



export default SearchResults;
