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
                    what is yoru name?
                    <input type="text" name="name" value="yz">
                    <input type="submit">
                </form>
                <input type="submit" value="Search">
            </body>
        </html>
_END;
?>