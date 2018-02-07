<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $tabItem = isset($_GET['tabItem']) ? $_GET['tabItem'] : '';
    $state = isset($_GET['state']) ? $_GET['state'] : '';
    $categoryId = isset($_GET['categoryId']) ? $_GET['categoryId'] : '';
    if($state == 'dogFoodMenu'){
        $sql = "SELECT * from classify3 where tabId ='$tabItem';";

        $result = query_oop($sql);

        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    } else if( $state == 'dogCostumeMenu'){
        $sql = "SELECT * from classify3 where categoryId = '$tabItem'";
        
        $result = query_oop($sql);

        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    } else if ($state == 'indexMenus'){
        $sql = "SELECT * from tab where categoryId = '$categoryId'";
        $result = query_oop($sql);
        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }
    
?>