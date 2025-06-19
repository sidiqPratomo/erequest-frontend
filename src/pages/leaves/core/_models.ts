import { InitialValue, Leaves, LeavesCreate, LeavesRead, LeavesUpdate } from "../../../models/leaves";

export type CreateModel = LeavesCreate;
export type ReadModel = LeavesRead;
export type UpdateModel = LeavesUpdate;
export type ListModel = Leaves;

export const initialLeavesModel: CreateModel = InitialValue;

export const Collection = "leaves";

export const initialValueAddModel = { ...initialLeavesModel };
export const initialValueReadModel = { ...initialLeavesModel };
export const initialValueUpdateModel = { ...initialLeavesModel };
