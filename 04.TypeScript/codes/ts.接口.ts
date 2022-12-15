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

// 接口属性类型
interface Student {
    name: string; // 必须属性
    nickName?: string; // 可选属性
    readonly isMale: boolean; // 只读
}

let student: Student = {
    name: 'jack',
    isMale: false
};

// 扩展接口
interface IceCream {
    flavor: string;
    price: number;
}

let myIceCream: IceCream = {
    flavor: 'vanilla',
    price: 2.5
}

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}

let myIceCream2: Sundae = {
    sauce: 'chocolate',
    flavor: 'vanilla',
    price: 20,

    nuts: true,
    whippedCream: true
}
console.log(myIceCream2);