$(document).ready(function(){
    console.log("Update Event Ready")
 
    // show html form when 'update event' button was clicked
    $(document).on('click', '.update-event-button', function(){
        // get EventNumber
var EventNumber = $(this).attr('data-EventNumber');
console.log(EventNumber)
// read one record based on given event EventNumber
$.getJSON("http://utahbearsbaseball.net/api/events/read_one.php?EventNumber=" + EventNumber, function(data){
 
    // values will be used to fill out our form
    var Type = data.Type;
    var Date = data.Date;
    var Time = data.Time;
    var Location = data.Location;
    var Opponent = data.Opponent;
    var Score = data.Score;
    var Outcome = data.Outcome;
     
    // store 'update event' html to this variable
    var update_event_html=`
    <!--
    <div id="updateModal" class="modal">
        <div class="modal-content">
        <span class="close">&times;</span>
        -->
        <!-- build 'update event' html form -->
        <!-- we used the 'required' html5 property to prevent empty fields -->
        <form id='update-event-form' action='#' method='post' border='0'>
            <table class='table table-hover table-responsive table-bordered'>
         
                <!-- Type field -->
                <tr>
                    <td>Type</td>
                    <td><input value=\"` + Type + `\" type='text' name='Type' class='form-control' required /></td>
                </tr>
         
                <!-- Date field -->
                <tr>
                    <td>Date</td>
                    <td><input value=\"` + Date + `\" type='date' name='Date' class='form-control' required /></td>
                </tr>
         
                <!-- Time field -->
                <tr>
                    <td>Time (HH:MM:SS e.g. 13:30:00)</td>
                    <td><input value=\"` + Time + `\" type='time' name='Time' class='form-control' required></textarea></td>
                </tr>
         
                <!-- Location field -->
                <tr>
                    <td>Location</td>
                    <td><textarea name='Location' class='form-control' required>` + Location + `</textarea></td>
                </tr>

                <!-- Opponent field -->
                <tr>
                    <td>Opponent</td>
                    <td><textarea name='Opponent' class='form-control' required>` + Opponent + `</textarea></td>
                </tr>

                <!-- Score field -->
                <tr>
                    <td>Score</td>
                    <td><textarea name='Score' class='form-control' required>` + Score + `</textarea></td>
                </tr>

                <!-- Outcome field -->
                <tr>
                    <td>Outcome</td>
                    <td><textarea name='Outcome' class='form-control' required>` + Outcome + `</textarea></td>
                </tr>
         
                <tr>
         
                    <!-- hidden 'event EventNumber' to identify which record to delete -->
                    <td><input value=\"` + EventNumber + `\" name='EventNumber' type='hidden' /></td>
         
                    <!-- button to submit form -->
                    <td>
                        <button type='submit' class='btn btn-info'>
                            <span class='glyphicon glyphicon-edit'></span> Update event
                        </button>
                    </td>
         
                </tr>
         
            </table>
        </form>
        <!--
        </div>

        </div>
        -->
        `;

// inject to 'page-content' of our app
$("#event-content").html(update_event_html);

});

    });
     
    // will run if 'create event' form was submitted
    $(document).on('submit', '#update-event-form', function(){
        
        // get form data
        var form_data=JSON.stringify($(this).serializeObject());

        // submit form data to api
$.ajax({
    url: "http://utahbearsbaseball.net/api/events/update.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // event was created, go back to events list
        console.log("Event has been updated successfully")
        alert("Your event has been updated!");
        setTimeout(function() {
        window.location.href = "http://utahbearsbaseball.net/Calendar";
                            });
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
        
        return false;
    });
});