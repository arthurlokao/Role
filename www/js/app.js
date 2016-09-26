/*jshint browser:true*/
var textsugestao;
    function troco(){
                  
                   function lista(){
                       var $server;
                       //$server = 'http://200.18.128.78/role';
                       $server = 'http://192.168.1.100/role';
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

var testador = 0;
    function testarinteresse(){
                       var $server;
                       //$server = 'http://200.18.128.78/role'; 
                        $server = 'http://192.168.1.100/role';
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta.php",
                               data: "acao=consultarcadastro&id="+id,
                               success: function(data) {
                                   if(data === " "){
                                       abrirpag();
                                   } else {
                                       //interesseingles();
                                       if(testador===0){
                                          initialize();
                                          testador = 1;
                                       }
                                       $('#p_interesse').html(data);
                                       abrirpag2();
                                   }
                                }
                           });
                    
            }

function interesseingles(){
                       var $server;
                       //$server = 'http://200.18.128.78/role'; 
                       $server = 'http://192.168.1.100/role';
                           $.ajax({
                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta.php",
                               data: "acao=interesseingles&id="+id,
                               success: function(data) {
                                   navigator.notification.alert(JSON.parse(data));
                                   nomeingles = JSON.parse(data);
                                }
                           });
                    
            }
    
    function enviarsugestao(){
                       var $server;
                       //$server = 'http://200.18.128.78/role';
                       $server = 'http://192.168.1.100/role';
                           $.ajax({
                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta.php",
                               data: "acao=enviarsugestao&textsugestao="+textsugestao+"&id="+id,
                               success: function(data) {
                                    navigator.notification.alert("Sua opinião foi enviada!","","Mensagem"); 
                                    activate_subpage("#configuracoes");
                                }
                           });
                    
            }

    function cadastrarinteresses(){
     var $server;
     //$server = 'http://200.18.128.78/role';
     $server = 'http://192.168.1.100/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=cadastrarinteresses&str_interesses="+str_interesses+"&id="+id,
               success: function(data) {
                    navigator.notification.alert("Interesses cadastrados com sucesso!","","Mensagem");
                    testarinteresse();
                    //abrirpag2(); 
                }
           });
        
    }

    function cadastrarperfil(){
     var $server;
     //$server = 'http://200.18.128.78/role';
     $server = 'http://192.168.1.100/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=cadastrarperfil&sexo="+sexo+"&cidade="+cidade+"&id="+id,
               success: function(data) {
                    
                }
           });
        
    }

    var interesses = [];
    var str_interesses = "";
    function testarmarcados(){
        str_interesses = "";
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
        for(var i=1;i<11;i++){
            str_interesses += interesses[i] + "";
        }
        cadastrarinteresses();
    }

function apagarconta(){
     var $server;
     //$server = 'http://200.18.128.78/role';
     $server = 'http://192.168.1.100/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=apagarconta&id="+id,
               success: function(data) {
                    navigator.notification.alert("Conta apagada com sucesso!","","Mensagem");
                    logout();
                    activate_page("#mainpage");                   
                }
           });
        
    }

function deletarinteresses(){
     var $server;
     //$server = 'http://200.18.128.78/role';
     $server = 'http://192.168.1.100/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=deletarinteresses&id="+id,
               success: function(data) {
                    testarmarcados2();
                }
           });
        
    }

function testarmarcados2(){
        str_interesses = "";
        if(document.getElementById("bar2").checked){
            interesses[1] = 1;
        }else{
            interesses[1] = 0;
        }
        if(document.getElementById("shopping_mall2").checked){
            interesses[2] = 1;
        }else{
            interesses[2] = 0;
        }
        if(document.getElementById("restaurant2").checked){
            interesses[3] = 1;
        }else{
            interesses[3] = 0;
        }
        if(document.getElementById("night_club2").checked){
            interesses[4] = 1;
        }else{
            interesses[4] = 0;
        }
        if(document.getElementById("library2").checked){
            interesses[5] = 1;
        }else{
            interesses[5] = 0;
        }
        if(document.getElementById("university2").checked){
            interesses[6] = 1;
        }else{
            interesses[6] = 0;
        }
        if(document.getElementById("park2").checked){
            interesses[7] = 1;
        }else{
            interesses[7] = 0;
        }
        if(document.getElementById("stadium2").checked){
            interesses[8] = 1;
        }else{
            interesses[8] = 0;
        }
        if(document.getElementById("church2").checked){
            interesses[9] = 1;
        }else{
            interesses[9] = 0;
        }
        if(document.getElementById("zoo2").checked){
            interesses[10] = 1;
        }else{
            interesses[10] = 0;
        }
        for(var i=1;i<11;i++){
            str_interesses += interesses[i] + "";
        }
        cadastrarinteresses();
    }

var titulorole, iniciorole, terminorole, inforole;


function marcarole(){
    titulorole = document.getElementById("titulorole").value;
    
    var dt1 = new Date(document.getElementById("iniciorole").value);
    iniciorole = dt1.getFullYear()+"-"+(dt1.getMonth()+1)+"-"+dt1.getDate()+" "+(dt1.getHours()+3)+":"+dt1.getMinutes()+":"+dt1.getSeconds();
    
    var dt2 = new Date(document.getElementById("terminorole").value);
    terminorole = dt2.getFullYear()+"-"+(dt2.getMonth()+1)+"-"+dt2.getDate()+" "+(dt2.getHours()+3)+":"+dt2.getMinutes()+":"+dt2.getSeconds();
    
    inforole = document.getElementById("inforole").value;
    var $server;
     //$server = 'http://200.18.128.78/role';
     $server = 'http://192.168.1.100/role';
    $.ajax({
               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=marcarole&id="+id+"&titulorole="+titulorole+"&iniciorole="+iniciorole+"&terminorole="+terminorole+"&inforole="+inforole+"&idlocal="+idlocal,
               success: function(data) {
                   navigator.notification.alert(data); 
                   //navigator.notification.alert("Rolé marcado com sucesso");
                   //activate_page("#mapa"); 
                }
           });
        
}

function testarole(){
    var dt1 = new Date(document.getElementById("iniciorole").value);
    iniciorole = dt1.getFullYear()+"-"+(dt1.getMonth()+1)+"-"+dt1.getDate()+" "+(dt1.getHours()+3)+":"+dt1.getMinutes()+":"+dt1.getSeconds();
    
    var dt2 = new Date(document.getElementById("terminorole").value);
    terminorole = dt2.getFullYear()+"-"+(dt2.getMonth()+1)+"-"+dt2.getDate()+" "+(dt2.getHours()+3)+":"+dt2.getMinutes()+":"+dt2.getSeconds();
    
    var $server;
     //$server = 'http://200.18.128.78/role';
     $server = 'http://192.168.1.100/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=testarole&iniciorole="+iniciorole+"&terminorole="+terminorole+"&idlocal="+idlocal,
               success: function(data) {
                    if(data==="0"){
                        marcarole();
                    }else if(data==="1"){
                        navigator.notification.alert("Não foi possível criar um Rolé nessa data, horário e local");
                    }
                }
           });
        
    }

function selecrole(){
    var $server;
     //$server = 'http://200.18.128.78/role';
     $server = 'http://192.168.1.100/role';
        $.ajax({

               type: "get",
               dataType  : 'html',
               url: $server+"/conecta.php",
               data: "acao=selecrole&id="+id+"&idlocal="+idlocal,
               success: function(data) {
                    document.getElementById("pn_roles").innerHTML = data;
                }
           });
        
    }

