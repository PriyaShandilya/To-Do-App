let inpts = document.querySelectorAll(".checkbox");
let para = document.querySelectorAll("p");
// Assuming you have an "Edit" button for each item with the class .edit-btn
let editBtns = document.querySelectorAll(".edit-btn"); 

// Ensure all lists are the same length
for (let i = 0; i < inpts.length; i++) {
    let currentInpt = inpts[i];
    let currentPara = para[i];
    let currentEditBtn = editBtns[i]; // Get the corresponding edit button

    // --- Checkbox Click Handler ---
    currentInpt.addEventListener("click", () => {
        // Toggle the visual disabled class
        currentPara.classList.toggle("disabled-text", currentInpt.checked);

        // TRUE DISABLING: Set contentEditable to false when checked
        currentPara.contentEditable = currentInpt.checked ? "false" : "true";
        
        // VISUALLY DISABLE THE BUTTON (optional but recommended)
        currentEditBtn.disabled = currentInpt.checked;
        currentEditBtn.classList.toggle("disabled", currentInpt.checked);
    });

    // --- Edit Button Click Handler ---
    currentEditBtn.addEventListener("click", (event) => {
        // Stop the default action if the item is checked
        if (currentInpt.checked) {
            // Prevent any default button action
            event.preventDefault(); 
            // Optionally, inform the user
            console.log("Cannot edit a completed item.");
        } else {
            // If the item is not checked, proceed with your original edit logic
            // (e.g., currentPara.contentEditable = "true"; currentPara.focus();)
            console.log("Item is now editable.");
            currentPara.contentEditable = "true";
            currentPara.focus();
        }
    });
}