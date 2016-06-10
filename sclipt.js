# TODO-List-

 var todos = []; 				//create an array(called:todos) for putting data of input

 var todoForm = document.getElementById('todo-form');	// holds <form>
 var todoList = document.getElementById('todo-list');  // holds 
 var todoInput = document.querySelector('#todo-form input'); // holds user input  from <form>

 var addItem = function(event){

	event.preventDefault();			// Texthis prevents list item from dissappearing 
	<ul>
	if (!todoInput.value) {			// If user dont write anything, don't put any list item
		return;
	}

	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";

	var spaN = document.createElement("span");
	spaN.textContent = todoInput.value;				// It takes what user writes and put it inside list item

	var deleteButton =document.createElement('button');
	deleteButton.textContent = 'delete';
	deleteButton.addEventListener('click', deleteItem);
	
	
	var listItem = document.createElement("li");		// This method creates list item inside <ul>
	listItem.appendChild(checkBox);
	listItem.appendChild(spaN);
	listItem.appendChild(deleteButton);
	todoList.appendChild(listItem);

	todoInput.value = ""; // If you click the delete button inbox is going to be empty inbox
	
	todoForm.addEventListener('submit',addItem);  // 

 }

 var deleteItem = function(event){
	var listItem = event.target.parentElement;  //The taeget tells us what was clicked.
	todoList.removeChild(listItem); // todoList is <ul> list
 }
 var addButton = document.getElementById("addButton");
 addButton.onclick = addItem;
 
