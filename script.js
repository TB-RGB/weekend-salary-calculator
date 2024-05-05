let totalSalary = 0;
let total = document.getElementById("total");
total.innerText = `$${totalSalary}`;

function handleSubmit(event) {
  console.log("inside of submit()");
  event.preventDefault();

  let allInputs = document.querySelectorAll("input");

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let idNumber = document.getElementById("idNumber").value;
  let jobTitle = document.getElementById("jobTitle").value;
  let yearSalary = document.getElementById("yearSalary").value;

  console.log(`Name: ${firstName} ${lastName}
        ID #: ${idNumber}
        Title: ${jobTitle}
        Salary: ${yearSalary}`);

  let table = document.getElementById("tBody");
  table.innerHTML += `
  <tr>
    <td>${firstName} ${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${Number(yearSalary)}</td>
    <td class='delete'><button onClick='runDelete(event)'>❌</button></td>
  </tr>`;

  totalSalary += (Number(yearSalary)/12);
  total.innerText = `$${totalSalary}`;

  allInputs.forEach((singleInput) => (singleInput.value = ""));
  checkBudget();
}

function runDelete(event) {
  console.log("testing delete");

  let toDelete = event.target.parentElement.parentElement;
  let children = toDelete.childNodes;
  let targSal = children[7];
  console.log(children[7]);

  let removedSal = targSal.innerText;

  totalSalary -= (Number(removedSal)/12);
  total.innerText = `$${totalSalary}`;

  toDelete.remove();
  checkBudget();
}

function checkBudget(){
    if (totalSalary > 20000){
        total.classList.add('over-budget')
    } else if (totalSalary <= 20000){
        total.classList.remove('over-budget')
    }
}

