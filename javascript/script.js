
load();

var alert = document.querySelector('.alert');
var close = document.querySelector('.close');

close.addEventListener("click", function () {
  alert.style.display = "none";
});

//-------------------------------------------------------------------------
const notiBell = document.querySelector(".noti-bell");
const notiContent = document.querySelector(".noti-content");

notiBell.addEventListener('click', function () {
    notiContent.classList.toggle("show");
});

//-------------------------------------------------------------------------
const userName = ["Demi Nicolas","Ranbir Rav","Mia Alexa","Clinton Kinsley","Kim Nguyen","Rohan Ansari"];
const inputContainer = document.querySelector(".input-container");
const input = document.querySelector("#input-search");

const userList = document.createElement("div");
userList.className = "search-user-list";
for(let i=0; i<userName.length; i+=1) {
  const user = document.createElement("div");
  user.className = "search-user";
  user.textContent = userName[i];
  userList.appendChild(user);
  inputContainer.appendChild(userList);
  userList.style.display = "none";
  user.style.display = "none";
}

inputContainer.addEventListener('input', function() {
  const user = document.querySelectorAll(".search-user");
  const userList = document.querySelector(".search-user-list");
  for(let i=0; i<user.length; i+=1){
    if (input.value === "") {
      userList.style.display = "none";
      user[i].style.display = "none";
    } else if (user[i].textContent.toLowerCase().indexOf(input.value) !=-1) {
      console.log(user[i]);
      userList.style.display = "block";
      user[i].style.display = "block";
      userList.addEventListener('click', function(e) {
        input.value = e.target.textContent;
        userList.style.display = "none";
        user[i].style.display = "none";
      });
    } else {
      userList.style.display = "block";
      user[i].style.display = "none";
    }
  }
});

//-----------------------------------------------------------------------------

const timezone = document.querySelector(".timezone");

function save() {
const profile = document.querySelector("#profile");
const emailNoti = document.querySelector("#email");
  localStorage.setItem('profile',profile.checked);
  localStorage.setItem('email',email.checked);
  localStorage.setItem('timezone',timezone.selectedIndex);
}

function load() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const email = JSON.parse(localStorage.getItem('email'));
  const timezone = localStorage.getItem('timezone');
    document.querySelector("#profile").checked = profile;
    document.querySelector("#email").checked = email;
    document.querySelector(".timezone").selectedIndex = timezone;
}
//--------------------------------------------------------------------------

const settingButtons = document.querySelector(".setting-buttons");

 settingButtons.addEventListener('click',function(e) {
   const settings = document.createElement('div');
   settings.className = "done";
   const settingBox = document.querySelector(".setting-box");
   settingBox.appendChild(settings);
   setTimeout(function(){
      settingBox.removeChild(settings);
    }, 2000);
   if(e.target.textContent == "Save"){
     save();
     settings.textContent = "*settings saved";
  } else if(e.target.textContent == "Cancel"){
     load();
     settings.textContent = "*canceled";
  }

 });
 //---------------------------------------------------------------------

 const sendButton = document.querySelector(".send-button");
const textArea = document.querySelector("#textarea");
sendButton.addEventListener('click',function (e) {
  if(e.target.textContent == "Send") {
    const sent = document.createElement('div');
    sent.className = "done";
    const formBox = document.querySelector(".form-box");
    formBox.appendChild(sent);
    setTimeout(function(){
      formBox.removeChild(sent);
    }, 2000);
    if (userName.indexOf(input.value) !=-1 && textArea.value != "") {
      sent.textContent = "*message sent";
   } else if (userName.indexOf(input.value) ==-1) {
     sent.textContent = "*user does not exist";
   } else if (textArea.value == "") {
     sent.textContent = "*please enter your message before hitting the 'send' button";
   }
  }
});
