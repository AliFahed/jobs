const saveData = require("./saveDataToJson");

require("dotenv").config();

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY_JSEARCH || "",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
};

async function fetchData(apiURL: string, jobDataFileName: string) {
  try {
    console.log("Headers:", options.headers);
    const response = await fetch(apiURL, options);
    const result = await response.json();

    const jobsData = {
      date: new Date().toLocaleDateString("en-GB"),
      data: result.data,
    };

    if (jobsData.data) {
      saveData(jobDataFileName, jobsData);
      console.log("Jobs data updated successfully.");
      console.log(result);
      return;
    }
    console.log(result);
  } catch (error) {
    console.error("Error updating jobs data:", error);
  }
}

module.exports = fetchData;
