<?php
$id = $_GET['id'];

$serve = mysqli_connect('200.18.128.78', 'arthur_andre', 'role', 'role');
if(!$serve){ echo 'erro';}

if($_GET['acao'] == 'selecionar'){
$sql = "SELECT * FROM teste";
$result = mysqli_query($serve, $sql);
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "Dado: " . $row["campo"]. "<br>";
    }
} else {
    echo "nao tem nada";
}

}

if($_GET['acao'] == 'consultarcadastro'){ 
    $sql = "SELECT interesse.Descricao FROM perfil_has_interesse, interesse WHERE perfil_has_interesse.Perfil_Id_Perfil = $id and perfil_has_interesse.Interesse_Id_interesse = interesse.Id_interesse";
    $result = mysqli_query($serve, $sql); 
if (mysqli_num_rows($result)>0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<b>" . $row["Descricao"] . "</b><br>";
    }
} else {
    echo " ";
}
}

if($_GET['acao'] == 'cadastrarperfil'){
    $sexo = $_GET['sexo'];
    $cidade = $_GET['cidade'];
    $sql = "INSERT INTO perfil values($id,'$sexo','$cidade');";
    mysqli_query($serve, $sql);
}
   
if($_GET['acao'] == 'cadastrarinteresses'){
    $interesses = array($_GET['interesses']);
    for($i=1;$i<11;$i++){
      if($interesses[$i] === 1){
         $sql = "INSERT INTO perfil_has_interesse values($id,$i);";
         mysqli_query($serve, $sql);
      }
    }
}

   if($_GET['acao'] == 'enviarsugestao'){
    $texto = $_GET['textsugestao'];
    $sql = "INSERT INTO criticaaplicativo (Perfil_Id_Perfil, Descricao) values ($id,'$texto');";
    mysqli_query($serve, $sql);
}

?>