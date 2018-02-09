<?php    
    include 'DBHelper.php';
    // 操作
    $status = isset($_POST['status']) ? $_POST['status'] : "";
    // 查id
    $id = isset($_POST['id']) ? $_POST['id'] : "";
    $goodsId = isset($_POST['goodsId']) ? $_POST['goodsId'] : "";
    // 查询内容
    $name = isset($_POST['name']) ? $_POST['name'] : "";
    $phoneNum = isset($_POST['phoneNum']) ? $_POST['phoneNum'] : "";
    $breed = isset($_POST['breed']) ? $_POST['breed'] : "";
    $price = isset($_POST['price']) ? $_POST['price'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $color = isset($_POST['color']) ? $_POST['color'] : "";
    $age = isset($_POST['age']) ? $_POST['age'] : "";
    $classify = isset($_POST['classify']) ? $_POST['classify'] : "";
    $weight = isset($_POST['weight']) ? $_POST['weight'] : "";
    $height = isset($_POST['height']) ? $_POST['height'] : "";
    $birthday = isset($_POST['birthday']) ? $_POST['birthday'] : "";
    $vaccine = isset($_POST['vaccine']) ? $_POST['vaccine'] : "";
    $addTime = isset($_POST["addTime"]) ? $_POST["addTime"] : "";
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 8;
    $keyWord = isset($_POST["keyWord"]) ? $_POST["keyWord"] : "";

    if($status == "add" && $goodsId != ""){
        $sql = "select * from pet where goodsId='$goodsId'";
        $result = query($sql);
        if(count($result) > 0){
            echo "fail";  
        }else{
            $sql = "insert into pet(goodsId,name,phoneNum,price,breed,gender,color,age,classify,weight,height,birthday,vaccine,addTime)values('$goodsId','$name','$phoneNum','$price','$breed','$gender','$color','$age','$classify','$weight','$height','$birthday','$vaccine','$addTime')";         
            $res = excute_oop($sql);
            if($res){
                echo "ok";
            }else{
                echo "fail";
            }
        }
    }else if($status == "del" && $id != ""){
        if($goodsId){
            $sql = "select * from pet where goodsId='$goodsId'";
        }else if($id){
            $sql = "select * from pet where id='$id'";
        }
        $result = query($sql);
        if(count($result) == 0){
            echo "fail";
        }else{
            if($goodsId){
                $sql = "delete from pet where goodsId=$goodsId";
                $sql.= ";delete from allImg where goodsId=$goodsId";
            }else{
                $sql = "delete from pet where id=$id";
                $sql.= ";delete from allImg where id=$id";
            }
            $res = multi_query_oop($sql);
            $endRes = 'fail';
            foreach ($res as $key => $value) {  
                if(count($value) == 0){
                    $endRes = 'ok';
                }
            }  
            echo $endRes;
        }
    }else if($status == "get"){
        $sql = "select * from allImg join pet on pet.goodsId = allImg.goodsId";
        if($goodsId){
            $sql.=" where pet.goodsId = $goodsId";
        }else if($id){
            $sql.=" where pet.id = $id";
        }
        $result = query($sql);
        if(count($result) > 0){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
        // $sql = "select allimg.goodsImg,pet.* from pet inner join allimg on allimg.goodsId = pet.goodsId WHERE pet.id = '$id'";
        // $result = query_oop($sql);
        // if($result){
        //     echo json_encode($result,JSON_UNESCAPED_UNICODE);
        // }else{
        //     $sql = "select * from pet WHERE pet.id = '$id'";
        //     $result = query_oop($sql);
        //     if($result){
        //         echo json_encode($result,JSON_UNESCAPED_UNICODE);
        //     }else{
        //         // 表示数据不存在
        //         echo 'false';
        //     }
        // }
    }else if($status == "upd" && $id != ""){
        if($goodsId){
            $sql = "select * from pet where goodsId='$goodsId'";
        }else if($id){
            $sql = "select * from pet where id='$id'";
        }
        $result = query($sql);
        if(count($result) == 0){
            echo "fail";
        }else{
            $sql = "update pet set ";
         
            if($addTime){
                $sql.= "addTime='$addTime'";
            }
            if($name){
                $sql.= ",name='$name'";
            }
            if($price){
                $sql.= ",price='$price'";
            }
            if($phoneNum){
                $sql.= ",phoneNum='$phoneNum'";
            }
            if($breed){
                $sql.= ",breed='$breed'";
            }
            if($color){
                $sql.= ",color='$color'";
            }
            if($age){
                $sql.= ",age='$age'";
            }
            if($classify){
                $sql.= ",classify='$classify'";
            }
            if($weight){
                $sql.= ",weight='$weight'";
            }
            if($height){
                $sql.= ",height='$height'";
            }
            if($birthday){
                $sql.= ",birthday='$birthday'";
            }
            if($vaccine){
                $sql.= ",vaccine='$vaccine'";
            }

            if($goodsId){
                $sql.= " where goodsId='$goodsId'";
            }else{
                $sql.= " where id='$id'";
            }
            $res = excute_oop($sql);
            if($res=="1"){
                echo 'ok';
            }else{
                echo 'fail';
            }
        }
    }else if($status=="page"){
        if($keyWord){
            $sql = "select SQL_CALC_FOUND_ROWS * from pet where goodsId = '$keyWord' limit ";
            $sql .= ($page - 1)*$limit;
            $sql .= ', ';
            $sql .= $limit;
            $sql .= ';select FOUND_ROWS() as rowsCount;';
            // echo $sql;
            $result = multi_query_oop($sql);
            if(count($result['data1']) > 0){
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }else{
                $sql = "select SQL_CALC_FOUND_ROWS * from pet where phoneNum = '$keyWord' limit ";
                $sql .= ($page - 1)*$limit;
                $sql .= ', ';
                $sql .= $limit;
                $sql .= ';select FOUND_ROWS() as rowsCount;';
                $result = multi_query_oop($sql);
                if(count($result['data1']) > 0){
                    echo json_encode($result,JSON_UNESCAPED_UNICODE);
                }else{
                    $sql = "select SQL_CALC_FOUND_ROWS * from pet where name Like '%$keyWord%' limit ";
                    $sql .= ($page - 1)*$limit;
                    $sql .= ', ';
                    $sql .= $limit;
                    $sql .= ';select FOUND_ROWS() as rowsCount;';
                    $result = multi_query_oop($sql);
                    if(count($result['data1']) > 0){
                        echo json_encode($result,JSON_UNESCAPED_UNICODE);
                    }else{
                        $sql = "select SQL_CALC_FOUND_ROWS * from pet where breed Like '%$keyWord%' limit ";
                        $sql .= ($page - 1)*$limit;
                        $sql .= ', ';
                        $sql .= $limit;
                        $sql .= ';select FOUND_ROWS() as rowsCount;';
                        $result = multi_query_oop($sql);
                        if(count($result['data1']) > 0){
                            echo json_encode($result,JSON_UNESCAPED_UNICODE);
                        }else{
                            $sql = "select SQL_CALC_FOUND_ROWS * from pet where color Like '%$keyWord%' limit ";
                            $sql .= ($page - 1)*$limit;
                            $sql .= ', ';
                            $sql .= $limit;
                            $sql .= ';select FOUND_ROWS() as rowsCount;';
                            $result = multi_query_oop($sql);
                            if(count($result['data1']) > 0){
                                echo json_encode($result,JSON_UNESCAPED_UNICODE);
                            }else{
                                $sql = "select SQL_CALC_FOUND_ROWS * from pet where classify Like '%$keyWord%' limit ";
                                $sql .= ($page - 1)*$limit;
                                $sql .= ', ';
                                $sql .= $limit;
                                $sql .= ';select FOUND_ROWS() as rowsCount;';
                                $result = multi_query_oop($sql);
                                if(count($result['data1']) > 0){
                                    echo json_encode($result,JSON_UNESCAPED_UNICODE);
                                }else{
                                    echo "fail";
                                }
                            }
                        }
                    }
                }
                
            }
        }else{
            // 全部数据查询语句
            $sql = "select SQL_CALC_FOUND_ROWS * from pet where 1=1 limit ";
            $sql .= ($page - 1)*$limit;
            $sql .= ', ';
            $sql .= $limit;
            $sql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($sql);
            if(count($result) == 0){
                echo "fail";
            }else{
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }
        }
    }
?>