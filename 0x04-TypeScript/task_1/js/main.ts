export interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;

}
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    const firstCharacter = firstName.charAt(0)
    return `${firstCharacter}. ${lastName}`
}

export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;

}
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName;
    }

}

