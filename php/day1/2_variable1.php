<?php
    $name = "김사과";
    $age = 20;
    $job = "학생";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>변수 - 1</title>
</head>
<body>
    <h2>변수 - 1</h2>
    <?php
        echo("<h3>".$name."님 안녕하세요.</h3>");
    ?>
    <p>나이 : <?=$age?></p>
    <?php
        echo "<p>{$name}님의 직업은 {$job}입니다.</p>";
    ?>
</body>
</html>