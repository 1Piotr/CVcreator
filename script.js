let myData = [[]]

class personalInfo {
    constructor(firstName, lastName, email="",website=0,  
             linkedin=0,phone=0, city=0, title, personal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title=title;
        this.email = email;
        this.city = city;
        this.phone = phone;
        this.website = website;
        this.linkedin = linkedin;
        this.personal = personal;
        
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

class personalEdu {
    constructor(date, title, company, description) {
        this.date = date;
        this.title = title;
        this.company = company;
        this.description = description;

    }
}
class personalProject {
    constructor(date, title, github, description) {
        this.date = date;
        this.title = title;
        this.github = github;
        this.description = description;

    }
}
class personalCustom {

}

function info(event) {
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
    let statement =document.getElementById('statement').value
    let newCV = new personalInfo(first,last, email, website, linkedin,
        phone, city,title, statement)
        
    
    console.log(newCV)
    myData[0]= newCV
    let strData =JSON.stringify(myData)
    window.alert(myData[0].firstName)
    localStorage.setItem("cvData", strData)
    window.alert(strData)
    let unStrData =JSON.parse(localStorage.getItem("cvData"))
    
    
    }

function create() {
    let unStrData =JSON.parse(localStorage.cvData)[0]
    window.alert(JSON.parse(localStorage.cvData)[0].email)
    document.getElementById('nameCV').innerText=unStrData.firstName
    document.getElementById('lastCV').innerText=unStrData.lastName
    document.getElementById('emailCV').innerText=unStrData.email
    document.getElementById('phoneCV').innerText=unStrData.phone
    document.getElementById('titleCV').innerText=unStrData.title
    document.getElementById('statementCV').innerText=unStrData.personal
    if (unStrData.city !=="") {
        document.getElementById('cityCV').innerText=unStrData.city
        document.getElementById('cityAwe').classList.remove('hidden')

    }
    if (unStrData.linkedin !=="") {
        document.getElementById('websiteCV').innerText=unStrData.website
        document.getElementById('websiteAwe').classList.remove('hidden')

    }
    if (unStrData.website !=="") {
        document.getElementById('linkedinCV').innerText=unStrData.website
        document.getElementById('linkedAwe').classList.remove('hidden')

    }
    
    
}
function image() {
    let image = document.getElementById('myfile').files[0].value
    console.log(image)
}
const employmentForm = document.getElementById("employment")
const educationForm = document.getElementById("education")
function myFunction() {
    
    let element  = 
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
                <button type="button" class="btn btn-outline-primary" onclick="addBullet(event, this)">Add description</button>
        </div>`
        ;
        employmentForm.insertAdjacentHTML("afterbegin",element)
    
}
function  removeEmployment(){
    
    employmentForm.removeChild(employmentForm.firstElementChild);

}
function myEducation() {
    
    let element  = 
        `<div class="row education">
                <div class="form-floating col-6 mb-3 pl-1">
                    <input type="month" class="form-control startdate" placeholder="start"/>
                    <label>Start Date</label>
                </div>
                <div class="form-floating col-6">
                    <input type="month" class="form-control enddate" placeholder="end" />
                    <label>End Date</label>
                </div>
                <div class="col-6 mb-3 pl-1">
                    <input type="text" class="form-control title" placeholder="Course Title"/> 
                </div>
                <div class="col-6 mb-3 pl-1">
                    <input type="text" class="form-control company" placeholder="University/School Name"/>  
                </div>
                <div class="form-floating col-12 mb-3 pl-1">
                <input type="text" class="form-control description" placeholder="Description"/>
                <label>Description</label>
                <button class="btn btn-outline-primary" onclick="addBullet(event, this)">Add description</button>
        </div>`
        ;
        educationForm.insertAdjacentHTML("afterbegin",element)
    
}
const projectForm=document.getElementById('projects')
function myProjects(){
    let element=`<div class="row project">
    <div class="col-lg-3 col-md-6 col-xsm-12 mb-3 pl-1">
      <input type="text" class="form-control" placeholder="Project Name" aria-label="project name" class="projectName">
    </div>
    <div class="col-lg-3 col-md-6 col-sm-12 mb-3 pl-1">
      <input type="text" class="form-control" placeholder="gitHub"  class="github">
      
    </div>
    <div class="col-lg-3 col-md-6 col-sm-12 mb-3 pl-1">
      <input type="text" class="form-control" placeholder="Project description"  id="projectDescription">`
      projectForm.insertAdjacentHTML("afterbegin",element)
}
const additionalForm=document.getElementById('additional')
function myAdditional(){
    let element=`<div class="row project">
    <div class="col-lg-3 col-md-6 col-xsm-12 mb-3 pl-1">
      <input type="text" class="form-control" placeholder="Title" aria-label="project name" class="projectName">
    </div>
    <div class="col-lg-3 col-md-6 col-sm-12 mb-3 pl-1">
      <input type="month" class="form-control"  >
      
    </div>
    <div class="col-12 mb-3 pl-1">
        <input type="text" class="form-control description mb-3" placeholder="Description"/> 
        <button onclick="addBullet(event, this)">Add description</button>
    </div>
    </div>`
      additionalForm.insertAdjacentHTML("afterbegin",element)
}

function addBullet(event, element) {
    event.preventDefault()
    //let description=document.querySelector('.description')
    //console.log(description)
    let bullet=`<div class="form-floating col-12 mt-3 pl-1" ondblclick="remove(this)">
    <input type="text" class="form-control description" placeholder="Description"/>
    <label>Double click to remove</label>
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
function education(event){
    event.preventDefault()
    //cannot access input by ids as there will be multiply inputs
    //I need to use query selector
    let education = document.querySelectorAll('.education')
        education.forEach(element => {
            let description=[]
           let dateStart= element.querySelector('.startdate').value
           let dateEnd= element.querySelector('.enddate').value
           let title = element.querySelector('.title').value
           let company = element.querySelector('.company').value
            let descriptionNode = element.querySelectorAll('.description')
            descriptionNode.forEach(element =>{
                description.push(element.value)
            })
            let newEdu= new personalEdu(dateStart, dateEnd, title, company, description)
            myData[2]=newEdu
            window.alert(myData[2])
        });

}
function project(event){
    event.preventDefault()
    //cannot access input by ids as there will be multiply inputs
    //I need to use query selector
    let project = document.querySelectorAll('.project')
        project.forEach(element => {
            let description=[]
           let dateStart= element.querySelector('.startdate').value
           let title = element.querySelector('.title').value
            let descriptionNode = element.querySelectorAll('.description')
            descriptionNode.forEach(element =>{
                description.push(element.value)
            })
            let newProject= new personalProject(dateStart, dateEnd, title, company, description)
            myData[3]=newProject
            window.alert(myData[2])
        });

}