<?php
    include 'DBHelper.php';
    $goodId = isset($_GET['goodId']) ? $_GET['goodId'] : '';
    

    $sql = "select * from product inner join productimg on product.goodId = productimg.goodId where product.goodId = '$goodId'";
    $result = query_oop($sql);

    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        $sql1 = "select * from activitygoods inner join activitygoodimg on activitygoods.activitygoodId = activitygoodimg.activitygoodId where activitygoods.activitygoodId = '$goodId'";
        $result1 = query_oop($sql1);
        if($result1){
            echo json_encode($result1, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }

?>