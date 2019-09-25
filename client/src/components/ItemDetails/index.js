import React from "react";
import "./style.css";



function ItemDetails(props) {

  return (
    <div>
      <ul className="list-group search-favItems">
        {props.showItem.map(favItem => (          
          <li key={favItem.id} className="list-group-item">
            <img alt={favItem.volumeInfo.title} width="200" height="220" className="img-fluid" src={favItem.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : favItem.volumeInfo.imageLinks.thumbnail} /><span></span>
            <span><a href = "/search/"><button type="submit" className="btn btn-success">Back To Search</button></a></span>         
            <p><b>Title             :</b> {favItem.volumeInfo.title}</p>
            <span><b>Authors         :</b> {favItem.volumeInfo.authors} | |</span>
            <p><b>Published Date :</b> {favItem.volumeInfo.publishedDate}</p>
            <p><b>Description :</b> {favItem.volumeInfo.description}</p>          
          </li>        
        ))}      
      </ul>                
    </div>    
  );  
}


export default ItemDetails;
