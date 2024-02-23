// Define ToDo List object
const ToDoList = [
    {
        category: 'Study', // Category for studying tasks
        tasks: [] // Array to store tasks for this category
    },
    {
        category: 'Work', // Category for work-related tasks
        tasks: [] // Array to store tasks for this category
    },
    {
        category: 'Home', // Category for home-related tasks
        tasks: [] // Array to store tasks for this category
    }
];

// Function to add a task to the ToDo list with specified category
function addTask(description, category) {
    // Find index of the category in the ToDoList array
    const categoryIndex = ToDoList.findIndex(item => item.category.toLowerCase() === category.toLowerCase());
    // Check if category exists
    if (categoryIndex !== -1) {
        // Add new task to the specified category
        ToDoList[categoryIndex].tasks.push({ description, completed: false });
        // Log task addition confirmation
        console.log(`Task "${description}" added to category "${category}".`);
    } else {
        // Log error if category not found
        console.log(`Category "${category}" not found.`);
    }
}

// Function to display tasks grouped by categories
function displayTasks() {
    // Iterate through each category in the ToDoList
    ToDoList.forEach(category => {
        // Log category name
        console.log(`Category: ${category.category}`);
        // Check if there are tasks in this category
        if (category.tasks.length === 0) {
            // Log message if no tasks in the category
            console.log('No tasks in this category.');
        } else {
            // Iterate through tasks in the category
            category.tasks.forEach((task, index) => {
                // Log task description and completion status
                console.log(`${index + 1}. [${task.completed ? 'completed' : 'notcompleted'}] ${task.description}`);
            });
        }
        // Log separator
        console.log('---');
    });
}

// Function to mark a task as completed
function markTaskAsCompleted(category, taskIndex) {
    // Find index of the category in the ToDoList array
    const categoryIndex = ToDoList.findIndex(item => item.category.toLowerCase() === category.toLowerCase());
    // Check if category exists
    if (categoryIndex !== -1) {
        // Find task by index in the category's tasks array
        const task = ToDoList[categoryIndex].tasks[taskIndex - 1];
        // Check if task exists
        if (task) {
            // Mark task as completed
            task.completed = true;
            // Log completion confirmation
            console.log(`Task "${task.description}" marked as completed.`);
        } else {
            // Log error if task not found
            console.log(`Task at index ${taskIndex} not found in category "${category}".`);
        }
    } else {
        // Log error if category not found
        console.log(`Category "${category}" not found.`);
    }
}

// Function to remove a task from the ToDo list
function removeTask(category, taskIndex) {
    // Find index of the category in the ToDoList array
    const categoryIndex = ToDoList.findIndex(item => item.category.toLowerCase() === category.toLowerCase());
    // Check if category exists
    if (categoryIndex !== -1) {
        // Remove task by index from the category's tasks array
        const removedTask = ToDoList[categoryIndex].tasks.splice(taskIndex - 1, 1);
        // Check if task was removed
        if (removedTask.length > 0) {
            // Log task removal confirmation
            console.log(`Task "${removedTask[0].description}" removed from category "${category}".`);
        } else {
            // Log error if task not found
            console.log(`Task at index ${taskIndex} not found in category "${category}".`);
        }
    } else {
        // Log error if category not found
        console.log(`Category "${category}" not found.`);
    }
}

// Example usage
addTask('Read a book', 'Study');
addTask('Prepare presentation', 'Work');
addTask('woshing', 'Home');
addTask('Walk to the my room', 'Home');
displayTasks();
markTaskAsCompleted('Study', 1);
removeTask('Home', 2);
displayTasks();