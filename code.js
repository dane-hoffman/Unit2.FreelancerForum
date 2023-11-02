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

//Creat an element to contain the average price of all freelancers
const averagePriceElement = document.createElement("p");

//Add content
h1Element.textContent = "Freelance Services";
// Iterate through the formattedFreelancers array and add them to the ul
// mappedFreelancers.forEach(freelancer => {
//     const liElement = document.createElement("li");
//     const freelancerName = `Name: ${freelancer.Name}`;
//     const freelancerOccupation = `Occupation: ${freelancer.Occupation}`;
//     const freelancerPrice = `Price: $${freelancer.Price}`;
// })
mappedFreelancers.forEach(freelancer => {
    const liElement = document.createElement("li");
    liElement.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.Occupation}, Price: $${freelancer.Price}`;
    ulElement.appendChild(liElement);
});

//Append variables/elements
body.appendChild(h1Element);
body.appendChild(infoElement);
infoElement.appendChild(ulElement);

//Calculate the average price of all freelancers
//Create a variable called `totalPrice`, starting at `0`
const totalPrice = mappedFreelancers.reduce((sum, freelancer) => {
//for every freelancer in the array add the `price` to the totalPrice
    return sum + freelancer.Price;
  }, 0);
  //create a variable called numberOfFreelancers and set the value equal to length of array
  const numberOfFreelancers = mappedFreelancers.length;
  //calculate the average by dividing the total price by the number of freelancers
  const averagePrice = totalPrice / numberOfFreelancers;
  //display the total average price
  console.log(averagePrice);

  //The visitor finds a message displaying the average price of the list of freelancers;


  // // Display the average price
 averagePriceElement.textContent = `Average Price: $${averagePrice}`;

// // Append the average price element to the section
infoElement.appendChild(averagePriceElement);


//Set attributes/'style' elements
//User story did not call for any styling, will do to play around