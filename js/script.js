$(".miIni").click(function () {
    $("#divInicio").show();
    $("#divHistoria").hide();
    $("#divCardapio").hide();
    $("#divLocalizacao").hide();
    $("#divContatos").hide();
    $("#navMenu").hide();
    $("footer").hide();
    $("#divCarrossel").hide();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $("#dropdownInicio").show();
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
    $("footer").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $("#dropdownInicio").hide();
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
    $("footer").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").show();
    $("#dropdownInicio").hide();
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
    $("footer").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $("#dropdownInicio").hide();
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
    $("footer").show();
    $("#divCarrossel").show();
    $("#spanCarrinho").hide();
    $("#divCarrinho").hide();
    $("#dropdownInicio").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").addClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").removeClass("inativo");
});

var nomePizza;
var valorPizza;
$("#btCasa").click(function () {
    nomePizza = "A Moda da Casa";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/modadaCasa.jpg";
    $("#modalIngredientes").text("(Molho, Filé, Bacon, Cebola, Catupiry, Orégano e Mussarela)");
    valorPizza = 34;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBacon").click(function () {
    nomePizza = "Bacon";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/bacon.jpg";
    $("#modalIngredientes").text("(Molho, Bacon, Cebola, Azeitonas, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBaiacatu").click(function () {
    nomePizza = "Baicatu";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/baiacatu.jpg";
    $("#modalIngredientes").text("(Molho, Calabresa Moída, Catupiry, Azeitonas, Mussarela e Orégano)");
    valorPizza = 37;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBasca").click(function () {
    nomePizza = "Basca";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/basca.jpg";
    $("#modalIngredientes").text("(Molho, Bacon, Catupiry, Tomate, Mussarela e Orégano)");
    valorPizza = 34;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBrasileira").click(function () {
    nomePizza = "Brasileira";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/brasileira.jpg";
    $("#modalIngredientes").text("(Molho, Atum, Bacon, Ervilhas, Azeitonas, Ovo, Mussarela e Orégano)");
    valorPizza = 42;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCalabresa").click(function () {
    nomePizza = "Calabresa";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/calabresa.jpg";
    $("#modalIngredientes").text("(Molho, Calabresa, Cebola, Azeitonas, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCamarao").click(function () {
    nomePizza = "Camarão";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/camarao.jpg";
    $("#modalIngredientes").text("(Molho, Camarão, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCheddar").click(function () {
    nomePizza = "Cheddar";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/cheddar.jpg";
    $("#modalIngredientes").text("(Molho, Cheddar, Mussarela e Orégano)");
    valorPizza = 22;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btCoracao").click(function () {
    nomePizza = "Coração";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/coracao.jpg";
    $("#modalIngredientes").text("(Molho, Coração, Mussarela e Orégano)");
    valorPizza = 35;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btFile").click(function () {
    nomePizza = "Filé Catupiry";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/file.jpg";
    $("#modalIngredientes").text("(Molho, Filé, Catupiry, Mussarela e Orégano)");
    valorPizza = 31;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btFrango").click(function () {
    nomePizza = "Frango Catupiry";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/frango.jpg";
    $("#modalIngredientes").text("(Molho, Frango, Catupiry, Mussarela e Orégano)");
    valorPizza = 27;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btNapolitana").click(function () {
    nomePizza = "Napolitana";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/napolitana.jpg";
    $("#modalIngredientes").text("(Molho, Presunto, Palmito, Tomate, Ervilhas, Azeitonas, Ovo, Mussarela e Orégano)");
    valorPizza = 40;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPaulista").click(function () {
    nomePizza = "Paulista";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/paulista.jpg";
    $("#modalIngredientes").text("(Molho, Ervilhas, Palmito, Azeitonas, Milho, Mussarela e Orégano)");
    valorPizza = 33;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPepperoni").click(function () {
    nomePizza = "Pepperoni";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/pepperoni.jpg";
    $("#modalIngredientes").text("(Molho, Pepperoni, Azeitonas, Cebola, Mussarela e Orégano)");
    valorPizza = 35;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPizzabor").click(function () {
    nomePizza = "Pizzabor";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/pizzabor.jpg";
    $("#modalIngredientes").text("(Molho, Lombo, Tomate, Palmito, , Ovo, Cebola, Azeitonas, Mussarela e Orégano)");
    valorPizza = 46;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPortuguesa").click(function () {
    nomePizza = "Portuguesa";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/portuguesa.jpg";
    $("#modalIngredientes").text("(Molho, Cebola, Tomate, Presunto, Pimentão, Ovo, Azeitonas, Mussarela e Orégano)");
    valorPizza = 39;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btQueijos").click(function () {
    nomePizza = "Seis Queijos";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/queijos.jpg";
    $("#modalIngredientes").text("(Molho, Gorgonzola, Provolone, Parmesão, Catupiry, Cheddar, Mussarela e Orégano)");
    valorPizza = 27;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btSiciliana").click(function () {
    nomePizza = "Siciliana";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/siciliana.jpg";
    $("#modalIngredientes").text("(Molho, Champignon, Bacon, Azeitonas, Mussarela e Orégano)");
    valorPizza = 34;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btStrogonoff").click(function () {
    nomePizza = "Strogonoff";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/strogonoff.jpg";
    $("#modalIngredientes").text("(Molho, Alcatra, Creme de leite, Mussarela e Orégano)");
    valorPizza = 38;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btVegetariana").click(function () {
    nomePizza = "Vegetariana";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/vegetariana.jpg";
    $("#modalIngredientes").text("(Molho, Cebola, Champignon, Pimentão, Brócolis, Palmito, Azeitonas, Mussarela e Orégano)");
    valorPizza = 43;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btLombo").click(function () {
    nomePizza = "Lombo";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/lombo.jpg";
    $("#modalIngredientes").text("(Molho, Lombo, Azeitonas, Mussarela e Orégano)");
    valorPizza = 30;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btBrigadeiro").click(function () {
    nomePizza = "Brigadeiro";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/brigadeiro.jpg";
    $("#modalIngredientes").text("(Chocolate, Leite condensado e Chocolate granulado)");
    valorPizza = 25;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btFloresta").click(function () {
    nomePizza = "Floresta Negra";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/florestaNegra.jpg";
    $("#modalIngredientes").text("(Bombons Sonho de Valsa e Leite condensado)");
    valorPizza = 24;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btSensacao").click(function () {
    nomePizza = "Sensação";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/sensacao.jpg";
    $("#modalIngredientes").text("(Chocolate, Leite condensado e Morangos)");
    valorPizza = 32;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btSerra").click(function () {
    nomePizza = "Serra Nevada";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/serraNevada.jpg";
    $("#modalIngredientes").text("(Bombons Ouro Branco e Leite condensado)");
    valorPizza = 24;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btMM").click(function () {
    nomePizza = "M&M's";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/MM.jpg";
    $("#modalIngredientes").text("(Chocolate preto ou branco, M&M's e Leite condensado)");
    valorPizza = 28;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});
$("#btPrestigio").click(function () {
    nomePizza = "Prestígio";
    $(".modal-title").text(nomePizza);
    modalImg.src = "imagens/prestigio.jpg";
    $("#modalIngredientes").text("(Chocolate, Coco ralado)");
    valorPizza = 22;
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
});

var bCat = document.getElementById("bCat");
var bMis = document.getElementById("bMis");
var aCat = document.getElementById("aCat");
var aChe = document.getElementById("aChe");
var baCat = document.getElementById("baCat");
var baChe = document.getElementById("baChe");
var nada = document.getElementById("nada");
var valorAdicional = 0;
function selecaoAdicionais() {
    if (bCat.checked) {
        valorPizza = (valorPizza - valorAdicional) + 1.50;
        valorAdicional = 1.50;
    } else if (bMis.checked) {
        valorPizza = (valorPizza - valorAdicional) + 3;
        valorAdicional = 3;
    } else if (aCat.checked) {
        valorPizza = (valorPizza - valorAdicional) + 1;
        valorAdicional = 1;
    } else if (aChe.checked) {
        valorPizza = (valorPizza - valorAdicional) + 1.25;
        valorAdicional = 1.25;
    } else if (baCat.checked) {
        valorPizza = (valorPizza - valorAdicional) + 3;
        valorAdicional = 3;
    } else if (baChe.checked) {
        valorPizza = (valorPizza - valorAdicional) + 4;
        valorAdicional = 4;
    } else {
        valorPizza = valorPizza - valorAdicional;
        valorAdicional = 0;
    }
    $("#modalValor").text("Valor: R$ " + valorPizza.toFixed(2));
}
bCat.addEventListener("change", selecaoAdicionais);
bMis.addEventListener("change", selecaoAdicionais);
aCat.addEventListener("change", selecaoAdicionais);
aChe.addEventListener("change", selecaoAdicionais);
baCat.addEventListener("change", selecaoAdicionais);
baChe.addEventListener("change", selecaoAdicionais);
nada.addEventListener("change", selecaoAdicionais);

$(".btSabor").click(function () {
    $("#btAdicionar").show();
    nada.checked = true;
    valorAdicional = 0;
});

var total = 0;
var limiteCarrinho = 0;
$("#btAdicionar").click(function () {
    if (limiteCarrinho == 31) {
        alert("Limite de itens alcançado, favor realizar a compra ou esvaziar o carrinho");
    } else {
        $("#outCarrinho").append("<li>" + nomePizza + " - R$: " + valorPizza.toFixed(2) + "</li>");
        $("#btAdicionar").hide();
        $("#carrinhoVazio").hide();
        total = total + valorPizza;
        $("#outTotal").text("Total: R$ " + total.toFixed(2));
        $("#outTotal").show();
        $("#btLimpar").show();
        $("#btComprar").show();
        limiteCarrinho = limiteCarrinho + 1
    }
});

$("#btCocaLata").click(function () {
    if (limiteCarrinho == 31) {
        alert("Limite de itens alcançado, favor realizar a compra ou esvaziar o carrinho");
    } else {
        $("#outCarrinho").append('<li>Coca-Cola (Lata) - R$: 3.50</li>');
        $("#carrinhoVazio").hide();
        total = total + 3.50;
        $("#outTotal").text("Total: R$ " + total.toFixed(2));
        $("#outTotal").show();
        $("#btLimpar").show();
        $("#btComprar").show();
        limiteCarrinho = limiteCarrinho + 1
    }
});
$("#btCoca").click(function () {
    if (limiteCarrinho == 31) {
        alert("Limite de itens alcançado, favor realizar a compra ou esvaziar o carrinho");
    } else {
        $("#outCarrinho").append('<li>Coca-Cola (2 Litros) - R$: 7.00</li>');
        $("#carrinhoVazio").hide();
        total = total + 7;
        $("#outTotal").text("Total: R$ " + total.toFixed(2));
        $("#outTotal").show();
        $("#btLimpar").show();
        $("#btComprar").show();
        limiteCarrinho = limiteCarrinho + 1
    }
});
$("#btGuarana").click(function () {
    if (limiteCarrinho == 31) {
        alert("Limite de itens alcançado, favor realizar a compra ou esvaziar o carrinho");
    } else {
        $("#outCarrinho").append('<li>Guaraná (2 Litros) - R$: 6.00</li>');
        $("#carrinhoVazio").hide();
        total = total + 6;
        $("#outTotal").text("Total: R$ " + total.toFixed(2));
        $("#outTotal").show();
        $("#btLimpar").show();
        $("#btComprar").show();
        limiteCarrinho = limiteCarrinho + 1
    }
});

$(".btCarrinho").click(function () {
    total = 0;
    limiteCarrinho = 0;
    $("#outCarrinho").text("");
    $("#outCarrinho").prepend('<li id="carrinhoVazio">Seu carrinho esta vazio!<br>Confira as nossas ofertas.</li>');
    $("#outTotal").hide();
    $("#btLimpar").hide();
    $("#btComprar").hide();
});
$("#btComprar").click(function(){
    alert("Obrigado pela compra!");
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

$("#spanCarrinho").click(function () {
    $("#divCarrinho").toggle(500);
});