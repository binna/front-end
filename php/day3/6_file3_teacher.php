<?php
    $result = "";
    $lines = @file("tel.txt") or $result = "파일을 읽을 수 없습니다.";
    /*
        $lines[0] = "김사과,서울 서초구,010-1111-1111";
        $lines[1] = "오랜지,서울 강남구,010-2222-2222";
        $lines[2] = "이메론,서울 동작구,010-3333-3333";
        $lines[3] = "반하나,경기 고양시,010-4444-4444";
        $lines[4] = "박수박,경기 고양시,010-5555-5555";

        <tr>
            <td>1</td>
            <td>김사과</td>
            <td>서울 서초구</td>
            <td>010-1111-1111</td>
        </tr>
    */
    if($lines != null) {
        for($i=0; $i<count($lines); $i++) {
            $result .= "<tr>";
            $arr = explode(",", $lines[$i]);
            // $arr[0] = "김사과";
            // $arr[1] = "서울 서초구";
            // $arr[2] = "010-1111-1111";
            $result .= "<td>".($i + 1)."</td>";
            for($j=0; $j<count($arr); $j++) {
                $result .= "<td>{$arr[$j]}</td>";
            }
            $result .= "</tr>";
        }
    }
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>연락처</title>
    <style>
        table { width: 600px; border-collapse: collapse;}
        th, td { height: 30px; border: 1px solid red; }
    </style>
</head>
<body>
    <h2>연락처</h2>
    <table>
        <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>연락처</th>
        </tr>
        <?=$result?>
    </table>
</body>
</html>