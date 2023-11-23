let button = document.querySelector(".add");

button.addEventListener("click", () => {
	const input = document.getElementById("input-box");
	const todo = input.value;
  let error = document.querySelector(".invalid-input")

	if (todo !== '') {
    let toDoList = document.querySelector(".todo-list");
	let newToDo = document.createElement("li");

	let checkBox = document.createElement("input");
	checkBox.type = "checkbox";

	let todoText = document.createTextNode(todo);

	newToDo.appendChild(checkBox);
	newToDo.appendChild(todoText);
	toDoList.appendChild(newToDo);
  checkBox.classList.add("mr-2");
	newToDo.classList.add("flex", "items-center", 'pt-5',);
  error.classList.remove("hidden");
  error.classList.add("hidden");

	console.log(todo);
	input.value = "";
  }else{
    error.classList.remove("hidden");
  }
});
