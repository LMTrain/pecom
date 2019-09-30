import React from "react";
import "../UserAccSettings/style.css";
// import Container from "../Container";
// import { Link } from "react-router-dom";


getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }


export default TodaysDeal;
