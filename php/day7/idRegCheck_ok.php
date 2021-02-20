<?php
    include "./include/dbconn.php";
    $mem_userid = $_GET['mem_userid'];

    if(!$conn) {
        echo "연결 객체 생성 실패!";
    } else {
        $sql = "SELECT mem_idx FROM tb_member WHERE mem_userid='$mem_userid'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);
        if($row['mem_idx']) {
            echo "y";       // 아이디 있음
        } else {
            echo "n";       // 아이디가 없음
        }
    }
?>