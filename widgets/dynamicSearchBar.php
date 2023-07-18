<?php
    $lookupTable = array(
        'a' => 'Apple',
        'b' => 'Banana',
        'c' => 'Cherry',
        'd' => 'Durian'
    );

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = $_POST['data'];
        if(isset($lookupTable[$data])) {
            echo $lookupTable[$data];
        }
        else {
            echo 'awesome';
        }
        exit;
    }
?>

<!DOCTYPE html>
<html>
<head>
    <title>Real-Time Search Bar</title>
</head>
<body>
    <form>
        <input type="text" id="searchBar" placeholder="Enter your search query" />
    </form>
    <p id="text"></p>

    <script>
        let searchBar = document.getElementById('searchBar');
        let xhr = new XMLHttpRequest();
        let timerID;

        searchBar.addEventListener('input', function() {
            event.preventDefault();
            clearTimeout(timerID);

            setTimeout(function() {
                let input = searchBar.value;

                xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("text").innerHTML = this.responseText;
                    }
                };
                xhr.onerror = function() {
                    console.log('error');
                };
                xhr.open("post", window.location.href, true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send("data=" + encodeURIComponent(input));
            }, 1000)
        });

    </script>
</body>
</html>
