<?php
    include 'DBHelper.php';
    $phoneNum = isset($_GET['phoneNum']) ? $_GET['phoneNum'] : "";
    $password = isset($_GET['password']) ? $_GET['password'] : "";
    // 加密
    $password = md5($password);

    $sql = "select * from user where phoneNum = '$phoneNum' and password = '$password'";

    $result = query_oop($sql);
    // $result = $conn->query($sql);
    //使用查询结果集
    // $row = $result->fetch_all(MYSQLI_ASSOC);
    // 输出结果
    if($result){
        echo 'true';
    }else{
        echo 'false';
    }
    // 关闭连接
    // $conn->close();

?>