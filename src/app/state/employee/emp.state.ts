import { Employee } from "src/app/model/employee.model";

export const initialState = new Employee();

let employees: Employee[] = [
    {id: 1,firstName:'Abdul',lastName:'Alim',dateOfBirth:new Date('11-Dec-1994'),gender:'Male',phone:'01705768898',skillName:'Java',skillLevel:'Intermediate',experience:'3 Years',isValid: false},
    {id: 2,firstName:'Amzad',lastName:'Hossain',dateOfBirth:new Date('11-Jun-1998'),gender:'Male',phone:'01705761234',skillName:'Chamist',skillLevel:'(Beginner',experience:'1 Year',isValid: false},
    {id: 3,firstName:'Murad',lastName:'Fakir',dateOfBirth:new Date('09-Dec-1991'),gender:'Male',phone:'01777665598',skillName:'Advocat',skillLevel:'Advanced',experience:'4 Years',isValid: false},
    {id: 4,firstName:'Laboni',lastName:'Akter',dateOfBirth:new Date('11-Dec-1996'),gender:'Female',phone:'01905768811',skillName:'Nurch',skillLevel:'Intermediate',experience:'3 Years',isValid: false},
]
export const empListState = employees;

