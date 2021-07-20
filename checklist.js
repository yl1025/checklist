function addButtonPress() {
  var itemInput = document.getElementById("item-input").value;
  var li = document.createElement("li");

  var t = document.createTextNode(itemInput);
  li.appendChild(t);
  document.getElementById("list").appendChild(li);
  document.getElementById("item-input").value = "";

  li.addEventListener("click", function () {
    //u click and it crosses it out
    li.style.textDecoration = "line-through";
  });

  li.addEventListener("dblclick", function () {
    //u double click and deltes it
    document.getElementById("list").removeChild(li);
  });

  console.log(itemInput);
}

var enter = document.getElementById("item-input");
enter.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
