/*jshint browser:true */
(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
     
     /* button  #bt_criarconta */
    $(document).on("click", "#bt_criarconta", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#criarlogin"); 
    });
    
        /* button  #bt_avancar1 */
    $(document).on("click", "#bt_avancar1", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#informacoespessoais"); 
    });
    
    $(document).on("click", "#bt_rolelocal", function(evt)
    {
         /*global activate_subpage */
         document.getElementById("endlocal").value = endlocal;
         activate_page("#marcarrole"); 
    });
     
     $(document).on("click", "#bt_infolocal", function(evt)
    {
         /*global activate_subpage */
         document.getElementById("p_textolocal").innerHTML = '<div class="w3-container w3-section w3-border w3-round-xlarge"><p style="font-size:18px;"><b>'+ infolocal + '</b></p></div>';
         /*document.getElementById("hd_local").innerHTML = '<button type="button" class="btn btn-warning" id="bt_voltarlocal"><span class="glyphicon glyphicon-chevron-left"></span></button><h2>'+nomelocal+'</h2>';*/
         
         selecrole();
         document.getElementById("hd_local").innerHTML = '&nbsp<button class="btn widget uib_w_76 d-margins btn-warning" data-uib="twitter%20bootstrap/button" data-ver="1" id="bt_voltarlocal"><i class="glyphicon glyphicon-chevron-left" data-position="icon only"></i></button><h2 style="width:70%;margin-left:15%">'+nomelocal+'</h2>';

         activate_page("#locais"); 
    }); 
     
     /* button  #bt_entrar */
    $(document).on("click", "#bt_entrar", function(evt)
    {
        login();
        //testarinteresse(); Função foi para o facebook.js
        //activate_subpage("#primeiratela");
    });
    
        /* button  #bt_avancar2 */
    $(document).on("click", "#bt_avancar2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#primeiratela"); 
    });
    
     /* button  #bt_mapa */
    $(document).on("click", "#bt_mapa", function(evt)
    {
         /*global activate_subpage */
         navigator.notification.alert("Para o mapa funcionar, mude a orientação do seu dispositivo.","","Aviso");
         activate_subpage("#mapa"); 
        
    
    });
     /* button  #bt_amigos */
    $(document).on("click", "#bt_amigos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#amigos"); 
    });
    
        /* button  #bt_perfil */
    $(document).on("click", "#bt_perfil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#perfil"); 
    });
    
        /* button  #bt_configuracoes */
    $(document).on("click", "#bt_configuracoes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#configuracoes"); 
    });
    
        /* button  #bt_role */
    $(document).on("click", "#bt_role", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#role"); 
    });
    
        /* listitem  #sair */
    $(document).on("click", "#sair", function(evt)
    {
         /*global activate_page */
         logout();
         testador = 0;
         activate_page("#mainpage"); 
    });
    
        /* button  #bt_voltarsobre */
    $(document).on("click", "#bt_voltarsobre", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#configuracoes"); 
    });
    
        /* button  #bt_voltarsugestoes */
    $(document).on("click", "#bt_voltarsugestoes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#configuracoes"); 
    });
    
        /* listitem  #bt_sobre */
    $(document).on("click", "#bt_sobre", function(evt)
    {
         /*global activate_page */
         activate_page("#sobre"); 
    });
    
        /* listitem  #bt_sugestoes */
    $(document).on("click", "#bt_sugestoes", function(evt)
    {
         /*global activate_page */
         activate_page("#sugestoes"); 
    });
    
        /* button  #voltarmarcarrole */
    $(document).on("click", "#voltarmarcarrole", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#mapa"); 
    });    
    
        /* button  #bt_marcarrole */
    $(document).on("click", "#bt_marcarrole", function(evt)
    {
        testarole(); 
        //navigator.notification.alert("Seu Rolé não foi marcado porque a funcionalidade não foi feita ainda.","","Em construção");
         //activate_page("#mapa"); 
    });
    
        /* button  #bt_voltarrecuperar */
    $(document).on("click", "#bt_voltarrecuperar", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #bt_esqueceu */
    $(document).on("click", "#bt_esqueceu", function(evt)
    {
         /*global activate_page */
         activate_page("#recuperarsenha"); 
    });
    
        /* button  #bt_voltar */
    $(document).on("click", "#bt_voltar", function(evt)
    {
         /*global activate_page */
         activate_page("#paginainicial"); 
         return false;
    });
    
        /* button  #bt_voltar */
    $(document).on("click", "#bt_voltar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#configuracoes"); 
         return false;
    });
    
        /* button  #bt_voltarconfigconta */
    $(document).on("click", "#bt_voltarconfigconta", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#configuracoes"); 
         return false;
    });
    
        /* button  #bt_voltarlocal */
    $(document).on("click", "#bt_voltarlocal", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#mapa"); 
         return false;
    });
    
        /* listitem  #bt_configconta */
    $(document).on("click", "#bt_configconta", function(evt)
    {
         /*global activate_page */
         activate_page("#configconta"); 
         return false;
    });
    
        /* button  #bt_confirmarinteresse */
    $(document).on("click", "#bt_confirmarinteresse", function(evt)
    {
         cadastrarperfil();
         testarmarcados();
         //cadastrarinteresses(); Dentro do testarmarcados()
         return false;
    });
    
        /* button  #bt_enviarsugestao */
                
    $(document).on("click", "#bt_enviarsugestao", function(evt)
    { 
         textsugestao = document.getElementById("p_sugestao").value;
         enviarsugestao();
         //activate_subpage("#configuracoes"); Dentro do enviarsugestao()
         return false;
    });
    
        /* listitem  #bt_apagarconta */
    $(document).on("click", "#bt_apagarconta", function(evt)
    {
        function onConfirm(buttonIndex){
            if(buttonIndex==1){
                apagarconta();
            }
        }
        navigator.notification.confirm("Você realmente deseja apagar sua conta?",onConfirm,"Confirmação",['Sim','Não']);
        //apagarconta();
    });
    
        /* button  #bt_voltarint */
    $(document).on("click", "#bt_voltarint", function(evt)
    {
         /*global activate_page */
         activate_page("#configconta"); 
         return false;
    });
    
        /* listitem  #bt_alterarint */
    $(document).on("click", "#bt_alterarint", function(evt)
    {
        activate_page("#trocarinteresse");
    });
    
        /* button  #bt_confirmarinteresse2 */
    $(document).on("click", "#bt_confirmarinteresse2", function(evt)
    {
        deletarinteresses();
    });
    
        /* button  #bt_voltaravaliarlocal */
    $(document).on("click", "#bt_voltaravaliarlocal", function(evt)
    {
         /*global activate_page */
         activate_page("#locais"); 
         return false;
    });
    
        /* button  #bt_avaliarlocal */
    $(document).on("click", "#bt_avaliarlocal", function(evt)
    {
         /*global activate_page */
         activate_page("#avaliarlocal"); 
         return false;
    });
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
 
})();
