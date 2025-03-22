/* let namedAlunos = "John , camila, preto , branco";
   let sbrenome = "santos";
   console.log(namedAlunos.split(",")); 

 [] -> funções são pequenos códigos que é só é executado quando chamado ou eu executar.
    para criar essas funções : fuction + nome Funcao+ ()- {} 

function dizerOnomedosAlunos() {
    console.log("Olá alunos");
}
dizerOnomedosAlunos();

 [] -> tempo 
  setInterval -> executa uma função de tempo em tempo
  de 5 em 5 segundos. 
  é dado em milisegundos = 1000 milisegundos = 1 segundos.
*/

let imagem = document.querySelector(".troca-imagem");

function trocarImagem() {

    if (imagem.style.opacity == 0) {

        imagem.style.opacity = 1;
        

    } else {
        imagem.style.opacity = 0;
    }

}

setInterval(trocarImagem, 3000);
