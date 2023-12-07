let button = document.querySelector(".add");
let toDoList = document.querySelector(".todo-list");

button.addEventListener("click", () => {
	const input = document.getElementById("input-box");
	const todo = input.value;
	let error = document.querySelector(".invalid-input");

	if (todo !== "") {
		let newToDoDiv = document.createElement("div");
		let newToDo = document.createElement("li");
		let deleteButton = document.createElement("button");
		let deleteIcon = document.createElement("li");
		deleteIcon.classList.add(
			"bi",
			"bi-x",
			"text-red-500",
			"text-4xl",
			"hover:scale-150",
			"transition-all",
			"duration-500"
		);
		let checkBox = document.createElement("input");
		checkBox.type = "checkbox";

		let todoText = document.createTextNode(todo);

		newToDo.appendChild(checkBox);
		newToDo.appendChild(todoText);
		newToDoDiv.appendChild(newToDo);
		toDoList.appendChild(newToDoDiv);
		deleteButton.appendChild(deleteIcon);
		newToDoDiv.appendChild(deleteButton);

		checkBox.classList.add(
			"form-checkbox",
			"text-indigo-600",
			"h-5",
			"w-5",
			"mr-2",
			"rounded-full"
		);
		newToDo.classList.add("flex", "items-center");
		error.classList.remove("hidden");
		error.classList.add("hidden");
		newToDoDiv.classList.add(
			"flex",
			"justify-between",
			"items-center",
			"py-4",
			"px-4",
			"border-gray-200"
		);
		saveData();

		deleteButton.addEventListener("click", () => {
			toDoList.removeChild(newToDoDiv);
			saveData(); // Update local storage after deleting a task
		});

		console.log(todo);
		input.value = "";
	} else {
		error.classList.remove("hidden");
	}
});

function saveData() {
	localStorage.setItem("data", toDoList.innerHTML);
}

function ShowTask() {
	toDoList.innerHTML = localStorage.getItem("data");
}
ShowTask();
