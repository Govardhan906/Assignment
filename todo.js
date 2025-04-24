// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to create a new task
function createTask(taskText) {
    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    // Add event listener to delete button
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    // Append elements to list item
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    return li;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText !== '') {
        // Create and append new task
        const newTask = createTask(taskText);
        taskList.appendChild(newTask);

        // Clear input field
        taskInput.value = '';
        
        // Focus back on input field
        taskInput.focus();
    }
}

// Event listeners
addTaskButton.addEventListener('click', addTask);

// Add task when Enter key is pressed
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}); 