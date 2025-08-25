// ----- STATE -----
//Creates a variable named state
let state = {
  //creates a blank array for the numbers bank
  bank: [],
  //creates a blank array for the odd numbers
  odd: [],
  //creates a blank array for the even numbers
  even: [],
};

// ----- ROOT APP -----
//renders the app so that it is visible on the page
//as we're building the required components
//building the application after the components makes
//it so that the application is unable to be rendered
// as you go along
function App() {
  //this creates the div element
  const app = document.createElement("div");

  //adds the form to the div section
  app.appendChild(Form());
  //adds the number bank to the div section
  app.appendChild(NumberBank());
  //adds the odd numbers to the div section
  app.appendChild(OddNumbers());
  //adds the even numbers to the div section
  app.appendChild(EvenNumbers());

  //returns the entire app
  return app;
}

// ----- COMPONENTS -----
function Form() {
  //creates the form element
  const form = document.createElement("form");

  //creates the input element on the form
  const input = document.createElement("input");
  //sets the input type to a number
  input.type = "number";
  //sets the input name to a number
  input.name = "number";

  //********BUTTON CREATION********/
  //creates a button element
  const addBtn = document.createElement("button");
  //sets the text on the button to "Add Num"
  addBtn.textContent = "Add Num";

  //creates a button element
  const sortOneBtn = document.createElement("button");
  //sets the text on the button to "Sort One Num"
  sortOneBtn.textContent = "Sort One Num";

  //creates a button element
  const sortAllBtn = document.createElement("button");
  //sets the text on the button to "Sort All"
  sortAllBtn.textContent = "Sort All";

  //********BUTTON FUNCTIONALITY [ADD EVENT LISTENERS]********/
  //adds an event listener to the form that creates an event
  //when the form is submitted
  form.addEventListener("submit", function (event) {
    //stops the form from its default functionality
    event.preventDefault();
    //creates a variable named value that takes the
    //user input and converts the text to a number
    const value = parseInt(input.value);
    //if the entered value is not equal to not a number then
    if (!isNaN(value)) {
      //add the value to the bank array in the state variable
      state.bank.push(value);
      //clears the input field so the end user can enter a new value
      input.value = "";
      //updates the page so that the end user can see the new list of numbers
      render();
    }
  });

  //adds an event listener to the form that creates an event
  // when the button is clicked
  sortOneBtn.addEventListener("click", function (event) {
    //stops the form from its default functionality
    event.preventDefault();
    //if the length of the bank array in the state variable is greater than zero, then
    if (state.bank.length > 0) {
      //create a variable named num that removes the number from
      //the bank array in the state variable
      let num = state.bank.shift();
      //place the number in the appropriate sorted list
      //**ask about this**/
      sortNumber(num);
      //updates the app so the end user can view the changes
      render();
    }
  });

  //adds an event listener to the form that creates an event
  // when the button is clicked
  sortAllBtn.addEventListener("click", function (event) {
    //stops the form from its default functionality
    event.preventDefault();
    //as long as there are a positive amount of numbers in the
    //number bank, keep looping
    while (state.bank.length > 0) {
      //creates a variable named num that removes the number from
      //the bank array in the state variable
      let num = state.bank.shift();
      //place the number in the appropriate sorted list
      //**ask about this**/
      sortNumber(num);
    }
    //updates the app so the end user can view the changes
    render();
  });

  //add the input field to the form
  form.appendChild(input);
  //add the Add Num button to the form
  form.appendChild(addBtn);
  //add the Sort One Num Button to the form
  form.appendChild(sortOneBtn);
  //add the Sort All Button to the form
  form.appendChild(sortAllBtn);

  //return the form
  return form;
}

function NumberBank() {
  //creates a variable named div, which creates the div element
  const div = document.createElement("div");
  //creates a variable named title, which creates the h3 header for the div
  const title = document.createElement("h3");
  //set the text of the title to "Number Bank"
  title.textContent = "Number Bank";
  //adds the title to the div
  div.appendChild(title);

  //creates a variable named list that creates a pTag
  const list = document.createElement("p");
  //state.bank.join converts the odds array from the state variable into a single
  //string with values separated by a comma
  list.textContent = state.bank.join(", ");
  //adds the list to the div
  div.appendChild(list);

  //returns the div section
  return div;
}

function OddNumbers() {
  //creates a variable named div, which creates the div element
  const div = document.createElement("div");
  //creates a variable named title, which creates the h3 header for the div
  const title = document.createElement("h3");
  //set the text of the title to "Odd Numbers"
  title.textContent = "Odd Numbers";
  //adds the title to the div
  div.appendChild(title);

  //creates a variable named list that creates a pTag
  const list = document.createElement("p");
  //state.odd.join converts the odds array from the state variable into a single
  //string with values separated by a comma
  list.textContent = state.odd.join(", ");
  //adds the list to the div
  div.appendChild(list);

  //returns the div section
  return div;
}

function EvenNumbers() {
  const div = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "Even Numbers";
  div.appendChild(title);

  //creates a variable named list that creates a pTag
  const list = document.createElement("p");
  //state.even.join converts the even array from the state variable into a single
  //string with values separated by a comma
  list.textContent = state.even.join(", ");
  //adds the list to the div
  div.appendChild(list);

  //returns the div section
  return div;
}

// ----- NUMBER SORTING -----
//function named sort number that accepts a parameter of number
function sortNumber(num) {
  //if the number is divisible by two (even), then
  if (num % 2 === 0) {
    //add the number to the even array in the state variable
    state.even.push(num);
    //otherwise
  } else {
    //add the number to the odd array in the state variable
    state.odd.push(num);
  }
}

// ----- RENDER -----
//creates a function named render
function render() {
  //create a variable named root that retrieves the app element ID
  const root = document.getElementById("app");
  //sets the innerHTML of the root to an empty string
  root.innerHTML = "";
  //append the app to the root
  root.appendChild(App());
}

// ----- START -----
//calls the render function
render();
