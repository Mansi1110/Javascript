var objUser = [
    {
        useremail: "vatsal@gmail.com",
        userpassword: "12345"
    },
    {
        useremail: "vg@gmail.com",
        userpassword: "mansi12"
    }
]

/*function store(){
    var firstName = document.getElementById("inputFirstname").Value
    var lasttName = document.getElementById("inputLastname").Value
    var email = document.getElementById("inputEmail").Value
    var phoneNumber = document.getElementById("inputNumber").Value
    var password = document.getElementById("inputPassword").Value
    var newUser = {
        fname: firstName,
        lname: lasttName,
        emaill: email,
        number: phoneNumber,
        pass: password
    }

    for(i=0; i< objUser.length; i++){
        if(email == objUser[i].useremail){
            alert("useris already exists")
            return
        }
        else if(password.length < 7){
            alert("that pass is too short")
            return
        }
    }
    objUser.push(newUser)
    console.log(objuser)

}*/

function check(){
     var useremail = document.getElementById("exampleInputEmail").Value
     var userpassword = document.getElementById("exampleInputPassword").Value

     for(i=0;i< objUser.length;i++){
         if(useremail == objUser[i].useremail && userpassword == objUser[i].userpassword){
             console.log(useremail + "is logged in!!")
             return
         }
        }
     console.log("incorrect useremail")
} 
