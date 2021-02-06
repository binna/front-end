<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>글쓰기</title>
</head>
<body>
    <h2>글쓰기</h2>
    <form method="post" action="write_ok.php" enctype="multipart/form-data">
        <p><label>아이디 : <?=$_SESSION['id']?></label></p>
        <p><label>제목 : <input type="text" name="b_title"></label></p>
        <p>내용</p>
        <p><textarea cols="40" rows="6" name="b_content"></textarea></p>
        <p>파일 : <input type="file" name="b_file"></p>
        <p><input type="submit" value="확인"> 
           <input type="reset" value="다시작성"> 
           <input type="button" value="리스트" onclick="location.href='./list.php'"></p>
    </form>
</body>
</html>