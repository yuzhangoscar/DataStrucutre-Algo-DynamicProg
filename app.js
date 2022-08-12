const storageObj = {
    id:1,
    storage:[],
    hasBeenStored: function(fn){
        if(!fn.id) {
            fn.id = this.id++;
            this.storage.push(fn);
            console.log(`this function ${fn} was stored.`);
        }
        else {
            console.log(`this function ${fn} has been stored before`);
        }
    }
}

function one(){};
function two(){};

storageObj.hasBeenStored(one);
storageObj.hasBeenStored(two);
storageObj.hasBeenStored(one);
console.log(storageObj.storage);
