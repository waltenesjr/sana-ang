(function ($) {
    "use strict";

    var slides = [
        {
            id: "1",
            titulo: "Licenciamento ambiental",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget.",
            link: "#services",
            imagem: "img/icon/licenca-ambiental.png"
        },
        {
            id: "2",
            titulo: "Agronomia",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/agronomia.png"
        },
        {
            id: "3",
            titulo: "Assessoria e treinamentos",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/assessoria-treinamentos.png"
        },
        {
            id: "4",
            titulo: "Comspostagem",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/compostagem.png"
        },
        {
            id: "5",
            titulo: "Georreferenciamento de imóveis rurais",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/georeferenciamento-rural.png"
        },
        {
            id: "6",
            titulo: "Cadastro Ambiental Rural(CAR)",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/car.png"
        },
        {
            id: "7",
            titulo: "Projetos Ambientais",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/projetos-ambientais.png"
        },
        {
            id: "8",
            titulo: "Planos Ambientais",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/planos-ambientais.png"
        },
        {
            id: "9",
            titulo: "Projetos Arquitetonicos",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/projetos-arquitetonicos.png"
        },
        {
            id: "10",
            titulo: "Mineração",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/mineracao.png"
        },
        {
            id: "11",
            titulo: "Monitoramento e Resgate de Fauna",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/monitoramento-resgate-fauna.png"
        },
        {
            id: "12",
            titulo: "EIA/RIMA",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/eia-rima.png"
        },
        {
            id: "13",
            titulo: "Educação Ambiental e Comunicação Social",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/educacao-ambiental-comunicacao-social.png"
        },
        {
            id: "14",
            titulo: "Gestão Ambiental",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/gestao-ambiental.png"
        },
        {
            id: "15",
            titulo: "Auditorias Internas e Externas",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/auditoria-internas-externas.png"
        },
        {
            id: "16",
            titulo: "Elaboração de Softwares Ambientais e APP",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/software-ambiental.png"
        },
        {
            id: "17",
            titulo: "Consultoria Agrícola",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/consultoria-agricola.png"
        },
        {
            id: "18",
            titulo: "Outorga",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/outorga.png"
        },
        {
            id: "19",
            titulo: "Engenharia Civil",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/engenharia-civil.png"
        },
        {
            id: "20",
            titulo: "Piscicultura",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/piscicultura.png"
        },
        {
            id: "21",
            titulo: "Execução de PRAD / Plantio de Mudas",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/prad.png"
        },
        {
            id: "22",
            titulo: "Recuperação de áreas degradadas",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/recuperacao-area-degradada.png"
        },
        {
            id: "23",
            titulo: "Implantação de ISO",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/implantacao-iso.png"
        },
        {
            id: "24",
            titulo: "Indústrias",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/industrias.png"
        },
        {
            id: "25",
            titulo: "Plano Municipal de Saneamento Basico",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/plano-municipal-saneamento-basico.png"
        },
        {
            id: "26",
            titulo: "Postos de Combustíveis",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/posto-combustivel.png"
        }
    ];

    var url = "https://sanambiental.com.br/novo/";
    //var url = "http://localhost:63342/sana-web/";

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    var servicoParam = getUrlParameter('servico');

    if (servicoParam === undefined) {
        $.each(slides, function () {
            $("#servicos").append(
                "<div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">" +
                    "<div class=\"icon\"><img src=\"" + this.imagem + "\"></div>" +
                    "<h4 class=\"title\"><a href=\"" + url + "servico.html?servico=" + this.id + "\">" + this.titulo + "</a></h4>" +
                "</div>"
            );
        });
    } else {
        $.each(slides, function () {
            if (this.id === servicoParam) {
                document.title = this.titulo + " | Sanambiental.com.br";

                $("#desc-servico").append(
                    "<div class='text-center'>" +
                        "<br>" +
                        "<a href=\"https://www.sanambiental.com.br\"><img src=\"img/logo-escuro.png\" alt=\"\" title=\"\" width=\"130\" height=\"38\"/></a>" +
                        "<br><br>" +
                        "<img src=\"" + this.imagem + "\" alt=\"" + this.title + "\">" +
                        "<h1 class=\"titulo-servico\">" + this.titulo + "</h1>" +
                    "</div>" +
                    "<br>" +
                    "<p>" + this.descricao + "</p>" +
                    "<br>" +
                    "<div class='text-center'>" +
                        "<a class=\"botao-voltar\" href=\"" + url + "index.html#services\">Voltar</a>" +
                    "</div>"
                );

                $("meta[name='title']").attr("content", this.titulo);
                $("meta[name='description']").attr("content", this.descricao);

                $("meta[property='og\\:title']").attr("content", this.titulo);
                $("meta[property='og\\:description']").attr("content", this.descricao);
                $("meta[property='og\\:image']").attr("content", url + this.imagem);

                $("meta[name='msapplication-TileImage']").attr("content", url + this.imagem);

                return;
            }
        });
    }

})(jQuery);

