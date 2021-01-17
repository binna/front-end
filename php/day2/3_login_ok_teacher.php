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
    if($userid == "admin" && $userpw == "1234") {
?>
    <h2>로그인 성공!</h2>
    <p><?=$userid?>님 환경합니다.</p>
<?php
    } else {
?>
    <script>
        alert("로그인 실패!\n아이디 또는 비밀번호를 확인하세요.");
        history.back();
    </script>
<?php
    }
?>
</body>
</html>