import axios from "axios";

const BASEURL = process.env.REACT_APP_BASEURL
const APIKEY = process.env.REACT_APP_APIKEY

export default {

  //Search for an item to buy
  search: function(query) {
    console.log(query)
    return axios.get(BASEURL + query + APIKEY);
  },
    // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    console.log("FROM CLIENT API getUser ====", id)
    return axios.get("/api/users/" + id);
  },
  // Update the user with the given id
  updateUser: function(id) {
    console.log("FROM CLIENT API updateUser ====", id)
    return axios.put("/api/users", id);
  },
  // updateUser: function(id) {
  //     console.log("API ====", id)
  //   return axios.put("/api/users/" + id);
  // },
  // Deletes the user with the given id
  deleteUser: function(id) {    
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(newAccount) {
    console.log("API saveUser ====", newAccount)
    return axios.post("/api/users", newAccount);
  },
  loginUser: function(userAccount) {
    console.log("API loginUser ====", userAccount)
    return axios.post("/api/users/login", userAccount);
  }
};
