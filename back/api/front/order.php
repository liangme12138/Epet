<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : "";
    if($userId){
        $sql = "SELECT product.goodId,`order`.orderId,`order`.`status`,product.goodName,product.Price,productimg.ImgUrl,`order`.time FROM product INNER JOIN ordergoods on product.goodId = ordergoods.goodId INNER JOIN `order` on ordergoods.orderId = `order`.orderId INNER JOIN productimg on productimg.goodId = product.goodId WHERE `order`.userId = '$userId' ";
        if($status||$status=='0'){
            $sql.="and `order`.status='$status'";
        }
        // var_dump($sql);
        $result = query_oop($sql);
    }
    function array2object($array) {
    if (is_array($array)) {
        $obj = new StdClass();
        foreach ($array as $key => $val){
        $obj->$key = $val;
        }
    }
    else { $obj = $array; }
    return $obj;
    }
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
 ?>