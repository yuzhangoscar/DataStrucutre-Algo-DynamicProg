const btn = document.getElementById('btn');
const button = {
    clicked: false,
    click: function(){
        this.clicked = true;
        console.log(`button clicked is: ${button.clicked}, this clicked is: ${this.clicked}`);
    }
}

btn.addEventListener('click', button.click);