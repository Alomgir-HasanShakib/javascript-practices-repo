// for in loop example : on objects
const person = {
  fname: "alomgir hasan shakib",
  lName: "shakib",
  age: 18,
  education: "ssc passed in 2023",
};
// this code exicute the value of person objects
for(let v in person){
    console.log(person[v])
}
//  this code exicute the property of person objects
for(let p in person){
    console.log(p);
}
// for in loop example : on arrey

const arr = [20, 30, 41, 20, 50, 80]

// this code exicute index number of an arrey 
for(let idx in arr){
    console.log(idx);
}

// this code exicute value of an arrey 

for(let v in arr){
    console.log(arr[v]);
}