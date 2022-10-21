import { createAction } from "@ngrx/store";
import { Employee } from "../../model/employee.model";

export const initEmp = createAction(
    'initEmp',
    (employee: Employee) => ({employee})
);
export const resetEmp = createAction('resetEmp');

export const addEmp = createAction(
    'addEmp',
    (employee: Employee) => ({employee})
);
export const updateEmp = createAction(
    'updateEmp',
    (employee: Employee) =>({employee})
);
export const removeEmp = createAction(
    'removeEmp',
    (employee: Employee) =>({employee})
);