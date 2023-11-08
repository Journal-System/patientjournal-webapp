import React, { useState } from "react";
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

export function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toUpperCase());
  };

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const {
    isLoading,
    usersData,
    isError,
    error,
  } = usePatientLogic();

  // Ensure 'usersData' is not undefined before filtering
  const filteredData = usersData?.filter((item) =>
    item.fullname.toUpperCase().includes(searchTerm)
  ) || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <PatientsContainer>
      <Typography variant="h2" style={{ marginBottom: "20px" }}>
        Patients Information Directory
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
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow onClick={() => toggleRow(index)} style={{ cursor: 'pointer' }}>
                    <TableCell>{item.fullname}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.address}</TableCell>
                  </TableRow>
                  {expandedRow === index && (
                    <TableRow>
                      <TableCell colSpan="4">
                        <div style={{ padding: "10px", backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}>
                          <Typography variant="body1">Name: {item.fullname}</Typography>
                          <Typography variant="body1">Phone: {item.phone}</Typography>
                          <Typography variant="body1">Email: {item.email}</Typography>
                          <Typography variant="body1">Address: {item.address}</Typography>
                          {/* Lägg till mer detaljerad information här om nödvändigt */}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" style={{ textAlign: "center" }}>
                  Inga matchande poster hittades
                </TableCell>
              </TableRow>
            )}
          </tbody>
        </MyTable>
      </ContainerWrapper>
    </PatientsContainer>
  );
}
