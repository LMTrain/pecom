import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import ItemDetails from "../components/ItemDetails";

class Search extends Component {
  state = {
    search: "",
    favMessage:"",
    id: "",      
    items: [],    
    title: "",
    authors: "",
    link: "",
    thumbnail: "",
    description: "",
    publisheddate: "",           
    error: "",
    showItem: [],
    showItemState: false
  };
  
  searchForItems = query => {
    API.search(query)
      .then(res => this.setState({ Items: res.data.items }))          
      .catch(err => console.log(err));
  }  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleDetailsSubmit = (id) => {  
    // Find the id in the state
    const Item = this.state.Items.find((Item) => Item.id === id);
    // console.log('found Item', Item)
    this.setState({showItem: [Item], showItemState: true})
        
  }  

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForItems(this.state.search);
    console.log(this.state.search);        
  };
  
  
 
  render() {
    console.log('this.state.showItem', this.state.showItem)

    const {showItemState, showItem} = this.state

    return (
      <div>
        <Container style={{ marginTop: -25 }}>
          
          
          <Navbar
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}            
          />
          {!showItemState ? <SearchResults Items={this.state.Items === undefined ? [] : this.state.Items}
                   
          handleDetailsSubmit={this.handleDetailsSubmit}
          
          
          /> : <ItemDetails showItem={showItem}/>}       
         
        </Container>
      </div>
      
    );
  }
}

export default Search;
