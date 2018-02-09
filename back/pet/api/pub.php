<?php
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    include 'DBHelper.php';
    // 引入其他php文件
    
    $texx= isset($_POST['texx']) ? $_POST['texx'] : "";
    $phoneNum = isset($_POST['phoneNum']) ? $_POST['phoneNum'] : "";
    $imgCan = isset($_POST['imgCan']) ? $_POST['imgCan'] : "";

    $sql = "insert into pub(texx,phoneNum,imgCan) values ('$texx','$phoneNum','$imgCan')";
    $result = excute_oop($sql);
   
    if($result){
    
        echo "true";
    }else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
  
?>