<?php
    include 'DBHelper.php';
    $category = isset($_GET['category']) ? $_GET['category'] : '';
    
    $sql = 'select * from category1';
    $result = query_oop($sql);

    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        echo "fail";
    }

    


?>