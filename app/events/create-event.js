$(document).ready(function(){
 
    // show html form when 'create event' button is clicked
    $(document).on('click', '.create-event-button', function(){
        // load list of events to get Type
$.getJSON("http://localhost/api/events/read.php", function(data){

// build Type option html
// loop through returned list of data
var type_options_html=`<select name='Type' class='form-control'>`;
$.each(data.records, function(key, val){
    type_options_html+=`<option value='` + val.Type + `'>` + val.name + `</option>`;
});
type_options_html+=`</select>`;

});

// we have our html form here where product information will be entered
// we used the 'required' html5 property to prevent empty fields
var create_event_html=`
 
    <!-- 'read events' button to show list of events -->
    <div id='read-events' class='btn success pull-right m-b-15px read-events-button'>
        <span class='glyphicon glyphicon-list'></span> Back To Calendar
    </div>
    <!-- 'create event' html form -->
    <form id='create-event-form' action='#' method='post' border='0'>
        <table class='table table-hover table-responsive table-bordered'>
     
            <!-- name field -->
            <tr>
                <td>Name</td>
                <td><input type='text' name='name' class='form-control' required /></td>
            </tr>
     
            <!-- price field -->
            <tr>
                <td>Price</td>
                <td><input type='number' min='1' name='price' class='form-control' required /></td>
            </tr>
     
            <!-- description field -->
            <tr>
                <td>Description</td>
                <td><textarea name='description' class='form-control' required></textarea></td>
            </tr>
     
            <!-- type 'select' field -->
            <tr>
                <td>Type</td>
                <td>` + type_options_html + `</td>
            </tr>
     
            <!-- button to submit form -->
            <tr>
                <td></td>
                <td>
                    <button type='submit' class='btn success'>
                        <span class='glyphicon glyphicon-plus'></span> Create Product
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
    url: "http://localhost/api/events/create.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // event was created, go back to products list
        showEvents();
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
 
return false;
});
    
});