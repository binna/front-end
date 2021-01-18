<?php
    function print_string() {
        echo "<p>안녕하세요. PHP!</p>";
    }

    function print_sum($x, $y) {
        echo "<p>{$x} + {$y} = ".($x + $y)."</p>";
    }

    function get_sum($x, $y) {
        return $x + $y;
    }
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>함수</title>
</head>
<body>
    <h2>함수</h2>
<?php
    print_string();
    print_sum(10, 3);
    $result = get_sum(10, 5);
    echo "10 + 5 = {$result}";
?>
</body>
</html>