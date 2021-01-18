<?php
    $userid = $_POST['userid'];
    $userpw = $_POST['userpw'];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
</head>
<body>
<?php
    if($userid == 'admin' && $userpw == '1234') {
        echo "<p>로그인 성공<p><p><b>".$userid."</b> 님 환영합니다.<p>";
    } else {
        echo "<p>로그인 실패<br>아이디 또는 비밀번호를 확인하세요<p>"
            ."<script>alert('다시 3_login.php로 돌아갑니다.');location.href='./3_login.php';</script>";
    }
?>
    <p></p>
</body>
</html>