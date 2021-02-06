<?php
    session_start();
    include "../include/dbconn.php";

    $b_idx      = $_POST['b_idx'];
    $b_title    = $_POST['b_title'];
    $b_content  = $_POST['b_content'];
    $filepath   = "";
    
    if($_FILES['b_file']['tmp_name']) {
        $uploads_dir = './upload';
        $allowed_ext = array('jpg', 'jpeg', 'png', 'gif', 'bmp');
        $error = $_FILES['b_file']['error'];
        $name = $_FILES['b_file']['name'];
        $ext = explode(".", $name);
        $rename = $ext[0].time();
        $rename = $rename.".".$ext[1];
        $ext = strtolower(array_pop($ext));

        if($error != UPLOAD_ERR_OK) {
            switch($error) {
                case UPLOAD_ERR_INI_SIZE:
                case UPLOAD_ERR_FORM_SIZE:
                    echo "파일 크기가 너무 큽니다.";
                    break;
                case UPLOAD_ERR_NO_FILE:
                    echo "파일이 제대로 첨부되지 않았습니다.";
                    break;
                default:
                    echo "파일 업로드 실패";
            }
            exit;
        }
        if(!in_array($ext, $allowed_ext)) {
            echo "허용되지 않은 확장명입니다.";
            exit;
        }
        $filepath = $uploads_dir."/".$rename;
        move_uploaded_file($_FILES['b_file']['tmp_name'], $filepath);

        // 첨부파일이 있을때
        $sql = "UPDATE tb_board SET b_title='$b_title', b_content='$b_content', b_file='$filepath' WHERE b_idx=$b_idx";
    } else {
        // 첨부파일이 없을때
        $sql = "UPDATE tb_board SET b_title='$b_title', b_content='$b_content' WHERE b_idx=$b_idx";
    }

    $result = mysqli_query($conn, $sql);
    echo "<script>alert('수정되었습니다.');location.href='view.php?b_idx=".$b_idx."';</script>"
?>