   var inputFirstname = document.getElementById("inputFirstname");
    var inputLastname = document.getElementById("inputLastname");
    var inputEmail = document.getElementById("inputEmail");
    var inputNumber = document.getElementById("inputNumber");
    var inputPassword = document.getElementById("inputPassword");

function store(){
    localStorage.setItem("inputFirstname", inputFirstname.value);
    localStorage.setItem("inputLastname", inputLastname.value);
    localStorage.setItem("inputEmail", inputEmail.value);
    localStorage.setItem("inputNumber", inputNumber.value);
    localStorage.setItem("inputPassword", inputPassword.value);
    
  /* var details = [];
    const addDetail = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        var detail = {
          fname: document.getElementById('inputFirstname').value,
          lname: document.getElementById('inputLastname').value,
            email: document.getElementById('inputEmail').value,
            number: document.getElementById('inputNumber').value,
            password: document.getElementById('inputPassword').value
        }
        details.push(detail);
         // to clear the form for the next entries
        document.forms[0].reset();
    
        //for display purposes only
       // console.warn('added' , {details} );
       // var pre = document.querySelector('#msg pre');
       // pre.textContent = '\n' + JSON.stringify(movies, '\t', 3);
    
        //saving to localStorage
        localStorage.setItem('MyList', JSON.stringify(details) );
    }
    
    document.addEventListener('DOMContentLoaded', ()=>{
       document.getElementById('btn').addEventListener('click', addDetail);
    });*/

  
  }
    


function check()
{
    var storedEmail = localStorage.getItem('inputEmail');
    var storedPw = localStorage.getItem('inputPassword');
   
   var userEmail = document.getElementById('exampleInputEmail');
    var userPw = document.getElementById('exampleInputPassword');
    
    if(userEmail.value !=storedEmail || userPw.value != storedPw) {
        alert("Error")
                  return false;
            }
           
            else{
               alert("login successfully!!")
              
              return false;
            }
            //  window.location("localstorage.html");
             // setTimeout('check()',1000);
        }
      
       
function validation()
{
    var firstname = document.getElementById('inputFirstname').value;
    var lastname = document.getElementById('inputLastname').value;
    var email = document.getElementById('inputEmail').value;
    var number = document.getElementById('inputNumber').value;
    var password = document.getElementById('inputPassword').value;

     if(firstname == ""){
        document.getElementById('Fname').innerHTML= "*Please fill this field.";
              return false;
    }
      if((firstname.length <=2) || (firstname.length>20)){
        document.getElementById('Fname').innerHTML= "*Must be between 2and 20.";
        return false;
      }
      if(!isNaN(firstname))
      {
        document.getElementById('Fname').innerHTML= "*Only Characters are allowed.";
        return false;
      }


    if(lastname == ""){
        document.getElementById('Lname').innerHTML= "*Please fill this field.";
              return false;
    }
    if((lastname.length <=2) || (lastname.length>20)){
        document.getElementById('Lname').innerHTML= "*Must be between 2and 20.";
        return false;
      }
      if(!isNaN(lastname))
      {
        document.getElementById('Lname').innerHTML= "*Only Characters are allowed.";
        return false;
      }

    if(email == ""){
        document.getElementById('em').innerHTML= "*Please fill this field.";
              return false;
    }
    if(number == ""){
        document.getElementById('num').innerHTML= "*Please fill this field.";
              return false;
    }
    if(isNaN(number)){
        document.getElementById('num').innerHTML= "*Must be digits.";
        return false;
    }
    if((number.length!=10)){
        document.getElementById('num').innerHTML= "*Must be 10 digits.";
              return false;
    }
    if(password == ""){
        document.getElementById('pass').innerHTML= "*Please fill this field.";
              return false;
    }
    if((password.length <=5) || (password.length>10)){
        document.getElementById('pass').innerHTML= "*Must be between 5 and 10";
        return false;
}

}

