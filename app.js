class Ninja {
    jump = 0;
    shoot = 0;
    constructor(j, s) {
        this.jump = j;
        this.shoot = s;
    }
    get GetJump() {
        return this.jump;
    }

    set SetJump(input) {
        this.jump = input;
    }

    get GetShoot() {
        return this.shoot;
    }

    set SetShoot(input) {
        this.shoot = input;
    }
}

const ninjaOne = new Ninja(1.1, 2.2);
console.log(ninjaOne.GetJump);
console.log(ninjaOne.GetShoot);
ninjaOne.SetJump = 3.3;
ninjaOne.SetShoot = 4.4;
console.log(ninjaOne.GetJump);
console.log(ninjaOne.GetShoot);