document.addEventListener("DOMContentLoaded", function () {

    const birthdayElement = document.getElementById("bday-date");
    const birthday = new Date(birthdayElement.textContent.trim());
    const ageContainer = document.getElementById("age-container");
    const ageElement = document.getElementById("bday-age");

    // Function to calculate and display age
    function calculateAge(birthday) {
        const now = new Date();
        const ageInMilliseconds = now - birthday;
        const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
        const ageInYears = Math.floor(ageInDays / 365.25);
        const ageInMonths = Math.floor((ageInDays % 365.25) / 30.44);
        const remainingDays = Math.floor((ageInDays % 365.25) % 30.44);
  
        ageElement.textContent = `${ageInYears} years old`;
  
        ageContainer.innerHTML = `
        <div>
          <div>${ageInYears}</div>
          <div>Years</div>
        </div>
        <div>
          <div>${ageInMonths}</div>
          <div>Months</div>
        </div>
        <div>
          <div>${remainingDays}</div>
          <div>Days</div>
        </div>
      `;
    }
  
    // Update age every second
    setInterval(() => calculateAge(birthday), 1000);

});