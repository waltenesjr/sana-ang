(function ($) {
    "use strict";

    var slides = [
        {
            titulo: "Poços de monitoramento",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "#services",
            imagem: "img/intro-carousel/1.jpg"
        },
        {
            titulo: "Execução de PRAD",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "#services",
            imagem: "img/intro-carousel/2.jpg"
        },
        {
            titulo: "Plantio de muda",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "#services",
            imagem: "img/intro-carousel/3.jpg"
        },
        {
            titulo: "Licenças ambientais",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
                "             <h2>" + this.titulo + "</h2>\n" +
                "             <p>" + this.descricao + "</p>\n" +
                "             <a href=\"" + this.link + "\" class=\"btn-get-started scrollto\">Saiba mais</a>\n" +
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
                "             <h2>" + this.titulo + "</h2>\n" +
                "             <p>" + this.descricao + "</p>\n" +
                "             <a href=\"" + this.link + "\" class=\"btn-get-started scrollto\">Saiba mais</a>\n" +
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
    introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
        (index === 0) ?
            introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
            introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

        $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
        $(this).children('.carousel-background').remove();
    });

    $(".carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll:"vertical"
    });
})(jQuery);

