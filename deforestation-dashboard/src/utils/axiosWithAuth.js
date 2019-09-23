import axios from "axios";

export const axiosWithAuth = () => {
  // set the token from local storage to a variable
  const token = localStorage.getItem("token");

  // return the token as the header prop 'Authorization' 
  // to be used to authenticate on API requests
  return axios.create({
    headers: {
      Authorization: token
    }
  });
};