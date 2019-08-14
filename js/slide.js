(function ($) {
    "use strict";

    var slides = [
        {
            titulo: "LICENCIAMENTO AMBIENTAL",
            descricao: "Vem com a Sana, solicite-nos um orçamento.",
            link: "#services",
            imagem: "img/intro-carousel/4.jpg"
        },
        {
            titulo: "POSTOS DE COMBUSTÍVEIS",
            descricao: "Vem com a Sana, solicite-nos um orçamento.",
            link: "#services",
            imagem: "img/intro-carousel/1.jpg"
        },
        {
            titulo: "PLANO DE RECUPERAÇÃO DE ÁREAS DEGRADADAS (PRAD)",
            descricao: "Vem com a Sana, solicite-nos um orçamento.",
            link: "#services",
            imagem: "img/intro-carousel/2.jpg"
        },
        {
            titulo: "EXECUÇÃO DE PRAD / PLANTIO DE MUDAS",
            descricao: "Vem com a Sana, solicite-nos um orçamento.",
            link: "#services",
            imagem: "img/intro-carousel/3.jpg"
        }
    ];

    var slideActive = true;
    $.each(slides, function () {
        if (slideActive) {
            $("#slide-carousel").append(
                "<div class=\"carousel-item active\">" +
                    "<div class=\"carousel-background\"><img src=\"" + this.imagem + "\"></div>" +
                        "<div class=\"carousel-container\">" +
                            "<div class=\"carousel-content\">" +
                                "<h1>" + this.titulo + "</h1>" +
                                "<p>" + this.descricao + "</p>" +
                                "<a target=\"_blank\" href=\"https://whatsapp.sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-whatsapp\"></i></a>" +
                                "<a href=\"tel:+5562991140786\" class=\"contato-rede-social\"><i class=\"fa fa-phone\"></i></a>" +
                                "<a href=\"mailto:contato@sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-envelope-o\"></i></a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>"
            );
            slideActive = false;
        } else {
            $("#slide-carousel").append(
                "<div class=\"carousel-item\">\n" +
                    "<div class=\"carousel-background\"><img src=\"" + this.imagem + "\"></div>" +
                        "<div class=\"carousel-container\">" +
                            "<div class=\"carousel-content\">" +
                                "<h1>" + this.titulo + "</h1>" +
                                "<p>" + this.descricao + "</p>" +
                                "<a target=\"_blank\" href=\"https://whatsapp.sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-whatsapp\"></i></a>" +
                                "<a href=\"tel:+5562991140786\" class=\"contato-rede-social\"><i class=\"fa fa-phone\"></i></a>" +
                                "<a href=\"mailto:contato@sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-envelope-o\"></i></a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>"
            );
        }
    });

    // Intro carousel
    var introCarousel = $(".carousel");
    var introCarouselIndicators = $(".carousel-indicators");
    introCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
        (index === 0) ?
            introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
            introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

        $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') + "')");
        $(this).children('.carousel-background').remove();
    });

    $(".carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical"
    });

})(jQuery);

