
barra=document.querySelector(".barra");

barra.onclick = function(){
   BarraNavegacion =document.querySelector(".barra-menu");
   BarraNavegacion.classList.toggle("active");
}

    $(document).ready(function() {
        $("#barra-menu a").on("click", function(event) {
            let seccion = $(this).attr("href");
            $("body, html").animate({
                scrollTop: $(seccion).offset().top - 130
            }, 800);
            event.preventDefault();
        });
    });


    
