<?php
    include 'DBHelper.php';
    $recommend = isset($_POST['recommend']) ? $_POST['recommend'] : '';
    
    $sql = 'select * from category1';
    $sql .= ";select * from classify2 where recommend = $recommend";
    $sql .= ";select * from classify2";
    $sql .= ";select * from brand";
    $result = multi_query_oop($sql);

    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        echo "fail";
    }
?>