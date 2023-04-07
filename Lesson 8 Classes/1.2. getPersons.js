function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let result = [];

    const p1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const p2 = new Person('SoftUni');
    const p3 = new Person('Stephan', 'Johnson', 25);
    const p4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    result.push(p1, p2, p3, p4);
    return result;

}
getPersons();
