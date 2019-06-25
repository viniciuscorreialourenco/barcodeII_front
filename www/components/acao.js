// This is a JavaScript file

$(document).on("click", "#create", function(){
     var parametros = {
          "nome do produto" : $("#nome").val(),
          "codigo de barra": $("#codigoBarra").val(),
          "valor do produto": $("#valor").val(),
          "descricao geral": $("#desc.geral").val(),
          "processador": $("#processador").val(),
          "sistema operacional": $("#sistOperacional").val(),
          "tamanho da tela": $("#tela").val(),
          // o wifi é um select é preciso que guarde o valor dependendo da seleção do usuario, rever essa parte do codigo.
          "wifi": $("#codigoBarra").val(),
          "quantidade de cameras": $("#qtdCameras").val(),
          "resolucao da camera": $("#resolucaoCamera").val(),
          "memoria flasj": $("#memoriaFlash").val()
     };

     $.ajax({
          type: "post",
          url: "https://barcode2-luizamaro11.c9users.io/webservice/cadastro.php",
          data: parametros,
          success: function(data){
               navigator.notification.alert(data);
               $("#nome").val("");
               $("#codigoBarra").val(""),
               $("#valor").val(""),
               $("#desc.geral").val(""),
               $("#processador").val(""),
               $("#sistOperacional").val(""),
               $("#tela").val(""),
               // rever essa parte do codigo
               $("#codigoBarra").val(""),
               $("#qtdCameras").val(""),
               $("#resolucaoCamera").val(""),
               $("#memoriaFlash").val("")
          },
          error: function(data){
               navigator.notification.alert(data);
          }
     });
});

