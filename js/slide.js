(function ($) {
    "use strict";

    var slides = [
        {
            titulo: "Poços de monitoramento",
            descricao: "Entre em contato com a SanAmbiental e faça seu orçamento!",
            link: "#services",
            imagem: "img/intro-carousel/1.jpg"
        },
        {
            titulo: "Execução de PRAD",
            descricao: "Entre em contato com a SanAmbiental e faça seu orçamento!",
            link: "#services",
            imagem: "img/intro-carousel/2.jpg"
        },
        {
            titulo: "Plantio de muda",
            descricao: "Entre em contato com a SanAmbiental e faça seu orçamento!",
            link: "#services",
            imagem: "img/intro-carousel/3.jpg"
        },
        {
            titulo: "Licenças ambientais",
            descricao: "Entre em contato com a SanAmbiental e faça seu orçamento!",
            link: "#services",
            imagem: "img/intro-carousel/4.jpg"
        }
    ];

    var slideActive = true;
    $.each(slides, function () {
        if (slideActive) {
            $("#slide-carousel").append(
                "<div class=\"carousel-item active\">\n" +
                "   <div class=\"carousel-background\"><img src=\"" + this.imagem + "\" alt=\"\"></div>\n" +
                "      <div class=\"carousel-container\">\n" +
                "          <div class=\"carousel-content\">\n" +
                "             <h1>" + this.titulo + "</h1>\n" +
                "             <p>" + this.descricao + "</p>\n" +
                "             <a target=\"_blank\" href=\"https://whatsapp.sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-whatsapp\"></i></a>" +
                "             <a target=\"_blank\" href=\"tel:+5562991140786\" class=\"contato-rede-social\"><i class=\"fa fa-phone\"></i></a>" +
                "             <a target=\"_blank\" href=\"mailto:contato@sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-envelope-o\"></i></a>" +
                // "             <a href=\"" + this.link + "\" class=\"btn-get-started scrollto\">Saiba mais</a>\n" +
                "          </div>\n" +
                "      </div>\n" +
                "   </div>\n" +
                "</div>"
            );
            slideActive = false;
        } else {
            $("#slide-carousel").append(
                "<div class=\"carousel-item\">\n" +
                "   <div class=\"carousel-background\"><img src=\"" + this.imagem + "\" alt=\"\"></div>\n" +
                "      <div class=\"carousel-container\">\n" +
                "          <div class=\"carousel-content\">\n" +
                "             <h1>" + this.titulo + "</h1>\n" +
                "             <p>" + this.descricao + "</p>\n" +
                "             <a target=\"_blank\" href=\"https://whatsapp.sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-whatsapp\"></i></a>" +
                "             <a target=\"_blank\" href=\"tel:+5562991140786\" class=\"contato-rede-social\"><i class=\"fa fa-phone\"></i></a>" +
                "             <a target=\"_blank\" href=\"mailto:contato@sanambiental.com.br\" class=\"contato-rede-social\"><i class=\"fa fa-envelope-o\"></i></a>" +
                // "             <a href=\"" + this.link + "\" class=\"btn-get-started scrollto\">Saiba mais</a>\n" +
                "          </div>\n" +
                "      </div>\n" +
                "   </div>\n" +
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

