import { useQuery } from "react-query";
import { getAllUsers } from "../../api/FetchUsers";

export function usePatientLogic() {
  const {
    data: usersData,
    isLoading,
    isError,
    error,
  } = useQuery("users", getAllUsers);

  return {
    isLoading,
    usersData,
    isError,
    error,
  };
}