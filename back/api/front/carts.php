<?php
    include 'DBHelper.php';
    $goodId = isset($_GET['goodId']) ? $_GET['goodId'] : '';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $state = isset($_GET['state']) ? $_GET['state'] : '';

    if($state){
        if($state == "addcar"){
            $sql = "insert into car (userId,goodId,count,checkedstatus) VALUES ($userId,$goodId,$count,'$status')";
        }
        $result = excute_oop($sql);
        if($result){
            echo 'ok';
        }else{
            echo "fail";
        }
    }else if($userId){
        $sql = "select * from tab inner join product on product.categoryId = tab.categoryId inner join productimg on product.goodId = productimg.goodId where tab.tabId = '$userId'";
        
        $result = query_oop($sql);
        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }

?>