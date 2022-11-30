myData = []
let myDictionary = {firstName:"", lastName:""}


function myFoo(event) {
    event.preventDefault()
    let first = document.getElementById('firstName').value
    let last = document.getElementById('lastName').value
    myDictionary.firstName=first
    myDictionary.lastName=last
    console.log(myDictionary)
    myData.push(myDictionary)
    window.alert(myData)
    

    }

function create() {
    document.getElementById('nameCV').innerText=myData[0].firstName
    document.getElementById('lastCV').innerText=myData[0].lastName
}