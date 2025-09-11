interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher2: Teacher = {
    firstName: 'Fafa',
    fullTimeEmployee: true,
    lastName: 'Dore',
    location: 'Wapipi',
    contract: false,
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class Student implements StudentClass {
    constructor(public firstName: string, public lastName: string) { }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}

const student = new Student("Alice", "Dupont");

console.log(teacher2);
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(student.displayName());
console.log(student.workOnHomework());
