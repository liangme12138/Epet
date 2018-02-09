<?php 
    include './DBHelper.php';
    $status = isset($_POST["status"]) ? $_POST["status"] : "";
    $goodsId = isset($_POST["goodsId"]) ? $_POST["goodsId"] : "";
    $id = isset($_POST["id"]) ? $_POST["id"] : "";
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $type = isset($_POST["type"]) ? $_POST["type"] : "";
    $price = isset($_POST["price"]) ? $_POST["price"] : "";
    $saleQty = isset($_POST["saleQty"]) ? $_POST["saleQty"] : "";
    $keepNum = isset($_POST["keepNum"]) ? $_POST["keepNum"] : "";
    $birth = isset($_POST["birth"]) ? $_POST["birth"] : "";
    $keepDate = isset($_POST["keepDate"]) ? $_POST["keepDate"] : "";
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 8;
    $addTime = isset($_POST["addTime"]) ? $_POST["addTime"] : "";
    $keyWord = isset($_POST["keyWord"]) ? $_POST["keyWord"] : "";
    $warning = isset($_POST["warning"]) ? $_POST["warning"] : "";
    if($status=="add" && $goodsId){
        $sql = "select * from proprietary where goodsId='$goodsId'";
        // $result = query($sql);
        // if(count($result) > 0){
        //     echo "fail";  
        // }else{
            if($keepDate != ""){
                $sql = "insert into proprietary(goodsId,name,type,price,saleQty,keepNum,birth,keepDate)values('$goodsId','$name','$type','$price','$saleQty','$keepNum','$birth','$keepDate')";
            }else{
                $sql = "insert into proprietary(goodsId,name,type,price,saleQty,keepNum,birth)values('$goodsId','$name','$type','$price','$saleQty','$keepNum','$birth')";         
            }
            $res = excute_oop($sql);
            if($res){
                echo "ok";
            }else{
                echo "fail";
            }
        // }
    }else if($status=="del"){
        if($goodsId){
            $sql = "select * from proprietary where goodsId='$goodsId'";
        }else if($id){
            $sql = "select * from proprietary where id='$id'";
        }
        $result = query($sql);
        if(count($result) == 0){
            echo "fail";
        }else{
            if($goodsId){
                $sql = "delete from proprietary where goodsId=$goodsId";
                $sql.= ";delete from allImg where goodsId=$goodsId";
            }else{
                $sql = "delete from proprietary where id=$id";
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
    }else if($status=="upd"){
        if($goodsId){
            $sql = "select * from proprietary where goodsId='$goodsId'";
        }else if($id){
            $sql = "select * from proprietary where id='$id'";
        }
        $result = query($sql);
        if(count($result) == 0){
            echo "fail";
        }else{
            $sql = "update proprietary set ";
           
            if($addTime){
                $sql.= "addTime='$addTime'";
            }
            if($name){
                $sql.= ",name='$name'";
            }
            if($type){
                $sql.= ",type='$type'";
            }
            if($price){
                $sql.= ",price='$price'";
            }
            if($saleQty){
                $sql.= ",saleQty='$saleQty'";
            }
            if($keepNum){
                $sql.= ",keepNum='$keepNum'";
            }
            if($birth){
                $sql.= ",birth='$birth'";
            }
            if($keepDate){
                $sql.= ",keepDate='$keepDate'";
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
    }else if($status=="get"){
        $sql = "select * from allImg join proprietary on proprietary.goodsId=allImg.goodsId";
        if($goodsId){
            $sql.=" where proprietary.goodsId=$goodsId";
        }else if($id){
            $sql.=" where proprietary.id=$id";
        }
        // echo $sql;
        $result = query($sql);
        if(count($result) > 0){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }else if($status=="page" && $warning == "1"){
        $sql = "select SQL_CALC_FOUND_ROWS * from proprietary where keepNum < 50 limit ";
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
    }else if($status=="page"){
        if($keyWord){
            $sql = "select SQL_CALC_FOUND_ROWS * from proprietary where goodsId='$keyWord' limit ";
            $sql .= ($page - 1)*$limit;
            $sql .= ', ';
            $sql .= $limit;
            $sql .= ';select FOUND_ROWS() as rowsCount;';
            // echo $sql;
            $result = multi_query_oop($sql);
            if(count($result['data1']) > 0){
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }else{
                $sql = "select SQL_CALC_FOUND_ROWS * from proprietary where type='$keyWord' limit ";
                $sql .= ($page - 1)*$limit;
                $sql .= ', ';
                $sql .= $limit;
                $sql .= ';select FOUND_ROWS() as rowsCount;';
                $result = multi_query_oop($sql);
                if(count($result['data1']) > 0){
                    echo json_encode($result,JSON_UNESCAPED_UNICODE);
                }else{
                    $sql = "select SQL_CALC_FOUND_ROWS * from proprietary where name Like '%$keyWord%' limit ";
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
        }else{
            $sql = "select SQL_CALC_FOUND_ROWS * from proprietary where 1=1 limit ";
            $sql .= ($page - 1)*$limit;
            $sql .= ', ';
            $sql .= $limit;
            $sql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($sql);
            if(count($result['data1']) == 0){
                echo "fail";
            }else{
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }
        }
    }
?>