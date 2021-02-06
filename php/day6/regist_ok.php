<?php
    include "./include/dbconn.php";

    $userid = $_POST['userid'];
    $userpw = $_POST['userpw'];
    $username = $_POST['username'];
    $hp = $_POST['hp'];
    $email = $_POST['email'];

    $hobby = $_POST['hobby'];
    $hobbystr = "";
    foreach($hobby as $h) {
        $hobbystr .= $h.",";
    }

    $ssn1 = $_POST['ssn1'];
    $ssn2 = $_POST['ssn2'];
    $zipcode = $_POST['zipcode'];
    $address1 = $_POST['address1'];
    $address2 = $_POST['address2'];
    $address3 = $_POST['address3'];

    /*
    echo $userid."<br>";
    echo $userpw."<br>";
    echo $username."<br>";
    echo $hp."<br>";
    echo $email."<br>";
    echo $hobbystr."<br>";
    echo $ssn1."<br>";
    echo $ssn2."<br>";
    echo $zipcode."<br>";
    echo $address1."<br>";
    echo $address2."<br>";
    echo $address3."<br>";
    */

    if(!$conn) {
        echo "DB 연결 실패!";
    } else {
        $sql = "INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
                    mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
                VALUES ('$userid', '$userpw', '$username', '$hp', '$email', '$hobbystr',
                    '$ssn1', '$ssn2', '$zipcode', '$address1', '$address2', '$address3')";
        $result = mysqli_query($conn, $sql);
        echo "<script>alert('회원가입이 완료되었습니다.');location.href='./login.php';</script>";
    }
?>