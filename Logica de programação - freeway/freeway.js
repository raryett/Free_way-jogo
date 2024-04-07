let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//Variaveis do carro
let xCarro = 600;

//variaveis do ator 
let yAtor= 366;


function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png");
}


function setup() {
    createCanvas(500, 400);
    // leembrando que o primeiro parametro e o comprimento da tela e o segundo é a largura da tela 
    //
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    
}

function mostraAtor(){
    image( imagemDoAtor,100,yAtor,30,30);
    // tamanho e o alturura e o comprimento da imagem  que seria o 30 30
// como eu defini o yator como 366, ele na posicao y precisa alterar em todas as vezes que eu fizer com que apareca no codigo 

}
function mostraCarro(){
    image(imagemCarro, xCarro,40,50,40);
}
function movimentaCarro(){
    xCarro -= -2;
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        yAtor += 3;

    }
}