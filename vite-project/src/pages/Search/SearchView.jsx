import React, { useEffect, useState } from "react";
import {
  SearchContainer,
  SearchContainerWrapper,
  MyInput,
  MyTable,
  TableCell,
  TableHeader,
  TableRow,
} from "./SearchStyles";
import { Typography } from "@mui/material";
import { getAllPatientsByName, getAllPatientsByCondition } from "../../api/FetchSearch";

export function Search() {
  const [name, setName] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearchButtonClick = () => {
    setIsSearchLoading(true);

    getAllPatientsByName(name)
      .then((data) => {
        console.log("Search successful with data:", data);
        setSearchData(data);
      })
      .catch((error) => {
        console.error("Search error: ", error.message);
        setSearchError(error);
      })
      .finally(() => {
        setIsSearchLoading(false);
      });

      getAllPatientsByCondition(name)
      .then((data) => {
        console.log("Search successful with data:", data);
        setSearchData(data);
      })
      .catch((error) => {
        console.error("Search error: ", error.message);
        setSearchError(error);
      })
      .finally(() => {
        setIsSearchLoading(false);
      });
  };

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "DOCTOR" || userRole === "STAFF") {
      setIsAuthorized(true);
    }
  }, []);

  if (!isAuthorized) {
    return (
      <SearchContainer>
        <div
          style={{ fontSize: "90px", textAlign: "center", marginTop: "20px" }}
        >
          Oops! It looks like you don't have permission to access this page.
          <br />
          Please <a href="/">click here</a> to return to the homepage
        </div>
      </SearchContainer>
    );
  }

  return (
    <SearchContainer>
      <Typography variant="h2" style={{ marginBottom: "20px" }}>
        Search for a patient
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        Search for patients using their name or medical condition
      </Typography>
      <SearchContainerWrapper>
          <MyInput
            type="text"
            id="myInput"
            placeholder="Name or Condition"
            onChange={(event) => setName(event.target.value)}
          />
          <button
            style={{
              padding: "14px 15px 15px 15px",
              fontSize: "16px",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              marginRight: "60px",
            }}
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        <MyTable id="myTable">
          <thead>
            <TableHeader className="header">
              <th>First name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </TableHeader>
          </thead>
          <tbody>
            {isSearchLoading ? (
              <TableRow>
                <TableCell colSpan="4" style={{ textAlign: "center" }}>
                  Loading...
                </TableCell>
              </TableRow>
            ) : searchData.length > 0 ? (
              searchData.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>{item.firstname}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.address}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" style={{ textAlign: "center" }}>
                  No patients found
                </TableCell>
              </TableRow>
            )}
          </tbody>
        </MyTable>
      </SearchContainerWrapper>
    </SearchContainer>
  );
}
