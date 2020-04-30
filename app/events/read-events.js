$(document).ready(function(){
 
    // show list of events on first load
    showEvents();
 
});
 
// showevents() method
function showEvents(){
    //get list of events from the API
    $.getJSON("http://utahbearsbaseball.net/api/events/read.php", function(response){

    

    // html for listing products
var read_events_html=`
<!-- start table -->
<table class='table table-bordered table-hover'>
 
    <!-- creating our table heading -->
    <tr>
        <th>Type</th>
        <th>Date</th>
        <th>Time</th>
        <th>Location</th>
        <th>Opponent</th>
        <th>Score</th>
        <th>Outcome</th>
    </tr>`;
    //rows go here 
    // loop through returned list of data
$.each(response.records, function(key, val) {
 
    // creating new table row per record
    read_events_html+=`
        <tr>
            <td>` + val.Type + `</td>
            <td>` + val.Date + `</td>
            <td>` + val.Time + `</td>
            <td>` + val.Location + `</td>
            <td>` + val.Opponent + `</td>
            <td>` + val.Score + `</td>
            <td>` + val.Outcome + `</td>
        </tr>`;
});
 
// end table
read_events_html+=`</table>`;
// inject to 'page-content' of our app
$("#event-content").html(read_events_html);
});
};
