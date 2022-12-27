

// function  validate(){
//    // console.log(hello);

// let firstName=document.getElementById("firstName").Value;
// let email=document.getElementById("email").Value;
// let lastName =document.getElementById("lastName").Value;
// let phone =document.getElementById("phone").Value;
// let age =document.getElementById("age").Value;
// // let donate =document.getElementById("donate").Value;
// // let bloodGroup =document.getElementById("bloodGroup").Value;
// // let street=document.getElementById("street").Value;
// // let region =document.getElementById("region").Value;
// // let pincode =document.getElementById("pincode").Value;
// // let city =document.getElementById("city").Value

// if(firstName == "" || lastName == "" ||  email=="" ||  phone=="" || age=="") 
// {

//    alert("missing credentials");
//    document.getElementsByClassName("userName").innerHTML="please enter the credentials";
// }
   


// }


function validation(){

   var userName1=document.getElementById("firstName").value; 
   var userName2=document.getElementById("lastName").value;  
   let email=document.getElementById("email").value; 
   var phone=document.getElementById("phone").value; 
   var age=document.getElementById("age").value; 
   // var userName1=document.getElementById("firstName").value; 



   var user1check=/^[A-Za-z. ]{3,30}/;
   var user2check=/^[A-Za-z. ]{3,30}/;

   let emailcheck=/^[A-Za-z_]{3}@[A-Za-z]{3}[.]{1}[A-Za-z.]{2,6}$/;
   var phonecheck=/^[789][0-9]{9}/;

   if(user1check.test(userName1)){
      document.getElementById(usererror1).innerHTML=" ";

   }else{
      document.getElementById(usererror1).innerHTML="First name is  invalid ";
      return false;
   };

   if(user2check.test(userName2)){
      document.getElementById(usererror2).innerHTML=" ";

   }else{
      document.getElementById(usererror2).innerHTML="Last name is  invalid ";
      return false;
   };

   if(emailcheck.test(email)){
      document.getElementById(emailerror).innerHTML=" ";

   }else{
      document.getElementById(emailerror).innerHTML="Email name is  invalid ";
      return false;
   };

  if(phonecheck.test( phone)){
      document.getElementById(mobileerror).innerHTML=" ";

   }else{
      document.getElementById(mobileerror).innerHTML="Phone number is  invalid ";
      return false;
   };
    
}

console.log(emailcheck);
validation();