function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        
        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(taskItem);
        };
        
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function calculateChange() {
    const purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);
    const amountPaid = parseFloat(document.getElementById("amountPaid").value);
    const changeResult = document.getElementById("changeResult");

    if (isNaN(purchaseAmount) || isNaN(amountPaid)) {
        changeResult.textContent = "Please enter valid amounts.";
    } else if (amountPaid < purchaseAmount) {
        changeResult.textContent = "Insufficient payment.";
    } else {
        const change = amountPaid - purchaseAmount;
        changeResult.textContent = `Change: $ ${change.toFixed(2)}`;
    }
}
