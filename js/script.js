// event listener for submit 
// email address must be in correct format 
// cannot submit if input field is empty 

document.addEventListener("DOMContentLoaded", () => { 

    let form = document.querySelector(".form"); 
    let email = document.querySelector(".email");
    // let submit = document.querySelector("button[type='submit']"); do I need this? 
    let error = document.querySelector(".error"); 

    email.addEventListener("input", () => { 
        email.setCustomValidity(""); 
        error.textContent = ""; 
        error.classList.remove("visible"); 
    })

    form.addEventListener("submit", (e) => { 
        e.preventDefault(); 

        console.log('Submit triggered'); 
        console.log('Email value:', email.value); 
        console.log('Error value:', error.textContent); 


        if (email.validity.valueMissing) { 
            email.setCustomValidity("Please provide a valid email"); 
            error.textContent = "Please provide a valid email"; 
            error.classList.add("visible"); 
            email.classList.add("error"); 
        } else if (email.validity.typeMismatch) { 
            email.setCustomValidity("Please provide a valid email"); 
            error.textContent = "Please provide a valid email"; 
            error.classList.add("visible"); 
            email.classList.add("error"); 
        } else { 
            email.setCustomValidity(""); 
            error.classList.remove("visible"); 
            email.value = ""; 
        }
    })
})

