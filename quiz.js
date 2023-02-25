// const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`

// How would you access "sakib khan" ?
const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
console.log(data.result[0].userName.name);


// Which array method will you use to obtain an array containing the cubes of array p? 
const p = [1,2,3]; 
const q = p.map( n => Math.pow(n, 3));
console.log(q);


// How will you make the url dynamic using the food variable?
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}` 


// How to set image src dynamically? 
// const path = "https://www.images.com/cat.jpg"; 

// const div= document.createElement('div');
// div.innerHTML = `<img src=__?__ alt = "">`;



// How will you dynamically pass the name variable as a parameter to the loadDetail function?



// How will you handle the error? 

// fetch(url)
//  .then(res=>res.json())
//  .then(data => console.log(data)
//  .__?__(error => console.log(error))



// Which one is a proper output? 

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));