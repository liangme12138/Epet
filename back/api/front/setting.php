<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $userId = isset($_GET['userId']) ? $_GET['userId'] : '';
    $headImg = isset($_GET['headImg']) ? $_GET['headImg'] : '';
    $data= isset($_GET['data']) ? $_GET['data'] : '';
    $userId2 = isset($_GET['userId2']) ? $_GET['userId2'] : '';
    if($headImg){
        $sql="update user set headeImg='$headImg' where userId=$userId"; 
         $result =excute_oop($sql); 
    }
    if($data){
        $arr=json_decode($data);
        $datas=array();
        foreach ($arr as $key => $value) {
            foreach ($value as $id => $item) {
                array_push($datas,$id.'='."'".$item."'"); 
            }
           
        }
        $sql="update user set $datas[0],$datas[1],$datas[2],$datas[3],$datas[4] where userId=$userId"; 
        $result =excute_oop($sql); 
    }
    if($userId2){
        $sql="select * from user where userId=$userId2";
        $result =query_oop($sql); 
    }
   
    
    echo json_encode($result, JSON_UNESCAPED_UNICODE); 
?>