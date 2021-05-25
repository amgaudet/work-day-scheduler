var containerEl = document.querySelector('.container');
var currentDay = moment().format('dddd MMM Do');
$('#currentDay').text(currentDay);

var schedule = {
    time: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    index: [0, 1, 2, 3, 4, 5, 6, 7, 8],
}

function setHours() {
    for (var i = 0; i < schedule.time.length; i++) {
        var block = document.createElement('form');
        block.setAttribute("class", "time-block");
        block.setAttribute("class", "row");

        var hourEl = document.createElement('div');
        hourEl.setAttribute("class", "hour");
        hourEl.textContent = "PlaceHolder";

        var textAreaEl = document.createElement('input');
        textAreaEl.setAttribute("class", "description");
        textAreaEl.setAttribute("type", "textarea")

        var buttonEl = document.createElement('button');
        buttonEl.setAttribute("class", "saveBtn");
        buttonEl.setAttribute("data-index", i);
        buttonEl.textContent = "Save";
        
        containerEl.append(block);
        block.append(hourEl);
        block.append(textAreaEl);
        block.append(buttonEl);
     
    }
}

containerEl.addEventListener("submit", function(event){
    event.preventDefault();
    var element = event.target;
    if (element.matches("button")) {
        console.log(element);
    }
});

function init() {
    setHours();
}

init();