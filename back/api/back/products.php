<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $state = isset($_POST['state']) ? $_POST['state'] : "UpdateProductItem";
    $page = isset($_POST['page']) ? $_POST['page'] : "1";
    $limit = isset($_POST['limit']) ? $_POST['limit'] : "3";
    $id = isset($_POST['id']) ? $_POST['id'] : "3";
    $goodName = isset($_POST['goodName']) ? $_POST['goodName'] : "";
    $brand = isset($_POST['brand']) ? $_POST['brand'] : "";
    $Price = isset($_POST['Price']) ? $_POST['Price'] : "";
    $originPrice = isset($_POST['originPrice']) ? $_POST['originPrice'] : "";
    $size = isset($_POST['size']) ? $_POST['size'] : "";
    $describe = isset($_POST['describe']) ? $_POST['describe'] : "";
    $sale = isset($_POST['sale']) ? $_POST['sale'] : "";
    $goodId = isset($_POST['goodId']) ? $_POST['goodId'] : "";
                        
    $sql;
  
    if($state == 'getProducts'){
        $sql = "SELECT product.goodId as 'ID',product.goodName as '商品名称',productimg.ImgUrl as 'Imgage',
        product.brand as '品牌',product.Price as '价格(元)',product.originPrice as '原价(元)',
        product.sale as '销售量(件)',product.size as '商品规格',
        product.`describe` as '商品详情', category1.categoryName as '商品分类(1)',
        classify2.classifyName as '商品分类(2)'
        from product,productimg,category1,classify2
        where product.goodId = productimg.goodId
        and category1.category1Id = product.category1Id
        and classify2.classify2Id = product.classify2Id
        LIMIT ";
        $sql .= ($page - 1)*$limit;
        $sql .= ', ';
        $sql .= $limit;
        $sql .= ';select COUNT(*) as rowsCount from product;';
        $result =  multi_query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if($state == 'getProductItem'){
         $sql = "SELECT product.goodId as 'ID',product.goodName as '商品名称',productimg.ImgUrl as 'Imgage',
        product.brand as '品牌',product.Price as '价格(元)',product.originPrice as '原价(元)',
        product.sale as '销售量(件)',product.size as '商品规格',
        product.`describe` as '商品详情', category1.categoryName as '商品分类(1)',
        classify2.classifyName as '商品分类(2)'
        from product,productimg,category1,classify2
        where  product.goodId ='$id' and product.goodId = productimg.goodId
        and category1.category1Id = product.category1Id
        and classify2.classify2Id = product.classify2Id";

        $result = query_oop($sql);
        if($result){
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }else if( $state == 'UpdateProductItem'){
        $sql = "UPDATE product 
                SET goodName = '$goodName',
                brand = '$brand',Price = '$Price',
                originPrice = '$originPrice',
                size = '$size',`describe` = '$describe',sale = '$sale' 
                WHERE goodId = '$goodId'";
        $result = excute_oop($sql);
        // print_r($result);
        if($result){
            echo 'seccese';
        }else{
            echo "fail";
        }
    }else if( $state == 'DeleteProductItem'){
        $sql = "delete from product WHERE goodId = '$goodId'";
        $result = excute_oop($sql);
        if($result){
            echo 'seccese';
        }else{
            echo "fail";
        }
    }

?>
