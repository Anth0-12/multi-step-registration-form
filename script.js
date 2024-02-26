// Boutons "Continue" et "Confirm"
let continueStep2 = document.querySelector(".continueStep2");
let continueStep3 = document.querySelector(".continueStep3");
let confirm = document.querySelector(".confirm");

// Étapes
let etape1 = document.querySelector("#etape1");
let etape2 = document.querySelector("#etape2");
let etape3 = document.querySelector("#etape3");

// Champs nom et email
let inputName = document.querySelector("#inputName");
let mail = document.querySelector("#mail");

// Regex pour valider une adresse email
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

// Selectionne les checkbox
let check_1 = document.querySelector("#check_1");
let check_2 = document.querySelector("#check_2");
let check_3 = document.querySelector("#check_3");

// Affiche les valeurs des champs nom et email dans l'étape 3
let inputNameValue = document.querySelector(".inputNameValue");
let mailValue = document.querySelector(".mailValue");

// Affiche le compteur d'étape
let stepCount = document.querySelector("#stepCount");

// Points d'étape
let point1 = document.querySelector(".point1");
let point2 = document.querySelector(".point2");
let point3 = document.querySelector(".point3");



// Fonction pour incrémenter le compteur d'étape
function incrementStep() {
    let currentStep = parseInt(stepCount.textContent);
    stepCount.textContent = currentStep + 1;
}
    
// Ecouteurs d'événements pour les boutons "Continue"
// Quand l'utilisateur clique sur "Continue" dans l'étape 1, affiche l'étape 2 et incrémente le compteur
continueStep2.addEventListener("click", () => {
    if (inputName.value !== "" && mail.value !== "" && emailRegex.test(mail.value)) {
        etape1.style.display = "none";
        etape2.style.display = "flex";
        incrementStep();        

        point1.classList.add("valid");
        point2.classList.add("active");
    }
    else if (inputName.value !== "" && mail.value !== "" && !emailRegex.test(mail.value)) {
        alert("entrez une adresse email valide");
    }
    else {
        alert("veuillez remplir tous les champs");
    }
    
});

// Quand l'utilisateur clique sur "Continue" dans l'étape 2, affiche l'étape 3 et incrémente le compteur
continueStep3.addEventListener("click", () => {
    if (check_1.checked || check_2.checked || check_3.checked) {
        etape2.style.display = "none";
        etape3.style.display = "flex";
        incrementStep();  

        point2.classList.add("valid");
        point3.classList.add("active");

        inputNameValue.innerHTML = inputName.value;
        mailValue.innerHTML = mail.value;

        if (check_1.checked) {
            document.querySelector("ul").innerHTML += "<li>Software Development</li>"
    }
        if (check_2.checked) {
            document.querySelector("ul").innerHTML += "<li>User Experience</li>"
    }
        if (check_3.checked) {
            document.querySelector("ul").innerHTML += "<li>Graphic Design</li>"
    }
}
});

// Quand l'utilisateur clique sur "Confirm" dans l'étape 3, affiche une alerte
confirm.addEventListener("click", () => {
    alert("Your registration has been confirmed");
});