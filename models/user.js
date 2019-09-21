const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({  
  "$jsonschema": {    
    "title": "User",
    "description": "A user in PeCom",
    "type": "object",
    "properties": {
      "memberId": {
        "description": "The identifier for a user",
        "type": "string"
      },
      "memberName": {
        "description": "Name of the user",
        "type": "string"
      },
       "userName": {
        "description": "User log in identity",
        "type": "string"     
      },
      "email": {
        "description": "emails for the user",
        "type": "array",
        "items": {
          "type": "string"
        },
        "minItems": 1,
        "uniqueItems": true
      },
      "password": {
        "description": "User password",
        "type": "string"
      },
      "cCard": {
        "description": "User credit card",
        "type": "number"
      },
      "contact": {
        "type": "object",
        "properties": {
          "address": {
            "type": "string"
          },
          "phone": {
            "type": "number"
          },
          "email": {
            "type": "string"          
          }
        },     
        
       
      },
      "cart": {
        "type": "object",
        "properties": {
          "item": {
            "type": "string"
          },
          "qty": {
            "type": "number"
          },
          "unitPrice": {
            "type": "number"         
          },
          "link": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "thumbnail": {
            "type": "string"
          },
          "customerRating": {
            "type": "string"
          },
        },      
       
      },
      "savedItems": {
        "type": "object",
        "properties": {
          "item": {
            "type": "string"
          },        
          "unitPrice": {
            "type": "number"         
          },
          "link": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "thumbnail": {
            "type": "string"
          },
          "customerRating": {
            "type": "string"
          },
        },      
       
      },
      
      "theme": {
        "type": "object",
        "properties": {
          "theme1": {
            "type": "boolean"          
          },
          "theme2": {
            "type": "boolean"
          },
          "theme3": {
            "type": "boolean"
          },
          "theme4": {
            "type": "boolean"
          },
          "theme5": {
            "type": "boolean"
          },
          "theme6": {
            "type": "boolean"
          },
          "userImage": {
            "type": "string"        
          }
        },
        
      },
      "bookExchange": {
        "type": "object",
        "properties": {
          "bookId": {
            "type": "string"          
          },        
          "title": {
            "type": "string"         
          },
          "authors": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "thumbnail": {
            "type": "string"
          },        
          "description": {
            "type": "string"
          },
          "publisheddate": {
            "type": "string"
          },
          "request": {
            "type": "boolean"
          },
          "deny": {
            "type": "boolean"
    
    
          }
  
        }

      },     
    }    
  },
  "required": [ "memberName", "userName", "email", "password" ]
  });

const User = mongoose.model("User", userSchema);

module.exports = User;