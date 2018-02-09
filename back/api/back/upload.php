<?php
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    include 'DBHelper.php';
    // 引入其他php文件
    
    $texx= isset($_POST['texx']) ? $_POST['texx'] : "";
    $phoneNum = isset($_POST['phoneNum']) ? $_POST['phoneNum'] : "";
    $imgCan = isset($_POST['imgCan']) ? $_POST['imgCan'] : "";

   
    $result = excute_oop();
   
    // if($result){
    
    //     echo json_encode($result,JSON_UNESCAPED_UNICODE);
    //     // print_r($result);
    // }else {
    //     echo "Error: " . $sql . "<br>" . $conn->error;
    // }

    $file = $_FILES['file'];//得到传输的数据
    //得到文件名称
    $name = $file['name'];
    $type = strtolower(substr($name,strrpos($name,'.')+1)); //得到文件类型，并且都转化成小写
    $allow_type = array('jpg','jpeg','gif','png'); //定义允许上传的类型
    //判断文件类型是否被允许上传
    if(!in_array($type, $allow_type)){
      //如果不被允许，则直接停止程序运行
      return ;
    }
    //判断是否是通过HTTP POST上传的
    if(!is_uploaded_file($file['tmp_name'])){
      //如果不是通过HTTP POST上传的
      return ;
    }
    $upload_path = "F:/project/pet/web/src/assets/files/"; //上传文件的存放路径
    //开始移动文件到相应的文件夹
    if(move_uploaded_file($file['tmp_name'],$upload_path.$file['name'])){
      //echo $name;
    }else{
      echo "Failed!";
    }
    
?>
