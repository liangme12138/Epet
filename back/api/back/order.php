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
    $phoneNum = isset($_POST["phoneNum"]) ? $_POST["phoneNum"] : ""; 
    $userType = isset($_POST["userType"]) ? $_POST["userType"] : ""; 
    $type = isset($_POST["type"]) ? $_POST["type"] : "";
    $orderId = isset($_POST["orderId"]) ? $_POST["orderId"] : "";
    $goodsId = isset($_POST["goodsId"]) ? $_POST["goodsId"] : "";
    $address = isset($_POST["address"]) ? $_POST["address"] : "";
    $postage = isset($_POST["postage"]) ? $_POST["postage"] : "";
    $status = isset($_POST["status"]) ? $_POST["status"] : "";
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 12;
    $table;
    $tableGoods;
    if($userType == "buyer"){
        $table = 'buyerorder';
        $tableGoods = 'buyergoods';
    }else if($userType == "seller"){
        $table = 'sellerorder';
        $tableGoods = 'sellergoods';
    }

    // add;参数 $type,$orderId,$phoneNum,$status,$goodsId,$userType;
    if($type == "add"){
        $sql = "insert into ".$table."(orderId,phoneNumId,address,postage,status)values('$orderId','$phoneNum','$address','$postage','$status')";
        $goodsId = explode(',',$goodsId);
        for($i=0;$i < count($goodsId);$i++){
            $sql.=";insert into ".$tableGoods."(orderId,goodsId)values('$orderId','$goodsId[$i]')";
        }
        $result = multi_query_oop($sql);
        $endRes = 'fail';
            foreach ($result as $key => $value) {  
                if(count($value) == 0){
                    $endRes = 'ok';
                }
            }  
        echo $endRes;
    }else if($type == "del"){//del;参数 $type,$orderId,$userType;
        $sql = "delete from ".$table." where orderId='$orderId'";
        $sql.= ";delete from ".$tableGoods." where orderId='$orderId'";
        $result = multi_query_oop($sql);
        $endRes = 'fail';
            foreach ($result as $key => $value) {  
                if(count($value) == 0){
                    $endRes = 'ok';
                }
            }  
        echo $endRes;
    }else if($type == 'get'){//get; 参数 $type,$phoneNum,$status,$userType;
        $sql = "select * from ".$tableGoods." join ".$table." on ".$table.".orderId=".$tableGoods.".orderId join pet on ".$tableGoods.".goodsId=pet.goodsId join allImg on pet.goodsId = allImg.goodsId where ".$table.".phoneNumId='$phoneNum' AND ".$table.".status='$status'";
        $sql.= ";select * from ".$tableGoods." join ".$table." on ".$table.".orderId=".$tableGoods.".orderId join proprietary on ".$tableGoods.".goodsId=proprietary.goodsId join allImg on proprietary.goodsId = allImg.goodsId where ".$table.".phoneNumId='$phoneNum' AND ".$table.".status='$status'";
        $result = multi_query_oop($sql);
        echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }else if($type == "proprietary"){
        $sql = "select * from ".$tableGoods." join ".$table." on ".$table.".orderId=".$tableGoods.".orderId join pet on ".$tableGoods.".goodsId=pet.goodsId join allImg on pet.goodsId = allImg.goodsId where 1=1 limit ";
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
    }else if($type == "pet"){
        $sql.= "select * from ".$tableGoods." join ".$table." on ".$table.".orderId=".$tableGoods.".orderId join pet on ".$tableGoods.".goodsId=pet.goodsId join allImg on pet.goodsId = allImg.goodsId where 1=1 limit ";
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
?>