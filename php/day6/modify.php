<?php
    session_start();
    include "./include/dbconn.php";
    $idx = $_SESSION['idx'];
    $id = $_SESSION['id'];
    $name = $_SESSION['name'];
    //echo $idx." ".$id." ".$name;

    // *는 SELECT의 성능을 낮추기 때문에 모든 필드를 직접 명시하는 것이 좋다.
    // 실습에서는 편의상 *로 하나 실무에서는 컬럼명으로 변경하자!
    $sql = "SELECT * FROM tb_member WHERE mem_idx = $idx";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    $mem_email      = $row['mem_email'];
    $mem_ssn1        = $row['mem_ssh1'];
    $mem_ssn2        = $row['mem_ssh2'];
    $mem_hp         = $row['mem_hp'];
    $mem_hobby      = $row['mem_hobby'];
    $hobbyarr       = explode(",", $mem_hobby);
    $mem_zipcode    = $row['mem_zipcode'];
    $mem_address1   = $row['mem_address1'];
    $mem_address2   = $row['mem_address2'];
    $mem_address3   = $row['mem_address3'];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원 정보 수정</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" 
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="./js/modify.js"></script>
    <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</head>
<body>
    <h2>회원 정보 수정</h2>
    <form name="regform" id="regform" method="post" action="modify_ok.php" onsubmit="return sendit()">
        <input type="hidden" name="isSsn" id="isSsn" value="false">
        <p>아이디 : <b><?=$id?></b></p>
        <p><label>비밀번호 : <input type="password" name="userpw" id="userpw" maxlength="20"></label></p>
        <p><label>비밀번호 확인 : <input type="password" name="userpw_re" id="userpw_re" maxlength="20"></label></p>
        <p>이름 : <b><?=$name?></b></p>
        <p><label>휴대폰 번호 : <input type="text" name="hp" id="hp" value="<?=$mem_hp?>"></label> ('-' 을 포함)</p>
        <p><label>이메일 : <input type="text" name="email" id="email" value="<?=$mem_email?>"></label></p>
        <p>취미 : 
            <label>드라이브<input type="checkbox" name="hobby[]" value="드라이브"
                                <?php if(in_array("드라이브", $hobbyarr)) { ?> checked <?php } ?>></label>
            <label>등산<input type="checkbox" name="hobby[]" value="등산"
                                <?php if(in_array("등산", $hobbyarr)) { echo " checked "; } ?>></label>
            <label>게임<input type="checkbox" name="hobby[]" value="게임"
                                <?php if(in_array("게임", $hobbyarr)) { echo " checked "; } ?>></label>
            <label>영화감상<input type="checkbox" name="hobby[]" value="영화감상"
                                <?php if(in_array("영화감상", $hobbyarr)) { echo " checked "; } ?>></label>
            <label>쇼핑<input type="checkbox" name="hobby[]" value="쇼핑"
                                <?php if(in_array("쇼핑", $hobbyarr)) { echo " checked "; } ?>></label>
        </p>
        <p>주민등록번호 : 
            <input type="text" name="ssn1" id="ssn1" maxlength="6" value="<?=$mem_ssn1?>" onkeyup="moveFocus()"> - 
            <input type="text" name="ssn2" id="ssn2" maxlength="7" value="<?=$mem_ssn2?>">
            <input type="button" value="주민등록번호 검증" onclick="ssnCheck()">
        </p>
        <p>우편번호 : <input type="text" name="zipcode" id="sample6_postcode" value="<?=$mem_zipcode?>"> <input type="button" value="우편번호 검색" onclick="sample6_execDaumPostcode()"></p>
        <p><label>주소 : <input type="text" name="address1" id="sample6_address" value="<?=$mem_address1?>"></label></p>
        <p><label>상세주소 : <input type="text" name="address2" id="sample6_detailAddress" value="<?=$mem_address2?>"></label></p>
        <p><label>참고항목 : <input type="text" name="address3" id="sample6_extraAddress" value="<?=$mem_address3?>"></label></p>
        <p><input type="submit" value="수정완료"> <input type="reset" value="다시작성"> <input type="button" value="돌아가기" onclick="location.href='./login.php'"></p>
    </form>
</body>
</html>