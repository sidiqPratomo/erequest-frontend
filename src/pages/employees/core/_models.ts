import { Employees, EmployeesCreate, EmployeesRead, EmployeesUpdate, InitialValue } from "../../../models/employees";

export type CreateModel = EmployeesCreate;
export type ReadModel = EmployeesRead;
export type UpdateModel = EmployeesUpdate;
export type ListModel = Employees;

export const initialModel: EmployeesCreate = InitialValue;

export const Collection = "employees";

export const initialValueAddModel = { ...initialModel };
export const initialValueReadModel = { ...initialModel };
export const initialValueUpdateModel = { ...initialModel };
