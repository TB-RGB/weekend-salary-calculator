let totalSalary = 0;
let total = document.getElementById("total");
let output = document.getElementById("outTotal");
output.innerText = `$${totalSalary}`;

/**
 * Checks if the monthly budget has been exceeded and if so, applys the over-budget class for css styling
 */
function checkBudget() {
  if (totalSalary > 20000) {
    total.classList.add("over-budget");
  } else if (totalSalary <= 20000) {
    total.classList.remove("over-budget");
  }
}

/**
 * Populates table with form field input values on button click;
 * Adds to monthly total and changes the innertext of the div in footer accordingly (+/-);
 * Clears the fields after submit;
 * @param {*} event
 */
function handleSubmit(event) {
  console.log("inside of submit()");
  event.preventDefault();

  let allInputs = document.querySelectorAll("input");
  //Selectors
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let idNumber = document.getElementById("idNumber").value;
  let jobTitle = document.getElementById("jobTitle").value;
  let yearSalary = document.getElementById("yearSalary").value;

  console.log(`Name: ${firstName} ${lastName}
        ID #: ${idNumber}
        Title: ${jobTitle}
        Salary: ${yearSalary}`);
  //checks if the fields first character is a $, if so splits to array, shifts off first value, and joins back to string
  for (let char of yearSalary) {
    if (char[0] === "$") {
      yearSalary = yearSalary.split("");
      console.log(yearSalary);
      yearSalary.shift();
      console.log(yearSalary);
      yearSalary = yearSalary.join("");
      console.log(yearSalary);
    }
  }
  //Place values into table
  let table = document.getElementById("tBody");
  table.innerHTML += `
  <tr>
    <td>${firstName} ${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${Number(yearSalary)}</td>
    <td class='delete'><button onClick='runDelete(event)'>❌</button></td>
  </tr>`;
  //adjusts the monthly salary budget counter
  totalSalary += (Number(yearSalary) / 12);
  output.innerHTML = `$` + totalSalary;
  //clears fields
  allInputs.forEach((singleInput) => (singleInput.value = ""));

  //checks if monthly budget has gone over limit
  checkBudget();
}

/**
 * Deletes employee from table on button click and adjusts monthly budget counter
 * @param {*} event
 */
function runDelete(event) {
  console.log("testing delete");
  // Selects table row from button click
  let toDelete = event.target.parentElement.parentElement;
  // Selects node of row that is the annual salary of employee being deleted from table
  let children = toDelete.childNodes;
  let targSal = children[7];
  console.log(children[7]);
  // declares text value of node to variable
  let removedSal = targSal.innerText;
  // variable used to decrease monthly budget counter
  totalSalary -= (Number(removedSal) / 12);
  output.innerHTML = `$${totalSalary}`;
  //removes the employee from table
  toDelete.remove();
  //checks if monthly budget has gone over limit
  checkBudget();
}
