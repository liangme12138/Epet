<?php
    include 'DBHelper.php';
    $phoneNum = isset($_GET['phoneNum']) ? $_GET['phoneNum'] : "";
    $password = isset($_GET['password']) ? $_GET['password'] : "";
    
    if($password == "" && $phoneNum != ""){
        $sql = "select * from user where phoneNum = '$phoneNum'";

        $result = query_oop($sql);
        // 输出结果
        if($result){
            // 表示用户名已存在
            echo 'false';
        }else{
            // 表示用户名可用
            echo 'true';
        }
    }else if($password != "" && $phoneNum != ""){
        
        // 给密码加密
        $password = md5($password);

        // 将数据写入数据库并返回信息
        // 将数据写进数据库
        $sql = "insert into user(phoneNum,password) values ('$phoneNum','$password')";

        $result = excute_oop($sql);
        // var_dump($result);
        // 获取查询结果
        // $row = $result->fetch_all(MYSQLI_ASSOC);
        if($result){
            // 插入成功
            echo "true";
        }else{
            echo "fail";
        }
    }
    // 关闭连接
    // $conn->close();
?>