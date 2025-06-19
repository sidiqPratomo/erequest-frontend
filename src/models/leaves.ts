import { ID } from "../_metronic/helpers";
import { UserModel } from "../pages/auth";

export interface Leaves {
  id: ID;
  user_id: ID;
  departments: string;
  position: string;
  user: UserModel;
}

export interface LeavesCreate {
  user_id: ID;
  departments: string;
  position: string;
}

export interface LeavesUpdate {
  user_id: ID;
  departments: string;
  position: string;
}

export interface LeavesRead {
  id: ID;
  user_id: ID;
  departments: string;
  position: string;
  user: UserModel;
}

export const InitialValue: LeavesCreate = {
  user_id: undefined,
  departments: "",
  position: "",
};
