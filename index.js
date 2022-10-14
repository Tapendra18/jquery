


$(document).ready(function(){
    $('.heading').submit(function(event){
        event.preventDefault();
       var heading =  $(".header").val();
       console.log(heading);
       $("main").append("<section><h1>"+heading+"</h1></section>");
        $("#exampleModal1").modal('toggle');
        $(".SubHeadingValue").append("<option><h1>"+heading+"</h1></option>");
        
        
        // $("#exampleModal1").modal('toggle');
    })
})

$(document).ready(function(){
    $('.SubHeading').submit(function(event){
        event.preventDefault();
        var subheading = $('.subheadingval').val();
        console.log(subheading);
        $("section").append("<div><h3>"+subheading+"</h3></div>"); 
        $("h3").css({
            "margin-left":"20px"
            });
        // $(".formValue").append("<option><h1>"+formvalue+"</h1></option>");

    })
})

// $(".heading").submit(function(event){
//        event.preventDefault();
//     var heading = $("input[name='heading']",this.val());
//     $("main").append("<section><h1>"+heading+"</h1></section");
// })