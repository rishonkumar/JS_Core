class User{

    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(this.name);        
    }

    get name() {
        return this.name
    }

    set name(value) {
        if(value.length < 4) {
            console.log("Nam is short");
            return;
        }
        this.name = value
    }
}

console.log(typeof User)
let user = new User("Rishon")
user.sayHi()