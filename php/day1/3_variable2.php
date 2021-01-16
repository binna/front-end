<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>변수 - 2</title>
</head>
<body>
    <h2>변수 - 2</h2>
<?php
    $num1 = 5;
    function func1() {
        $num2 = 10;
        echo "함수 내에서 호출한 지역변수 num2의 값은 {$num2}입니다.<br>";
        global $num1;
        echo "함수 내에서 호출한 전역변수 num1의 값은 {$num1}입니다.<br>";
    }
    func1();
    echo "함수 밖에서 호출한 전역변수 num1의 값은 {$num1}입니다.<br>";
?>
</body>
</html>