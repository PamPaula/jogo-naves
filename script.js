//iniciando o jogo
function start() {
    $("#inicio").hide();
    
    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //principais variaveis
    var jogo = {}

    //loop do jogo
    jogo.timer = setInterval(loop,30);

    function loop() {
        movefundo();
    } //fim da função loop

    //movimento do fundo
    function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda-1);
    } //fim do movimento

} //fim do jogo