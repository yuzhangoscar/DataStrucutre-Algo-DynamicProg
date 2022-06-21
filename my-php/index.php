<?php 
    if (isset($_POST['f'])) $temp=sanitizeString($_POST['f']) * 2.1;
    else $temp = "0";
    $date = date("Y/m/d");

    echo <<<_END
        <html>
            <head>
                <title>PHP Test</title>
            </head>
            <body>
                <h1>Today is:  $date Welcome to Lily's study tracker</h1> 
                <br>
                <form method="post" action="index.php">
                    type in temperature in Fahrenheit and click Convert
                    <input type="text" name="f" size="10" placeholder="Fer" required="required">
                    <br>
                    <input type="submit" value="Convert">
                </form>
            </body>
        </html>
_END;

    function sanitizeString($var) {
        $var = strip_tags($var);
        $var = htmlentities($var);
        return $var;
    }
?>