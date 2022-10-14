

//   $(document).ready(function() {
//     $(".formsubmit").submit(function() {
//       alert($("header",this).val());
//     });
//   })

//   $(".fromsubmit").click(function (e) {
    
//     e.preventDefault();
// });
$(document).ready(function(){
    $('.heading').submit(function(event){
        event.preventDefault();
       var heading =  $(".header").val();
       console.log(heading);
       $("main").append("<section><h3>"+heading+"</h3></section>");
        $("#exampleModal1").modal('toggle');
    
    })
})



// $(".heading").submit(function(event){
//        event.preventDefault();
//     var heading = $("input[name='heading']",this.val());
//     $("main").append("<section><h1>"+heading+"</h1></section");
// })