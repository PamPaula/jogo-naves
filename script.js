//iniciando o jogo
function start() {
    $("#inicio").hide();
    
    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //principais variaveis
    var jogo = {}
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    }

    jogo.pressionou = [];

    //verfica se alguma tecla foi pressionada
    $(document).keydown(function(e) {
        jogo.pressionou[e.which] = true;
    });

    $(document).keyup(function(e) {
        jogo.pressionou[e.which] = false;
    })

    //loop do jogo
    jogo.timer = setInterval(loop,30);

    function loop() {
        movefundo();
        movejogador();
        moveinimigo1();
    } //fim da função loop

    //movimento do fundo
    function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda-1);
    } //fim do movimento

    //movimento do jogador
    function movejogador() {
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);

                if (topo<=0) {
                    $("#jogador").css("top",topo+10);
                }
        }

        if (jogo.pressionou[TECLA.S]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);

                if (topo>=434) {
                    $("#jogador").css ("top",topo-10);
                }
        }

        if (jogo.pressionou[TECLA.D]) {
            //chama função Disparo
        }
    } //fim do movimento do jogador

    function moveinimigo1() {
        posicaoX = parseInt($("#inimigo1").css("left"));
        $ ("#inimigo1").css("left", posicaoX-velocidade);
        $ ("#inimigo1").css("top",posicaoY);

            if (posicaoX<=0) {
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("left", 694);
                $("#inimigo1").css("top",posicaoY);
            } //fim do movimento do inimigo 1
    }

} //fim do jogo