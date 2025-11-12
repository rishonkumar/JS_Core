
const ob = {
    name : "Rison",
    age : 12,
    greet : function() {
        console.log("Helllo ji");
        
    }
}

ob.greet()

console.log(ob.hasOwnProperty("name")); // true


const ob1 = {
    account : 30
}

ob1.name // we dont have anythign like that right

//but we can make one by using

ob1.__proto__ = ob // i tiwll point on to ob object first it will check ob1 if not then it willl go to ob

console.log(ob1.name) // now i will print
 

//classess

const data = {
    name :  "Rish",
    age : 29,
    greet : function() {
        console.log("Hello ji");
        
    }
}


class Person{
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    sayHi() {
        console.log(`Hi ${this.name}`);
        
    }
}

const p1 = new Person("Rishon", 22)

p1.sayHi()
console.log(p1); // this will not print the method just name age because of prototype DRY principle 


//inheritance
class Customer extends Person{
    constructor(name,age,acc,balance) {
        super(name,age)
        this.acc = acc
        this.balance = balance
    } 
    checkBalance() {
        return this.balance
    }
}

