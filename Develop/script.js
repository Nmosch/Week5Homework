//Ensures jQuery runs after the initial page is rendered
$(document).ready(function () {
    //moment is a method to convert dates and times and reformat it to your preferred look
    // set var to display current day and date month, year
    var today = moment().format('dddd MMMM Do, YYYY');
    var displayToday = $("#currentDay");
    displayToday.text(today);
    //set global array for hours in military time
    var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    //set var for current hour to display time blocks correctly
    var currenthour = moment().hour();

    //for loop renders page
    for (var i = 0; i < hours.length; i++) {
        // setting vars to add div classes
        var row = $("<div class='row'>");
        var col1 = $("<div class='col-sm-2 time-block hour'>");

        // inputs hour blocks
        if (hours[i] === 12) {
            col1.text(hours[i] + " PM");
            // changes military time back to western time
        } else if (hours[i] >= 13) {
            var afternoon = hours[i] - 12
            col1.text(afternoon + " PM");

        } else {
            col1.text(hours[i] + " AM");
        }

        //adds text areas and buttons
        // setting vars to add div classes
        var col2 = $("<div class='col-sm-9'>");
        var textArea = $("<textarea class='description'>");
        textArea.attr("id", "hourBlock" + i);
        //renders stored text from local storage into textarea on page refresh
        var getStorage = localStorage.getItem("hourBlock" + i);
        textArea.text(getStorage);
        col2.append(textArea);
        //adds text areas and buttons
        var col3 = $("<div class='col-sm-1'>");
        var saveBtn = $("<button  class='saveBtn far fa-save'>");
        //data-id creates a variable inside the element to store data
        //Allows us to grab the id the current click that pertains to the row
        saveBtn.attr("data-id", i)
        saveBtn.height("60px");
        saveBtn.width("60px");
        col3.append(saveBtn);
        row.append(col1, col2, col3);
        $("#displayTime").append(row);

        //adds colors to text areas
        if (hours[i] === currenthour) {
            textArea.addClass("present");

        } else if (hours[i] < currenthour) {
            textArea.addClass("past");

        } else {
            textArea.addClass("future");
        }

    }

    //saves tasks on click
    $(".saveBtn").click(function () {
        var dataId = $(this).attr("data-id");
        localStorage.setItem("hourBlock" + dataId, $("#hourBlock" + dataId).val());
    })
});