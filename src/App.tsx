import React, { useEffect } from "react";
import "./App.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { getLoans } from "./support/loanStreet";
import { Container } from "@mui/material";

interface Loan {
  id: string;
  amount: string;
  interest_rate: string;
  loan_term_in_months: string;
  monthly_interest_amount: string;
}

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
    width: 130,
  },
];

function App() {
  const [loans, setLoans] = React.useState<Array<Loan>>([]);

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

            <div style={{ height: 400, width: "80%" }}>
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

export default App;
