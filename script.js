let sum = 0;
let total = document.getElementById("total");
total.innerText = `$${sum}`;

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

  sum += Number(yearSalary);
  total.innerText = `$${sum}`;

  allInputs.forEach((singleInput) => (singleInput.value = ""));
}

function runDelete(event) {
  console.log("testing delete");

  let toDelete = event.target.parentElement.parentElement;
  let children = toDelete.childNodes;
  let targSal = children[7]
  console.log(children[7]);

  //   console.log('toDelete', toDelete)
  //   console.log('targSal dataset' ,targSal);
    let removedSal = targSal.innerText;

    sum -= Number(removedSal);
    total.innerText = `$${sum}`;

    toDelete.remove();
}

// total.classList.toggle('over-budget', sum > 20000)
