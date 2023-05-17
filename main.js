window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    //prevents page from refreshing
    e.preventDefault();

    const task = input.value;
    //if there is no value in the task bar, alert
    if (!task) {
      alert("Please add something to knock off the list");
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    //readonly means we cant edit it after being submitted
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    //the actions div will hold both buttons
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    //after we create both buttons/add functionality, add to actions
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    //add actions to a task
    task_el.appendChild(task_actions_el);

    //add the task to the list(adds to page)
    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", () => {
      //when clicked on, if the button says edit
      //get rid of readonly, so you can change task
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        //start the typing right in the input div
        task_input_el.focus();
        //change the edit text to save
        task_edit_el.innerText = "Save";
      } else {
        //since the edit text now says save, it won't say edit
        //when you click "save", add the readonly function back
        //change the "save" text back to "edit"
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
