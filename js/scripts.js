$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause"); 
            }
     });
     window.onscroll = function() {scrollFunction()};
     function scrollFunction() {
       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         document.getElementById("NavBarContainer").classList.remove('navbar-expand-sm');
         document.getElementById("NavBarContainer").classList.add('navbar-expand-xl');
         document.getElementById("Logo").classList.add('small');
       } else {
        document.getElementById("NavBarContainer").classList.remove('navbar-expand-xl');
        document.getElementById("NavBarContainer").classList.add('navbar-expand-sm');
        document.getElementById("Logo").classList.remove('small');
       }
     }

     

});
