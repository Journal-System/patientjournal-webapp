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
import {
  getAllPatientsByName,
  getAllPatientsByCondition,
} from "../../api/FetchSearch";

export function Search() {
  const [name, setName] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [searchPatientsByCondition, setSearchPatientsByCondition] = useState(
    []
  );
  const [searchPatientsByName, setSearchPatientsByName] = useState([]);
  const [loadingPatientsByName, setLoadingPatientsByName] = useState(false);
  const [loadingPatientsByCondition, setLoadingPatientsByCondition] =
    useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearchButtonClick = () => {
    setLoadingPatientsByName(true);
    setLoadingPatientsByCondition(true);

    getAllPatientsByName(name)
      .then((data) => {
        console.log("Search successful with data:", data);
        setSearchPatientsByName(data);
      })
      .catch((error) => {
        console.error("Search error: ", error.message);
        setSearchError(error);
      })
      .finally(() => {
        setLoadingPatientsByName(false);
      });

    getAllPatientsByCondition(name)
      .then((data) => {
        console.log("Search successful with data:", data);
        setSearchPatientsByCondition(data);
      })
      .catch((error) => {
        console.error("Search error: ", error.message);
        setSearchError(error);
      })
      .finally(() => {
        setLoadingPatientsByCondition(false);
      });
  };

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "DOCTOR" || userRole === "STAFF") {
      setIsAuthorized(true);
    }
  }, []);

  if (!isAuthorized && loadingPatientsByCondition && loadingPatientsByName) {
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
            {(!loadingPatientsByCondition || !loadingPatientsByName) && (
              <TableRow>
                <TableCell colSpan="4" style={{ textAlign: "center" }}>
                  Try searching for a name or condition to view results
                </TableCell>
              </TableRow>
            )}

            {loadingPatientsByCondition && loadingPatientsByName && (
              <TableRow>
                <TableCell colSpan="4" style={{ textAlign: "center" }}>
                  Loading...
                </TableCell>
              </TableRow>
            )}

            {!loadingPatientsByCondition &&
            searchPatientsByCondition.length > 0 ? (
              searchPatientsByCondition.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>{item.firstname}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.address}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))
            ) : !loadingPatientsByName && searchPatientsByName.length > 0 &&
              searchPatientsByName.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>{item.firstname}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.address}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
          </tbody>
        </MyTable>
      </SearchContainerWrapper>
    </SearchContainer>
  );
}
