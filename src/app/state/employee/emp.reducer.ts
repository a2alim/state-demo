import { initEmp, resetEmp } from "./emp.action";
import { initialState } from "./emp.state";
import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/model/employee.model";

export function empReducer(state: any, action: any){
    return _empReducer(state, action);
} 

const _empReducer = createReducer(
    initialState,
    on(initEmp, (state: Employee, {employee}) =>{
        return{
            ...state,
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            phone: employee.phone,
            dateOfBirth: employee.dateOfBirth,
            gender: employee.gender,
            skillName: employee.skillName,
            skillLevel: employee.skillLevel,
            experience: employee.experience,
            isValid: employee.isValid,
        }
    }),
    on(resetEmp, (emp: Employee) =>{
        emp = new Employee();
        return emp;
    })
)