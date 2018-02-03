<?php
    include 'DBHelper.php';
    $tabItem = isset($_GET['tabItem']) ? $_GET['tabItem'] : '';
    
    $sql = 'SELECT * from category';

    $result = query_oop($sql);

    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        echo "fail";
    }
?>