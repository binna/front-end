<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문자열 함수</title>
</head>
<body>
    <h2>문자열 함수</h2>
<?php
    $str1 = "abcd1234";
    $str2 = "한글로 표현한 문자열";

    echo "strlen(str) : ".strlen($str1)."<br>";     // 8 : 영문자, 숫자, 특수문자 1byte
    echo "strlen(str) : ".strlen($str2)."<br>";     // 29 : 한글 3byte
    echo "<br>";

    echo strcmp("abc", "ABC")."<br>";   // 1
    echo strcmp("2", "10")."<br>";      // 1
    echo strcmp("10", "10")."<br>";     // 0
    echo "<br>";

    echo strstr($str1, "cd")."<br>";
    echo strpos($str1, "abc")."<br>";   // 0
    echo strpos($str1, "12")."<br>";    // 4
    echo "<br>";

    echo substr($str1, 3)."<br>";       // d1234
    echo substr($str1, -3)."<br>";      // 234
    echo substr($str1, 1, 5)."<br>";    // bcd12
    echo substr($str1, 1, -3)."<br>";   // bcd1
    echo "<br>";

    echo strtolower("Hello, Php!")."<br>";
    echo strtoupper("Hello, Php!")."<br>";
    echo "<br>";

    $str3 = "Hello, PHP, Hello, World!";
    $arr = explode(",", $str3);         // "Hello"->$arr[0], "PHP"->$arr[1], "Hello"->$arr[2], "World!"->$arr[3]
    foreach($arr as $word) {
        echo $word."<br>";
    }
    echo "<br>";

    echo str_replace("o", "*", $str3)."<br>";
    echo substr_replace($str3, "*", 2)."<br>";
    echo substr_replace($str3, "*", -2)."<br>";
    echo substr_replace($str3, "*", 2, 4)."<br>";
?>
</body>
</html>