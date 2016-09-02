<?php
if(stripos($_SERVER["CONTENT_TYPE"], "application/json") === 0) {
    $_POST = json_decode(file_get_contents("php://input"), true);
}
header('Content-type: application/json');

//if "email" variable is filled out, send email
  if (isset($_POST['email']))  {
  
  //Email information
  $admin_email = "info@davidporras.com.co";
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $asunto = $_POST['asunto'];
  $mensaje = $_POST['mensaje'];
  
  //send email
  mail($admin_email, "$asunto", $mensaje, "From:" . $email);
  
  //Email response
  $arrayForm = array('status'=>'ok');
  echo json_encode($arrayForm);
  }
  
  //if "email" variable is not filled out, display the form
  else  {
    echo "{status:notOk}";
  }

?>