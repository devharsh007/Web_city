const FormAddBtn = document.getElementById("website-add-btn");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submit-btn");
const addingForm = document.getElementById("addingForm");
const formPrompt = document.getElementById("form-prompt");


// Adding hidden class while window load
window.addEventListener("load", function () {
    addingForm.classList.toggle("hidden");
})
// toggle the classes
FormAddBtn.addEventListener("click", displayRender);
closeBtn.addEventListener("click", displayRender);
// fucntion to toggle the classes
function displayRender() {
    // Swap the "hidden" class between addingForm and formPrompt
    addingForm.classList.toggle("hidden");
    formPrompt.classList.toggle("hidden");
    console.log("Adding Form is toggled");
}