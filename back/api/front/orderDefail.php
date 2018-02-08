<?php
    include 'DBHelper.php';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $orderId = isset($_GET['orderId']) ? $_GET['orderId'] : '';
    
     $sql = "select * from `order` inner join ordergoods on `order`.orderId = ordergoods.orderId inner join product on product.goodId = ordergoods.goodId inner join productimg on product.goodId = productimg.goodId inner join address on address.userId = `order`.userId  where `order`.orderId = $orderId and `order`.userId = '$userId' and address.type = 'true'";
     $result = query_oop($sql);
    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        echo "fail";
    }

?>