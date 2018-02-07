<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $receiveId = isset($_GET['receiveId']) ? $_GET['receiveId'] : '';
    $editId = isset($_GET['editId']) ? $_GET['editId'] : '';
    $receiveId2 = isset($_GET['receiveId2']) ? $_GET['receiveId2'] : '';
    $data = isset($_GET['data']) ? $_GET['data'] : '';
    $newdata = isset($_GET['newdata']) ? $_GET['newdata'] : '';  
    if($userId){
        $sql="select * from address where userId=$userId";
        $result = query_oop($sql);
    }
    else if($receiveId){
        $sql="delete from address where receiveId=$receiveId";
        $result = excute_oop($sql);
    }
    else if($editId){
        $sql="select * from address where receiveId=$editId";
        $result = query_oop($sql);
    }
    else if($data && $receiveId2){
        $arr=json_decode($data);
        $datas=array();
        foreach ($arr as $key => $value) {
            foreach ($value as $id => $item) {
                array_push($datas,$id.'='."'".$item."'"); 
            }   
        }
        $sql="update address set $datas[0],$datas[1],$datas[2],$datas[3],$datas[4] where receiveId=$receiveId2"; 
        
        $result =excute_oop($sql); 
    }
    else if($newdata){
        $arr=changeArr($newdata);
        $key=implode(',',$arr[0]);
        $value=substr(json_encode($arr[1],JSON_UNESCAPED_UNICODE),1,-1);//去除[]
        $sql = "insert into address($key) values($value)";
        $result =excute_oop($sql); 
    }
     function changeArr($data){
        $address=json_decode($data);//转对象
        $arrKey=array();
         $arrValue=array();
         foreach($address as $key =>$val){
             $arrKey[]=$key;
              $arrValue[]=$val;
        }
        return [$arrKey,$arrValue];
    }
    echo json_encode($result, JSON_UNESCAPED_UNICODE); 
?>