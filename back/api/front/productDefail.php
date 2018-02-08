<?php
    include 'DBHelper.php';
    $goodId = isset($_GET['goodId']) ? $_GET['goodId'] : '';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $count = isset($_GET['count']) ? $_GET['count'] : '';
    $state = isset($_GET['state']) ? $_GET['state'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : '';

    if($state){
        if($state == "add"){
            $sql = "insert into `collect` (userId,goodId) VALUES ('$userId','$goodId')";
        }else if($state == "del"){
            $sql =  "DELETE FROM collect where userId = '$userId' and goodId = '$goodId' ";
        }else if($state == "collect"){
            $sql =  "select * from collect where userId = '$userId' and goodId = '$goodId'";
            $result = query_oop($sql);
            if($result){
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }else{
                echo "fail";
            }
            return;
        }else if($state == "cart"){
            $sql =  "SELECT * FROM car where userId = '$userId'";
            $result = query_oop($sql);
            if($result){
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }else{
                echo "fail";
            }
            return;
        }else if($state == "addcar"){
            $sql =  "select * from car where userId = '$userId' and goodId = '$goodId'";
            $result = query_oop($sql);
            if($result){
                $count = $result[0]['count'] + $count;
                $sql1 = "UPDATE car SET count = '$count' WHERE userId = '$userId' and goodId = '$goodId' ";
                $result1 = excute_oop($sql1);
                if($result1){
                    echo 'ok';
                }else{
                    echo "fail";
                }
            }else{
                $sql1 = "insert into car (userId,goodId,count,checkedstatus) VALUES ($userId,$goodId,$count,'$status')";
                $result1 = excute_oop($sql1);
                if($result1){
                    echo 'ok';
                }else{
                    echo "fail";
                }
            }
            return;
        }
        $result = excute_oop($sql);
        if($result){
            echo 'ok';
        }else{
            echo "fail";
        }
    }else if($goodId){
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
    }

?>