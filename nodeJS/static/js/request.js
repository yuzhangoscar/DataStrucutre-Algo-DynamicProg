import axios from "axios";

const nameListElement = document.getElementById("nameList");

const getProducts = async () => {
    const responses = await axios.get('http://localhost:3000/products');
    const textNode = document.createTextNode(JSON.stringify(responses.data));

    nameListElement.appendChild(textNode);
};

getProducts();



