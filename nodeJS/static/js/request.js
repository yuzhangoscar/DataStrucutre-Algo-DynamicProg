import axios from "axios";

axios.get('http://localhost:3000/products')
    .then(responses => console.log(responses));
