let myData = []


function newFoo(firstName, lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
}

function myFoo(event) {
    event.preventDefault()
    
    let first = document.getElementById('firstName').value
    console.log(first)
    let last = document.getElementById('lastName').value
    let newCV = new newFoo(first,last)
    
    console.log(newCV)
    myData.push(newCV)
    window.alert(myData[0].firstName)
    

    }

function create() {
    document.getElementById('nameCV').innerText=myData[0].firstName
    document.getElementById('lastCV').innerText=myData[0].lastName
}