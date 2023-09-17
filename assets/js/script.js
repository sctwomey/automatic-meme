
let timeDisplayEl = $('#currentDay');

// This handles displaying the time.
function displayTime() {
  var todaysDayDate = dayjs().format('dddd, MMMM DD, YYYY');
  timeDisplayEl.text(todaysDayDate);
};

$(function () {
  // This is the event listener for the save button (saveBtn).
  $(".saveBtn").on("click", function () {
    var timeText = $(this).siblings(".description").val();
    var blockTime = $(this).parent().attr("id");
    // This saves the text from the time blocks into the local storage.
    localStorage.setItem(blockTime, timeText);
  });

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

  plannerHourColorSwitcher();

});

displayTime();
setInterval(displayTime, 1000);