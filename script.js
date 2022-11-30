let myData = []


class personalInfo {
    constructor(firstName, lastName, title,  city, 
        email=0, phone=0, website=0,linkedin=0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title=title;
        this.email = email;
        this.city = city;
        this.phone = phone;
        this.website = website;
        
        this.linkedin = linkedin;
        
    }
}
class personalWork {
    constructor(date, title, company, description) {
        this.date = date;
        this.title = title;
        this.company = company;
        this.description = description;

    }
}
class personalEduc {
    constructor(date, title, company, description) {
        this.date = date;
        this.title = title;
        this.company = company;
        this.description = description;

    }
}
class personalProject {
    constructor(date, title, company, description) {
        this.date = date;
        this.title = title;
        this.github = github;
        this.description = description;

    }
}
class personalCustom {

}

function myFoo(event) {
    event.preventDefault()
    
    let first = document.getElementById('firstName').value
    console.log(first)
    let last = document.getElementById('lastName').value
    let newCV = new personalInfo(first,last)
    
    console.log(newCV)
    myData.push(newCV)
    window.alert(myData[0].firstName)
    

    }

function create() {
    document.getElementById('nameCV').innerText=myData[0].firstName
    document.getElementById('lastCV').innerText=myData[0].lastName
}