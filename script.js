var containerEl = document.querySelector('.container');
var currentDay = moment().format('dddd MMM Do');
var toDo = JSON.parse(localStorage.getItem("toDo")) || [];
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
        textAreaEl.setAttribute("type", "textarea");
        textAreaEl.setAttribute("data-index", i);
        textAreaEl.setAttribute("data-hour", schedule.time[i]);

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

containerEl.addEventListener("click", function(event){
    event.preventDefault();

    if (event.target.matches("button")){
    var element = event.target;
    var hourNumber = element.getAttribute("data-index");
    var entryEl = document.querySelector('input', hourNumber);
    var savedEntry = {hour: hourNumber, entry: entryEl.value};
    console.log(entryEl.value);
    toDo = toDo.concat(savedEntry);
    console.log(entryEl.value);
    localStorage.setItem("toDo", JSON.stringify(toDo.concat(savedEntry)));
    }
});

// function timeColors (){
//     //.isBefore .isAfter .isSame
//     var timeTest = document.querySelector("data-hour", "hour");
//     console.log(timeTest.datastate.hour);
    

// }

function init() {
    setHours();
    timeColors();
}
init();