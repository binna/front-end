<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>테이블 만들기</title>
</head>
<body>
    <h2>테이블 만들기</h2>
    <p>몇 개의 테이블을 만들까요?</p>
    <form method="get" action="./4_maketable_ok.php">
        <p><input type="number" name="count" value="1" min="1" max="100">개</p>
        <p><input type="submit" value="확인"></p>
    </form>
</body>
</html>