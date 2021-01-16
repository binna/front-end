<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>상수</title>
</head>
<body>
    <h2>상수</h2>
<?php
    define("PHP", "안녕하세요.<br>");   // 대소문자 구분 여부 생략 => false
    echo PHP."<br>";
    //echo php."<br>";  // 에러 : Warning: Use of undefined constant php - assumed 'php'
                        //        (this will throw an Error in a future version of PHP) 
                        //        in D:\front-end\php\day1\7_constant.php on line 13
    define("NUM", 100, true);           // true는 대소문자를 구분하지 않음
    echo NUM."<br>";
    echo num."<br>";
?>
</body>
</html>