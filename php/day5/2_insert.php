<?php
    $conn = mysqli_connect("localhost", "root", "1234", "frontenddb") or die("데이터베이스 연결 실패!");
    if(!$conn) {
        echo("연결 실패");
    } else {
        $sql = "INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
                    mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
                VALUES ('lee', '1212', '이씨', '010-1234-1234', 'lee@lee.com', '쇼핑',
                    '001011', '4068518', '12345', '서울 서초구', '양재동', '11-1')";
        $result = mysqli_query($conn, $sql);
        echo "{$result}개의 데이터가 정상적으로 insert 되었습니다.";
    }
?>