let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = -1;

displayTasks();

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

document
  .getElementById("filterPriority")
  .addEventListener("change", displayTasks);
document.getElementById("search").addEventListener("keyup", displayTasks);

function addTask() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.getElementById("priority").value;

  if (title === "" || dueDate === "") {
    alert("Title and Due Date are required");
    return;
  }

  let task = {
    title,
    description,
    dueDate,
    priority,
  };

  if (editIndex === -1) {
    tasks.push(task);
  } else {
    tasks[editIndex] = task;
    editIndex = -1;
  }

  saveTasks();
  displayTasks();
  clearFields();
}

function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let filter = document.getElementById("filterPriority").value;
  let search = document.getElementById("search").value.toLowerCase();

  tasks.forEach((task, index) => {
    if (filter !== "All" && task.priority !== filter) return;
    if (!task.title.toLowerCase().includes(search)) return;

    let li = document.createElement("li");
    li.className = "list-group-item task-item";

    li.innerHTML = `
<div class="d-flex justify-content-between align-items-center">

<div>

<h5>${task.title}</h5>

<p>${task.description}</p>

<small>Due: ${task.dueDate}</small><br>

<span class="priority-${task.priority.toLowerCase()}">
Priority: ${task.priority}
</span>
</div>
<div>
<button class="btn btn-warning btn-sm me-2" onclick="editTask(${index})">
Edit
</button>
<button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">
Delete
</button>
</div>
</div>
`;

    taskList.appendChild(li);
  });
}

function editTask(index) {
  let task = tasks[index];

  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;

  editIndex = index;
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();
  displayTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("priority").value = "Low";
}