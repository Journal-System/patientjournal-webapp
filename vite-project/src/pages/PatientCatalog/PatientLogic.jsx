import { useQuery } from "react-query";
import { getAllPatients } from "../../api/FetchPatients";

export function usePatientLogic() {
  const {
    data: usersData,
    isLoading,
    isError,
    error,
  } = useQuery("users", getAllPatients);

  return {
    isLoading,
    usersData,
    isError,
    error,
  };
}