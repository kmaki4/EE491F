$(document).ready(function() {
    console.log("ready!");
    $("button").html("Click Me (Initialize)")
    $("button").on("click", function(event){
        //$("p").toggleClass('warning');
        $("p").toggle("slow");
    });
});