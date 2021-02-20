<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax - 1</title>
    <script>
        function sendRequest() {
            const httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function() {
                if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
                    // Ajax 통신이 제대로 이루어졌을 경우
                    document.getElementById("text").innerHTML = httpRequest.responseText;
                }
            };
            httpRequest.open("GET", "1_Ajax1_ok.php?userid=apple&userpw=1111", true);
            httpRequest.send();
        }
    </script>
</head>
<body>
    <h2>Ajax - 1</h2>
    <p> get 방식으로 요청 : <input type="button" onclick="sendRequest()" value="get방식으로 요청 보내기"></p>
    <p id="text"></p>
</body>
</html>