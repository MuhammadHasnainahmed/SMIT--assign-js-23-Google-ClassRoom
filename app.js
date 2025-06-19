let menutexts = document.getElementsByClassName("menutext");
let sidebar = document.getElementsByClassName("sidebar");

function toggleSidebar() {
    for (let i = 0; i < menutexts.length; i++) {

        if ( menutexts[i].style.display === "none") {
            menutexts[i].style.display = "block";
            sidebar[0].style.width = "250px";

        } else {
            menutexts[i].style.display = "none";
            sidebar[0].style.width = "80px";


            
        }
    }
}


let banners = document.getElementsByClassName("banner");

function closeBanner() {
    banners[0].style.display = "none";
}


let popups = document.getElementById("popup");


function openPopup() {
    popups.style.display = "block";



    
}

function closePopup() {
    popups.style.display = "none";
}


let className = document.getElementById("className");
let section = document.getElementById("section");
let subject = document.getElementById("subject");
let teacher = document.getElementById("teacher");
let card = document.getElementById("Card");


let data = JSON.parse(localStorage.getItem("classes")) || [];
// save function
function save() {
let classNamevalue = className.value;
let sectionvalue = section.value;
let subjectvalue = subject.value;
let teachervalue = teacher.value;



if (classNamevalue === "" || sectionvalue === "" || subjectvalue === "" || teachervalue === "") {
    alert("Please fill in all the fields");
    return;
    
}

 let newClass = {
  id: Date.now(),
    classNameobject: classNamevalue,
    sectionobject: sectionvalue,
    subjectobject: subjectvalue,
    teacherobject: teachervalue,
  };

  data.push(newClass);

localStorage.setItem("classes",JSON.stringify(data) );




className.value = "";
section.value = "";
subject.value = "";
teacher.value = "";

popups.style.display = "none";

display()





}


function display() {
      card.innerHTML = "";

   for (let i = 0; i < data.length; i++) {
             card.innerHTML += `


 <div class="class-card">
    <div class="card-header">
      ${data[i].classNameobject} - ${data[i].sectionobject}
      <div class="card-menu">
        <i class="fa-solid fa-ellipsis-vertical" onclick="deleteClass(${[i]})"></i>
      </div>

      
    </div>
    <div class="card-body">
      <div class="class-info">Subject: ${data[i].subjectobject}</div>
      <div class="class-info">Teacher: Mr. ${data[i].teacherobject}</div>
    </div>
  </div>


`
   }
}

display()


// let threedot = document.getElementById("threedot");

// function item() {
  


  
  // if (threedot.style.display === "block") {
  //   threedot.style.display = "none";
    
  // } else {
  //   threedot.style.display = "block";
    
  // }


  // threedot.style.display = "block";
  
// }


function deleteClass(index) {
  data.splice(index, 1);
  localStorage.setItem("classes", JSON.stringify(data));
  display();
}











