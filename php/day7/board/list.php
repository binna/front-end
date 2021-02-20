<?php
    session_start();
    include "../include/dbconn.php";
    include "../include/sessionCheck.php";

    $sql = "SELECT * FROM tb_board ORDER BY b_idx DESC";
    $result = mysqli_query($conn, $sql);

    $pageNum = 3;
    $pageTotal = $result->num_rows;
    $start = 0;
    if(isset($_GET['start'])) {
        $start = $_GET['start'];
    }
    
    $sql = "SELECT * FROM tb_board ORDER BY b_idx DESC LIMIT $start, $pageNum";
    $result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>리스트</title>
</head>
<body>
    <h2>리스트</h2>
    <p>전체 게시물 : <?=$pageTotal?></p>
    <table border="1" width="800">
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>조회수</th>
            <th>날짜</th>
            <th>추천수</th>
        </tr>
<?php
    while($row = mysqli_fetch_array($result)) {
        $b_idx      = $row['b_idx'];
        $b_userid   = $row['b_userid'];
        $b_title    = $row['b_title'];
        $b_hit      = $row['b_hit'];
        $b_regdate  = $row['b_regdate'];
        $b_up       = $row['b_up'];
        $b_file     = $row['b_file'];

        $imgpath = "";
        if($row['b_file'] != "") {
            $imgpath = "<img src='../images/file.png' width='16' alt='file'>";
        }
?>
        <tr>
            <td><?=$b_idx?></td>
            <td><a href="./view.php?b_idx=<?=$b_idx?>"><?=$b_title?></a><?=$imgpath?></td>
            <td><?=$b_userid?></td>
            <td><?=$b_hit?></td>
            <td><?=$b_regdate?></td>
            <td><?=$b_up?></td>
        </tr>
<?php
    }
?>
    </table>
    <p>
<?php
    $pages = $pageTotal / $pageNum;
    for($i=0; $i<$pages; $i++) {
        $nextPage = $pageNum * $i;
        echo "<a href=$_SERVER[PHP_SELF]?start=$nextPage>[".($i + 1)."]</a>";
    }
?>
    </p>
    <p><input type="button" value="글쓰기" onclick="location.href='./write.php'"> 
       <input type="button" value="돌아가기" onclick="location.href='../login.php'"></p>
</body>
</html>