//setting and initialising the animate on scroll library
AOS.init({
    offset: 100,
    delay: 500, 
    duration: 800, 
    easing: 'ease-in-out', 
    once: false, 
    mirror: false, 
  });


// creating a typing animation effect on intro_name
//declaring variables
let textContainer = document.getElementById('intro_name');
let texts = "OVERWATCH CODER";
let i = 0;

//function to create the animation effect
function typingName() {
    if(i == texts.length){
        i = 1;
        textContainer.innerHTML = texts.charAt(i-1);
    }else{
        textContainer.innerHTML += texts.charAt(i);
        i++;
    }
}

//calling the function and setting the time interval
typingName();
setInterval(typingName, 300);

//pushing contents under navbar down when it has a class of 'show'
let navButton = document.getElementById('nav-button');
let contentToPush = document.getElementById('intro_section');
navButton.addEventListener('click', pushContentDown);
function pushContentDown() {
    if(navButton.classList.contains('collapsed')){
        contentToPush.style.transition = 'margin-top 1s ease-in-out';
        contentToPush.style.marginTop = '120px';
    }else{
        contentToPush.style.transition = 'margin-top 1s ease-in-out';
        contentToPush.style.marginTop = '330px';
    }
}

//displaying projects based on what a user clicks
let allProjects = document.getElementById('all-projects');
let webProjects = document.getElementById('web-projects');
let designProjects = document.getElementById('design-projects');
let portfolio = document.querySelectorAll('.stack');
let projects = Array.from(portfolio);

//general function to display the projects
function seeAnyOfThem(i){
    let param = ['web', 'design', 'all'];
    projects.forEach(project =>{
        if(project.classList.contains(param[i])){
            project.style.display = 'block';
        }else{
            project.style.display = 'none';
        }
    })
}

//function for underlining selected project
function underlineSelected(param1, param2, param3){
    param1.classList.add('active');
    param2.classList.remove('active');
    param3.classList.remove('active');
}

//adding event listeners
allProjects.addEventListener('click', showAll);
webProjects.addEventListener('click', showOnlyWeb);
designProjects.addEventListener('click', showOnlyDesign);

//calling the functions to display each 
//link that has been clicked
function showAll() {
    underlineSelected(allProjects, webProjects, designProjects);
    seeAnyOfThem(2);
}

function showOnlyWeb() {   
    underlineSelected(webProjects, designProjects, allProjects);
    seeAnyOfThem(0);
}

function showOnlyDesign() {   
    underlineSelected(designProjects, allProjects, webProjects);
    seeAnyOfThem(1);
}

//underline nav-link when a user clicks on it
let home = document.getElementById('homeLink');
let about = document.getElementById('aboutLink');
let services = document.getElementById('servicesLink');
let portfolioLink = document.getElementById('portfolioLink');
let contactUs = document.getElementById('contactUsLink');

//adding event listeners
home.addEventListener('click', changeHome);
about.addEventListener('click', changeAbout);
services.addEventListener('click', changeServices);
portfolioLink.addEventListener('click', changePortfolio);
contactUs.addEventListener('click', changeContactUs);

//function for adding active class to clicked link
function changeNavLink(param1, param2, param3, param4, param5){
    param1.classList.add('active');
    param2.classList.remove('active');
    param3.classList.remove('active');
    param4.classList.remove('active');
    param5.classList.remove('active');
 }


//calling the functions to add class of active to it
function changeHome() {
    changeNavLink(home, about, services, portfolioLink, contactUs);
}

function changeAbout() {
    changeNavLink(about, services, portfolioLink, contactUs, home);
}

function changeServices() {
    changeNavLink(services, portfolioLink, contactUs, home, about);
}

function changePortfolio() {
    changeNavLink(portfolioLink, contactUs, home, about, services);
}

function changeContactUs() {
    changeNavLink(contactUs, home, about, services, portfolioLink);
}

window.addEventListener('scroll', checkHeight);
function checkHeight() {
    let height = scrollY;
    if(height < 250){
        changeNavLink(home, about, services, portfolioLink, contactUs);
    }else if(height >= 250 && height < 600){
        changeNavLink(about, services, portfolioLink, contactUs, home);
    }else if(height >= 600 && height < 1200){
        changeNavLink(services, portfolioLink, contactUs, home, about);
    }else if(height >=1200 && height < 3000){
        changeNavLink(portfolioLink, contactUs, home, about, services);
    }else{
        changeNavLink(contactUs, home, about, services, portfolioLink);
    }
}


//setting counter for progress section
    const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 100);
        }else{
          counter.innerText = value;
        }
   }
   
   animate();
});

//sending / submitting form
let form = document.forms['form'];
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userSubject = document.getElementById('subject');
let userMessage = document.getElementById('message');

    form.addEventListener('submit', sendForm);
    function sendForm(event){
        event.preventDefault();

        if(userName.value.trim() != "" && userEmail.value.trim() != "" && userMessage.value.trim() != "" && userSubject.value.trim() != "" ){
           Email.send({
           SecureToken: '0864ce99-04c4-41d4-bef3-b1d9695f183d',
           To : 'qlik.studios@gmail.com',
           From : "qlik.studios@gmail.com",
           Subject : "New Submission for Overwatch Coder!",
           Body : `<p><span style="font-size: 14pt;">Hello Overwatch,</span></p>
           <p><span style="font-size: 14pt;">You have received a new email.</span></p>
           <p><span style="font-size: 14pt;">See the details below...</span></p>
           <p>&nbsp;</p>
           <p style="text-align: center;"><span style="text-decoration: underline; font-size: 14pt;">Form Details</span></p>
           <table style="border-collapse: collapse; width: 95%; background-color: #34495e; border-color: #f1c40f; border-style: solid; margin-left: auto; margin-right: auto;" border="2" cellspacing="5" cellpadding="5">
           <tbody>
           <tr>
           <td style="width: 49.3279%; text-align: center;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">Name</span></td>
           <td style="width: 49.3279%; text-align: center;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">Value</span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="font-size: 14pt; color: #ffffff;">Name</span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userName.value}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">Email</span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userEmail.value}</span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="font-size: 14pt; color: #ffffff;">Message</span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userMessage.value}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt;">Subject<br /></span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userSubject.value}<br /></span></td>
           </tr>
           </tbody>
           </table>
           <p><span style="font-size: 14pt;">Best wishes,</span></p>
           <p><span style="font-size: 14pt;">Qlik Studio team</span></p>`
        }).then( ()=> {
            let success = document.getElementById('success-message');
            setTimeout(() => {
                success.classList.add('d-block');
            }, 1000);
            
            setTimeout(() => {
                success.classList.remove('d-block');
                location.href = 'index.html';
            }, 2000);
        })
    }
}
