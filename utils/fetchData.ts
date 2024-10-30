const {
  saveDataToJsonAsRewrite: saveDataRewrite,
  saveDataToJsonAsAppend: saveDataAppend,
} = require("./crudJsonFile");

require("dotenv").config();

type apiName = "jsearch" | "jobs-api";
type saveMode = "rewrite" | "append";

const optionsJsearchAPI = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY_JSEARCH || "",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
};

const optionsJobsAPI = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY_JSEARCH || "",
    "x-rapidapi-host": "jobs-api14.p.rapidapi.com",
  },
};

async function fetchData(
  apiName: apiName,
  apiURL: string,
  jobDataFileName: string,
  mode: saveMode
) {
  try {
    let response;
    let result;

    if (apiName === "jsearch") {
      response = await fetch(apiURL, optionsJsearchAPI);
      result = await response.json();
    }

    if (apiName === "jobs-api") {
      response = await fetch(apiURL, optionsJobsAPI);
      result = await response.json();
    }

    // custom - adding current date with the response data
    const resultData = {
      date: new Date().toLocaleDateString("en-GB"),
      data: result.data,
    };

    // standard - store only the response data
    const resultData_salary = {
      data: result,
    };

    // response from jsearch api
    if (resultData.data) {
      if (mode === "rewrite") {
        saveDataRewrite(jobDataFileName, resultData);
      }
      return;
    }

    // response from jobs api
    if (result.hasError === false) {
      if (mode === "append") {
        saveDataAppend(jobDataFileName, resultData_salary);
      }
      return;
    }
  } catch (error) {
    console.error("Error updating jobs data:", error);
  }
}

module.exports = fetchData;
