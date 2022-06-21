<?php 
    namespace mySpace;

    if (isset($_POST['name'])) $name=$_POST['name'];
    else $name = "(NOT PROVIDED)";

    echo <<<_END
        <html>
            <head>
                <title>PHP Test</title>
            </head>
            <body>
                Your name is: $name<br>
                <form method="post" action="index.php">
                    type in temperature in Fahrenheit and click Convert
                    <input type="text" name="f" value="0" size="10">
                    <br>
                    <input type="submit" value="Convert">
                </form>
            </body>
        </html>
_END;
?>