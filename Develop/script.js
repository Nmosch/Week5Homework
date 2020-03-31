$(document).ready(function () {
    let today = moment().format('dddd MMMM Do, YYYY');
    var displayToday = $("#currentDay")
    displayToday.text(today);


    // <div class="col-sm-2 time-block hour">9 AM</div>
    // <div class='col-sm-9 '><textarea class="description"></textarea></div>

    // <div class="col-sm-1"><button class='saveBtn'>save</button></div>

    var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];


    for (var i = 0; i < hours.length; i++) {

        var row = $("<div class='row'>");
        var col1 = $("<div class='col-sm-2 time-block hour'>");

        if (hours[i] === 12) {
            col1.text(hours[i] + " PM")

        } else if (hours[i] >= 13) {
            var afternoon = hours[i] - 12
            col1.text(afternoon + " PM");

        } else {
            col1.text(hours[i] + " AM")
        }


        
        var col2 = $("<div class='col-sm-9'>");

        var textArea = $("<textarea class='description'>");
        
        col2.append(textArea);
        var col3 = $("<div class='col-sm-1'>");
        var saveBtn = $("<button  class='saveBtn'>");
        saveBtn.text("Save")
        col3.append(saveBtn);
        row.append(col1, col2, col3);
        $("#displayTime").append(row);

    }

});