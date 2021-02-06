<?php
    $conn = mysqli_connect("localhost", "root", "1234", "frontenddb") or die("데이터베이스 연결 실패!");
    if(!$conn) {
        echo("연결 실패");
    } else {
        echo("연결 성공");
    }
?>