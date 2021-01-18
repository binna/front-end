<?php
    setcookie("id", "", time()-10, "/");
?>
<script>
    alert('로그아웃 되었습니다.');
    location.href="./10_login.php";
</script>