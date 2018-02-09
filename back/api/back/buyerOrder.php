<?php
    include './DBHelper.php';
    /*
        参数:
            phoneNum:用户注册手机号码;
            userType:当前查询/添加/删除数据的表格类型,buyer/seller;
            type:当前操作类型,add/get/del;
            orderId:订单id;
            goodsId:商品id,字符串格式;
            status:订单类型,1:待支付;2.已支付;3.退款;
    
    */
    $status = isset($_POST["status"]) ? $_POST["status"] : "";
    $addTime = isset($_POST["addTime"]) ? $_POST["addTime"] : "";
    $orderId = isset($_POST["id"]) ? $_POST["id"] : "";
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 8;
    $address = isset($_POST["address"]) ? $_POST["address"] : "";
    $keyWord = isset($_POST["keyWord"]) ? $_POST["keyWord"] : "";
    $phoneNumId = isset($_POST["phoneNumId"]) ? $_POST["phoneNumId"] : "";
    $postage = isset($_POST["postage"]) ? $_POST["postage"] : 1;
    if($status == "get" || $status == "page"){
        if($keyWord){
            $sql = "select SQL_CALC_FOUND_ROWS * from buyerorder join buyergoods on buyerorder.orderId=buyergoods.orderId join proprietary on buyergoods.goodsId=proprietary.goodsId where buyerorder.orderId=".$keyWord." limit ";
            $sql .= ($page - 1)*$limit;
            $sql .= ', ';
            $sql .= $limit;
            $sql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($sql);
            if(count($result['data1']) > 0){
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }else{
                $sql = "select SQL_CALC_FOUND_ROWS * from buyerorder join buyergoods on buyerorder.orderId=buyergoods.orderId join proprietary on buyergoods.goodsId=proprietary.goodsId where buyerorder.phoneNumId=".$keyWord." limit ";
                $sql .= ($page - 1)*$limit;
                $sql .= ', ';
                $sql .= $limit;
                $sql .= ';select FOUND_ROWS() as rowsCount;';
                $result = multi_query_oop($sql);
                echo $sql;
                if(count($result['data1']) > 0){
                    echo json_encode($result,JSON_UNESCAPED_UNICODE);
                }else{
                    $sql = "select SQL_CALC_FOUND_ROWS * from buyerorder join buyergoods on buyerorder.orderId=buyergoods.orderId join proprietary on buyergoods.goodsId=proprietary.goodsId where buyerorder.status=".$keyWord." limit ";
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
        }else if($orderId != ""){
            $sql = "select SQL_CALC_FOUND_ROWS * from buyerorder join buyergoods on buyerorder.orderId=buyergoods.orderId join proprietary on buyergoods.goodsId=proprietary.goodsId";
            $sql .= " where buyerorder.orderId='$orderId'";
            // echo $sql;
            $result = query($sql);
            if(count($result) > 0){
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }else{
                echo "fail";
            }
        }else{
            $sql = "select SQL_CALC_FOUND_ROWS * from buyerorder join buyergoods on buyerorder.orderId=buyergoods.orderId join proprietary on buyergoods.goodsId=proprietary.goodsId where 1=1 limit ";
            $sql .= ($page - 1)*$limit;
            $sql .= ', ';
            $sql .= $limit;
            $sql .= ';select FOUND_ROWS() as rowsCount;';
            // echo $sql;
            $result = multi_query_oop($sql);
            if(count($result) == 0){
                echo "fail";
            }else{
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }
        }
    }else if($status == "del"){
        $sql = "delete from buyerorder where orderId='$orderId'";
        $sql.= ";delete from buyergoods where orderId='$orderId'";
        $result = multi_query_oop($sql);
        $endRes = 'fail';
            foreach ($result as $key => $value) {  
                if(count($value) == 0){
                    $endRes = 'ok';
                }
            }  
        echo $endRes;
    }else if($status == "upd"){
        $sql = "select * from buyerorder where orderId='$orderId'";
        $result = query($sql);
        if(count($result) == 0){
            echo "fail";
        }else{
            $sql = "update buyerorder set ";
            if($addTime){
                $sql.= "addTime='$addTime'";
            }
            if($phoneNumId){
                $sql.= ",phoneNumId='$phoneNumId'";
            }
            if($address){
                $sql.= ",address='$address'";
            }
            if($postage){
                $sql.= ",postage='$postage'";
            }
            $sql.= " where orderId='$orderId'";
            // echo $sql;
            $res = excute_oop($sql);
            if($res=="1"){
                echo 'ok';
            }else{
                echo 'fail';
            }
        }
    }
?>