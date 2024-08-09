// let firstName = "Ranju"
// let lastName = "Were"
// let job = "Ole"
// let school = "Yabaleft School awon Were"
// let salary = 100

//  let sentence = `My name is ${firstName} ${lastName}, I'am an ${job} by profession and a graduate of ${school}, I earn #${salary} per year.`
//  console.log(sentence);

// let age = 2000
// age >= 18 ? console.log("You are eligible") : console.log("You are not eligible");

// let shoeSize = prompt("enter ur shoe size")
// let shoe = (shoeSize >= 44) ? "Timberland" : "Crocs";
// console.log(`You should be getting a ${shoe}`);


// let a = 0
// let b = (a === 0) ? console.log("zero") : (a > 0) ? console.log("positive number") : console.log("negative number");

// const circleArea = (r) => {
//     let a = Math.PI * r * r
//     return a
// }
// console.log(circleArea(5));

// const num = [1,2,3,"food",null]

// const [DML, OLA, ...rest] = num
// console.log(DML, OLA);

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3);


const people = [{
    name:"Lee",
    job:"Developer",
    wage:10000,
    employer:"GomyCode"
},
{
    name:"DML",
    job:"Developer",
    wage:15000,
    employer:"GomyCode"
},
{
    name:"Oreva",
    job:"Developer",
    wage:23000,
    employer:"GomyCode"
}]

// const findPerson = (wage)=>{
//     return people.find((egg)=> egg.wage === wage)
// }

// console.log(findPerson(10000));

// const showname = (name)=> people.forEach((bread)=>alert(bread.name));
// showname("Benson");

// const showjob = (job)=> people.forEach((bread)=>alert(bread.job));
// showname("Developer");

const filterPeople = () => people.filter((carrot) => carrot.wage > 14000)
console.log(filterPeople());