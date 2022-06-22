import React from "react";
import "./App.css";

import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Tab, Tabs } from "@mui/material";
import CreateLoanForm from "./pages/CreateLoanForm";
import UpdateLoanForm from "./pages/UpdateLoanForm";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Container>
        <Router>
          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab label="Loans" href="/" />
              <LinkTab label="Create Loan" href="/create" />
            </Tabs>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateLoanForm />} />
              <Route path="/loan/:id" element={<UpdateLoanForm />} />
            </Routes>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
