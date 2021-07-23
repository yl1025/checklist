function addButtonPress() {
  var itemInput = document.getElementById("item-input").value;
  var li = document.createElement("li");

  let badwords = /fuck|ass|cunt|shit|nignog/gim;
  let asterik = itemInput.split("");

  for (var i = 1; i < itemInput.length; i++) {
    asterik[i] = "*";
  }

  /* function censored(word) {
    const letters = word.split("");
    for (var i = 1; i < word.length; i++) {
      letters[i] = "*";
    }
    return letters.join("");
  } */

  let replacebadwords = itemInput.replace(badwords, asterik.join(""));
  itemInput = replacebadwords;

  var t = document.createTextNode(replacebadwords);
  var deletebutton = document.createElement("button"); //makes a button element out of nowhere cause JS can do that
  deletebutton.innerHTML = "delete";
  li.appendChild(t);
  li.appendChild(deletebutton); //appends a button everytime the input is added to the list, and its after

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
    //u dblclick to uncross it
    li.style.textDecoration = "none";
  });

  deletebutton.addEventListener("click", function () {
    //delete button
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

//issue1: press enter and do nothing
//issue2: uncheck/uncross an item in case u thought u finished it
//issue3: censor bad words, keep the first letter but rest is f***
//issue4: CSS stuff, layout, font, etc.
//issue5:

/* function censored(word) {
  const letters = word.split('')
  for(var i = 1; i < word.length; i++) {
      letters[i] = '*';
  }
  return letters.join('');
} */
