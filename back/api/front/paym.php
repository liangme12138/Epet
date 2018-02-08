<?php
    include 'DBHelper.php';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $orderId = isset($_GET['orderId']) ? $_GET['orderId'] : '';
    
    // 删除car里的数据
    $sql =  "DELETE FROM car where userId = '$userId' and checkedstatus = 'true' ";
    $result = excute_oop($sql);
    if($result){
        $sql1 = "UPDATE `order` SET status = '1' WHERE userId = '$userId' and orderId = '$orderId' ";
        $result1 = excute_oop($sql1);
        if($result1){
            echo 'ok';
        }else{
            echo "fail";
        }
    }else{
        echo "fail";
    }

?>