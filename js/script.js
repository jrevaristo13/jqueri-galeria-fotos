$(document).ready(function() {

    
    /* fazendo  aparecer o menu com o evento slideDown  */
    $('header button').click(function() {
        $('form').slideDown();
       
        
    });
    /* termina aqui */

    /* fazendo  o menu se recolher com o evento slideUp  */
    $(' #b2').click(function() {
        $('form').slideUp();
       
        
    });
/* termina aqui */
/* tirando o comportamento padrao do formulario */
    
$('form').on('submit', function(e) {
    e.preventDefault();

/* termina aqui */

/* Adicionando uma nova imagem dentro da ul*/
const enderecoDaNovaImagem =$('#endereco-imagem-nova').val();
const novoItem=$('<li style="display : none"></li>');
$(`<img src="${enderecoDaNovaImagem}" /> `).appendTo(novoItem);
$(`<div class="overlay_imagem_link">
<a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho Real" tagert="_blank" >Ver imagem em tamanho Real</a>
</div>`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$(novoItem).fadeIn(1000);/* essa linha faz o efeito de transicao na imagem e dentro do parente a velocidade do efeito */
$('#endereco-imagem-nova').val('')/* essa linha limpa o formulario */


        
        
    })
    
})

