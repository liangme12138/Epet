<?php
    include 'DBHelper.php';
    // 升降序
    $state = isset($_POST["state"]) ? $_POST["state"] : "";
    // 字段名
    $type = isset($_POST["type"]) ? $_POST["type"] : "";
    // 字段名
    $type1 = isset($_POST["type1"]) ? $_POST["type1"] : "";
    // 狗分类
    $classify = isset($_POST["classify"]) ? $_POST["classify"] : "";
    // 操作
    $status = isset($_POST['status']) ? $_POST['status'] : "";
    // 查id
    $id = isset($_POST['id']) ? $_POST['id'] : "";
    $goodsId = isset($_POST['goodsId']) ? $_POST['goodsId'] : "";
    // 查哪个表
    $table = isset($_POST['table']) ? $_POST['table'] : "";
    // 查询内容
    $name = isset($_POST['name']) ? $_POST['name'] : "";
    // $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    // $limit = isset($_POST["limit"]) ? $_POST["limit"] : 8;
    
    // 给某一分类进行排序
    if($classify != "" && $state != "" && $type != ""){
        // $sql = "select * from pet where classify = '$classify' order by $type $state";
        $sql = "select allimg.goodsImg,pet.*,`user`.address,`user`.username from pet inner join allimg on allimg.goodsId = pet.goodsId inner join `user` on `user`.phoneNum = pet.phoneNum WHERE pet.classify = '$classify' order by $type $state";
        $result = query_oop($sql);
        if($result){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            // 表示数据不存在
            echo 'false';
        }
    }else if($state != "" && $type != "" && $type1 != ""){
        // 根据字段升降序
        // $sql = "select * from pet order by $type $state";
        $sql = "select allimg.goodsImg,pet.*,`user`.address,`user`.username from pet inner join allimg on allimg.goodsId = pet.goodsId inner join `user` on `user`.phoneNum = pet.phoneNum order by $type1 $state,$type $state";

        $result = query_oop($sql);
        if($result){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            // 表示数据不存在
            echo 'false';
        }
    }else if($state != "" && $type != ""){
        // 根据字段升降序
        // $sql = "select * from pet order by $type $state";
        $sql = "select allimg.goodsImg,pet.*,`user`.address,`user`.username from pet inner join allimg on allimg.goodsId = pet.goodsId inner join `user` on `user`.phoneNum = pet.phoneNum order by $type $state";

        $result = query_oop($sql);
        if($result){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            // 表示数据不存在
            echo 'false';
        }
    }else if($classify != ""){
        // 狗分类查询
        // $sql = "select * from pet where classify = '$classify'";
        $sql = "select allimg.goodsImg,pet.*,`user`.address,`user`.username from pet inner join allimg on allimg.goodsId = pet.goodsId inner join `user` on `user`.phoneNum = pet.phoneNum WHERE pet.classify = '$classify'";
        $result = query_oop($sql);
        if($result){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            // 表示数据不存在
            echo 'false';
        }
    }else if($id != "" && $table != ""){
        if($table == "pet"){
            $sql = "select allimg.goodsImg,pet.*,`user`.address,`user`.username from pet inner join allimg on allimg.goodsId = pet.goodsId inner join `user` on `user`.phoneNum = pet.phoneNum WHERE pet.goodsid = '$id'";
        }else if($table == "proprietary"){
            $sql = "select allimg.goodsImg,proprietary.* from proprietary inner join allimg on allimg.goodsId = proprietary.goodsId  WHERE proprietary.goodsid = '$id'";
        }
        $result = query_oop($sql);
        if($result){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            // 表示数据不存在
            echo 'false';
        }
    }else if($status == "get" && $id != ""){
        $sql = "select allimg.goodsImg,pet.* from pet inner join allimg on allimg.goodsId = pet.goodsId WHERE pet.id = '$id'";
        $result = query_oop($sql);
        if($result){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            // 表示数据不存在
            echo 'false';
        }
    }else if($status == "get"){
        $sql = "select allimg.goodsImg,pet.*,`user`.address,`user`.username from pet inner join allimg on allimg.goodsId = pet.goodsId inner join `user` on `user`.phoneNum = pet.phoneNum WHERE (pet.classify like '%$name%' or pet.breed like '%$name%' or pet.color like '%$name%' or pet.age like '%$name%')";
        $result = query_oop($sql);
        if($result){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            $sql1 = "select allimg.goodsImg,proprietary.* from proprietary inner join allimg on allimg.goodsId = proprietary.goodsId WHERE (proprietary.type like '%$name%' or proprietary.name like '%$name%' or proprietary.price like '%$name%')";
            $result1 = query_oop($sql1);
            if($result1){
                echo json_encode($result1,JSON_UNESCAPED_UNICODE);
            }else{
                // 表示数据不存在
                echo 'false';
            }
        }
    }
    // else{
    //     // 全部数据查询语句
    //     $sql = "select SQL_CALC_FOUND_ROWS * from pet where 1=1 limit ";
    //     $sql .= ($page - 1)*$limit;
    //     $sql .= ', ';
    //     $sql .= $limit;
    //     $sql .= ';select FOUND_ROWS() as rowsCount;';
    //     $result = multi_query_oop($sql);
    //     if(count($result) == 0){
    //         echo "fail";
    //     }else{
    //         echo json_encode($result,JSON_UNESCAPED_UNICODE);
    //     }
    // }

    // 后台查询语句
    // 增加
    // if($status == "add"){

    // }


?>