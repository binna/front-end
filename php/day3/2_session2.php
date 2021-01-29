<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>세션 - 2</title>
</head>
<body>
    <h2>세션 - 2</h2>
    <p>세션 id : <?=session_id()?></p>
    <p>세션 id 변수의 값 : <?=$_SESSION['id']?></p>
    <p>세션 name 변수의 값 : <?=$_SESSION['name']?></p>
</body>
</html>