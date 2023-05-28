<?php 

    session_start();
    
   
   if(!isset($_SESSION['username'])){
      header("Location: Login.php");
      exit;
   }
    
//    header('Content-Type: application/json');
    $conn=mysqli_connect("localhost","root","","utenti")or die(mysqli_connect_error());
    $titolo=mysqli_real_escape_string($conn,$_GET['title']);
    $immagine=mysqli_real_escape_string($conn,$_GET['image']);

    $userID=$_SESSION['username'];

    $query="SELECT *  FROM preferiti where binary userID= '".$userID."' AND titolo ='".$titolo."'";
    
    $res=mysqli_query($conn,$query);
    if(mysqli_num_rows($res)>0){
        mysqli_close($conn);
        $response=array("aggiunto"=>false);
        echo json_encode($response);
        exit;
    }

    else{
        $query="INSERT INTO preferiti value('".$userID."','".$immagine."','".$titolo."','')";
        $res=mysqli_query($conn,$query);

        if($res==true){
            $response=array("aggiunto"=>true);
        }else{
            $response=array("aggiunto"=>false);
        }
        
    }
    
    echo json_encode($response);
    mysqli_close($conn);
    
?>
