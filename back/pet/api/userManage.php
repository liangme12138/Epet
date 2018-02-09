<?php 
    include './DBHelper.php';
    $id = isset($_POST["id"]) ? $_POST["id"] : "";
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 8;
    // $sql = "select * from user";
    
    if($id){
        $sql="select * from user where id='$id'";
        $result = query($sql);
        if(count($result) > 0){
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";  
        }
    }else{
        $sql = "select SQL_CALC_FOUND_ROWS * from user where 1=1 limit ";
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