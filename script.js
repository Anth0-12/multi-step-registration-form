let continueStep2 = document.querySelector(".continueStep2");
let continueStep3 = document.querySelector(".continueStep3");
let etape1 = document.querySelector("#etape1");
let etape2 = document.querySelector("#etape2");
let etape3 = document.querySelector("#etape3");

let inputName = document.querySelector("#inputName");
let mail = document.querySelector("#mail");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let check_1 = document.querySelector("#check_1");
let check_2 = document.querySelector("#check_2");
let check_3 = document.querySelector("#check_3");

let inputNameValue = document.querySelector(".inputNameValue");
let mailValue = document.querySelector(".mailValue");

let stepCount = document.querySelector("#stepCount");

function incrementStep() {
    let currentStep = parseInt(stepCount.textContent);
    stepCount.textContent = currentStep + 1;
}
    
continueStep2.addEventListener("click", () => {
    if (inputName.value !== "" && mail.value !== "" && emailRegex.test(mail.value)) {
        etape1.style.display = "none";
        etape2.style.display = "flex";
        incrementStep();        
    }
    else if (inputName.value !== "" && mail.value !== "" && !emailRegex.test(mail.value)) {
        alert("entrez une adresse email valide");
    }
    else {
        alert("veuillez remplir tous les champs");
    }
    
});

continueStep3.addEventListener("click", () => {
    if (check_1.checked || check_2.checked || check_3.checked) {
        etape2.style.display = "none";
        etape3.style.display = "flex";
        incrementStep();  

        inputNameValue.innerHTML = inputName.value;
        mailValue.innerHTML = mail.value;
    }
});