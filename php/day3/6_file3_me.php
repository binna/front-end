<?php
    $result = "";
    $lines = @file("tel.txt") or $result = "파일을 읽을 수 없습니다.";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>연락처</title>
    <style>
        table { 
            border-collapse: collapse;
            border: 1px solid red;
        }
        td, th {
            text-align: center;
            width: 300px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
<h2>연락처</h2>
<table>
    <tr><th>번호</th><th>이름</th><th>주소</th><th>번호</th></tr>
    <?php
        $i = 1;
        while($i<count($lines)) {
    ?>
    <tr>
        <td><?=$i?></td>
    <?php 
        $arr = explode(",", $lines[$i]); 
        foreach($arr as $word) {
    ?>
        <td><?=$word?></td>
    <?php }?>
    </tr>
    <?php
            $i++;
        }
    ?>
</table>
</body>
</html>