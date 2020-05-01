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
<!-- when clicked, it will load the create event -->
<div>
    <a href=Create_Event.html class='success pull-right m-b-15px' style="color: white;">
    <i class="far fa-calendar-plus"></i>  Create Event</a> 
</div>
<div>
<p>
<br><br>
</p>
</div>
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
        <th>Update/Delete</th>

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
            <!-- 'action' buttons -->
            <td> 
            <div>
                <!-- edit button -->
                <button class='btn warning m-r-10px update-event-button' data-EventNumber='` + val.EventNumber + `'>
                    <span class='glyphicon glyphicon-edit'></span> Edit Event
                </button>
                <div class="delete-event-button">
                <!-- delete button -->
                <button class='delete-event-button' data-EventNumber='` + val.EventNumber + `'>
                    <span class='glyphicon glyphicon-remove'></span> Delete Event
                </button>
                </div>
                </div>    
            </td>
        </tr>`;
});
 
// end table
read_events_html+=`</table>`;
// inject to 'page-content' of our app
$("#event-content").html(read_events_html);
});
};
