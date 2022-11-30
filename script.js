myData = []

let first = document.getElementById('firstName').value
let last = document.getElementById('lastName').value

function myFoo(event) {
    event.preventDefault()
    let myDictionary = {firstName:"", lastName:""}
    myDictionary[firstName]=first
    myDictionary[lastName]=last
    console.log(myDictionary)
    myData.push(myDictionary)
    window.alert(myData)
    

    }

function create() {
    document.getElementById('nameCV').innerText=myData[0].firstName
    document.getElementById('lastCV').innerText=myData[0].lastName
}