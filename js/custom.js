(function ($) {
    "use strict";
    $(document).ready(function () {
        /*MENU DE NAVEGACIÓN*/
        $('.btn-main').click(function(){
            $('.btn-main').toggleClass('active');
        });
        $('.btn-main').click(function(){
            $('#nav').slideToggle(150);
        });
        /*=====================*/
        /*DESPLAZAR HACIA ARRIBA*/
        $('.up').click(function(){
            $('body,html').animate({
                scrollTop:'0px' 
            }, 300); 
        });
        
        $(window).scroll(function(){
            if($(this).scrollTop() > 200){
                    $('.up').slideDown(300);
                }else{
                    $('.up').slideUp(300);
                }
        });
        /*=====================*/
        /****---- WHATSAPP WINDOW AND MOVILE START ----****/
        function mainmenu() {
            var ba=['nokia','iphone','blackberry','sony','lg',
            'htc_tattoo','samsung','symbian','SymbianOS','elaine','palm',
            'series60','windows ce','android','obigo','netfront',
            'openwave','mobilexplorer','operamini'];
                var b, ua=navigator.userAgent.toLowerCase();
                for(var i=0; i <ba.length; i++){
                    if(ua.indexOf(ba[i]) > -1){
                        b=ba[i];
                        break;
                    }
                }
                if(b=='nokia' || b=='iphone' || b=='blackberry' || b=='sony' || b=='lg' || b=='htc_tattoo' || b=='samsung' || b=='symbian' || b=='SymbianOS' || b=='elaine' || b=='palm' || b=='series60' || b=='windows ce' || b=='android' || b=='obigo' || b=='netfront' || b=='openwave' || b=='mobilexplorer' || b=='operamini'){
                    $("#whatsend").attr("href","https://api.whatsapp.com/send?l=es&phone=51995218379&text=%C2%A1Hola!%20bienvenido%20a%20Fundautos,%20porfavor%20ind%C3%ADquenos%20su%20requerimimento.");
                    
                }else{
                    $("#whatsend").attr("href","https://web.whatsapp.com/send?l=es&phone=51995218379&text=%C2%A1Hola!%20bienvenido%20a%20Fundautos,%20porfavor%20ind%C3%ADquenos%20su%20requerimimento.");
                }
                }
                mainmenu();
        /****---- WHATSAPP WINDOW AND MOVILE END ----****/
        
        
        /*VALIDAR FORMULARIO*/
        $('#btnSend').click(function(){
            var errores= '';

            if($('#name').val() == '' ){
                errores += '<p>Escriba un nombre</p>';
                $('#name').css("border-bottom-color","#F14B4B")
            }else{
                $('#name').css("border-bottom-color","#0bd175")
            }
            if($('#email').val() == '' ){
                errores += '<p>Ingrese un correo</p>'
                $('#email').css("border-bottom-color","#F14B4B")
            }else{
                $('#email').css("border-bottom-color","#0bd175")
            }
            if($('#mensaje').val() == '' ){
                errores += '<p>Escriba un mensaje</p>'
                $('#mensaje').css("border-bottom-color","#F14B4B")
            }else{
                $('#mensaje').css("border-bottom-color","#0bd175")
            }
            if(errores == '' == false){
                var mensajeModal = '<div class="modal-wrap">'+
                                        '<div class="mensaje-modal">'+
                                            '<h3>Errores detectados</h3>'+
                                            errores+
                                            '<span id="btnClose">Cerrar</span>'+
                                        '</div>'+
                                    '</div>'
                
                $('body').append(mensajeModal);
            }

            $('#btnClose').click(function(){
                $('.modal-wrap').remove();
            });
            
        }); 
        /*================*/
            $('#close-answer').click(function(){
                $('.answer').remove();
            });
        /*==================*/
    });
    /*STICKY HEADER NAV*/
    const resize = () => {
        if(innerWidth > 767) {
            $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 220) {
                $(".header").addClass("sticky");
                $(".top-socials").removeClass("hide");
            } else {
                $(".header").removeClass("sticky");
            }
        });
        }else{
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 450) {
                    $(".header").addClass("sticky");
                    $(".top-socials").addClass("hide");
                } else {
                    $(".header").removeClass("sticky");
                    $(".top-socials").removeClass("hide");
                }
            });
        }
    } 
    addEventListener('resize',resize)
    addEventListener('DOMContentLoaded',resize)
    /*===================*/
    
})(jQuery);