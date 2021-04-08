class Employee {
    #age = 30;
    getAge() {
        return this.#age;
    }
    setAge(age) {
        if (age < 20) {
            console.log("Age must be greater than 20");
        }
        else if (age > 65) {
            console.log("Age must be less than or equal 65");
        }
        else {

            this.#age = age;
            console.log("Employee age updated to " + this.#age);

        }
    }

}
let emp1 = new Employee()
console.log(emp1.getAge());
emp1.setAge(25)
emp1.setAge(15)
emp1.setAge(68)
