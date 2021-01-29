<?php
    $result = "";
    $lines = @file("data.txt") or $result = "파일을 읽을 수 없습니다.";
/*
    $lines[0] = "안녕하세요. 여러분";
    $lines[1] = "php 파일 테스트 예제입니다.";
    $lines[2] = "날씨가 많이 풀렸습니다.";
    $lines[3] = "아직도 코로나가 심각한데";
    $lines[4] = "코로나 조심하세요!";
*/
    if($lines != null) {
        for($i=0; $i<count($lines); $i++) {
            $result .= ($i + 1)." : ".$lines[$i]."<br>";
        }
    } 
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>파일 - 2</title>
</head>
<body>
    <h2>파일 - 2</h2>
    <p><?=$result?></p>
</body>
</html>