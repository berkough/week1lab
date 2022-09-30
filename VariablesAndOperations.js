//create a variable to hold the quantity of available plane seats left on a flight
let planeSeats = 100;
		
//create a variable to hold the cost of groceries at checkout
let groceryBill = 0.0;

//create a variable to hold a person's middle initial
let middleInitial = 'L';

//create a variable to hold true if it's hot outside and false if it's cold outside
let hotTemp = true;

//create a variable to hold a customer's first name
let firstName = 'John';

//create a variable to hold a street address
let address = '1234 Fake Street';

//print all variables to the console
console.log(planeSeats+' '+groceryBill+''+middleInitial+''+hotTemp+''+firstName+''+address);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
planetSeats = planeSeats - 2;

//impulse candy bar purchase, add 2.15 to the grocery total
groceryBill = groceryBill + 2.15;


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'D';

//the season has changed, update the hot outside variable to be opposite of what it was
hotTemp = false;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = firstName + middleInitial + 'Rockafella';

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hello, this is '+fullName+' he lives at '+address+'.');