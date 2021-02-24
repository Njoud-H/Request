/* Clicks on Buttons */

console.log("profill");
$("#1").on("click", function(){
    $("#info").removeClass("content");
    $("#feedBack").addClass("content");
    $("#lastSub").addClass("content");
});

$("#2").on("click",function(){
   $("#feedBack").removeClass("content");
   $("#info").addClass("content");
   $("#lastSub").addClass("content");
}); 

$("#3").on("click",function(){
$("#lastSub").removeClass("content");
$("#info").addClass("content");
   $("#feedBack").addClass("content");
});

$(".back-to-home").on("click" , ()=>{
   location.href = "main";
})


console.log("Seeker Profile")
$(".back-to-home").on("click" , ()=>{
    location.href = "main";
 })


 var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });

