import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  //headers isoptional and dependes to our backend
  // headers:{
  //     'api-key':'...'
  // }
});
export { CanceledError };
