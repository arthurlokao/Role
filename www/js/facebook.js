var url, id, sexo, cidade;
//id = 11232774;
function login(){
facebookConnectPlugin.getLoginStatus(
   function (response) {
      if (response.status !== 'connected') {
         facebookConnectPlugin.login( ["public_profile", "email", "user_location", "user_friends"],
            function (response) {
               if (response.status === 'connected') {
                  facebookConnectPlugin.api('/me/?fields=id,name,email,picture.width(250),location, gender', null,
                     function(response) {
                        //navigator.notification.alert(JSON.stringify(response));
                      id= response.id;
                      cidade = response.location.name;
                      sexo = response.gender;
                      document.getElementById("ftperfil").src = response.picture.data.url;
                      document.getElementById("nomeperfil").innerText = response.name;
                      document.getElementById("cidade").innerHTML = "<button type='button' class='btn btn-link'><span class='glyphicon glyphicon-home'></span>  Mora em "+response.location.name+"</button>";
                      navigator.notification.alert("ID Lokao:"+id);
                      testarinteresse();
                      //activate_subpage("#primeiratela");
                     }
                  ); 
               }
            },
            function (response) { /*navigator.notification.alert(JSON.stringify(response));*/ }
         );
      } else {
         facebookConnectPlugin.api('/me/?fields=id,name,email,picture.width(250),location, gender', null,
            function(response) {
               //navigator.notification.alert(JSON.stringify(response));
             id= response.id;
             cidade = response.location.name;
             sexo = response.gender;
             document.getElementById("ftperfil").src = response.picture.data.url;
             document.getElementById("nomeperfil").innerText = response.name;
             document.getElementById("cidade").innerHTML = "<button type='button' class='btn btn-link'><span class='glyphicon glyphicon-home'></span>  Mora em " + response.location.name+"</button>";
             navigator.notification.alert("ID Lokao:"+id);
             testarinteresse();
             //activate_subpage("#primeiratela");
            }
         );  
      }
   },
   function (response) { /*navigator.notification.alert(JSON.stringify(response));*/ }
);
}

function logout(){
    facebookConnectPlugin.logout();
}