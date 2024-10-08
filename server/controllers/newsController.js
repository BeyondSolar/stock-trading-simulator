// const Axios = require("axios");
// require("dotenv").config();

// exports.getNewsData = async (req, res) => {
//   try {
//     const token = process.env.STOCK_API_KEY;
//     const url = `https://finnhub.io/api/v1/news?category=general&token=${token}`;

//     console.log("Fetching news data...");
 
//     const response = await Axios.get(url);

//     console.log("News data fetched:", response.data);

//     return res.status(200).json({
//       status: "success",
//       data: response.data,
//     });
//   } catch (error) {
//     console.error("Error fetching news data:", error);
//     return res.status(200).json({
//       status: "fail",
//       message: error.message,                      
//     });
//   }
// };







// This code uses the fetch API provided by the browser, so it doesn't require any additional packages like axios to call api.  
require("dotenv").config();

exports.getNewsData = async (req, res) => {
  try {
    const token = process.env.STOCK_API_KEY;
  //  console.log("token :" , token);
    const url = `https://finnhub.io/api/v1/news?category=general&token=${token}`;

  //  console.log("Fetching news data...");

    const response = await fetch(url);
    const data = await response.json();

   // console.log("News data fetched:", data);

    return res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching news data:", error);
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};













/*
Axios is a popular JavaScript library used to make HTTP requests from node.js or XMLHttpRequests from the browser. It supports all modern browsers, and it is widely used for its ease of use, speed, and its ability to make asynchronous requests.
Axios is a promise-based HTTP client for the browser and node.js, which can be used in your front-end and back-end projects. It provides an easy-to-use interface that makes it a breeze to send HTTP requests and handle responses.

Axios has several features:
It supports Promises.
It provides automatic transformation of JSON data. like if we are calling the api using fetch keyword then we have to convert it into JSON(Fetch’s body has to be stringified);
It supports request and response interception.
It has a built-in support for protecting against XSRF (Cross-Site Request Forgery).
Here's a basic example of how you can use Axios to make a GET request:


Axios VS fetch

-> Axios and the Fetch API are both used to make HTTP requests in JavaScript, and each has its own advantages. Here are some advantages of Axios over the Fetch API:

1) Browser Compatibility: Axios works in all browsers, including Internet Explorer 11, while the Fetch API is not supported in Internet Explorer.
2) Simpler Syntax: Axios provides a simpler syntax for making requests and handling responses. With Axios, you can directly access the response data with response.data, while with Fetch, you need to call response.json() to parse the JSON response.
3) Handling Errors: Axios automatically handles common HTTP errors (like 404 or 500) and rejects the promise, making it easier to handle errors in your code. With Fetch, you need to manually check the ok property of the response object and handle errors accordingly.
4) Interceptors: Axios allows you to use interceptors to modify requests or responses before they are sent or received. This is useful for adding authentication tokens, logging requests, or transforming data.
5) Request Cancellation: Axios allows you to cancel requests using cancel tokens, which can be useful for implementing features like debouncing or canceling in-progress requests when a user navigates away from a page.

Fetch uses the body property to send data to the server, while Axios uses the data property. Fetch also requires the data to be stringified, while Axios automatically converts the data to and from JSON.
Fetch returns the response object itself, which contains other information such as status, headers, and url. Axios returns the data in the response object, which is more convenient for accessing the data directly.
Fetch only rejects the promise if there is a network error, not if the response has an error status. Axios handles errors in the catch block, which makes it easier to deal with error responses.

In Axios, if there is a request failure, it throws an error and you can easily handle the error with a try-catch block and get the error data from error.response.data
In Fetch, if there is a request failure, it does not throw an error, but returns a response object with an ok property set to false. You have to check the ok property and throw an error manually if you want to use a try-catch block. Alternatively, you can use the response.ok property to handle different cases in the then method.
*/