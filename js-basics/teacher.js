import { Person1 } from "./person"; //MODULES

export function promote () {}

export  default class Teacher extends Person1{
    constructor(name, degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}
const teacher = new Teacher('Mary', "MSc");