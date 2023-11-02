//A visitor enters the website to find a list of available freelancers;
//Each freelancer has a Name, Occupation, and Starting Price for services;
//The visitor observes "Alice", the writer, with a starting price of $30;
//The visitor observes "Bob", the teacher, with a starting price of $50;

//Create variables/elements
const body = document.body;
const h1Element = document.createElement("h1");
const infoElement = document.createElement("section");
const ulElement = document.createElement("ul");
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
  const mappedFreelancers = freelancers.map(({ name, occupation, price }) => ({
    Name: name,
    Occupation: occupation,
    Price: price,
  }));

//const flexContainer = document.createElement("section");

//Add content
h1Element.textContent = "Freelance Services";


//Append variables/elements
body.appendChild(h1Element);
body.appendChild(infoElement);
infoElement.appendChild(ulElement);

//Calculate the average price of all freelancers
const totalPrice = mappedFreelancers.reduce((sum, freelancer) => {
    return sum + freelancer.Price;
  }, 0);
  
  const numberOfFreelancers = mappedFreelancers.length;
  const averagePrice = totalPrice / numberOfFreelancers;
  console.log(averagePrice);
// // Calculate the average price of all freelancers
// const totalPrices = formattedFreelancers.reduce((sum, freelancer) => sum + freelancer.Price, 0);
// const averagePrice = totalPrices / formattedFreelancers.length;

// // Display the average price
// const averagePriceElement = document.createElement("p");
// averagePriceElement.textContent = `Average Price: $${averagePrice.toFixed(2)}`;

// // Append the average price element to the section
// infoSection.appendChild(averagePriceElement);

// Iterate through the formattedFreelancers array and add them to the ul
mappedFreelancers.forEach(freelancer => {
    const liElement = document.createElement("li");
    liElement.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.Occupation}, Price: $${freelancer.Price}`;
    ulElement.appendChild(liElement);
});

//The visitor finds a message displaying the average price of the list of freelancers;


//Set attributes/'style' elements