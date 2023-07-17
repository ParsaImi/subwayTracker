
let lines
async function getRoads(cb) {
    const response = await fetch("http://127.0.0.1:2000/api/v1/subway/roads");
    const roads = await response.json();
    cb(roads)
    lines = roads
  }


const changePos = [{name : 1 , line2 : 11 , pose2 :4 , line3 : 16 , pose3 : 14}, {name : 3 , line1 : 12 , pose1 : 11 , line3 : 9 , pose3 : 16} , {name : 2 , line1 : 14 , pose1 : 16 , line2 : 16 , pose2 : 9}]
let userPlace = 1 ;
let userDestination = 6 ;
// let lines = await getRoads()
let newline
getRoads((e) => {
  newline = e
})



// setTimeout(() => {
//   let lines = getRoads()
//   console.log(lines);
// }, 000);

let find = lines.filter((e) => {
    let myArray = [userPlace , userDestination]
    return myArray.includes(e.state)
    
})
console.log(find);

// if(find[0].line == find[1].line){
//     lineTracker(userPlace , userDestination)
// }

// else{
//     let newObj
//     let first = find[0].line
//     let last = find[1].line
//     let Obj = changePos.forEach((e) => {
//         if(e.name == first){
//             newObj = e
//         }
//     })
//     let linekey = `line${last}`
//     let posekey = `pose${last}`

//     let newDestination = newObj[linekey]
//     let lastDestination = newObj[posekey]
//     lineTracker(userPlace , newDestination)
//     lineTracker(lastDestination , userDestination)

// }

// function lineTracker(userP , userD){
// let userRoad = userD - userP;
// let finalArray = []
// let isOkay = []

//     if(0 < userRoad) {
//         for (let step = 0; step < userRoad; step++) {
//             userP = userP + 1
//             newNum = userP
//             finalArray.push(newNum)
//           }
//           console.log(finalArray);
        
//     } else if(0 > userRoad){
//         for(let mineStep = 0 ; mineStep > userRoad ; mineStep-- ){
//             userP = userP - 1
//             newNum = userP
//             finalArray.push(newNum)
            
//         }
//         console.log(finalArray);
//     }
    


// }

// // function wichLine(line , pose){
    
// // }