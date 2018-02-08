<?php
    include 'DBHelper.php';
    $classify2Id = isset($_GET['classify2Id']) ? $_GET['classify2Id'] : '';
    $name = isset($_GET['name']) ? $_GET['name'] : '';
    $state = isset($_GET['state']) ? $_GET['state'] : '';
    $value = isset($_GET['value']) ? $_GET['value'] : '';

    if($name != "" && $state != ""){
        $sql = "select * from product inner join productimg on product.goodId = productimg.goodId where product.classify2Id = '$classify2Id' ORDER BY product.$name $state";
    }else if($value){
        $sql = "select * from product inner join productimg on product.goodId = productimg.goodId where product.goodName like '%$value%' or product.describe like '%$value%' or product.brand like '%$value%'";
    }else{
        $sql = "select * from product inner join productimg on product.goodId = productimg.goodId where product.classify2Id = '$classify2Id'";
    }

    $result = query_oop($sql);

    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        $sql1 = "select * from tab inner join product on product.categoryId = tab.categoryId inner join productimg on product.goodId = productimg.goodId where tab.tabId = '$classify2Id'";
        $result1 = query_oop($sql1);
        if($result1){
            echo json_encode($result1, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }

?>