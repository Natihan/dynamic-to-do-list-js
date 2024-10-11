// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add event listener for the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Add event listener for marking the task as completed
        li.onclick = function() {
            li.classList.toggle('completed');
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listeners
    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for the Enter key in the input field
    taskInput.addEventListener('keypress', function(event) {
        // Check if the key pressed is 'Enter'
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
