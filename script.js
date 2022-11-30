myData = []
let myDictionary = {firstName:"", lastName:""}


function myFoo() {
    
    let first = document.getElementById('firstName').value
    alert.window(first)
    let last = document.getElementById('lastName').value
    alert.window(last)
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