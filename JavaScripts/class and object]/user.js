class User{
    constructor(fristname, lastname,age,salary){
        this.fristname= fristname
        this.lastname=lastname
        this.age= age
        this.salary=salary
    }
    //method
    fullname=()=>`the full name of user is ${this.fristname} ${this.lastname}`

    annualsal=()=>`the annual sal of user is ${(this.salary*12)/100000}`
}

let u3 = new User('mmm','kumar',23,100);
let u1 = new User('abc','xyx',10, 10000)
let u2 = new User('ab','xy',20, 20000)
console.table(u1);
console.table(u2);
console.log(u1.fristname,u1.lastname);
console.log(u1.fullname());
console.log(u2.fullname());
console.log(u1.annualsal());
console.log("==================");
console.table(u3)

