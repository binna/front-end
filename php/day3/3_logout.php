<?php
    session_start();
    session_unset();
?>
<script>
    alert('로그아웃이 되었습니다.');
    location.href = "3_login.php";
</script>