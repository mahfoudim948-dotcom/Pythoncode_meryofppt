// Données sauvegardées
let progress = localStorage.getItem("progress") || 0;
let strengths = JSON.parse(localStorage.getItem("strengths")) || [];
let privacy = localStorage.getItem("privacy") === "true";
let calendarData = JSON.parse(localStorage.getItem("calendar")) || {};

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const strengthList = document.getElementById("strengthList");
const weeklyStats = document.getElementById("weeklyStats");
const privacyToggle = document.getElementById("privacyToggle");


// Initialisation
updateProgress();
updateStrengths();
generateCalendar();
privacyToggle.checked = privacy;


// Progression
function updateProgress() {
    progressFill.style.width = progress + "%";
    progressText.textContent = progress + "%";
}


// Points forts
function updateStrengths() {
    strengthList.innerHTML = "";

    if (strengths.length === 0) {
        strengthList.innerHTML = "<li>Aucun point fort détecté</li>";
    } else {
        strengths.forEach(skill => {
            let li = document.createElement("li");
            li.textContent = skill;
            strengthList.appendChild(li);
        });
    }
}


// Calendrier
function generateCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;

        if (calendarData[i]) {
            day.classList.add("active");
        }

        day.addEventListener("click", () => {
            calendarData[i] = !calendarData[i];
            localStorage.setItem("calendar", JSON.stringify(calendarData));
            generateCalendar();
            calculateWeeklyStats();
        });

        calendar.appendChild(day);
    }
}


// Statistiques hebdomadaires
function calculateWeeklyStats() {
    let activeDays = Object.values(calendarData).filter(Boolean).length;
    weeklyStats.textContent = "Jours actifs ce mois : " + activeDays;
}

calculateWeeklyStats();


// Mode public / privé
privacyToggle.addEventListener("change", () => {
    localStorage.setItem("privacy", privacyToggle.checked);
});