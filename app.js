function* weaponGenerator() {
    yield 'gun';
    yield 'rifle';
    yield 'big gun';
}

for (let weapon of weaponGenerator()){
    console.log(weapon);
}