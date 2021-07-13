// UI Variables
const emailInput = document.getElementById('email-address')
const submitButton = document.getElementById('submit-button')

// Event Listener for Form Submit Button - saves the data to LS
submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    const email = emailInput.value
    if (email) {
        console.log(email)
        localStorage.setItem('email', email)
    }
});