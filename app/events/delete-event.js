$(document).ready(function () {
console.log("Delete Function Ready")
    // will run if the delete button was clicked
    $(document).on('click', '.delete-event-button', function () {
        console.log("click received")
        // get the event id
        var event_id = $(this).attr('data-EventNumber');
        console.log("form data received")
                    // send delete request to api / remote server
                    $.ajax({
                        url: "http://utahbearsbaseball.net/api/events/delete.php",
                        type: "POST",
                        dataType: 'json',
                        data: JSON.stringify({ EventNumber: event_id }),
                        success: function (result) {
                            console.log("Event Deleted Successfully")
                            // re-load list of events
                            alert("You have successfully removed an event from the calendar");
                            setTimeout(function() {
                                window.location.href = "http://utahbearsbaseball.net/Calendar";
                            });
                        },
                        error: function (xhr, resp, text) {
                            console.log(xhr, resp, text);
                        }
                    });

                });
            });