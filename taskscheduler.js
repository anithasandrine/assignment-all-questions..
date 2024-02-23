// Define an array to hold tasks
let tasks = [];

// Function to add a new task to the scheduler
function addTask(title, description, dueDate) {
    // Create a new task object
    let task = {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false // By default, task is not completed
    };
    // Push the new task to the tasks array
    tasks.push(task);
}

// Function to display tasks sorted by their due dates
function displayTasks() {
    // Sort tasks by due date in ascending order
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    // Display each task
    tasks.forEach(task => {
        console.log(`Title: ${task.title}`);
        console.log(`Description: ${task.description}`);
        console.log(`Due Date: ${task.dueDate}`);
        console.log(`Completed: ${task.completed ? 'Yes' : 'No'}`);
        console.log('-------------------------');
    });
}

// Function to update task details or mark tasks as completed
function updateTask(title, newTitle, newDescription, newDueDate, completed) {
    // Find the task with the specified title
    let task = tasks.find(task => task.title === title);
    // If task is found, update its properties
    if (task) {
        task.title = newTitle || task.title;
        task.description = newDescription || task.description;
        task.dueDate = newDueDate || task.dueDate;
        task.completed = completed !== undefined ? completed : task.completed;
        console.log('Task updated successfully.');
    } else {
        console.log('Task not found.');
    }
}

// Function to remove a task from the scheduler
function removeTask(title) {
    // Find the index of the task with the specified title
    let index = tasks.findIndex(task => task.title === title);
    // If task is found, remove it from the tasks array
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log('Task removed successfully.');
    } else {
        console.log('Task not found.');
    }
}

// Example usage:
addTask('Complete project', 'Finish the project report', '2024-03-15');
addTask('Meeting with our facilitaror', 'Discuss how we study', '2024-03-10');
addTask('Buy food', 'meat, eggs, bread', '2024-03-08');
displayTasks();
updateTask('Buy groceries', 'Buy groceries for dinner', null, null, true);
removeTask('Meeting with facilitator');
displayTasks();