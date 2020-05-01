$(document).ready(function () {

    // will run if the delete button was clicked
    $(document).on('click', '.delete-event-button', function () {
        // get the event id
        var event_id = $(this).attr('data-EventNumber');
        //confirm pop up
        delete_events_html+=`
        <div id="id01" class="modal">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
            <form class="modal-content" action="/action_page.php">
                <div class="container">
                <h1>Delete Account</h1>
                <p>Are you sure you want to delete your account?</p>
                
                <div class="clearfix">
                    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
                </div>
                </div>
            </form>
            </div>`;

    });
});