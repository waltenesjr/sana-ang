(function ($) {
    "use strict";

    var slides = [
        {
            id: "1",
            titulo: "LICENCIAMENTO AMBIENTAL",
            descricao: "A SanAmbiental realiza licenciamento ambiental de todos os tipos de empreendimentos, possuímos uma equipe técnica muito qualificada capaz de atender " +
                "todas as modalidades, desde a agropecuária às industrias, a saber o licenciamento ambiental compreende em, Licença Prévia, Licença de Instalação e Licença de Operação.",
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
                "implementações como auditorias internas, criação e implantação de ordens de serviço entre vários programas de saúde e de serviços de apoio para o RH, " +
                "contando com uma equipe de profissionais altamente qualificada, motivando e respeitandos os preceitos éticos da legislação vigente.",
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

        {
            id: "9",
            titulo: "PROJETOS ARQUITETÔNICOS",
            descricao: "A Sanambiental Realiza o projeto que você tiver em mente, você sonha nós colocamos no papel para você, acompanhamento durante as etapas de construção e " +
                "caso desejem também temos equipe de obras civis. Fazemos planta baixa, de empreendimentos já constrídos também.",
            link: "#services",
            imagem: "img/icon/projetos-arquitetonicos.png"
        },

        {
            id: "10",
            titulo: "MINERAÇÃO",
            descricao: "",
            link: "https://sanambiental.com.br/novo/mineracao.html",
            imagem: "img/icon/mineracao.png"
        },

        /*{
            id: "11",
            titulo: "Monitoramento e Resgate de Fauna",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/monitoramento-resgate-fauna.png"
        },*/

        {
            id: "12",
            titulo: "EIA/RIMA",
            descricao: "O EIA/RIMA foi instituído no Brasil pela Política Nacional do Meio Ambiente (PNMA), Lei 6938/81. A resolução do Conselho Nacional de Meio Ambiente " +
                "(CONAMA) nº 001 de 1986, regulamenta os critérios básicos e as diretrizes gerais para aplicação da Avaliação de Impacto Ambiental, " +
                "assim como define as atividades que se enquadram nesta modalidade e ainda estabelece os conteúdos mínimos para a elaboração do " +
                "Estudo de Impacto Ambiental e do Relatório de Impacto Ambiental (EIA/RIMA).",
            link: "#services",
            imagem: "img/icon/eia-rima.png"
        },

        {
            id: "13",
            titulo: "EDUCAÇÃO AMBIENTAL E COMUNICAÇÃO SOCIAL",
            descricao: "Nós da SanAmbiental Engenharia, elaboramos programas de Educação ambiental e Comunicação Social, para diversos tipos de público, como escolas desde o primário ao ensino superior, para órgão públicos e empresas privadas.\n" +
                "Atuamos no Plano Municipal de Saneamento Básico, onde promovemos ações de educação ambiental para a terceira idade.",
            link: "#services",
            imagem: "img/icon/educacao-ambiental-comunicacao-social.png"
        },

        {
            id: "14",
            titulo: "GESTÃO AMBIENTAL",
            descricao: "A SanAmbiental atual na elaboração e execução de PRAD, que é um instrumento de gestão ambiental, instituído pelo Decreto 97.632/89, e contém o " +
                "planejamento das ações que objetivam o retorno do sítio degradado a uma forma de utilização, de acordo com um plano pré-estabelecido para o uso do solo, " +
                "visando a obtenção da estabilidade do meio ambiente e ecológica. É relacionado à atividades que envolvem supressão vegetal, terraplenagem, exploração de " +
                "jazidas, além da recuperação de APP (Área de Preservação Permanente) e de RL (Reserva Legal).",
            link: "#services",
            imagem: "img/icon/gestao-ambiental.png"
        },

        {
            id: "15",
            titulo: "AUDITORIAS INTERNAS E EXTERNAS",
            descricao: "A Auditoria Ambiental é uma ferramenta de gestão ambiental definida pela norma NBR ISSO 14.010 como um “processo sistemático e documentado de verificação, " +
                "executado para obter e avaliar, de forma objetiva, evidências de auditoria para determinar se as atividades, eventos, sistemas de gestão e condições ambientais " +
                "específicos ou as informações relacionadas a estes estão em conformidade com os critérios de auditoria e para comunicar os resultados deste processo ao cliente”. " +
                "Assim, é um procedimento que deve ser realizado por profissionais técnicos ou empresas terceirizadas, gerido por um auditor líder e executado por uma equipe " +
                "preparada, visando avaliar o desempenho e o comprometimento ambiental de empresas e indústrias. Nós da SanAmbiental temos a melhor equipe preparada para atender " +
                "as suas necessidades.",
            link: "#services",
            imagem: "img/icon/auditoria-internas-externas.png"
        },

        {
            id: "16",
            titulo: "ELABORAÇÃO DE SOFTWARES AMBIENTAIS E APP",
            descricao: "A SanAmbiental Engenharia, agora também é Sana WEB, nós criamos aplicativos, sites e programas para gerenciar o seu negócio, " +
                "seja ele qual for, você fala sua idéia e nós criamos para você, criamos inclusive sistesmas de gerenciamento de residuos perigosos, sistema de " +
                "gerenciamento de controle de estoque, e muito mais. ",
            link: "#services",
            imagem: "img/icon/software-ambiental.png"
        },

        {
            id: "17",
            titulo: "CONSULTORIA AGRÍCOLA",
            descricao: "Para você amigo agricultor ou pecuarista, nós temos um corpo técnico excelente para lhe atender, podendo auxiliar na criação de mecanismos de " +
                "contenção de gastos, melhoramento de produção, métodos de garantia e qualidade do plantio e ou criação, instalão e escolha de PIVÔ, combate à pragas e muito mais.",
            link: "#services",
            imagem: "img/icon/consultoria-agricola.png"
        },

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

        /*{
            id: "21",
            titulo: "Execução de PRAD / Plantio de Mudas",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vitae rhoncus convallis. Vestibulum porttitor, leo vel varius luctus, purus sapien consectetur ipsum, sit amet aliquet enim nunc commodo nisl. Aenean dolor erat, ultrices non gravida sed, suscipit ut ex. Mauris pretium luctus lectus ut tristique. Praesent ornare finibus orci, a faucibus sapien hendrerit et. Proin non est porttitor velit tincidunt sagittis. Cras eget porta lectus, sed faucibus odio. Phasellus lobortis, nibh quis aliquam suscipit, lacus ex hendrerit ex, vel bibendum felis sapien sed massa. Sed sagittis diam nulla, ut volutpat mi efficitur eget. ",
            link: "#services",
            imagem: "img/icon/prad.png"
        },*/

        {
            id: "22",
            titulo: "PLANO DE RECUPERAÇÃO DE ÁREAS DEGRADADAS (PRAD)",
            descricao: "A SanAmbiental atual na elaboração e execução de PRAD, que é um instrumento de gestão ambiental, instituído pelo Decreto 97.632/89, e contém o " +
                "planejamento das ações que objetivam o retorno do sítio degradado a uma forma de utilização, de acordo com um plano pré-estabelecido para o uso do solo, " +
                "visando a obtenção da estabilidade do meio ambiente e ecológica. É relacionado à atividades que envolvem supressão vegetal, terraplenagem, exploração de " +
                "jazidas, além da recuperação de APP (Área de Preservação Permanente) e de RL (Reserva Legal).",
            link: "https://sanambiental.com.br/novo/prad.html",
            imagem: "img/icon/recuperacao-area-degradada.png"
        },

        {
            id: "23",
            titulo: "IMPLANTAÇÃO DE ISO",
            descricao: "A SanAmbiental utiliza os melhores métodos existentes,  criados para otimizar o processo de certificação e gestão da qualidade. Utilizamos " +
                "software de alta qualidade, que simplifica muito a implementação e a gestão da qualidade. \n" +
                "Além disso, a utilização do software  permite que você compartilhe seu SGQ com nossos especialistas, o que torna o processo de consultoria muito mais " +
                "simples e fácil. Assim, já não é necessário que seu consultor desloque-se até a sua organização para acompanhar o seu SGQ.",
            link: "#services",
            imagem: "img/icon/implantacao-iso.png"
        },

        {
            id: "24",
            titulo: "INDÚSTRIAS",
            descricao: "A Licença Ambiental é uma exigência legal para indústrias e empreendimentos que utilizam recursos naturais ou que possam provocar determinado tipo de degradação ao meio ambiente. É um mecanismo pelo qual é permitida a localização, instalação, ampliação e operação dessas empresas.\n" +
                "Todo negócio ou atividade que possa provocar potencial impacto ambiental deve estar sujeito ao licenciamento ambiental. Conforme a Resolução CONAMA nº 237/1997.",
            link: "#services",
            imagem: "img/icon/industrias.png"
        },

        {
            id: "25",
            titulo: "PLANO MUNICIPAL DE SANEAMENTO BASICO",
            descricao: "O Plano de Saneamento é uma exigência da Lei Federal 11.445/2007 e trata dos serviços de abastecimento de água, esgotamento sanitário, " +
                "limpeza urbana, manejo de resíduos sólidos, drenagem e manejo de águas pluviais no município de Goiânia e a sua elaboração observou todas as " +
                "exigências estabelecidas na referida lei, que define as Diretrizes Nacionais para o Saneamento Básico. A SanAmbiental conta com uma equipe técnica " +
                "especializada e muito qualificada para a elaboração. Atuamos à 3 anos com PMSB atendendo as prefeituras de Goiás.",
            link: "#services",
            imagem: "img/icon/plano-municipal-saneamento-basico.png"
        },

        {
            id: "26",
            titulo: "POSTOS DE COMBUSTÍVEIS",
            descricao: "A SanAmbiental Engenharia faz todos os procedimentos necessários para obtenção do licenciamento ambiental de postos de combustíveis junto aos " +
                "órgãos ambientais competentes, sendo desenvolvidos todos os projetos, planos, e serviços pertinentes ao processo. Com qualidade Agilidade e compromisso!",
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
            if (this.id == 22 || this.id == 10) {
                $("#servicos").append(
                    "<div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">" +
                    "<div class=\"icon\"><img src=\"" + this.imagem + "\"></div>" +
                    "<h4 class=\"title\"><a href=\"" + this.link + "\">" + this.titulo + "</a></h4>" +
                    "</div>"
                );
            } else {
                $("#servicos").append(
                    "<div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">" +
                    "<div class=\"icon\"><img src=\"" + this.imagem + "\"></div>" +
                    "<h4 class=\"title\"><a href=\"" + url + "servico.html?servico=" + this.id + "\">" + this.titulo + "</a></h4>" +
                    "</div>"
                );
            }
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

