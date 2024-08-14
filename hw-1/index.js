// I have to have an array for tasks
// when user clicks "add" button, I have to push task to the array
// then clear the input
// render the tasks array
// delete function: ==>

const tasks = [];

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const h1 = document.querySelector("h1");

function checkTasks() {
  if (tasks.length === 0) {
    h1.style.visibility = "visible";
  } else {
    h1.style.visibility = "hidden";
  }
}

function renderTasks() {
  checkTasks();
  ul.innerHTML = "";

  tasks.forEach(({ id, status, title }) => {
    const li = `<li>
  <span># ${id}</span> 
  <span>${title}</span> 
   <span>${status}</span> 
  <button id=${id}>Delete</button>
  </li>`;

    ul.insertAdjacentHTML("beforeend", li);
  });

  document.querySelectorAll("li button").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      tasks.splice(index, 1);
      renderTasks();
    });
  });
}

renderTasks();

addBtn.addEventListener("click", () => {
  const newTask = {
    id: tasks.length + 1,
    title: input.value,
    status: "In Progress",
  };
  tasks.push(newTask);
  renderTasks();
  input.value = "";
});
