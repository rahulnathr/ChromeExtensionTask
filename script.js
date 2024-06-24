document.getElementById("submitBtn").addEventListener("click", function () {
  const taskProgress = document.getElementById("InProgress").value;
  const taskDone = document.getElementById("Done").value;
  const taskToDo = document.getElementById("ToDo").value;
  const taskNote = document.getElementById("Note").value;

  const taskOutput = document.getElementById("taskOutput");
  taskOutput.innerHTML = "";
  const inProgressSection = taskProgress.split("\n");

  const inProgressTitleText = "🎯 In Progress";
  const doneTitleText = "🏁 Done";
  const toDoTitleText = "🏁 To Do";
  const noteTitleText = "🏁 Note(s)";

  const sectionElement = document.createElement("div");
  sectionElement.className = "progress";
  const titleElementInProgress = document.createElement("h2");
  titleElementInProgress.textContent = inProgressTitleText;
  sectionElement.appendChild(titleElementInProgress);
  taskOutput.appendChild(sectionElement);
  const ul = document.createElement("ul");

  inProgressSection.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    ul.appendChild(li);
  });
  taskOutput.appendChild(ul);

  //Done
  const doneElement = document.createElement("div");
  doneElement.className = "done";
  const doneTitleElement = document.createElement("h2");
  doneTitleElement.textContent = doneTitleText;
  doneElement.appendChild(doneTitleElement);
  taskOutput.appendChild(doneElement);

  const ulDone = document.createElement("ul");
  const doneSection = taskDone.split("\n");

  doneSection.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    ulDone.appendChild(li);
  });
  taskOutput.append(ulDone);

  //ToDO
  const toDoElement = document.createElement("div");
  toDoElement.className = "toDo";
  const toDoTitleElement = document.createElement("h2");
  toDoTitleElement.textContent = toDoTitleText;
  toDoElement.appendChild(toDoTitleElement);
  taskOutput.appendChild(toDoElement);

  const ulToDo = document.createElement("ul");
  const toDoSection = taskToDo.split("\n");

  toDoSection.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    ulToDo.appendChild(li);
  });
  taskOutput.append(ulToDo);

  //Notes
  const noteElement = document.createElement("div");
  noteElement.className = "note";
  const noteElementTitle = document.createElement("h2");
  noteElementTitle.textContent = noteTitleText;
  noteElement.appendChild(noteElementTitle);
  taskOutput.appendChild(noteElement);

  const ulNotes = document.createElement("ul");
  const noteSection = taskNote.split("\n");

  noteSection.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    ulNotes.appendChild(li);
  });
  taskOutput.append(ulNotes);

  //handles the copy
  const range = document.createRange();
  range.selectNodeContents(taskOutput);

  const selection = window.getSelection();
  selection.removeAllRanges();

  // Add the new range to the selection
  selection.addRange(range);
  try {
    document.execCommand("copy");
    // Clear the selection
    selection.removeAllRanges();
  } catch (error) {
    console.log("Error" + error);
  }
});
