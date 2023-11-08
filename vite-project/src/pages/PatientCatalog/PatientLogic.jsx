import { getAllUsers} from "../../api/FetchUsers";
import { useQuery } from "react-query";

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
