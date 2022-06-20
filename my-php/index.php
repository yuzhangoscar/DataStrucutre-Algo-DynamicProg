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
                <textarea name="text" cols="100" rows="5" wrap="type">
                    this is default text
                </textarea>
                8am-Noon<input type="radio" name="time" value="1">
                8am-Noon<input type="radio" name="time" value="2" checked="checked">
                8am-Noon<input type="radio" name="time" value="3">
                A<input type="radio" name="location" value="1">
                B<input type="radio" name="location" value="2">
                <br>
                <select name="name" size="1">
                    <option value="Peas">peas</option>
                    <option value="beans">beans</option>
            </body>
        </html>
_END;
?>