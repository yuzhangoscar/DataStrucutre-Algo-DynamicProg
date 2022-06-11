<?php 
        namespace mySpace;
?>

<html>
    <head>
        <title>PHP Test</title>
    </head>
    <body>
        <?php
            function longdate() {
                return date("l F jS Y");
            }
            $username = "fred";
            echo $username;
            echo "<br>";
            $aaa = __NAMESPACE__;
            echo __LINE__;
            echo __FUNCTION__;
            echo "<br>";
            echo __DIR__;
            echo "<br>";
            echo "<h1>THIS is the line " . __NAMESPACE__ . "</h1>";
            echo "<br>";
            echo longdate();
        ?>
    </body>
</html>