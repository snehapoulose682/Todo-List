function addTask() {
  var taskList = document.createElement("li");
  var inputValue = document.getElementById("itemInput").value;
  var textInput = document.createTextNode(inputValue);
  var delButton = document.createElement("button");

  taskList.className += "task__item"
  
  taskList.appendChild(textInput);
  if (inputValue === '') {
    alert("You did not enter any task!")
  }
  else {
    document.getElementById("taskList").appendChild(taskList);

    delButton.innerHTML = '<i class = "fa fa-trash"></i>';
    delButton.className += "button--state-delete"
    taskList.appendChild(delButton);
  }
  document.getElementById("itemInput").value ="";

}




