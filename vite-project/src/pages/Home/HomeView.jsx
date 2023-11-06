import React from "react";
import { useHomeLogic } from "./HomeLogic";

export function Home() {
  const {
    isLoading,
    userData,
    isError,
    error,
    handleInputChange,
    handleSearch,
    userId
  } = useHomeLogic();

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter user ID"
          value={userId}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <h1>Some info about the user</h1>

      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}

      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Password: {userData.password}</p>
          <p>Fullname: {userData.fullname}</p>
          <p>Phone: {userData.phone}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
        </div>
      )}
    </div>
  );
}
