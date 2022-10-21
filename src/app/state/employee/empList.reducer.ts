import { addEmp, removeEmp, resetEmp, updateEmp } from './emp.action';
import { empListState } from './emp.state';
import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/model/employee.model';

export function empListReducer(state: any, action: any) {
  return _empListReducer(state, action);
}

const _empListReducer = createReducer(
  empListState,
  on(addEmp, (empList: Employee[], { employee }) => {
    let copyOfEmpList = [...empList];
    copyOfEmpList.unshift(employee);
    return copyOfEmpList;
  }),
  on(updateEmp, (empList: Employee[], { employee }) => {
    let copyOfEmpList = [...empList];
    let foundIndex = copyOfEmpList.findIndex(emp => emp.id === employee.id);
    if (foundIndex >= 0) {
      copyOfEmpList[foundIndex] = employee;
    }
    return copyOfEmpList;
  }),
  on(removeEmp, (empList: Employee[], { employee }) => {
    let copyOfEmpList = [...empList];
    let foundIndex = copyOfEmpList.indexOf(employee);
    if (foundIndex >= 0) {
      copyOfEmpList.splice(foundIndex, 1);
    }
    return copyOfEmpList;
  })
);
