import { ID } from "../_metronic/helpers";

export interface Leaves {
  id: ID;
  user_id: string;
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export interface LeavesCreate {
  // user_id: string;
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export interface LeavesUpdate {
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export interface LeavesRead {
  id: ID;
  user_id: string;
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export const InitialValue: LeavesCreate = {
  // user_id: "",
  employee_id: "",
  files: "",
  leave_date: "",
  return_date: "",
  leave_status: "",
};
