<?php
    $hakbun = $_POST['hakbun'];
    $name   = $_POST['name'];
    $kor    = $_POST['kor'];
    $math   = $_POST['math'];
    $eng    = $_POST['eng'];

    $tot = $kor + $math + $eng; // 총점
    $avg = $tot / 3;            // 평균

    $hak = "";

    if($avg >= 90) {
        $hak = "A학점";
    } else if($avg >= 80) {
        $hak = "B학점";
    } else if($avg >= 70) {
        $hak = "C학점";
    } else if($avg >= 60) {
        $hak = "D학점";
    } else {
        $hak = "F학점";
    }
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>학생 성적 프로그램</title>
</head>
<body>
    <h2><?php
        echo "<h3>".$name."님의 성적표</h3>";
    ?></h2>
    <p>학번 : <?=$hakbun?></p>
    <p>이름 : <?=$name?></p>
    <p>국어 : <?=$kor?>점</p>
    <p>수학 : <?=$math?>점</p>
    <p>영어 : <?=$eng?>점</p>
    <p>총점 : <?=$tot?>점</p>
    <p>평균 : <?=$avg?>점</p>
    <p>학점 : <?=$hak?></p>
</body>
</html>