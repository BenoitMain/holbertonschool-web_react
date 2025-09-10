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

console.log(teacher2);
console.log(teacher3);
