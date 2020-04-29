$(document).ready(function(){
 
    // show list of announcements on first load
    showAnnouncements();
 
});
 
// showAnnouncements() method
function showAnnouncements(){
    //get list of announcements from the API
    $.getJSON("http://utahbearsbaseball.net/api/announcements/read.php", function(response){

    });

    // html for listing products
var read_announcements_html=`
<!-- start table -->
<table class='table table-bordered table-hover'>
 
    <!-- creating our table heading -->
    <tr>
        <th>Date</th>
        <th>Body</th>
    </tr>`;
    //rows go here 
    // loop through returned list of data
$.each(response.records, function(key, val) {
 
    // creating new table row per record
    read_announcements_html+=`
        <tr>
 
            <td>` + val.Date + `</td>
            <td>` + val.Body + `</td>
        </tr>`;
});
 
// end table
read_announcements_html+=`</table>`;
// inject to 'page-content' of our app
$("#page-content").html(read_announcements_html);
};
