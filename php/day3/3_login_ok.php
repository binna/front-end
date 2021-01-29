<?php
    session_start();

    $userid = $_POST['userid'];
    $userpw = $_POST['userpw'];

    if($userid == "admin" && $userpw == "1234") {
        $_SESSION['id'] = $userid;
        echo "<script>alert('로그인이 되었습니다.');location.href='3_login.php';</script>";
    } else {
        echo "<script>alert('아이디 또는 비밀번호를 확인하세요.');history.back();</script>";
    }
?>