// ================================
// HOME PAGE - Submit Now button
// ================================

const homeSubmitButton = document.querySelector(".secondary-btn");

if (homeSubmitButton) {

    homeSubmitButton.addEventListener("click", function () {

        console.log("Submit Now button was clicked!");

    });

}



const submissionForm = document.querySelector("#submissionForm");
const successMessage = document.querySelector("#successMessage");

if (submissionForm && successMessage) {

    submissionForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const team = document.querySelector("#team").value.trim();
        const project = document.querySelector("#project").value.trim();
        const description = document.querySelector("#description").value.trim();

        if (
            name === "" ||
            email === "" ||
            team === "" ||
            project === "" ||
            description === ""
        ) {
            successMessage.textContent = "Please fill in all the fields.";
            successMessage.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            successMessage.textContent = "Please enter a valid email address.";
            successMessage.style.color = "red";
            return;
        }

        successMessage.textContent = "Project submitted successfully!";
        successMessage.style.color = "green";

        const submissionData = {
         name: name,
         email: email,
        team: team,
         project: project,
         description: description
};

        localStorage.setItem("hackathonSubmission", JSON.stringify(submissionData));
        console.log("Project submitted successfully!");
        console.log("Submission data saved:", submissionData);

        submissionForm.reset();
    });
}