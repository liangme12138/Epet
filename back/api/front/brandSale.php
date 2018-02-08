<?php
    include "DBHelper.php";
    $type = isset($_GET['type']) ? $_GET['type'] : '';

    $sql = 'select * from brandsale';
    $result = query_oop($sql);
    
    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        echo "fail";
    }

?>