function valData ()
{
  var ptrn = /^([^0-9\w]*)$/;   

  if(ptrn.test(document.myform.u_field.value))
  {
    document.getElementById("u_small").textContent = "Username is Valid";
    document.getElementById("u_small").style.color = 'green';
  }
  else 
  {
    document.getElementById("u_small").textContent = "Username is Invalid";
    document.getElementById("u_small").style.color = 'red';
  }
}
document.myform.u_field.addEventListener("keyup" , valData());
