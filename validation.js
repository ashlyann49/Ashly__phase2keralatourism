function validation(){
    var formGroupExampleInput=document.getElementById('formGroupExampleInput').value; 
    var exampleInputPassword1=document.getElementById('exampleInputPassword1').value;
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(formGroupExampleInput)==true){
        document.getElementById('emailids').innerHTML="***Valid Email format***";
     
    }
    else{
      document.getElementById('emailids').innerHTML="***Invalid Email format***";
      return false;
    }
    
      if(exampleInputPassword1.length<8)
      {
        document.getElementById('pass').innerHTML="***Password should be 8 digit***";
        return false;
      }
    
      
}