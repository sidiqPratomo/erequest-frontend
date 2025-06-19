import { useQuery, UseQueryResult } from "react-query";
import { UserModel } from "../../auth";
import { fetchUsers } from "../api/useFetchUsers";

export const useAllUser = (params: Record<string, any> = {status:1}): UseQueryResult<
  UserModel[],
  Error
> => {
  return useQuery<UserModel[], Error>(
    "Allusers",
    ()=>fetchUsers(params)
  );
};
