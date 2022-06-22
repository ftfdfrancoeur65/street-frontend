import React, { useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { getLoans } from "../support/loanStreet";
import { Button, Container } from "@mui/material";
import { Loan } from "../types";
import { useNavigate } from 'react-router-dom';






function Home() {
  const [loans, setLoans] = React.useState<Array<Loan>>([]);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "amount", headerName: "Amount", width: 130 },
    { field: "interest_rate", headerName: "Interest Rate", width: 130 },
    {
      field: "loan_term_in_months",
      headerName: "Loan Term (Months)",
      width: 130,
    },
    {
      field: "monthly_interest_amount",
      headerName: "Monthly Interest Amount",
      width: 200,
    },
    {
      field: "Action",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              navigate(`/loan/${cellValues.id}`);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    getLoans().then((newLoans) => setLoans(newLoans));
  }, []);

  return (
    <div className="App">
      <Container>
        <div className="row">
          <div className="col-md-12">
            <h1>Loan Street</h1>
            <h2>All the loans</h2>

            <div
              style={{ height: 400, width: "80%", justifyContent: "center" }}
            >
              <DataGrid
                rows={loans}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[10]}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;