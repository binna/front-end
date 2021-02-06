<?php
    session_start();
    include "../include/dbconn.php";

    $b_idx = $_GET['b_idx'];
    $sql = "UPDATE tb_board SET b_hit = b_hit + 1 WHERE b_idx=$b_idx";
    $result = mysqli_query($conn, $sql);

    $sql = "SELECT * FROM tb_board WHERE b_idx=$b_idx";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    $id         = $_SESSION['id'];      // 세션 아이디
    $b_userid   = $row['b_userid'];     // 글쓴이 아이디
    $b_title    = $row['b_title'];
    $b_content  = $row['b_content'];
    $b_hit      = $row['b_hit'];
    $b_regdate  = $row['b_regdate'];
    $b_up       = $row['b_up'];
    $b_file     = $row['b_file'];

    $imgpath = "";
    if($row['b_file'] != "") {
        $imgpath = "<img src='".$b_file."' width='200' alt='file'>";
    }
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>글보기</title>
</head>
<body>
    <h2>글보기</h2>
    <p><b>글쓴이</b> : <?=$b_userid?></p>
    <p><b>날짜</b> : <?=$b_regdate?></p>
    <p><b>조회수</b> : <?=$b_hit?></p>
    <p><b>추천수</b> : <?=$b_up?></p>
    <p><b>제목</b> : <?=$b_title?></p>
    <p><b>내용</b></p>
    <p><?=$b_content?></p>
    <p><?=$imgpath?></p>
    <p><input type="button" value="리스트" onclick="location.href='./list.php'">
<?php
    if($id == $b_userid) {
?>
       &nbsp;<input type="button" value="수정" onclick="location.href='./edit.php?b_idx=<?=$b_idx?>'">
       &nbsp;<input type="button" value="삭제" onclick="location.href='./delete.php?b_idx=<?=$b_idx?>'">
<?php
    }
?>
    </p>
    <form name="reform" method="post" action="reply_ok.php">
        <input type="hidden" name="b_idx" value="<?=$b_idx?>">
        <p><?=$id?> : <input type="text" name="re_content"> <input type="submit" value="댓글달기"></p>
    </form>
    <hr>

<?php
    $sql = "SELECT * FROM tb_reply WHERE re_board_idx='$b_idx' ORDER BY re_idx DESC";
    $result = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_array($result)) {
        $re_idx = $row['re_idx'];
        $re_userid = $row['re_userid'];
        $re_content = $row['re_content'];
        $re_regdate = $row['re_regdate'];
        $re_board_idx = $row['re_board_idx']
?>
    <p><?=$re_userid?> - <?=$re_content?> (<?=$re_regdate?>) 
<?php 
        if($id == $re_userid) { 
?>
            <input type="button" value="삭제" 
                onclick="location.href='reply_del.php?re_board_idx=<?=$re_board_idx?>&re_idx=<?=$re_idx?>'"></p>

<?php
        }
    }
?>
</body>
</html>