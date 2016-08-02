/*jshint browser:true*/
var textsugestao;
    function troco(){
                  
                   function lista(){
                       var $server;
                       $server = 'http://200.18.128.78/role';
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta.php",
                               data: "acao=selecionar",
                               success: function(data) {
                                    $('#negoco').html(data); 
                                }
                           });
                    }

                 lista();

            }

function abrirpag(){
    activate_page('#selecinteresse');
}
function abrirpag2(){
    activate_subpage("#primeiratela");
}
    function testarinteresse(){
                       var $server;
                       $server = 'http://200.18.128.78/role';                  
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta.php",
                               data: "acao=consultarcadastro&id="+id,
                               success: function(data) {
                                   if(data === " "){
                                       //$('#negoco').html(data);
                                       abrirpag();
                                   } else {
                                       //$('#negoco').html(data);
                                       $('#p_interesse').html(data);
                                       abrirpag2();
                                       cadastrarperfil();
                                   }
                                }
                           });
                    
            }
    
    function enviarsugestao(){
                       var $server;
                       $server = 'http://200.18.128.78/role';
                           $.ajax({
                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta2.php",
                               data: "acao=enviarsugestao&textsugestao="+textsugestao+"&id="+id,
                               success: function(data) {
                                    navigator.notification.alert("Sua opinião foi enviada!","","Mensagem"); 
                                }
                           });
                    
            }

    function cadastrarinteresses(){
     var $server;
     $server = 'http://200.18.128.78/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=cadastrarinteresses&interesses="+interesses+"&id="+id,
               success: function(data) {
                    navigator.notification.alert("Intesresses cadastrados com sucesso!","","Mensagem");
                    abrirpag2(); 
                }
           });
        
    }

    function cadastrarperfil(){
     var $server;
     $server = 'http://200.18.128.78/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=cadastrarperfil&sexo="+sexo+"&cidade="+cidade+"&id="+id,
               success: function(data) {
                    abrirpag2(); 
                }
           });
        
    }

    var interesses = [];
    function testarmarcados(){
        if(document.getElementById("bar").checked){
            interesses[1] = 1;
        }else{
            interesses[1] = 0;
        }
        if(document.getElementById("shopping_mall").checked){
            interesses[2] = 1;
        }else{
            interesses[2] = 0;
        }
        if(document.getElementById("restaurant").checked){
            interesses[3] = 1;
        }else{
            interesses[3] = 0;
        }
        if(document.getElementById("night_club").checked){
            interesses[4] = 1;
        }else{
            interesses[4] = 0;
        }
        if(document.getElementById("library").checked){
            interesses[5] = 1;
        }else{
            interesses[5] = 0;
        }
        if(document.getElementById("university").checked){
            interesses[6] = 1;
        }else{
            interesses[6] = 0;
        }
        if(document.getElementById("park").checked){
            interesses[7] = 1;
        }else{
            interesses[7] = 0;
        }
        if(document.getElementById("stadium").checked){
            interesses[8] = 1;
        }else{
            interesses[8] = 0;
        }
        if(document.getElementById("church").checked){
            interesses[9] = 1;
        }else{
            interesses[9] = 0;
        }
        if(document.getElementById("zoo").checked){
            interesses[10] = 1;
        }else{
            interesses[10] = 0;
        }
        cadastrarinteresses();
    }





