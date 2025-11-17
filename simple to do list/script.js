let tasks = [];

// Add task
function addTask() {
    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({ text: taskText, completed: false });

    document.getElementById("taskInput").value = "";
    displayTasks();
}


function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "Task to do";

    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `
            <li>
                <span class="${tasks[i].completed ? 'completed' : ''}" onclick="toggleTask(${i})">
                    ${tasks[i].text}
                </span>
                <div class="action-buttons">
                    <button onclick="deleteTask(${i})">Delete</button>
                </div>
            </li>
        `;
    }
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
