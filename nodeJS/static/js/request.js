import axios from "axios";

const nameListElement = document.getElementById("nameList");
const submitBtn = document.getElementById("submitBtn");

const getProducts = async () => {
    const responses = await axios.get('http://localhost:3000/products');
    const textNode = document.createTextNode(JSON.stringify(responses.data));

    nameListElement.appendChild(textNode);
};

submitBtn.addEventListener("click", (event) => {
    alert(event.target);
});

console.log('hi');
