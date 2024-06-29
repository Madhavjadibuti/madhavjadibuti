<?php
    $myfile = fopen("loginData.txt", "a+");
    $txt = "Name : ".$_POST['name']." -> Email : ".$_POST['email']." -> Message : ".$_POST['message'];
    fwrite($myfile, $txt);
    fclose($myfile);
?>