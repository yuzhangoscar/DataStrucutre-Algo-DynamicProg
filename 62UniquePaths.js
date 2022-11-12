var uniquePaths = function(m, n) {
    const hash = new Map();
    let result = 0;
    
    const recursive = function(x, y) {
        let key = String(x) + '.' + String(y);
        let temp = 0;
        
        if (hash.has(key)) {
            return hash.get(key);
        }
        else {
            if (x === 0 || y === 0) {
                hash.set(key, 1);
                return 1;
            }
            else {
                temp = recursive(x-1, y) + recursive(x, y-1);
                hash.set(key, temp);
                return hash.get(key);
            }
        }
    }
    
    result = recursive(m-1, n-1);

    return result;
};

console.log(uniquePaths(4,7));
