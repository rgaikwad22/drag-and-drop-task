var listItems = document.querySelectorAll(".tasks");
var rightBox = document.querySelector(".right");
var leftBox = document.querySelector(".left");
var middleBox = document.querySelector(".middle");
var defaultArea = document.querySelector(".tasks-list");
var restart = document.querySelector(".restart-btn");
var startStop = document.querySelector(".start-btn");

for (var list of listItems) {
  list.addEventListener("dragstart", function (e) {
    var selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null
    })

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null
    })

    middleBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    middleBox.addEventListener("drop", function (e) {
      middleBox.appendChild(selected);
      selected = null
    })

    defaultArea.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    defaultArea.addEventListener("drop", function (e) {
      defaultArea.appendChild(selected);
      selected = null;
    })
  })
}

restart.addEventListener("click", function () {
  listItems.forEach(el => {
    defaultArea.appendChild(el);
  })
})

startStop.addEventListener("click", function () {
  if (startStop.value == "Stop") {
    startStop.value = "Start";
    listItems.forEach(el => {
      el.setAttribute("draggable", "false");
    });
  } else if (startStop.value == "Start") {
    startStop.value = "Stop";
    listItems.forEach(el => {
      el.setAttribute("draggable", "true");
    });
  }
});