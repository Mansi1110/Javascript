function store(){

let details = [];

const add = (ev)=>{
    ev.preventDefault();
    let detail = {
        id: Date.now(),
        fname: document.getElementById('inputFirstname').Value,
        lname: document.getElementById('inputLastname').Value,
        email: document.getElementById('inputEmail').Value,
         number: document.getElementById('inputNumber').value,
        password: document.getElementById('inputPassword').value
    }
    details.push(detail);
    document.forms[0].reset;
    console.warn('added' , {details} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(details, '\t', 5);
    localStorage.setItem('MyDetails', JSON.stringify(details));
}
//document.addEventListener('DOMContentLoaded', ()=>{
  //  document.getElementById('btn').addEventListener('click',add);
//});

}