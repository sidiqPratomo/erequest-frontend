import { useQuery, UseQueryResult } from "react-query";
import { Employees } from "../../../models/employees";
import { fetchEmployees } from "../api/useFetchEmployees";

export const useAllEmployees = (params: Record<string, any> = {status:1}): UseQueryResult<
  Employees[],
  Error
> => {
  return useQuery<Employees[], Error>(
    "Allemployees",
    ()=>fetchEmployees(params)
  );
};
