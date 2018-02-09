<?php
   header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    // 引入其他php文件
    

     $sql = "select * from pub";

    $result = query_oop($sql);

    if($result){
        
        echo json_encode($result,JSON_UNESCAPED_UNICODE);

    }else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>