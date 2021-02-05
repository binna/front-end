<?php 
    session_start();
    include "./include/dbconn.php";

    $idx = $_SESSION['idx'];
    $id = $_SESSION['id'];
    $name = $_SESSION['name'];

    $mem_userpw = $_POST['userpw'];
    $mem_hp = $_POST['hp'];
    $mem_email = $_POST['email'];

    $hobby = $_POST['hobby'];
    $hobbystr = "";
    foreach($hobby as $h) {
        $hobbystr .= $h.",";
    }

    $mem_ssn1 = $_POST['ssn1'];
    $mem_ssn2 = $_POST['ssn2'];
    $mem_zipcode = $_POST['zipcode'];
    $mem_address1 = $_POST['address1'];
    $mem_address2 = $_POST['address2'];
    $mem_address3 = $_POST['address3'];

    $sql = "SELECT mem_userpw FROM tb_member WHERE mem_idx=$idx";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    if($row['mem_userpw'] == $mem_userpw) {  // 비밀번호 맞음
        $sql = "UPDATE tb_member 
            SET mem_hp='$mem_hp', mem_email='$mem_email', mem_hobby='$hobbystr',
                mem_ssh1='$mem_ssn1', mem_ssh2='$mem_ssn2', mem_zipcode='$mem_zipcode',
                mem_address1='$mem_address1', mem_address2='$mem_address2', mem_address3='$mem_address3'
            WHERE mem_idx=$idx";
        $result = mysqli_query($conn, $sql);
        echo "<script>alert('회원 정보가 수정되었습니다.');location.href='./3_modify.php';</script>";
    } else {                                // 비밀번호 틀림
        echo "<script>alert('비밀번호가 틀렸습니다.');history.back();</script>";
    }
?>