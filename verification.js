// Exemple simple de vérification (JS)
function checkAnswer1() {
    const userCode = document.getElementById('userAnswer1').value;
    try {
        eval(userCode); // attention, uniquement pour tests simples JS
        if (typeof add === "function" && add(2,3) === 5) {
            document.getElementById('feedback1').textContent = "✅ Correct !";
            document.getElementById('feedback1').style.color = "green";
        } else {
            document.getElementById('feedback1').textContent = "❌ Incorrect, vérifie ta fonction.";
            document.getElementById('feedback1').style.color = "red";
        }
    } catch(e) {
        document.getElementById('feedback1').textContent = "❌ Erreur dans ton code : " + e.message;
        document.getElementById('feedback1').style.color = "red";
    }
}

function checkAnswer2() {
    const userCode = document.getElementById('userAnswer2').value;
    try {
        eval(userCode);
        if (typeof greet === "function" && greet("Alice") === "Bonjour, Alice!") {
            document.getElementById('feedback2').textContent = "✅ Correct !";
            document.getElementById('feedback2').style.color = "green";
        } else {
            document.getElementById('feedback2').textContent = "❌ Incorrect, vérifie ta fonction.";
            document.getElementById('feedback2').style.color = "red";
        }
    } catch(e) {
        document.getElementById('feedback2').textContent = "❌ Erreur dans ton code : " + e.message;
        document.getElementById('feedback2').style.color = "red";
    }
}
// verification.js (ou scroll.js)
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
function checkAnswer3() {
    const userCode = document.getElementById('userAnswer3').value;
    try {
        eval(userCode);
        if(typeof multiply === "function" && multiply(3,4) === 12){
            document.getElementById('feedback3').textContent = "✅ Correct !";
            document.getElementById('feedback3').style.color = "green";
        } else {
            document.getElementById('feedback3').textContent = "❌ Incorrect, vérifie ta fonction.";
            document.getElementById('feedback3').style.color = "red";
        }
    } catch(e){
        document.getElementById('feedback3').textContent = "❌ Erreur : " + e.message;
        document.getElementById('feedback3').style.color = "red";
    }
}

function checkAnswer4() {
    const userCode = document.getElementById('userAnswer4').value;
    try {
        eval(userCode);
        if(typeof isEven === "function" && isEven(4) === true && isEven(3) === false){
            document.getElementById('feedback4').textContent = "✅ Correct !";
            document.getElementById('feedback4').style.color = "green";
        } else {
            document.getElementById('feedback4').textContent = "❌ Incorrect, vérifie ta fonction.";
            document.getElementById('feedback4').style.color = "red";
        }
    } catch(e){
        document.getElementById('feedback4').textContent = "❌ Erreur : " + e.message;
        document.getElementById('feedback4').style.color = "red";
    }
}

// Même principe pour les exercices 5, 6 et 7 :
function checkAnswer5(){ /* vérifier countVowels */ }
function checkAnswer6(){ /* vérifier reverseWord */ }
function checkAnswer7(){ /* vérifier maxArray */ }
