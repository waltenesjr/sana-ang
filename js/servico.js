(function ($) {
    "use strict";

    var slides = [
        {
            id: "1",
            titulo: "LICENCIAMENTO AMBIENTAL",
            descricao: "A SanAmbiental realiza licenciamento ambiental de todos os tipos de empreendimentos, possuímos uma equipe técnica muito qualificada capaz de atender " +
                "todas as modalidades, desde a agropecuária às industrias, a saber o licenciamento ambiental compreende em, Licença Prévia, Licença de Instalação e Licença de " +
                "Operação.",
            link: "#services",
            imagem: "img/icon/licenca-ambiental.png"
        },

        /*{
            id: "2",
            titulo: "Agronomia",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/agronomia.png"
        },*/

        {
            id: "3",
            titulo: "ASSESSORIA E TREINAMENTOS",
            descricao: "A SanAmbiental realiza treinamentos nas áreas de saúde e segurança ocupacional, gerenciamento de resíduos para índústrias, além de prestar assessorias e " +
                "implementações como auditorias internas, criação e implantação de ordens de serviço entre vários programas de saúde e de serviços de apoio para o RH, contando " +
                "com uma equipe de profissionais altamente qualificada, motivando e respeitandos os preceitos éticos da legislação vigente.",
            link: "#services",
            imagem: "img/icon/assessoria-treinamentos.png"
        },

        {
            id: "4",
            titulo: "COMSPOSTAGEM",
            descricao: "A SanAmbiental atua na área de coleta, acondicionamento e tratamento de resíduos orgânicos utilizando a metodologia de compostagem onde o resíduos se " +
                "transformam em material orgânico como o húmus.",
            link: "#services",
            imagem: "img/icon/compostagem.png"
        },

        {
            id: "5",
            titulo: "GEORREFERENCIAMENTO DE IMÓVEIS RURAIS",
            descricao: "A Sanambiental possuí equipamentos de alta qualidade para a elaboração de Georreferenciamento de imvéis rurais, que é o mapeamento de um imóvel rural referenciando os vértices de seu perímetro ao Sistema Geodésico Brasileiro, definindo sua área e sua posição geográfica. Serve para a regularização registral dos imóveis rurais, segundo a nova legislação (Lei 10.267/01 e Decretos 4.449/02 e 5.570/05).\n" +
                "Atuamos em todo o Estado de Goiás, Tocantins, Mato Grosso, e Minas Gerais",
            link: "#services",
            imagem: "img/icon/georeferenciamento-rural.png"
        },

        {
            id: "6",
            titulo: "CADASTRO AMBIENTAL RURAL(CAR)",
            descricao: "O Cadastro Ambiental Rural (CAR) é um instrumento fundamental para auxiliar no processo de regularização ambiental de propriedades e posses rurais. " +
                "Consiste no levantamento de informações georreferenciadas do imóvel, com delimitação das Áreas de Proteção Permanente (APP), Reserva Legal (RL), " +
                "remanescentes de vegetação nativa, área rural consolidada, áreas de interesse social e de utilidade pública, com o objetivo de traçar um mapa digital a " +
                "partir do qual são calculados os valores das áreas para diagnóstico ambiental.",
            link: "#services",
            imagem: "img/icon/car.png"
        },

        {
            id: "7",
            titulo: "PROJETOS AMBIENTAIS",
            descricao: "A Sanambiental realiza os mais diversificados projetos como Projeto Básico Ambiental, Projetos Arquitetônicos, Projetos elétricos, Projetos Civis, " +
                "Projetos Hidrossanitários, possuímos um equipe multidisciplinar e altamente qualificada e eficiente, entregamos nossos projetos dentro do prazo oferecido, " +
                "agilidade e qualidade é nosso lema.",
            link: "#services",
            imagem: "img/icon/projetos-ambientais.png"
        },

        {
            id: "8",
            titulo: "PLANOS AMBIENTAIS",
            descricao: "A SanAmbiental Realiza os mais diversificados planos ambientais, como Plano de Controle Ambiental, Plano de Gestão e Controle das Obras , " +
                "Plano de Monitoramento da Qualidade do Ar , Monitoramento dos Níveis de Ruídos e de Vibrações, Plano de Contingência para Situações de Emergência e " +
                "Procedimentos Relativos à Minimização de Riscos de Acidentes, Gerenciamento de Áreas e Materiais Contaminados, Plano de Transplante e Plantio de Árvores, " +
                "Plano de Educação Ambiental, nossos profissionais são capacitados e eficientes. Esses planos são necessários para o melhor e bom desenvolvimento da empresa, " +
                "indústria ou comércio, Auxiliando inclusive na gestão eficiente do empreendimento.",
            link: "#services",
            imagem: "img/icon/planos-ambientais.png"
        },

        /*{
            id: "9",
            titulo: "Projetos Arquitetonicos",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/projetos-arquitetonicos.png"
        },*/

        /*{
            id: "10",
            titulo: "Mineração",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/mineracao.png"
        },*/

        /*{
            id: "11",
            titulo: "Monitoramento e Resgate de Fauna",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/monitoramento-resgate-fauna.png"
        },*/

        /*{
            id: "12",
            titulo: "EIA/RIMA",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/eia-rima.png"
        },*/

        /*{
            id: "13",
            titulo: "Educação Ambiental e Comunicação Social",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/educacao-ambiental-comunicacao-social.png"
        },*/

        {
            id: "14",
            titulo: "GESTÃO AMBIENTAL",
            descricao: "A Sanambeintal realiza Programas de Gestão Ambiental Possibilita a interação entre todos os planos e programas ambientais previstos ou em execução, " +
                "o PGA cria mecanismos eficientes que garantem a execução das ações planejadas de prevenção, controle e monitoramento dos impactos ambientais, " +
                "que oferecerá um elevado padrão de qualidade ambiental na implantação, operação e desativação do empreendimento, garantindo o cumprimento dos preceitos legais",
            link: "#services",
            imagem: "img/icon/gestao-ambiental.png"
        },

       /* {
            id: "15",
            titulo: "Auditorias Internas e Externas",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/auditoria-internas-externas.png"
        },*/

        /*{
            id: "16",
            titulo: "Elaboração de Softwares Ambientais e APP",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/software-ambiental.png"
        },*/

       /* {
            id: "17",
            titulo: "Consultoria Agrícola",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/consultoria-agricola.png"
        },*/

        /*{
            id: "18",
            titulo: "Outorga",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/outorga.png"
        },*/

        /*{
            id: "19",
            titulo: "Engenharia Civil",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/engenharia-civil.png"
        },*/

        /*{
            id: "20",
            titulo: "Piscicultura",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/piscicultura.png"
        },*/

        {
            id: "21",
            titulo: "Execução de PRAD / Plantio de Mudas",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/prad.png"
        },

        {
            id: "22",
            titulo: "PLANO DE RECUPERAÇÃO DE ÁREAS DEGRADADAS (PRAD)",
            descricao: "A SanAmbiental atual na elaboração e execução de PRAD, que é um instrumento de gestão ambiental, instituído pelo Decreto 97.632/89, " +
                "e contém o planejamento das ações que objetivam o retorno do sítio degradado a uma forma de utilização, de acordo com um plano pré-estabelecido para o uso do solo, " +
                "visando a obtenção da estabilidade do meio ambiente e ecológica. É relacionado à atividades que envolvem supressão vegetal, terraplenagem, exploração de jazidas, " +
                "além da recuperação de APP (Área de Preservação Permanente) e de RL (Reserva Legal).",
            link: "#services",
            imagem: "img/icon/recuperacao-area-degradada.png"
        }

       /* {
            id: "23",
            titulo: "Implantação de ISO",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/implantacao-iso.png"
        },*/

       /* {
            id: "24",
            titulo: "Indústrias",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/industrias.png"
        },*/

        /*{
            id: "25",
            titulo: "Plano Municipal de Saneamento Basico",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/plano-municipal-saneamento-basico.png"
        },*/

       /* {
            id: "26",
            titulo: "Postos de Combustíveis",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/posto-combustivel.png"
        }*/
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
                        "<a href=\"https://www.sanambiental.com.br\"><img src=\"img/logo-escuro.png\" alt=\"consultoria ambiental\" title=\"\" width=\"130\" height=\"38\"/></a>" +
                        "<br><br>" +
                        "<img src=\"" + this.imagem + "\" alt=\"" + this.titulo + "\">" +
                        "<h1 class=\"titulo-servico\">" + this.titulo + "</h1>" +
                    "</div>" +
                    "<br>" +
                    "<p align='justify'>" + this.descricao + "</p>" +
                    "<br>" +
                    "<div class='text-center'>" +
                        "<a class=\"botao-voltar\" href=\"" + url + "index.html#services\">Voltar</a>" +
                        "<br><br>" +
                        "<a target=\"_blank\" href=\"https://whatsapp.sanambiental.com.br\" class=\"contato-rede-social\"><i style=\"color: #35633e\" class=\"fa fa-whatsapp\"></i></a>" +
                        "<a target=\"_blank\" href=\"tel:+5562991140786\" class=\"contato-rede-social\"><i style=\"color: #35633e\" class=\"fa fa-phone\"></i></a>" +
                        "<a target=\"_blank\" href=\"mailto:contato@sanambiental.com.br\" class=\"contato-rede-social\"><i style=\"color: #35633e\" class=\"fa fa-envelope-o\"></i></a>" +
                    "</div>"
                );

                var desc = this.descricao.substring(0, 271);
                var uri = url + "servico.html?servico=" + this.id;

                var metaTitle = document.createElement('meta');
                metaTitle.name='title';
                metaTitle.setAttribute('content', document.title);
                document.getElementsByTagName('head')[0].appendChild(metaTitle);

                var metaDesc = document.createElement('meta');
                metaDesc.name='description';
                metaDesc.setAttribute('content', desc);
                document.getElementsByTagName('head')[0].appendChild(metaDesc);

                var metaURL = document.createElement('meta');
                metaURL.name='url';
                metaURL.setAttribute('content', uri);
                document.getElementsByTagName('head')[0].appendChild(metaURL);

                /* Tags Twitter */
                $("meta[name='twitter:url']").attr("content", uri);
                $("meta[name='twitter:title']").attr("content", document.title);
                $("meta[name='twitter:description']").attr("content", desc);
                $("meta[name='twitter:image']").attr("content", url + "img/logo-escuro.png");

                /* Tags Facebook */
                $("meta[property='og\\:title']").attr("content", document.title);
                $("meta[property='og\\:description']").attr("content", desc);
                $("meta[property='og\\:image']").attr("content", url + "img/logo-escuro.png");
                $("meta[property='og\\:url']").attr("content", uri);

                $("meta[name='msapplication-TileImage']").attr("content", url + "img/logo-escuro.png");

                return;
            }
        });
    }

})(jQuery);

