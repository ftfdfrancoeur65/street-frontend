import { useEffect, useState } from "react";
import { getLoan, updateLoan } from "../support/loanStreet";
import { useNavigate } from "react-router-dom";

export const UpdateLoanForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    loan_term_in_months: "",
    interest_rate: "",
    amount: "",
    monthly_interest_amount: "",
  });

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    getLoan(id).then((newLoan: any) => setFormData(newLoan));
  }, []);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = await updateLoan(formData);
    console.log("success", data);
    navigate("/");
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Loan Street</h1>
        <h2>Update Loan #{formData.id}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loan_term_in_months">Loan Term (Months)</label>
            <input
              type="text"
              className="form-control"
              id="loan_term_in_months"
              name="loan_term_in_months"
              value={formData.loan_term_in_months}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Loan Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interest_rate">Interest Rate</label>
            <input
              type="text"
              className="form-control"
              id="interest_rate"
              name="interest_rate"
              value={formData.interest_rate}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateLoanForm;
