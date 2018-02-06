<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    $phone2 = isset($_GET['phone2']) ? $_GET['phone2'] : '';
    if($phone&&$password){
        $sql="select * from user where phone='$phone' and password='$password'";
        $result = query_oop($sql); 
        echo json_encode($result, JSON_UNESCAPED_UNICODE); 
    }
    else if($phone2){
        $sql="select * from user where phone='$phone2'";
         $result = query_oop($sql); 
         if (!empty($result)){
            echo json_encode($result, JSON_UNESCAPED_UNICODE); 
        }
        else{
            echo 'false';
        }
    
    }
    
?>