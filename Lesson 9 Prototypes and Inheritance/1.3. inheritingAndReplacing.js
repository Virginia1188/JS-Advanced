function inheritingAndReplacing(){

    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
        
    }
    Person.prototype.toString = function allToString(){
        return this.toString();
    };

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
    }

    class Student extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
    }

    const pesh = new Person('pepi', 'pepi', 'beology');
    console.log(pesh.toString());
    return {
        Person,
        Teacher,
        Student
    };
}
inheritingAndReplacing();
