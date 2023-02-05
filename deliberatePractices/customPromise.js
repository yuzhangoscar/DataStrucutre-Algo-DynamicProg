const Something = function(element) {
    this.name='I am Something';
    this.clickOne = function(event) {
        console.log(this.name);
    };
    this.clickTwo = function(event) {
        console.log(this.name);
    };
    this.clickTwo = this.clickTwo.bind(this);
    element.addEventListener('click', this.clickOne);
    element.addEventListener('click', this.clickTwo);
}

const S = new Something(document.querySelector('button'));
console.log(document.querySelector('button'));
