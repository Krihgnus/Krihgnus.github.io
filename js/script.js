$(".miIni").click(function () {
    $("#divInicio").show();
    $("#divHistoria").hide();
    $("#divCardapio").hide();
    $("#divLocalizacao").hide();
    $("#divContatos").hide();
    $("#navMenu").hide();
    $("#divCarrossel").hide();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miHis").click(function () {
    $("#divInicio").hide();
    $("#divHistoria").show();
    $("#divCardapio").hide();
    $("#divLocalizacao").hide();
    $("#divContatos").hide();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $(".miHis").addClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").removeClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miCar").click(function () {
    $("#divInicio").hide();
    $("#divHistoria").hide();
    $("#divCardapio").show();
    $("#divLocalizacao").hide();
    $("#divContatos").hide();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").show();
    $(".miHis").removeClass("ativo");
    $(".miCar").addClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").removeClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miLoc").click(function () {
    $("#divInicio").hide();
    $("#divHistoria").hide();
    $("#divCardapio").hide();
    $("#divLocalizacao").show();
    $("#divContatos").hide();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").addClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").removeClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miCon").click(function () {
    $("#divInicio").hide();
    $("#divHistoria").hide();
    $("#divCardapio").hide();
    $("#divLocalizacao").hide();
    $("#divContatos").show();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").addClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").removeClass("inativo");
});

var valorPizza;
$("#btCasa").click(function () {
    $(".modal-title").text("A Moda da Casa");
    modalImg.src = "imagens/modadaCasa.jpg";
    $("#modalIngredientes").text("(Molho, Filé, Bacon, Cebola, Catupiry, Orégano e Mussarela)");
    valorPizza = 34;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBacon").click(function () {
    $(".modal-title").text("Bacon");
    modalImg.src = "imagens/bacon.jpg";
    $("#modalIngredientes").text("(Molho, Bacon, Cebola, Azeitonas, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBaiacatu").click(function () {
    $(".modal-title").text("Baiacatu");
    modalImg.src = "imagens/baiacatu.jpg";
    $("#modalIngredientes").text("(Molho, Calabresa Moída, Catupiry, Azeitonas, Mussarela e Orégano)");
    valorPizza = 37;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBasca").click(function () {
    $(".modal-title").text("Basca");
    modalImg.src = "imagens/basca.jpg";
    $("#modalIngredientes").text("(Molho, Bacon, Catupiry, Tomate, Mussarela e Orégano)");
    valorPizza = 34;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBrasileira").click(function () {
    $(".modal-title").text("Brasileira");
    modalImg.src = "imagens/brasileira.jpg";
    $("#modalIngredientes").text("(Molho, Atum, Bacon, Ervilhas, Azeitonas, Ovo, Mussarela e Orégano)");
    valorPizza = 42;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCalabresa").click(function () {
    $(".modal-title").text("Calabresa");
    modalImg.src = "imagens/calabresa.jpg";
    $("#modalIngredientes").text("(Molho, Calabresa, Cebola, Azeitonas, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCamarao").click(function () {
    $(".modal-title").text("Camarão");
    modalImg.src = "imagens/camarao.jpg";
    $("#modalIngredientes").text("(Molho, Camarão, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCheddar").click(function () {
    $(".modal-title").text("Cheddar");
    modalImg.src = "imagens/cheddar.jpg";
    $("#modalIngredientes").text("(Molho, Cheddar, Mussarela e Orégano)");
    valorPizza = 22;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCoracao").click(function () {
    $(".modal-title").text("Coração");
    modalImg.src = "imagens/coracao.jpg";
    $("#modalIngredientes").text("(Molho, Coração, Mussarela e Orégano)");
    valorPizza = 35;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btFile").click(function () {
    $(".modal-title").text("Filé Catupiry");
    modalImg.src = "imagens/file.jpg";
    $("#modalIngredientes").text("(Molho, Filé, Catupiry, Mussarela e Orégano)");
    valorPizza = 31;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btFrango").click(function () {
    $(".modal-title").text("Frango Catupiry");
    modalImg.src = "imagens/frango.jpg";
    $("#modalIngredientes").text("(Molho, Frango, Catupiry, Mussarela e Orégano)");
    valorPizza = 27;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btNapolitana").click(function () {
    $(".modal-title").text("Napolitana");
    modalImg.src = "imagens/napolitana.jpg";
    $("#modalIngredientes").text("(Molho, Presunto, Palmito, Tomate, Ervilhas, Azeitonas, Ovo, Mussarela e Orégano)");
    valorPizza = 40;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPaulista").click(function () {
    $(".modal-title").text("Paulista");
    modalImg.src = "imagens/paulista.jpg";
    $("#modalIngredientes").text("(Molho, Ervilhas, Palmito, Azeitonas, Milho, Mussarela e Orégano)");
    valorPizza = 33;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPepperoni").click(function () {
    $(".modal-title").text("Pepperoni");
    modalImg.src = "imagens/pepperoni.jpg";
    $("#modalIngredientes").text("(Molho, Pepperoni, Azeitonas, Cebola, Mussarela e Orégano)");
    valorPizza = 35;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPizzabor").click(function () {
    $(".modal-title").text("Pizzabor");
    modalImg.src = "imagens/pizzabor.jpg";
    $("#modalIngredientes").text("(Molho, Lombo, Tomate, Palmito, , Ovo, Cebola, Azeitonas, Mussarela e Orégano)");
    valorPizza = 46;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPortuguesa").click(function () {
    $(".modal-title").text("Portuguesa");
    modalImg.src = "imagens/portuguesa.jpg";
    $("#modalIngredientes").text("(Molho, Cebola, Tomate, Presunto, Pimentão, Ovo, Azeitonas, Mussarela e Orégano)");
    valorPizza = 39;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btQueijos").click(function () {
    $(".modal-title").text("Seis Queijos");
    modalImg.src = "imagens/queijos.jpg";
    $("#modalIngredientes").text("(Molho, Gorgonzola, Provolone, Parmesão, Catupiry, Cheddar, Mussarela e Orégano)");
    valorPizza = 27;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btSiciliana").click(function () {
    $(".modal-title").text("Siciliana");
    modalImg.src = "imagens/siciliana.jpg";
    $("#modalIngredientes").text("(Molho, Champignon, Bacon, Azeitonas, Mussarela e Orégano)");
    valorPizza = 34;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btStrogonoff").click(function () {
    $(".modal-title").text("Strogonoff");
    modalImg.src = "imagens/strogonoff.jpg";
    $("#modalIngredientes").text("(Molho, Alcatra, Creme de leite, Mussarela e Orégano)");
    valorPizza = 38;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btVegetariana").click(function () {
    $(".modal-title").text("Vegetariana");
    modalImg.src = "imagens/vegetariana.jpg";
    $("#modalIngredientes").text("(Molho, Cebola, Champignon, Pimentão, Brócolis, Palmito, Azeitonas, Mussarela e Orégano)");
    valorPizza = 43;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btLombo").click(function () {
    $(".modal-title").text("Lombo");
    modalImg.src = "imagens/lombo.jpg";
    $("#modalIngredientes").text("(Molho, Lombo, Azeitonas, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBrigadeiro").click(function () {
    $(".modal-title").text("Brigadeiro");
    modalImg.src = "imagens/brigadeiro.jpg";
    $("#modalIngredientes").text("(Chocolate, Leite condensado e Chocolate granulado)");
    valorPizza = 25;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btFloresta").click(function () {
    $(".modal-title").text("Floresta Negra");
    modalImg.src = "imagens/florestaNegra.jpg";
    $("#modalIngredientes").text("(Bombons Sonho de Valsa e Leite condensado)");
    valorPizza = 24;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btSensacao").click(function () {
    $(".modal-title").text("Sensação");
    modalImg.src = "imagens/sensacao.jpg";
    $("#modalIngredientes").text("(Chocolate, Leite condensado e Morangos)");
    valorPizza = 32;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btSerra").click(function () {
    $(".modal-title").text("Serra Nevada");
    modalImg.src = "imagens/serraNevada.jpg";
    $("#modalIngredientes").text("(Bombons Ouro Branco e Leite condensado)");
    valorPizza = 24;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btMM").click(function () {
    $(".modal-title").text("M&M's");
    modalImg.src = "imagens/MM.jpg";
    $("#modalIngredientes").text("(Chocolate preto ou branco, M&M's e Leite condensado)");
    valorPizza = 28;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPrestigio").click(function () {
    $(".modal-title").text("Prestígio");
    modalImg.src = "imagens/prestigio.jpg";
    $("#modalIngredientes").text("(Chocolate, Coco ralado)");
    valorPizza = 22;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});

$(window).scroll(function () {
    var position = $(window).scrollTop();
    if (position > 515) {
        $("#spanCarrinho").css('position', 'fixed');
        $("#divCarrinho").css('position', 'fixed');
        $("#spanCarrinho").css('top', '70px');
        $("#divCarrinho").css('top', '128px');
    } else {
        $("#spanCarrinho").css('position', 'absolute');
        $("#divCarrinho").css('position', 'absolute');
        $("#spanCarrinho").css('top', '570px');
        $("#divCarrinho").css('top', '628px');
    }
});

$("#spanCarrinho").click(function(){
    $("#divCarrinho").toggle(500);
});