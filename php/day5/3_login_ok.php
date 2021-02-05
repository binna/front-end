<?php
    session_start();
    include "./include/dbconn.php";

    $userid = $_POST['userid'];
    $userpw = $_POST['userpw'];

    if(!$conn) {
        echo "DB 연결 실패!";
    } else {
        $sql = "SELECT mem_idx, mem_userid, mem_name FROM tb_member 
                    WHERE mem_userid='$userid' and mem_userpw='$userpw'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);
        if($row['mem_idx'] == "") {
            echo "<script>alert('아이디 또는 비밀번호를 확인하세요.');history.back();</script>";
        } else {
            $_SESSION['idx'] = $row['mem_idx'];
            $_SESSION['id'] = $row['mem_userid'];
            $_SESSION['name'] = $row['mem_name'];
            echo "<script>alert('로그인 되었습니다.');location.href='3_login.php';</script>";
        }
    }
?>