// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentTime = dayjs();

  //* Event Listener for save button

 $(".saveBtn").on("click", function() {
  var hourNumber = $(this).parent().attr("id");
  var toDo = $(this).siblings('textArea').val().trim();
  localStorage.setItem(hourNumber, toDo);
 })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
$('.time-block').each(function() {
  
  var hourNumberSplit = $(this).attr("id").split('-');
  if (currentTime.hour() > hourNumberSplit[1]) {
    $(this).removeClass("present", "future");
    $(this).addClass("past");
    
  } else if (currentTime.hour() = hourNumberSplit[1]) {
    $(this).removeClass("past", "future");
    $(this).addClass("present");
  
  } else if (currentTime.hour() < hourNumberSplit[1]) {
    $(this).removeClass("present", "past");
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
