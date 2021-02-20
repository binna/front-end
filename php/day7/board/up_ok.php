<?php
    session_start();
    include "../include/dbconn.php";
    include "../include/sessionCheck.php";
    $b_idx = $_GET['b_idx'];

    if(!$conn) {
        echo "연결 객체 생성 실패!";
    } else {
        $sql = "UPDATE tb_board SET b_up=b_up + 1 WHERE b_idx='$b_idx'";
        $result = mysqli_query($conn, $sql);

        $sql = "SELECT b_up FROM tb_board WHERE b_idx='$b_idx'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);
        echo $row['b_up'];
    }
?>