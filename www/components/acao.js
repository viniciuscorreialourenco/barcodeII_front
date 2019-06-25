// This is a JavaScript file

$(document).on("click", "#create", function(){
     var parametros = {
          "nome" : $("#nome").val(),
          "barra": $("#codigoBarra").val(),
          "valor": $("#valor").val(),
          "descricao": $("#descGeral").val(),
          "processador": $("#processador").val(),
          "sistema": $("#sistOperacional").val(),
          "tamTela": $("#tela").val(),
          "wifi": $("#wifi").val(),
          "qtdCamera": $("#qtdCamera").val(),
          "resolucao": $("#resolucaoCamera").val(),
          "memoriaFlash": $("#memoriaFlash").val()
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
               $("#descGeral").val(""),
               $("#processador").val(""),
               $("#sistOperacional").val(""),
               $("#tela").val(""),
               $("#wifi").val(""),
               $("#qtdCamera").val(""),
               $("#resolucaoCamera").val(""),
               $("#memoriaFlash").val("")
          },
          error: function(data){
               navigator.notification.alert(data);
          }
     });
});

$(document).on("click","#deleta",function(){
   $.ajax({
        type:"get", // como enviar
        url:"https://barcode2-luizamaro11.c9users.io/webservice/delete.php",
        data:"id = "+$("#codigoBarra").val(data),
        // se der certo 
        success: function(data){
             navigator.notification.alert(data);
             location.reload();// recarrega a pagina
        },
        // se der errado
        erro: function(data){
             navigator.notification.alert(data);
        }
   });
});

$(document).on("click", "#voltar", function(){
       location.href="index.html";
});

$(document).on("click", "#qrcode", function(){
          window.plugins.barcodeScanner.scan( function(result) {
               $("#codigoBarra").val(result.text);
          }, function(error) {
               alert("Scanning failed: " + error);
          }
          );
});

function scanBarcode(){
        window.plugins.barcodeScanner.scan(function(result){
            window.location.href="lista.html"; 
            var codigoescolhido = result.text;
            $.ajax({
               type: "get",
               url: "https://barcode2-luizamaro11.c9users.io/webservice/lista_um.php",
               data:"id = "+codigoescolhido,
               dataType: "json",
               success: function(data){              
                    $("#codigoBarra").val(data.celular.codigo);
                    $("#nome").val(data.celular.nome);
                    $("#valor").val(data.celular.valor);
                    $("#descGeral").val(data.celular.descricao);
                    $("#processador").val(data.celular.processador);
                    $("#sistOperacional").val(data.celular.sistemaOperacional);
                    $("#tela").val(data.celular.tela);
                    $("#wifi").val(data.celular.wifi);
                    $("#qtdCamera").val(data.celular.qtdCamera);
                    $("#ResolucaoCamera").val(data.celular.resolucao);
                    $("#memoriaFlash").val(data.celular.memoriaFlash);
               },
               error: function(data){
                    navigator.notification.alert(data);
               }
            });            
            }, function(error) {
                alert("Scanning failed: " + error);
            }
        );
}







