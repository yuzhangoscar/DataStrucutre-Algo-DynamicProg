class User {
    firstName = "John";
    lastName = "Doe";

    get random() {
        console.log(`random getter`);
    }

    set random(input) {
        console.log(`random setter, setting ${input}`);
    }
}

const newUser = new User();

newUser.random;
newUser.random = 4.4;