export interface Loan {
  id: string;
  amount: string;
  interest_rate: string;
  loan_term_in_months: string;
  monthly_interest_amount: string;
}


export interface CreateLoanData {
  amount: string;
  interest_rate: string;
  loan_term_in_months: string;
}


export interface UpdateLoanData {
  id: string;
  amount: string;
  interest_rate: string;
  loan_term_in_months: string;
}