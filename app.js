function addTask() {
  var taskList = document.createElement("li");
  var inputValue = document.getElementById("itemInput").value;
  var textInput = document.createTextNode(inputValue);
  var delButton = document.createElement("button");
  var checkBox = document.createElement("checkbox");

  taskList.className += "task__item"

  taskList.appendChild(textInput);
  if (inputValue === '') {
    alert("You did not enter any task!")
  }
  else {
    document.getElementById("taskList").appendChild(taskList);

    checkBox.innerHTML = '<input type="checkbox" id="item 1" name="item 1" value="Item 1"><label for="item 1"> </label>'
    checkBox.className += "checkbox__input"
    delButton.innerHTML = '<i class = "fa fa-trash"></i>';
    delButton.className += "button--state-delete"
    taskList.appendChild(delButton);
    taskList.appendChild(checkBox);
  }
  document.getElementById("itemInput").value = "";

  delButton.addEventListener('click', () => this.deleteTask());
  checkBox.addEventListener('click', () => this.CheckedTask());

}

function deleteTask() {
  var closeButton = document.getElementsByClassName("button--state-delete");

  for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

function CheckedTask() {
  var inputElems = document.getElementsByTagName("input");
  var count = 0;

  for (var i = 0; i < inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
      count++;
      document.getElementById("output").innerHTML = count + " task completed ";
    }
  }
}




