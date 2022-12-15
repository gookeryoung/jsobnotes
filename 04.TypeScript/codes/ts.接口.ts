interface Employee {
    firstName: string;
    lastName: string;

    fullName(): string;
}

let employee: Employee = {
    firstName: 'Emy',
    lastName: 'Anderson',

    fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(employee.fullName());
// Emy Anderson