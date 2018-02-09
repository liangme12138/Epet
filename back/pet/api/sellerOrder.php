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
    $orderId = isset($_POST["id"]) ? $_POST["id"] : "";
    $status = isset($_POST["status"]) ? $_POST["status"] : "";
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 8;
    $keyWord = isset($_POST["keyWord"]) ? $_POST["keyWord"] : "";
    if($keyWord){
        $sql = "select SQL_CALC_FOUND_ROWS * from sellerorder join sellergoods on sellerorder.orderId=sellergoods.orderId join pet on sellergoods.goodsId=pet.goodsId where sellerorder.orderId=".$keyWord." limit ";
        $sql .= ($page - 1)*$limit;
        $sql .= ', ';
        $sql .= $limit;
        $sql .= ';select FOUND_ROWS() as rowsCount;';
        $result = multi_query_oop($sql);
        if(count($result['data1']) > 0){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            $sql = "select SQL_CALC_FOUND_ROWS * from sellerorder join sellergoods on sellerorder.orderId=sellergoods.orderId join pet on sellergoods.goodsId=pet.goodsId where sellerorder.phoneNumId=".$keyWord." limit ";
            $sql .= ($page - 1)*$limit;
            $sql .= ', ';
            $sql .= $limit;
            $sql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($sql);
            if(count($result['data1']) > 0){
                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }else{
                $sql = "select SQL_CALC_FOUND_ROWS * from sellerorder join sellergoods on sellerorder.orderId=sellergoods.orderId join pet on sellergoods.goodsId=pet.goodsId where sellerorder.status=".$keyWord." limit ";
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
        $sql = "select SQL_CALC_FOUND_ROWS * from sellerorder join sellergoods on sellerorder.orderId=sellergoods.orderId join pet on sellergoods.goodsId=pet.goodsId";
        $sql .= " where sellerorder.orderId='$orderId'";
        // echo $sql;
        $result = query($sql);
        if(count($result) > 0){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }else{
        $sql = "select SQL_CALC_FOUND_ROWS * from sellerorder join sellergoods on sellerorder.orderId=sellergoods.orderId join pet on sellergoods.goodsId=pet.goodsId where 1=1 limit ";
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
?>