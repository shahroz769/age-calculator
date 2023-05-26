let form = document.getElementById("form");
form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        calculateAge();
    }
});

function calculateAge() {
    let dayValue = document.getElementById("dayValue").value;
    let monthValue = document.getElementById("monthValue").value;
    let yearValue = document.getElementById("yearValue").value;
    console.log(dayValue, monthValue, yearValue);
}
