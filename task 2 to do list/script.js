let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.onclick = () => toggleTaskCompletion(index);
        li.appendChild(taskText);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';
        editButton.onclick = () => editTask(index);
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newTaskText = prompt('Edit your task:', tasks[index].text);
    if (newTaskText !== null && newTaskText.trim()) {
        tasks[index].text = newTaskText.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
