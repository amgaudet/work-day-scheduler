var containerEl = document.querySelector('.container');
var currentDay = moment().format('dddd MMM Do');
var toDo = JSON.parse(localStorage.getItem("toDo")) || [];
var currentHour = parseInt(moment().format('H'));
$('#currentDay').text(currentDay);

var schedule = {
    time: [8, 9, 10, 11, 12, 13, 14, 15, 16],
    index: [0, 1, 2, 3, 4, 5, 6, 7, 8],
}

function setHours() {
    for (var i = 0; i < schedule.time.length; i++) {
        var block = document.createElement('form');
        block.setAttribute("class", "time-block row");

        var hourEl = document.createElement('div');
        hourEl.setAttribute("class", "col-2 hour");
        if (i <= 3){
            hourEl.textContent = (i + 8) + " AM";
        } else if (i === 4) {
            hourEl.textContent = (i + 8) + " PM";
        } else {
            hourEl.textContent = (i - 4) + " PM";
        }

        var textAreaEl = document.createElement('textarea');
        textAreaEl.setAttribute("data-index", i);
        textAreaEl.setAttribute("data-hour", schedule.time[i]);

        for (var j = 0; j < toDo.length; j++){
            if (toDo[j].hour == i) {
                textAreaEl.value = toDo[j].entry;
            }
        }

        var buttonEl = document.createElement('button');
        buttonEl.setAttribute("class", "saveBtn col-2");
        buttonEl.setAttribute("data-index", i);
        buttonEl.textContent = "Save";

        containerEl.append(block);
        block.append(hourEl);
        block.append(textAreaEl);
        block.append(buttonEl);

    }
}

containerEl.addEventListener("click", function (event) {
    event.preventDefault();
    
    if (event.target.matches("button")) {
        var element = event.target;
        var hourNumber = element.getAttribute("data-index");
        var entryEl = element.previousSibling;
        var savedEntry = { hour: hourNumber, entry: entryEl.value };
        toDo = toDo.concat(savedEntry);
        localStorage.setItem("toDo", JSON.stringify(toDo.concat(savedEntry)));
    }
});

function timeColors (){
        var timeTest = document.querySelectorAll('textarea');
        for (var i = 0; i < timeTest.length; i++){
            var scheduleHour = timeTest[i].getAttribute('data-hour');

            if (scheduleHour < currentHour){
                timeTest[i].setAttribute('class', 'past description col-8');
            } else if (scheduleHour === currentHour) {
                timeTest[i].setAttribute('class', 'present description col-8');
            } else {
                timeTest[i].setAttribute('class', 'future description col-8');
            }
        }   
    }

    function init() {
        setHours();
        timeColors();
    }
    init();