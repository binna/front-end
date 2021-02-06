<?php
    session_start();
    include "../include/dbconn.php";

    $re_board_idx   = $_GET['re_board_idx'];
    $re_idx         = $_GET['re_idx'];

    $sql = "DELETE FROM tb_reply WHERE re_idx='$re_idx'";
    $result = mysqli_query($conn, $sql);

    echo "<script>alert('삭제되었습니다.');location.href='view.php?b_idx=".$re_board_idx."';</script>";
?>