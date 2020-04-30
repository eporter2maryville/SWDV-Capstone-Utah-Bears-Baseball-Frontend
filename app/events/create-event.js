$(document).ready(function(){
 
    //html form here where event information is entered
        // we used the 'required' html5 property to prevent empty fields
        var create_event_html=`
        
        <!-- 'read events' button to show list of events -->
        <div>
            <a href=Create_Event.html class='Call_to_Action pull-right m-b-15px' style="color: white;">
            <i class="fas fa-arrow-circle-left"></i></i>  Back to List</a> 
        </div>

        <!-- 'create event' html form -->
        <form id='create-event-form' action='#' method='post' border='0'>
            <table class='table table-hover table-responsive table-bordered'>
        
                <!-- Type field -->
                <tr>
                    <td>Type</td>
                    <td><input type='text' name='Type' class='form-control' required /></td>
                </tr>
        
                <!-- Date field -->
                <tr>
                    <td>Date (YYYY-MM-DD)</td>
                    <td><input type='date' name='Date' class='form-control' required /></td>
                </tr>
        
                <!-- Time -->
                <tr>
                    <td>Time (HH:MM:SS e.g. 13:30:00)</td>
                    <td><input type='time' name='Time' class='form-control' required></textarea></td>
                </tr>
        
                <!-- Location -->
                <tr>
                    <td>Location</td>
                    <td><input name='Location' class='form-control' required></textarea></td>
                </tr>

                <!-- Opponent -->
                <tr>
                    <td>Opponent (Optional)</td>
                    <td><input name='Opponent' class='form-control'></textarea></td>
                </tr>
        
                <!-- button to submit form -->
                <tr>
                    <td></td>
                    <td>
                        <button type='submit' class='btn success'>
                            <span class='glyphicon glyphicon-plus'></span> Create Event
                        </button>
                    </td>
                </tr>
        
            </table>
        </form>`;

// inject html to 'page-content' of our app
$("#create-event-content").html(create_event_html);

            });
 
    // will run if create event form was submitted
$(document).on('submit', '#create-event-form', function(){
    // get form data
var form_data=JSON.stringify($(this).serializeObject());

// submit form data to api
$.ajax({
    url: "http://utahbearsbaseball.net/api/events/create.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // event was created, go back to events list
        showEvents();
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
 
return false;

});
