//A visitor enters the website to find a list of available freelancers;
const freelancers = [
    { name: "Alice", price: 25, occupation: "gardener"},
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
//   const formattedFreelancers = freelancers.map(({ name, occupation, price }) => ({
//     Name: name,
//     Occupation: occupation,
//     Price: price,
//   }));
  
//   console.log(formattedFreelancers);

  
//Each freelancer has a Name, Occupation, and Starting Price for services;
//The visitor observes "Alice", the writer, with a starting price of $30;
//The visitor observes "Bob", the teacher, with a starting price of $50;
//The visitor finds a message displaying the average price of the list of freelancers;

//Create variables/elements
const body = document.body;
const h1Element = document.createElement("h1");
const infoElement = document.createElement("section");
const ulElement = document.createElement("ul");

//const flexContainer = document.createElement("section");

//Add content
h1Element.textContent = "Freelance Services";

//Append variables/elements
body.appendChild(h1Element);
body.appendChild(infoElement);
infoElement.appendChild(ulElement);


//Set attributes/'style' elements