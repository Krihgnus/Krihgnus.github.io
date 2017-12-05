$(".miIni").click(function(){
    $("#divInicio").show();
    $("#divHistoria").hide();
    $("#divCardapio").hide();
    $("#divLocalizacao").hide();
    $("#divContatos").hide();
    $("#navMenu").hide();
    $("#divCarrossel").hide();
    $("#divPedido").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miHis").click(function(){
    $("#divInicio").hide();
    $("#divHistoria").show();
    $("#divCardapio").hide();
    $("#divLocalizacao").hide();
    $("#divContatos").hide();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#divPedido").hide();
    $(".miHis").addClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").removeClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miCar").click(function(){
    $("#divInicio").hide();
    $("#divHistoria").hide();
    $("#divCardapio").show();
    $("#divLocalizacao").hide();
    $("#divContatos").hide();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#divPedido").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").addClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").removeClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miLoc").click(function(){
    $("#divInicio").hide();
    $("#divHistoria").hide();
    $("#divCardapio").hide();
    $("#divLocalizacao").show();
    $("#divContatos").hide();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#divPedido").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").addClass("ativo");
    $(".miCon").removeClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").removeClass("inativo");
    $(".miCon").addClass("inativo");
});
$(".miCon").click(function(){
    $("#divInicio").hide();
    $("#divHistoria").hide();
    $("#divCardapio").hide();
    $("#divLocalizacao").hide();
    $("#divContatos").show();
    $("#navMenu").show();
    $("#divCarrossel").show();
    $("#divPedido").hide();
    $(".miHis").removeClass("ativo");
    $(".miCar").removeClass("ativo");
    $(".miLoc").removeClass("ativo");
    $(".miCon").addClass("ativo");
    $(".miHis").addClass("inativo");
    $(".miCar").addClass("inativo");
    $(".miLoc").addClass("inativo");
    $(".miCon").removeClass("inativo");
});
$("#btPedido").click(function(){
    $("#divContatos").hide();
    $("#divCarrossel").hide();
    $(".miCon").addClass("inativo");
    $(".miCon").removeClass("ativo");
    $("#divPedido").show();
});
var isBig = true;
$(window).scroll(function () {
    var position = $(window).scrollTop();
    if(position > 300 && isBig){
        isBig = false;
        $("#logoMenu").animate({
            width: 90, height: 55
        }, "fast");
    }
    if(position < 300 && !isBig){
        isBig = true;
            $("#logoMenu").animate({
                width: 160, height: 150
            }, "fast");
        
    }
});