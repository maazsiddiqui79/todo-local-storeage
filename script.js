storedTask = localStorage.getItem("task") || localStorage.setItem("task", "[]");
displayTaks();
function showEmptyMessage() {
  if (storedTask.length <= 0) {
    let p = document.createElement("p");
    p.textContent = "No Tasks Available.";
    p.classList.add("notaskmsg");
    allTask.appendChild(p);
    return true;
  }
}
function displayTaks() {
  allTask = document.getElementById("allTasks");
  allTask.innerHTML = "";
  storedTask = JSON.parse(localStorage.getItem("task"));
  if (showEmptyMessage()) {
    return;
  }
  storedTask.forEach((task, index) => {
    allTask.innerHTML += `
        
        <div class="mb-2 border border-1 border-dark p-1 px-5 mx-3" style="background-color:#CFD8DC;">
        <li class="my-1">
            ${task}
            <button class="btn btn-sm delete-btn" onclick="deleteTask(${index})">Delete</button>
        </li>
        </div>`;
  });
}

function addTask() {
  userInput = document.getElementById("userInput");
  if (userInput == "" || " ") {
  }
  storedTask = JSON.parse(localStorage.getItem("task"));
  storedTask.push(userInput.value);
  storedTask = JSON.stringify(storedTask);
  localStorage.setItem("task", storedTask);
  userInput.value = "";
  displayTaks();
}
function deleteTask(index) {
  storedTask = JSON.parse(localStorage.getItem("task"));
  console.log(storedTask);
  let x = storedTask.splice(index, 1);
  storedTask = JSON.stringify(storedTask);
  localStorage.setItem("task", storedTask);
  displayTaks();
}
