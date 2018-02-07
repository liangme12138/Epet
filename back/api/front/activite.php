<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

    // $state = isset($_GET['state']) ? $_GET['state'] : "getProduct";
    // $category = isset($_GET['category']) ? $_GET['category'] : "1";
   $state = isset($_POST['state']) ? $_POST['state'] : "";
    $category = isset($_POST['category']) ? $_POST['category'] : "";
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
    } else if($state == 'getAtvProduct'){
        $sql = "SELECT * from activity where activityId = '$category'";
        $sql .= ";";
        $sql .= "SELECT * from activitygoods,activitygoodimg
            WHERE activityId = '$category' 
            and activitygoods.activitygoodId = activitygoodimg.activitygoodId ";

        $result = multi_query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

?>
