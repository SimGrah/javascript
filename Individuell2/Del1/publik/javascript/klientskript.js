

    function mainForm() {
        if (firstNameValidate() == true&& emailValidate() == true) {
           
            document.getElementById("sub").disabled = false;
    
        }
        else 
        document.getElementById("sub").disabled = true;
        
    }
    
    function firstNameValidate() {
        let testName = /^[A-z ]+$/; 
        let firstName = document.getElementById('firstName'); 
    
        if (testName.test(firstName.value)) { 
            firstName.style.background = 'green';
            return true  
        }
        else { 
            firstName.style.background = 'red';
            return false
        }
    }
    
    function emailValidate() {
        let testEmail = /\S+@\S+\.\S+/;
        let email = document.getElementById("emailAdress");
    
        if (testEmail.test(email.value)) {
            email.style.background = 'green';
            return true
        } else {
            email.style.background = 'red';
            return false
    
        }
    }
    
    
    
    
