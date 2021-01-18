<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
</head>
<body>
<?php
    if(!isset($_COOKIE['id'])) {    // 쿠키가 존재하지 않는지 확인
?>
    <!-- 쿠키가 존재하지 않는다면 -->
    <h2>로그인</h2>
    <form method="post" action="./10_login_ok.php">
        <p><label>아이디 : <input type="text" name="userid"></label></p>
        <p><label>비밀번호 : <input type="password" name="userpw"></label></p>
        <p><input type="submit" value="로그인"></p>
    </form>
<?php
    } else {
?>
    <!-- 쿠키가 존재한다면 -->
    <h2>로그인</h2>
    <h3><?=$_COOKIE['id']?>님 환영합니다.</h3>
    <p><a href="./10_logout.php">로그아웃</a></p>
<?php
    }
?>
</body>
</html>