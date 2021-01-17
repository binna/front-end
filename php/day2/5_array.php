<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>배열</title>
</head>
<body>
    <h2>배열</h2>
<?php
    $arr = array("김사과", "오렌지", "이메론", "반하나");
    foreach($arr as $name) {
        echo "배열의 현재 값은 {$name}입니다.<br>";
    }
?>
</body>
</html>