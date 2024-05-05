function handleSubmit(event){
    console.log('inside of submit()')
    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let idNumber = document.getElementById('idNumber').value
    let jobTitle = document.getElementById('jobTitle').value
    let yearSalary = document.getElementById('yearSalary').value

    console.log(`Name: ${firstName} ${lastName}
        ID #: ${idNumber}
        Title: ${jobTitle}
        Salary: ${yearSalary}`)


}