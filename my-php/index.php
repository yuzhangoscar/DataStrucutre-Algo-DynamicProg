<?php 
    namespace mySpace;
    echo <<<_END
        <html>
            <head>
                <title>PHP Test</title>
            </head>
            <body>
                <form method="post" action="formtest.php">
                    what is yoru name?
                    <input type="text" name="name">
                    <input type="submit">
                </form>
            </body>
        </html>
_END;
?>