const player1 = "X";
const player2 = "O";
var PlayTime = player;
var GameOver = false;


atualizaMostrador();
inicializarespacos();


function atualizaMostrador(){

    if (GameOver) {return;}

    if (PlayTime == player1){
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "Imagens/X.png");
    }
    else{
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "Imagens/circle.png");
    }
}


function inicializarespacos(){

    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++)

    espacos[i].addEventListener("click", function(){

        if (GameOver) {return;}

        if(this.getElementsByTagName("img").length == 0){

            if (PlayTime == player1){
                
                this.innerHTML = "<img src='Imagens/X.png'>";
                this.setAttribute("jogada", player1);
                PlayTime = player2;
            }
            else{

                this.innerHTML = "<img src='Imagens/circle.png'>";
                this.setAttribute("jogada", player2);
                PlayTime = player1;
            }
            atualizaMostrador();
            }
        }
    );
}