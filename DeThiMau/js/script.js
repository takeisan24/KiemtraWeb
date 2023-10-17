// coding implementation
function validateFormEmpty() {
    let empEmail = document.forms["myForm"]["email"].value;
    let empCmt = document.forms["myForm"]["com"].value;
    let empRate = document.forms["myForm"]["rate"].value;

    if (empEmail, empCmt, empRate == "") {
      alert("Input đang bị bỏ trống!");
      return false;
    }else{
        return true;
    }
}
function validateFormSubmit(input){
    let rating = document.getElementById('rate').value;
    if(isNaN(rating)){
        alert("Rating phải là số!");
    }
}
function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        alert("Địa chỉ email hợp lệ!");
        document.myForm.email.focus();
        return true;
        
    }else{
        alert("Địa chỉ email không hợp lệ!");
        document.myForm.email.focus();
        return false;
    }
}
// end coding implementation