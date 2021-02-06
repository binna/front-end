<?php
    session_start();
    include "../include/dbconn.php";

    $b_idx      = $_POST['b_idx'];
    $b_title    = $_POST['b_title'];
    $b_content  = $_POST['b_content'];

    //echo $b_idx."<br>";
    //echo $b_title."<br>";
    //echo $b_content."<br>";

    $sql = "UPDATE tb_board SET b_title='$b_title', b_content='$b_content' WHERE b_idx=$b_idx";
    $result = mysqli_query($conn, $sql);
    echo "<script>alert('수정되었습니다.');location.href='view.php?b_idx=".$b_idx."';</script>"
?>