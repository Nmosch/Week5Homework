$(document).ready(function(){
    let today = moment().format('dddd MMMM Do, YYYY');
    var displayToday = $("#currentDay")
    displayToday.text(today);
    
});