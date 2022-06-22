import axios from "axios";
import { CreateLoanData, Loan } from "../types";

const isDev = false;

export const apiUrl = isDev
  ? "http://localhost:3001"
  : "https://shrouded-lake-30677.herokuapp.com";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

export const getLoans = async () => {
  const response = await axios.get(`${apiUrl}/api/v1/loans`, config);
  return response.data;
};

export const getLoan = async (id: string) => {
  const response = await axios.get(`${apiUrl}/api/v1/loans/${id}`, config);
  return response.data;
}

export const createLoan = async (loan: CreateLoanData) => {
  const response = await axios.post(`${apiUrl}/api/v1/loans`, loan, config);
  return response.data;
}

export const updateLoan = async (loan: Loan) => {
  const response = await axios.put(`${apiUrl}/api/v1/loans/${loan.id}`, loan, config);
  return response.data;
}
