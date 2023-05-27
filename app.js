let form = document.getElementById("form");
form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission on Enter key press
        validateForm(); // Call the form validation function
    }
});

function validateForm() {
    const day = +document.getElementById("dayValue").value;
    const month = +document.getElementById("monthValue").value;
    const year = +document.getElementById("yearValue").value;

    // Validate empty fields
    if (!day || !month || !year) {
        document.getElementById("emptyError").textContent =
            "Please fill in all the fields.";
        return;
    }

    // Call the calculateAge() function for further processing
    document.getElementById("emptyError").textContent = "";
    calculateAge();
}

function calculateAge() {
    const day = +document.getElementById("dayValue").value;
    const month = +document.getElementById("monthValue").value;
    const year = +document.getElementById("yearValue").value;

    const birthDate = year + "-" + month + "-" + day;
    const birthDateObj = new Date(birthDate);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Validate day
    const maxDay = new Date(year, month, 0).getDate();
    console.log(maxDay);
    if (day > maxDay) {
        document.getElementById("dayError").textContent = "Must be a valid day";
        document.getElementById("dayValue").style.outline = "1px solid #FF5959";
        document.getElementById("dayH3").style.color = "#FF5959";
        document.getElementById("monthValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("monthH3").style.color = "#FF5959";
        document.getElementById("yearValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("yearH3").style.color = "#FF5959";
        return false; // Prevent form submission
    }

    // Validate month
    if (month > 12) {
        document.getElementById("monthError").textContent =
            "Must be a valid month";
        document.getElementById("dayValue").style.outline = "1px solid #FF5959";
        document.getElementById("dayH3").style.color = "#FF5959";
        document.getElementById("monthValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("monthH3").style.color = "#FF5959";
        document.getElementById("yearValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("yearH3").style.color = "#FF5959";
        return false; // Prevent form submission
    }

    // Validate year
    if (year > currentYear) {
        document.getElementById("yearError").textContent =
            "Must be in the past";
        document.getElementById("dayValue").style.outline = "1px solid #FF5959";
        document.getElementById("dayH3").style.color = "#FF5959";
        document.getElementById("monthValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("monthH3").style.color = "#FF5959";
        document.getElementById("yearValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("yearH3").style.color = "#FF5959";
        return false; // Prevent form submission
    }

    // Validate if date is greater than current date
    if (
        (year == currentYear && month == currentMonth && day > currentDay) ||
        (year == currentYear && month > currentMonth)
    ) {
        document.getElementById("yearError").textContent =
            "Must be in the past";
        document.getElementById("dayValue").style.outline = "1px solid #FF5959";
        document.getElementById("dayH3").style.color = "#FF5959";
        document.getElementById("monthValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("monthH3").style.color = "#FF5959";
        document.getElementById("yearValue").style.outline =
            "1px solid #FF5959";
        document.getElementById("yearH3").style.color = "#FF5959";
        return false; // Prevent form submission
    } else {
        document.getElementById("dayH3").style.color = "#716F6F";
        document.getElementById("monthH3").style.color = "#716F6F";
        document.getElementById("yearH3").style.color = "#716F6F";
        document.getElementById("dayValue").style.outline = "1px solid #DCDCDC";
        document.getElementById("monthValue").style.outline =
            "1px solid #DCDCDC";
        document.getElementById("yearValue").style.outline =
            "1px solid #DCDCDC";
        document.getElementById("dayError").textContent = "";
        document.getElementById("monthError").textContent = "";
        document.getElementById("yearError").textContent = "";
        let yearsDiff = currentYear - year;
        let monthsDiff = currentMonth - month;
        let daysDiff = currentDay - day;
        console.log(currentDay, day);
        // Adjust the differences if the birth date hasn't occurred yet in the current year
        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
            yearsDiff--;
            monthsDiff += 12;
        }
        // Calculate the number of days in the birth month
        const birthMonthDays = new Date(
            birthDateObj.getFullYear(),
            birthDateObj.getMonth() + 1,
            0
        ).getDate();
        // Adjust the month and day differences if the day value is negative
        if (daysDiff < 0) {
            monthsDiff--;
            const lastMonthDays = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            ).getDate();
            daysDiff += lastMonthDays;
        }
        document.getElementById("computedDayValue").textContent = daysDiff;
        document.getElementById("computedMonthValue").textContent = monthsDiff;
        document.getElementById("computedYearValue").textContent = yearsDiff;
    }
}
