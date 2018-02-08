<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $collectId = isset($_GET['collectId']) ? $_GET['collectId'] : '';
    if($userId){
         $sql="select c.collectId,i.ImgUrl,p.Price,p.goodName from collect c ,product p , productimg i where c.userId='$userId' and p.goodId=c.goodId and p.goodId=i.goodId";
         $result =query_oop($sql); 
    }
    else if($collectId){
        $sql="delete from collect where collectId='$collectId'";
        $result = excute_oop($sql);
    }
    echo json_encode($result, JSON_UNESCAPED_UNICODE); 
?>