import axios from 'axios';

const isDev = true;

export const apiUrl = isDev ? 'http://localhost:3001' : 'https://api.loanstreet.com';

const config =  {
  headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }}

 export const getLoans = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/loans`, config);
    return response.data;
  }


