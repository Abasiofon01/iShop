let men = document.getElementsByClassName("men");
let women = document.getElementsByClassName("women");
let newArrival = document.getElementsByClassName("new");
let allButton = document.getElementById('all');

// const collectionItems = [men, women, newArrival]

// console.log(collectionItems);

// const menCollection = collectionItems.filter(items => items)

// console.log(menCollection);


// let div1 = document.createElement('h1');
// document.body.appendChild(div1);
// div1.textContent = "hello"

// let button = document.createElement("button")
// document.body.appendChild(button)
// button.textContent = "click";

// button.addEventListener('click', () => {
//   if (div1.textContent === "hello") {
//     div1.textContent = "welcome"
//   } else {
//     div1.textContent = "hello"
//   }
// })




function myFunction() {
  console.log('ALL');
}

function myFunction1() {
  console.log('MEN');
  women.classList("d-none");
}

function myFunction2() {
  console.log('WOMEN');
  men.classList.add("d-none")
}

const Array = [{
  id: 1,
  item: men,
  gender: 'male'
},

{
  id: 2,
  item: women,
  gender: 'female'
},

{
  id: 3,
  item: newArrival,
  gender: 'all'
}]

// console.log(Array);

// const filteredArray = Array.filter((items) => items.item === men)

// console.log(filteredArray);