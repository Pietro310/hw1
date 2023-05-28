<?php
    session_Start();
    session_destroy();
    header("Location:Login.php");
?>