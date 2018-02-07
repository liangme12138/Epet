<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $state = isset($_POST['state']) ? $_POST['state'] : '';
    $category = isset($_POST['category']) ? $_POST['category'] : '';
    
    if($state == 'getAllProduct'){
        $sql = "SELECT * FROM product,productimg where categoryId = '$category' and product.goodId = productimg.goodId";

        $result = query_oop($sql);

        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    } else if($state == 'getItemProduct'){
        $sql = "SELECT * FROM product,productimg where classify2Id= '$category' and product.goodId = productimg.goodId";

        $result = query_oop($sql);

        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }
    
?>