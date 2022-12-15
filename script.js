

// creating classes for each section of the form
// so that inputs for every section can be stored as an 
// seperate object
class personalInfo {
    constructor(firstName, lastName, email,website,  
             linkedin,phone, city, title, personal) {
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
    constructor(dateStart, dateEnd, title, school, description) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.title = title;
        this.school = school;
        this.description = description;
    }
}
class personalProject {
    constructor(title, github, description) {
        this.title = title;
        this.github = github;
        this.description = description;

    }
}
class personalCustom {
    constructor(title,description){
        this.title=title
        this.description=description
    }
}

// taking values from personal input section
// and storing it in an object
function info(event) {
    event.preventDefault() 
    let myData=[[]]
    //removing class hidden from the green tick
    //if the section is updated
    document.getElementById('greenInfo').classList.remove('hidden')
    //closing accordion item on succesful udating
    let myCollapse = document.getElementById('collapseOne')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
    bsCollapse.hide()
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
    console.log(myData[0])
    let strData =JSON.stringify(myData)
    localStorage.setItem("cvData", strData)
    console.log(localStorage.cvData)
    }
// function displaying the personal data on actual CV page
function create() {
    let unStrData =JSON.parse(localStorage.cvData)[0]
    document.getElementById('nameCV').innerText=unStrData.firstName
    document.getElementById('lastCV').innerText=unStrData.lastName
    document.getElementById('emailCV').innerText=unStrData.email
    document.getElementById('phoneCV').innerText=unStrData.phone
    document.getElementById('titleCV').innerText=unStrData.title
    document.getElementById('statementCV').innerText=unStrData.personal
    if (unStrData.city !=='') {
        document.getElementById('cityCV').innerText=unStrData.city
        document.getElementById('cityAwe').classList.remove('hidden')

    }
    if (unStrData.website !=="") {
        document.getElementById('websiteCV').innerText=unStrData.website
        document.getElementById('websiteAwe').classList.remove('hidden')

    }
    if (unStrData.linkedin !=="") {
        document.getElementById('linkedinCV').innerText=unStrData.linkedin
        document.getElementById('linkedAwe').classList.remove('hidden')

    }
       
}
// sections where user can choose multiply input fieldsets
// 1. function respsponsible for creating input fields in the form
//  2. function removing added user fields
// 3. function catching the user input
// 4. fubction displaying values from the input on the CV page
const employmentForm = document.getElementById("employment")


function myFunction() { 
    let element  = 
        `<div class="row work" ondblclick="removeRestricted(this)">
                <div class="col-6 mb-3 pl-1 form-floating">
                    <input type="month" class="form-control startdate" required/>
                    <label>Start Date</label>
                </div>
                <div class="col-6 form-floating">
                    <input type="month" class="form-control enddate" />
                    <label>End Date, CURRENT if not picked </label>
                </div>
                <div class="col-12 col-md-6 mb-3 pl-1 form-floating">
                    <input type="text" class="form-control title" placeholder="" required/>
                    <label>Title</label>
                </div>
                <div class="col-12 col-md-6 mb-3 pl-1 form-floating">
                    <input type="text" class="form-control company" placeholder="" required/>
                    <label>Company Name</label>
                </div>
                <div class="col-12 mb-3 pl-1 form-floating">
                <textarea type="text" class="form-control description" placeholder=""></textarea> 
                <label>Description</label>
        </div>`
        ;
        employmentForm.insertAdjacentHTML("afterbegin",element)
    
}
function  removeEmployment(){
    if (employmentForm.children.length > 1){  
    employmentForm.removeChild(employmentForm.firstElementChild);
    }
}
// function updating work experience data from input
function work(event){
    event.preventDefault()
    let myWork =[]
    //removing class hidden from the green tick
    //if the section is updated
    document.getElementById('greenWork').classList.remove('hidden')
    //cannot access input by ids as there will be multiply inputs
    //I need to use query selector
    let myCollapse = document.getElementById('collapseTwo')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
    bsCollapse.hide()
    let works = document.querySelectorAll('.work')
        works.forEach(element => {
           let dateStart= element.querySelector('.startdate').value        
           let dateEnd= (element.querySelector('.enddate').value !=="") ? element.querySelector('.enddate').value :"current"
            let title = element.querySelector('.title').value
           let company = element.querySelector('.company').value
           let description =element.querySelector('.description').value
            let newWork= new personalWork(dateStart, dateEnd, title, company, description)
            myWork.push(newWork)     
        })
        let strWork =JSON.stringify(myWork)     
        localStorage.setItem("workData", strWork)
    }
function createWork(){
        let workExp =document.getElementById('workCV')
        let unStrWork =JSON.parse(localStorage.workData)
        unStrWork.forEach(element => {
            if (element.description !==""){
                let workEle=`
                        <h6>${element.company}/<span>${element.title}</span>, <span>${element.dateStart} </span><span>to</span><span> ${element.dateEnd}</span></h6>
                        <p>${element.description}</p>`
                        workExp.insertAdjacentHTML("beforeend",workEle)            
            }    
            else {
                let workEle=`
                        <h6>${element.company}/<span>${element.title}</span>, <span>${element.dateStart} </span><span>to</span><span> ${element.dateEnd}</span></h6>
                        `
                        workExp.insertAdjacentHTML("beforeend",workEle)
                    }
            
            })} 
// function respsponsible for creating input education fields in the form       
const educationForm = document.getElementById("education")
function myEducation() { 
    let element  = 
        `<div class="row education" ondblclick="removeRestricted(this)">
                <div class="form-floating col-6 mb-3 pl-1">
                    <input type="month" class="form-control startdate" required/>
                    <label>Start Date</label>
                </div>
                <div class="form-floating col-6">
                    <input type="month" class="form-control enddate"/>
                    <label>End Date, CURRENT if not picked</label>
                </div>
                <div class="form-floating col-12 col-md-6 mb-3 pl-1">
                    <input type="text" class="form-control title" placeholder="" required/>
                    <label>Course Title</label>
                </div>
                <div class="form-floating col-12 col-md-6 mb-3 pl-1">
                    <input type="text" class="form-control school" placeholder="" required/>
                    <label>University/School Name</label>  
                </div>
                <div class="col-12 mb-3 pl-1 form-floating">
                <textarea type="text" class="form-control description" placeholder=""></textarea>
                <label>Description</label>
                </div>
        </div>`;
        educationForm.insertAdjacentHTML("afterbegin",element)
    
}
// removing additional education fields
function removeEducation(){
    //leave at least one fieldset
    if (educationForm.children.length > 1){
    educationForm.removeChild(educationForm.firstElementChild)
    }
}
// function updating/catching the input data from
// education section and storing in
function education(event){
    let myEdu=[]
    event.preventDefault()
    //removing class hidden from the green tick
    //if the section is updated
    document.getElementById('greenEdu').classList.remove('hidden')
    //cannot access input by ids as there will be multiply inputs
    //I need to use query selector

    //closing accordion item on succesful udating
    
    let myCollapse = document.getElementById('collapseThree')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
    bsCollapse.hide()

    let education = document.querySelectorAll('.education')
        education.forEach(element => {
           let dateStart= element.querySelector('.startdate').value
           //if user doesnt pick the end date the value "current" is passed
           let dateEnd= (element.querySelector('.enddate').value !=="") ? element.querySelector('.enddate').value :"current"
           let title = element.querySelector('.title').value
           let school = element.querySelector('.school').value
            let description = element.querySelector('.description').value
            let newEdu= new personalEdu(dateStart, dateEnd, title, school, description)
            myEdu.push(newEdu)
        });
        let strEdu =JSON.stringify(myEdu)     
        localStorage.setItem("eduData", strEdu)

}
// function displaying eduaction data on the cv page
function createEdu(){
    let eduExp =document.getElementById('eduCV')
    let unStrEdu =JSON.parse(localStorage.eduData)
    unStrEdu.forEach(element => {
        if (element.description !==""){
            let eduEle=`
                    <h6>${element.school}/<span>${element.title}</span>, <span>${element.dateStart} </span><span>to</span><span> ${element.dateEnd}</span></h6>
                    <p>${element.description}</p>`
                    eduExp.insertAdjacentHTML("beforeend",eduEle)            
        }    
        else {
            let eduEle=`
                    <h6>${element.school}/<span>${element.title}</span>, <span>${element.dateStart} </span><span>to</span><span> ${element.dateEnd}</span></h6>
                    `
                    eduExp.insertAdjacentHTML("beforeend",eduEle)
                }     
        })} 
 // function respsponsible for creating input in projects fields of the form
const projectForm=document.getElementById('projects')
function myProjects(){
    let element=`<div class="row project" ondblclick="remove(this)">
    <div class="col-12 mb-3 pl-1 form-floating">
      <input type="text" class="form-control title" placeholder="" aria-label="project name" required>
        <label>Project Name</label>
      </div>
    
    <div class="col-12 mb-3 pl-1 form-floating">
      <input type="text" class="form-control github" placeholder=""  >
      <label>gitHub</label>
    </div>
    <div class="col-12 mb-3 pl-1 form-floating">
      <textarea type="text" class="form-control description" placeholder=""  id="projectDescription" required></textarea>
      <label>Project description</label>`
    
      projectForm.insertAdjacentHTML("afterbegin",element)
}

// function removing additional projects fields in the form
function  removeProject(){
    projectForm.removeChild(projectForm.firstElementChild);
   
}
// function updating/catching the input data from
// project section and storing in
function project(event){
    event.preventDefault()
    let myProjects=[]
    //cannot access input by ids as there will be multiply inputs
    //I need to use query selector
    //closing accordion item on succesful udating
    let myCollapse = document.getElementById('collapseFour')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
    bsCollapse.hide()
    let project = document.querySelectorAll('.project')
        project.forEach(element => {
           let github= element.querySelector('.github').value
           let title = element.querySelector('.title').value
            let description = element.querySelector('.description').value
            let newProject= new personalProject(title, github, description)
            myProjects.push(newProject)    
        });
        let strProject =JSON.stringify(myProjects)     
        localStorage.setItem("projectData", strProject)
    }
// function displaying project data on the cv page
function createProject(){
        let project =document.getElementById('projectCV')
        let unStrProject =JSON.parse(localStorage.projectData)
        //check if user provided input if so the hidden class
        //has to be removed
        if (unStrProject[0].title !==''){
            project.classList.remove('hidden')
            unStrProject.forEach(element => {
            if (element.github !==""){
                let proEle=`
                        <h6>${element.title}, <span><span><i class="fa-brands fa-github"></i> </span>
                        ${element.github} </span></span></h6>
            
                        <p>${element.description}</p>`
                        project.insertAdjacentHTML("beforeend",proEle)            
            }    
            else {
                let proEle=`
                <h6>${element.title}</h6>
                <p>${element.description}</p>`
                project.insertAdjacentHTML("beforeend",proEle)
                    }     
            })}  
        }
// Section bit more complex as user can make addition to an addition and remove it
// can be use for inputing and storing list of hobbies, skills, movies etc...
const additionalForm=document.getElementById('additional')
// function creating additional fields in the additional section
function myAdditional(){
    let element=`<div class="row additional">
    <div class="col-12 mb-3 pl-1 form-floating">
      <input type="text" class="form-control title" placeholder="" aria-label="project name" class="projectName" required>
      <label>Title</label>
    </div>
    <div class="col-12 mb-3 pl-1 form-floating">
        <input type="text" class="form-control description mb-3" required/>
        <label>List element</label> 
        <button class="btn btn-outline-primary" onclick="addBullet(event, this)">Add list element</button>   
    </div>
    </div>`
      additionalForm.insertAdjacentHTML("afterbegin",element)
}
function  removeAdditional(){
    additionalForm.removeChild(additionalForm.firstElementChild);  
}
// function creating additional input fields in the additional input fields
// can be reused
function addBullet(event, element) {
    event.preventDefault()
    //let description=document.querySelector('.description')
    //console.log(description)
    let bullet=`<div class="form-floating col-12 mt-3 pl-1" ondblclick="remove(this)">
    <input type="text" class="form-control description" required/>
    <label>List item (Double click to remove)</label>
</div>`
    element.insertAdjacentHTML("beforebegin",bullet)

}
//function removing html element on event in this case additional input fields to additional input
// can be reused
function remove(el) {  
    let element = el;
    element.remove();
  }
//function finally catching the input
function additional(event){
        event.preventDefault()
        let myList = [];
        //cannot access input by ids as there will be multiply inputs
        //I need to use query selector
        //closing accordion item on succesful udating
        let myCollapse = document.getElementById('collapseFive')
        let bsCollapse = new bootstrap.Collapse(myCollapse, {
    toggle: false
    })
    bsCollapse.hide()
        let project = document.querySelectorAll('.additional')
            project.forEach(element => {
                let description=[]
               let title = element.querySelector('.title').value
                let descriptionNode = element.querySelectorAll('.description')
                descriptionNode.forEach(element =>{
                    description.push(element.value)
                })
                let newAdditional= new personalCustom(title,description)
                myList.push(newAdditional)
                
            }); 
        let strList =JSON.stringify(myList)     
        localStorage.setItem("listData", strList)
    }
// function displaying lists in the left side bar
function createAdditional(){
    let additional =document.getElementById('additional')
    let unStrList =JSON.parse(localStorage.listData)
    unStrList.forEach(element => {
        console.log(element.description)
        let newList = document.createElement("ul")
        element.description.forEach(item => {
                console.log(item)
            let listElement = document.createElement("li") 
            listElement.innerText=item
            newList.appendChild(listElement)  
    })
        // each list with a h6 title to be wrapped in seperate div
        // need it for flexbox
        let newDiv = document.createElement("div")
        additional.appendChild( newDiv)
        newDiv.appendChild(newList)
        console.log(newList)
        let listname=
            `<h6>${element.title}</h6>`
        newList.insertAdjacentHTML("beforeBegin",listname)
                          
        })  

}

// functions responsible for handling the user image
function myImage() {
    let photo = document.getElementById('image').files[0]
    let reader = new FileReader()
    reader.addEventListener("load", () => {
        console.log(reader.result)
        localStorage.setItem("cvPhoto",reader.result)
    })
    reader.readAsDataURL(photo)
    console.log(photo)
    let dataURL = localStorage.getItem("cvPhoto")
    document.getElementById("view").setAttribute("src",dataURL)
}
function image(){
    
    let dataURL = localStorage.getItem("cvPhoto")
   document.getElementById("view").setAttribute("src",dataURL)
}
function imageCV(){  
    let dataURL = localStorage.getItem("cvPhoto")
    document.getElementById("photoCV").setAttribute("src",dataURL)
}
function removeImage(){
    localStorage.removeItem("cvPhoto")
    document.getElementById("view").setAttribute("src",null)
    document.getElementById("image").value=""
}

// function clearing user input from local storage 
function removeLocal(){

    if (localStorage.getItem("listData")){
        localStorage.removeItem("listData")
    }
    if (localStorage.getItem("projectCV")){
        localStorage.removeItem("projectCV")
    }
    if (localStorage.getItem("eduData")){
        localStorage.removeItem("eduData")
    }
    if (localStorage.getItem("workData")){
        localStorage.removeItem("workData")
    }
    if (localStorage.getItem("workData")){
        localStorage.removeItem("workData")
    }
    if (localStorage.getItem("cvData")){
        localStorage.removeItem("cvData")
    }
    if (localStorage.getItem("cvPhoto")){
        localStorage.removeItem("cvPhoto")
    }
    
}
//the work and education section should start with at least one filedset
//myFunction()
//myEducation()
// removing only if more than one left after removing
function removeRestricted(el) {  
    let element = el;
    console.log(element.nextElementSibling)
    console.log(element.previousElementSibling)
    if(element.nextElementSibling !==null || element.previousElementSibling !==null ){
        element.remove();
  
    }
}