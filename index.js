$(document).ready(function(){
    $('.heading').submit(function(event){
        event.preventDefault();

       var heading = $(".header").val();
       console.log(heading);
       $("main").append("<section><h1>"+heading+"</h1></section>");
        $("#exampleModal1").modal('toggle');
        $(".SubHeadingselectValue").append("<option><h1>"+heading+"</h1></option>");
        
        $("main section h1").each(function (index){
            var indx = index + 1;
            console.log(indx)
            var txtval = $(this).text();
            console.log(txtval)
           
        }) 
        
    })
})

$(document).ready(function(){
    $('.SubHeading').submit(function(event){
        event.preventDefault();
        var subheading = $('.subheadinginputval').val();
        console.log(subheading);
        $("section").append("<div><h3>"+subheading+"</h3></div>"); 
        $("h3").css({
            "margin-left":"20px"
            });
        $(".formselectValue").append("<option><h1>"+subheading+"</h1></option>");

    })
})

$(document).ready(function(){
    $('.formheading').submit(function(event){
        event.preventDefault();
        var Formheading = $('.forminputvalue').val();
        console.log(Formheading);   
        $("main").append("<div><p>"+Formheading+"</p></div>")
        $('p').css({
            "margin-left":"35px",
            "font-size":"40px"
        })     

    })



})
