// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  //* current time variable
  
  var currentTime = dayjs();

  //* Event Listener for save button

 $(".saveBtn").on("click", function() {
  var hourNumber = $(this).parent().attr("id");
  var toDo = $(this).siblings('textArea').val().trim();
  localStorage.setItem(hourNumber, toDo);
 })
  
 //* function to change class of each timeblock to past, present, or future
 //* based on current time  

$('.time-block').each(function() {
  var hourNumberSplit = $(this).attr("id").split('-')[1];
  
  if (currentTime.hour() > hourNumberSplit) {
    $(this).removeClass("future present")
    $(this).addClass("past");
    
  } else if (currentTime.hour() == hourNumberSplit) {
    $(this).removeClass("future past")
    $(this).addClass("present");
  
  } else {
    $(this).removeClass("past present")
    $(this).addClass("future");
  }
})


  //* function to retrieve user input from local storage

$('.time-block').each(function() {
  var savedHourNumber = $(this).attr("id");
  var savedToDo = localStorage.getItem(savedHourNumber);
  if (savedToDo) {
    $(this).children('textArea').val(savedToDo);
  }
})

  //* current Date in header

  var currentDayEl = $('#currentDay');
  currentDayEl.text(currentTime.format('dddd, MMMM D'));
});
