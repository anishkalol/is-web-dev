// adpated from contact form validation from lab
// contact form validation
function validate() {
    var phone = document.getElementById('phone').value;
    if (phone.length != 10 || isNaN(phone)) { // checks if valid phone no.
        alert("Phone number is invalid; Needs 10 digits.");
        return false;
    }
}