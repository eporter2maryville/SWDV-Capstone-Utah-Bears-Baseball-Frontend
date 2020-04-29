$(document).ready(function () {
    console.log("Ready");
    // app html
    var app_html = `
    <div class='container'>
    <div class="col-sm-14 col-md-14 col-lg-14">
    <div class="row-full">
    <!-- Banner to go here -->
    </div>
    </div>
        <div class='page-header'>
        <div class="container">
            
                <div class="container">
                    <div class="row" style="text-align:center">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="col-sm-3">
                                <h1><a href=home.html>Home</a></h1>
                            </div>
                            <div class="col-sm-3">
                                <h1><a href=Calendar.html>Calendar</a></h1>
                            </div>
                            <div class="col-sm-3">
                                <h1><a href=About.html>About the Team</a></h1>
                                </h1>
                            </div>
                            <div class="col-sm-3">
                                <h1><a href=Contact.html>Contact</a> </h1>
                            </div>
                            <!--
                            <div class="col-sm-2">
                                <h1><a href=Admin.html>Admin</a></h1>
                            </div>
                            -->
                        </div>
                    </div>
                </div>
            </div>
        
        </div>



    </div>`;

    // inject to 'app' in all html pages
    $("#app").html(app_html);

});
 
// change page title
function changePageTitle(page_title){
 
    // change page title
    $('#page-title').text(page_title);
 
    // change title tag
    document.title=page_title;
}
 
// function to make form values to json format
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};