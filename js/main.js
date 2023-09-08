(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -5);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // ======================

    function verificarTamanhoDaTela() {
        var larguraDaTela = $(window).width(); // Obtém a largura da tela usando jQuery

        // Verifica se a largura da tela é menor que X pixels (substitua X pelo valor desejado)
        if (larguraDaTela < 992) {
            // Altere o SRC da imagem para a versão menor
            $("#minha-imagem").attr("src", "img/hero-min.jpg");
        } else {
            // Caso contrário, mantenha o SRC da imagem como a versão grande
            $("#minha-imagem").attr("src", "img/hero-max.jpg");
        }
    }

    // Adicione um ouvinte de evento para verificar o tamanho da tela quando a janela é redimensionada
    $(window).resize(verificarTamanhoDaTela);

    // Verifique o tamanho da tela quando a página é carregada
    verificarTamanhoDaTela();

   // ======================

    
})(jQuery);

