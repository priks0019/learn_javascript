//local storage for the form

// const inputName = document.getElementById("form");
// console.log(inputName);

// this function will use to store data in the local storage one by one element

// function save() {
//   if (inputName.value != "") {
//     localStorage.setItem("mail", inputName.value);
//   } else if ((inputName.value = "")) {
//     alert("Please enter the data");
//   }
// }

// the formdata() function will be used to store all data of the form in once to localstorage

function save() {
  const inputName = document.getElementById("form");
  const formdata = new FormData(inputName);
  localStorage.setItem("email", formdata.get("mail"));
  localStorage.setItem("password", formdata.get("pwd"));
}

function store() {
  const inputName = document.getElementById("form");
  const formdata = new FormData(inputName);
  console.log(formdata);
  localStorage.setItem("name", formdata.get("fn"));
  localStorage.setItem("number", formdata.get("num"));
  localStorage.setItem("email", formdata.get("mail"));
  localStorage.setItem("pwd", formdata.get("pwd"));
}
setInterval(date, 1000);
function date() {
  let timeIs = (document.getElementById("time").innerHTML = Date());
}

function validateForm() {
  let mail = document.myform.mail.value;
  let password = document.myform.pwd.value;

  if (mail == "" || (password == null && password.length < 6)) {
    alert("please fill the fields");
    return false;
  }
}
