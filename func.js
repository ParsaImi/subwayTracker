/* eslint-disable */
import { lineTracker , finder } from 'index.js';
let saver
async function getRoads() {
    const response = await fetch("http://127.0.0.1:2000/api/v1/subway/roads");
    const roads = await response.json();
    return roads
  }


const changePos = [{name : 1 , line2 : 11 , pose2 :4 , line3 : 16 , pose3 : 14}, {name : 3 , line1 : 12 , pose1 : 11 , line3 : 9 , pose3 : 16} , {name : 2 , line1 : 14 , pose1 : 16 , line2 : 16 , pose2 : 9}]
let userPlace = 16 ;
let userDestination = 1 ;


if(saver == undefined){
  getRoads().then((data) => {
    finder(data)
  })
}else{
    finder(saver)
}






// function wichLine(line , pose){
    
// }