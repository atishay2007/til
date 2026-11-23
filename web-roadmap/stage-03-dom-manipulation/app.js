const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const statusText = document.getElementById("status");

function updateStatus() {
  const remaining = list.querySelectorAll("li:not(.done)").length;
  statusText.textContent =
    remaining === 1 ? "1 task remaining" : `${remaining} tasks remaining`;
}

function addTask(text) {
  const li = document.createElement("li");

  const label = document.createElement("span");
  label.textContent = text;
  label.addEventListener("click", () => {
    li.classList.toggle("done");
    updateStatus();
  });

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
    updateStatus();
  });

  li.appendChild(label);
  li.appendChild(removeBtn);
  list.appendChild(li);
  updateStatus();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  addTask(value);
  input.value = "";
  input.focus();
});
