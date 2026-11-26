const STORAGE_KEY = "til_notes_v1";

const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const bodyInput = document.getElementById("note-body");
const notesList = document.getElementById("notes-list");
const clearBtn = document.getElementById("clear-btn");

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function renderNotes() {
  const notes = loadNotes();
  notesList.innerHTML = "";

  notes.forEach(({ id, title, body }) => {
    const li = document.createElement("li");
    const heading = document.createElement("strong");
    heading.textContent = title;

    const text = document.createElement("p");
    text.textContent = body;

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      saveNotes(loadNotes().filter((n) => n.id !== id));
      renderNotes();
    });

    li.append(heading, text, delBtn);
    notesList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title || !body) return;

  const notes = loadNotes();
  notes.unshift({ id: Date.now(), title, body });
  saveNotes(notes);
  form.reset();
  renderNotes();
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  renderNotes();
});

renderNotes();
