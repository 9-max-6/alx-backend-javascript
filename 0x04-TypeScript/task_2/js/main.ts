
export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from Home"; 
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }

}
export interface createEmployeeInterface {
    (salary: string | number): Director | Teacher;
}

export const createEmployee: createEmployeeInterface = function (salary) {
    if (Number(salary) <= 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}