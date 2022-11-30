myData = []
let myDictionary = {firstName:"", lastName:""}


function myFoo() {
    
    let first = document.getElementById('firstName').value
    console.log(first)
    let last = document.getElementById('lastName').value
    
    myDictionary.firstName=first
    myDictionary.lastName=last
    console.log(myDictionary)
    myData.push(myDictionary)
    window.alert(myData[0].firstName)
    

    }

function create() {
    document.getElementById('nameCV').innerText=myData[0].firstName
    document.getElementById('lastCV').innerText=myData[0].lastName
}