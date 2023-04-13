class employee                                          // class student                     
{
    constructor (name, age)                                   // constructor function
    {
        this.empname = name;
        this.age = age;
    }
    hello()
    {
        console.log(`"name is " ${this.empname} "and age is "${this.age}`);
    }
    static staticmethoed()                                   // use static keyword for static method
    {
        console.log("call static function....")
    }
}
let a = new employee("Aman", 25);                        // create object for call constructor function
let b = new employee("Virat",28);
a.hello();                                    // call method
b.hello();
employee.staticmethoed();
