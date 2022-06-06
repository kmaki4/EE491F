$(document).ready(function() {
    $("#button1").on("click", function(){
        //$("p").toggleClass('warning');
        $("p").toggle("slow");
    });

    $("#button2").on("click", function(){
        $("#header").css("border", "3px solid red");
    });

    $("#button3").on("click", function(){
        $("#header").css("border", "0");
    });

    $("#button4").on("click", function(){
        $(".change_color").toggleClass("main");
    });

    $("#button5").on("click", function(){
        $("#list1").append("<li>Added Item</li>");
    });

    $("#button6").on("click", function(){
        $(".alert:first").replaceWith("<p>Hello World!</p>");
    });

    $(".sample_text").hover(function(){
        $(this).css("background-color", "yellow");
    }, function(){
        $(this).css("background-color", "transparent")
    });

    $("#button7").on("click", function(){
        $("ul.parent-child > li").css("border", "3px double red");
    });

    $("#button8").on("click", function(){
        $("#sample_list li").first().css("background-color", "blue");
    });
        
    $("#button8").on("click", function(){
        $("#sample_list li").last().css("background-color", "orange")
    });
});