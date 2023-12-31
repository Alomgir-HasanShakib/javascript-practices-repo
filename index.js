// for in loop example : for in loop basically used on objects
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