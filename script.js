let myData = []


class personalInfo {
    constructor(firstName, lastName, title,  city=0, 
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
    constructor(dateStart, dateEnd, title, company, description) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
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
    let email =document.getElementById('email').value
    let website =document.getElementById('website').value
    let linkedin =document.getElementById('linkedin').value
    let phone=document.getElementById('phone').value
    let city =document.getElementById('city').value
    let title =document.getElementById('title').value
    let newCV = new personalInfo(first,last, email, website, linkedin,
        phone, city, title)
    
    console.log(newCV)
    myData.push(newCV)
    window.alert(myData[0].firstName)
    

    }

function create() {
    document.getElementById('nameCV').innerText=myData[0].firstName
    document.getElementById('lastCV').innerText=myData[0].lastName
    
}
function image() {
    let image = document.getElementById('myfile').files[0].value
    console.log(image)
}
const employmentForm = document.getElementById("employment")
function myFunction() {
    
    const element  = 
        `<div class="row work">
                <div class="col-6 mb-3 pl-1">
                    <input type="month" class="form-control startdate" placeholder="start"/>
                    <label>Start Date</label>
                </div>
                <div class="col-6">
                    <input type="month" class="form-control enddate" placeholder="end" />
                    <label>End Date</label>
                </div>
                <div class="col-6 mb-3 pl-1">
                    <input type="text" class="form-control title" placeholder="Title"/> 
                </div>
                <div class="col-6 mb-3 pl-1">
                    <input type="text" class="form-control company" placeholder="Company Name"/>  
                </div>
                <div class="col-12 mb-3 pl-1">
                <input type="text" class="form-control description" placeholder="Description"/> 
                <button onclick="addBullet(event, this)">Add description</button>
        </div>`
        ;
        employmentForm.insertAdjacentHTML("afterbegin",element)
    
}
function  removeEmployment(){
    employmentForm.removeChild(employmentForm.firstElementChild);

}

function addBullet(event, element) {
    event.preventDefault()
    //let description=document.querySelector('.description')
    //console.log(description)
    let bullet=`<div class="col-12 mb-3 pl-1" ondblclick="remove(this)">
    <input type="text" class="form-control description" placeholder="Description"/> 
</div>`
    element.insertAdjacentHTML("beforebegin",bullet)

}

//function removing html element on event
function remove(el) {
    
    let element = el;
    element.remove();
  }
// function updating data from input
function work(event){
    event.preventDefault()
    //cannot access input by ids as there will be multiply inputs
    //I need to use query selector
    let works = document.querySelectorAll('.work')
        works.forEach(element => {
            let description=[]
           let dateStart= element.querySelector('.startdate').value
           let dateEnd= element.querySelector('.enddate').value
           let title = element.querySelector('.title').value
           let company = element.querySelector('.company').value
            let descriptionNode = element.querySelectorAll('.description')
            descriptionNode.forEach(element =>{
                description.push(element.value)

            })
            let newWork= new personalWork(dateStart, dateEnd, title, company, description)
            myData.push(newWork)
            window.alert(myData[0])
        });

}