// Sets the variable for displaying the day and date on the webpage.
let dayDisplayEl = $('#currentDay');

// This handles displaying the day and date.
function displayDayDate() {
  var todaysDayDate = dayjs().format('dddd, MMMM DD, YYYY');
  dayDisplayEl.text(todaysDayDate);
};

// Function that is called once everything renders on the webpage.
function plannerHourColorSwitcher() {
  // Tracks the current hour in the day.
  let rightNow = dayjs().hour();

  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("hour")[1] * -1);
    // This Compares the hours in the hour blocks, and adds the matching classes for the matching background colors.
    if (hourBlock < rightNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    };
    if (hourBlock === rightNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    };
    if (hourBlock > rightNow) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

    };
  });
};

$(function () {
  // This is the event listener for the save button (saveBtn).
  $(".saveBtn").on("click", function () {
    var hourText = $(this).siblings(".description").val();
    var blockHour = $(this).parent().attr("id");
    // This saves the text from the time blocks into the local storage.
    localStorage.setItem(blockHour, hourText);
  });

  // This retrieves the user input from the local storage, if there is anything to retrieve.
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  plannerHourColorSwitcher();

});

displayDayDate();
setInterval(displayTime, 1000);