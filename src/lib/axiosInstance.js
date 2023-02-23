import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // ?? "https://0a47-2401-4900-1f3f-4063-a44e-2d37-8d43-11ed.in.ngrok.io/api",
  timeout: 5000,
  timeoutErrorMessage: "Timeout! something went wrong",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      "Cache-Control": "no-cache",
    };
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
