import { getUser } from "../../api/FetchUsers";
import { useQuery } from "react-query";
import React, { useState } from "react";

export function useHomeLogic() {
  const [userId, setUserId] = useState("");
  const [searchId, setSearchId] = useState(null);

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery(["user", searchId], () => getUser(searchId), {
    enabled: !!searchId,
  });

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent from refreshing the page
    setSearchId(userId);
  };

  return {
    isLoading,
    userData,
    isError,
    error,
    handleInputChange,
    handleSearch,
    userId,
  };
}
