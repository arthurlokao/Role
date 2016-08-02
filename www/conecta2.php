<?php
$id = $_GET['id'];

$serve = new mysqli('200.18.128.78', 'arthur_andre', 'role', 'role');
if($serve->connect_error){ echo 'erro';}


   if($_GET['acao'] == 'enviarsugestao'){
    $texto = $_GET['textsugestao'];
    /*$id =  "<script>if(document.getElementByID('check_anonimo').checked == true){
                document.write(0);
            }else{
                document.write(id);
            }
            </script>";*/
    $sql = "INSERT INTO criticaaplicativo (Perfil_Id_Perfil, Descricao) values ($id,'$texto');";
    mysqli_query($serve, $sql);
}

?>