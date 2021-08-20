document.getElementById("notify").addEventListener("click", validateEmail);

    function validateEmail() {
      let email = document.querySelector("input[type='email']");
      let label = document.getElementById('lgLabel');
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if((email.value != "" ) && !(email.value.match(validRegex))){
        document.querySelector('label[for='+`${email.name}`+']').innerHTML ="Please provide a valid email";
        document.querySelector('label[for='+`${email.name}`+']').classList.add('mb-6');
        label.innerHTML ="Please provide a valid email";
        label.classList.add('-mt-2');
        email.classList.remove('border-blue-pale');
        email.classList.add('border-red');
      } else if(email.value === ""){
        document.querySelector('label[for='+`${email.name}`+']').innerHTML ="No Email entered";
        document.querySelector('label[for='+`${email.name}`+']').classList.add('mb-6');
        label.innerHTML ="No Email entered";
        label.classList.add('-mt-2');
        email.classList.remove('border-blue-pale');
        email.classList.add('border-red');
      }
    }