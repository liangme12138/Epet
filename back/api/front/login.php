<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    $phone2 = isset($_GET['phone2']) ? $_GET['phone2'] : '';
    $phone3 = isset($_GET['phone3']) ? $_GET['phone3'] : '';
    $password3 = isset($_GET['password3']) ? $_GET['password3'] : '';
    if($phone&&$password){
        $sql="select * from user where phone='$phone' and password='$password'";
        $result = query_oop($sql); 
        echo json_encode($result, JSON_UNESCAPED_UNICODE); 
    }
    else if($phone2){
        $sql="select * from user where phone='$phone2'";
         $result = query_oop($sql); 
         if (!empty($result)){
            echo 'true'; 
        }
        else{
            echo 'false';
        }
    
    }
    else if($phone3 && $password3){
        $sql="insert into user(phone,password) values('$phone3','$password3')";
        $result = excute_oop($sql); 
        echo json_encode($result, JSON_UNESCAPED_UNICODE); 
    }
    
?>