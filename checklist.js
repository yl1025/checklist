function addButtonPress() {
  var itemInput = document.getElementById("item-input").value;
  var li = document.createElement("li");

  let badwords = /fuck|ass|cunt|shit|nignog/gi;
  let nobadwords = itemInput;
  var asterik = "";
  for (var i = 0; i < itemInput.length; i++) {
    asterik += "*";
  }

  let replacebadwords = nobadwords.replace(badwords, asterik);
  document.getElementById("item-input").value = replacebadwords;

  var t = document.createTextNode(replacebadwords);
  li.appendChild(t);

  if (itemInput === "") {
    return;
  }

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

/*  let badwords = /fuck|ass|cunt|nignog/gi;
  let nobadwords = itemInput;
  let replacebadwords = nobadwords.replace(badwords, "******");
  document.getElementById("item-input").value = replacebadwords
for (var i=0; i < itemInput.length; i++) ;
  */

//issue1: press enter and do nothing
//issue2: uncheck/uncross an item in case u thought u finished it
//issue3: censor bad words, keep the first letter but rest is f***
//issue4: CSS stuff, layout, font, etc.
//issue5:
