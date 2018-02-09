<?php
    include 'DBHelper.php';
    $goodId = isset($_GET['goodId']) ? $_GET['goodId'] : '';
    $goodsid = isset($_GET['goodsid']) ? $_GET['goodsid'] : '';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $orderId = isset($_GET['orderId']) ? $_GET['orderId'] : '';
    $count = isset($_GET['count']) ? $_GET['count'] : '';
    $state = isset($_GET['state']) ? $_GET['state'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : '';
    if($state){
        if($state == "del"){
            $sql =  "DELETE FROM car where userId = '$userId' and goodId = '$goodId' ";
        }else if($state == "address"){
            $sql = "select * from address WHERE userId = '$userId' and type = 'true'";
            $result = query_oop($sql);
            if($result){
                echo 'ok';
            }else{
                echo "fail";
            }
            return;
        }else if($state == "check"){
            $sql = "select * from car WHERE userId = '$userId'";
            $result = query_oop($sql);
            if($result){
                // for($i=0;$i<count($result);$i++){
                $sql1 = "UPDATE car SET checkedstatus = '$status' WHERE userId = '$userId'";
                $result1 = excute_oop($sql1);
                if($result1){
                    $sql2 = "select * from car inner join product on product.goodId = car.goodId inner join productimg on car.goodId = productimg.goodId where car.userId = '$userId'";
                    $result2 = query_oop($sql2);
                    if($result2){
                        echo json_encode($result2, JSON_UNESCAPED_UNICODE);
                    }else{
                        echo "fail";
                    }
                }else{
                    echo "fail";
                }
                // }
                // print_r($result);
                // echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }else{
                echo "fail";
            }
            return;
        }
        $result = excute_oop($sql);
        if($result){
            $sql1 = "select * from car inner join product on product.goodId = car.goodId inner join productimg on car.goodId = productimg.goodId where car.userId = '$userId'";
            $result1 = query_oop($sql1);
            if($result1){
                echo json_encode($result1, JSON_UNESCAPED_UNICODE);
            }else{
                echo "fail";
            }
        }else{
            echo "fail";
        }
    }else if($count){
        $sql = "UPDATE car SET count = '$count' WHERE userId = '$userId' and goodId = '$goodId' ";
        $result = excute_oop($sql);
        if($result){
            $sql1 = "select * from car inner join product on product.goodId = car.goodId inner join productimg on car.goodId = productimg.goodId where car.userId = '$userId'";
            $result1 = query_oop($sql1);
            if($result1){
                echo json_encode($result1, JSON_UNESCAPED_UNICODE);
            }else{
                echo "fail";
            }
        }else{
            echo "fail";
        }
    }else if($goodId){
        $sql = "select * from car WHERE userId = '$userId' and goodId = '$goodId'";
        $result = query_oop($sql);
        if($result){
            $status;
            if($result[0]['checkedstatus'] == 'true'){
                $status = 'false';
            }else{
                $status = 'true';
            }
            $sql1 = "UPDATE car SET checkedstatus = '$status' WHERE userId = '$userId' and goodId = '$goodId' ";
            $result1 = excute_oop($sql1);
            if($result1){
                $sql2 = "select * from car inner join product on product.goodId = car.goodId inner join productimg on car.goodId = productimg.goodId where car.userId = '$userId'";
                $result2 = query_oop($sql2);
                if($result2){
                    echo json_encode($result2, JSON_UNESCAPED_UNICODE);
                }else{
                    echo "fail";
                }
            }else{
                echo "fail";
            }
        }else{
            echo "fail";
        }
    }else if($goodsid){
        $sql = "insert into `order` (userId,orderId) VALUES ('$userId','$orderId')";
        $result = excute_oop($sql);
        if($result){
            $sql1;
            for($i=0;$i<count($goodsid);$i++){
                $sql1 = "insert into `ordergoods` (goodId,orderId) VALUES ('$goodsid[$i]','$orderId')";
                $result1 = excute_oop($sql1);
                if($result1){
                    echo 'ok';
                }else{
                    echo "fail";
                }
            }
        }else{
            echo "fail";
        }
    }else if($userId){
        $sql = "select * from car inner join product on product.goodId = car.goodId inner join productimg on car.goodId = productimg.goodId where car.userId = '$userId'";
        
        $result = query_oop($sql);
        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }

?>