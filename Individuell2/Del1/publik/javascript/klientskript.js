

    function mainForm() {
        if (firstNameValidate() == true && emailValidate() == true && commentvalidate() == true) {
           
            document.getElementById("sub").disabled = false;
    
        }
        else 
        document.getElementById("sub").disabled = true;
        
    }
    
    function firstNameValidate() {
        let testName = /^[A-z ]+$/; 
        let firstName = document.getElementById('firstName'); 
    
        if (testName.test(firstName.value)) { 
            firstName.style.background = 'LightGreen';
            return true  
        }
        else { 
            firstName.style.background = 'LightCoral';
            return false
        }
    }
    
    function emailValidate() {
        let testEmail = /\S+@\S+\.\S+/;
        let email = document.getElementById("emailAdress");
    
        if (testEmail.test(email.value)) {
            email.style.background = 'LightGreen';
            return true
        } else {
            email.style.background = 'LightCoral';
            return false
    
        }
    }

    function commentvalidate() {
        let comment = document.getElementById('comment'); 
    
        if (comment.value == 0) { 
            comment.style.background = 'LightCoral';
            return false  
        }
        else { 
            comment.style.background = 'LightGreen';
            return true
        }
    }
    
   
    
    
    
