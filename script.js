//Variaveis de Ambientes:
let totalSlides = document.querySelectorAll('#slider--item').length;
let currentSlide = 0;
//Arrumando a altura 
document.querySelector('#slider--width').style.width =
`calc(100vw *${totalSlides})`;
document.querySelector('#slider--controls').style.height=
`${document.querySelector('#slide').clientHeight}px`;
//Botão(div) Voltar
function goPrev(){
    currentSlide --;
    if(currentSlide<0) {
        currentSlide=totalSlides -1;
    }
    updateMargin();
}
//Botão(div) Proximo
function goNext(){
    currentSlide ++ ;
    if(currentSlide > (totalSlides -1)){
    currentSlide=0
}
updateMargin();
}
//Função para att a margem
function updateMargin(){
    //tirando erro da margen,no caso aparecia parte das imagens anteriores
    let slideItemWidth = document.querySelector('#slider--item').clientWidth
    let newMargin =(currentSlide * slideItemWidth)
    document.querySelector(`#slider--width`).style.marginLeft =
    `-${newMargin}px`
}
//Criando um intervalo para passar automatico a img
setInterval(goNext, 4000);
