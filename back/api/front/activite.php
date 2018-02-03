<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

    // $state = isset($_GET['state']) ? $_GET['state'] : "getProduct";
    // $category = isset($_GET['category']) ? $_GET['category'] : "1";
   $state = isset($_POST['state']) ? $_POST['state'] : "getProduct";
    $category = isset($_POST['category']) ? $_POST['category'] : "1";
    $sql;

    if($state == 'getProduct'){
        $sql = "SELECT * from activity,activitygoods,activitygoodimg
          WHERE activity.category = '$category' and activity.activityId = activitygoods.activityId
          and activitygoods.activitygoodId = activitygoodimg.activitygoodId";
        // $sql .= ";"
        $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if($state == 'getDogFoodMenu'){
        $sql = "SELECT * from classify2 where category1Id ='$category'";
        $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

?>
