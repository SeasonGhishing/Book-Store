// for contact us page for validation
function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name == "" || email == "") {
        alert("please fill up the form")
    } else {
        alert("Thankyou for contacting us.")
        open("home.html");
    }
}
// for shop page to give info while clicking add to cart button
function add() {
    alert("addaed to cart")
}