import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  ContainerWrapper,
  PatientsContainer,
  MyInput,
  MyTable,
  TableCell,
  TableHeader,
  TableRow,
} from "./PatientCatalogStyles";
import { usePatientLogic } from "./PatientLogic";
import { useNavigate } from "react-router-dom";

export function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toUpperCase());
  };

  const handleRowClick = (index) => {
    // Navigate to the Profile route with the index as a parameter
    navigate(`/Profile/${index}`);
  };

  const { isLoading, usersData, isError, error } = usePatientLogic();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "DOCTOR") {
      setIsAuthorized(true);
    }
  }, []);

  return (
    <PatientsContainer>
      {isLoading && <div>Loading...</div>}

      {isError && (
        <div>
          Error: {error?.message || "Something went wrong"}
        </div>
      )}

      {(!isLoading && !isError && isAuthorized) ? (
        <>
          <Typography variant="h2" style={{ marginBottom: "20px" }}>
            Patients Information Directory
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Click on a patient to see all details about them
          </Typography>
          <ContainerWrapper>
            <MyInput
              type="text"
              id="myInput"
              onKeyUp={handleSearch}
              placeholder="Search by name..."
            />
            <MyTable id="myTable">
              <thead>
                <TableHeader className="header">
                  <th>Full name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                </TableHeader>
              </thead>
              <tbody>
                {usersData
                  ?.filter((item) =>
                    item.fullname.toUpperCase().includes(searchTerm)
                  )
                  .map((item, index) => (
                    <React.Fragment key={index}>
                      <TableRow
                        onClick={() => handleRowClick(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <TableCell>{item.fullname}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.address}</TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
              </tbody>
            </MyTable>
          </ContainerWrapper>
        </>
      ) : (
        <div
          style={{ fontSize: "90px", textAlign: "center", marginTop: "20px" }}
        >
          Oops! It looks like you don't have permission to access this page.
          <br />
          Please <a href="/">click here</a> to return to the homepage
        </div>
      )}
    </PatientsContainer>
  );
}