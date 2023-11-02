//A visitor enters the website to find a list of available freelancers;
//Each freelancer has a Name, Occupation, and Starting Price for services;
//The visitor observes "Alice", the writer, with a starting price of $30;
//The visitor observes "Bob", the teacher, with a starting price of $50;
//The visitor finds a message displaying the average price of the list of freelancers;

//Create variables/elements
const body = document.body;
const h1Element = document.createElement("h1");

//Add content
h1Element.textContent = "Freelance Services";

//Append variables/elements
body.appendChild(h1Element);


//Set attributes/'style' elements