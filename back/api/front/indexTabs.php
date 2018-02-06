<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $tabItem = isset($_GET['tabItem']) ? $_GET['tabItem'] : '';
    $state = isset($_GET['state']) ? $_GET['state'] : '';

    if($state == 'dogFoodMenu'){
        $sql = "SELECT * from classify3,tab
            where classify3.tabId in(
            SELECT tabId from tab,category
            where category.categoryId = '$tabItem'
            and category.categoryId = tab.categoryId)
            and tab.tabId = classify3.tabId";

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
    }
    
?>