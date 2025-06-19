import { ID } from "../_metronic/helpers";
import { UserModel } from "../pages/auth";

export interface Employees {
  id: ID;
  user_id: string;
  departments: string;
  position: string;
  user: UserModel;
}

export interface EmployeesCreate {
  user_id: string;
  departments: string;
  position: string;
}

export interface EmployeesUpdate {
  user_id: string;
  departments: string;
  position: string;
}

export interface EmployeesRead {
  id: ID;
  user_id: string;
  departments: string;
  position: string;
  user: UserModel;
}

export const InitialValue: EmployeesCreate = {
  user_id: "",
  departments: "",
  position: "",
};
