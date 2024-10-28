const fs = require("fs");
const path = require("path");

require("dotenv").config();

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY_JSEARCH || "",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
};

async function updateJobsData(apiURL: string, jobDataFileName: string) {
  try {
    console.log("Headers:", options.headers);
    const response = await fetch(apiURL, options);
    const result = await response.json();

    const jobsData = {
      date: new Date().toLocaleDateString("en-GB"),
      data: result.data,
    };

    if (jobsData.data) {
      const filePath = path.join(process.cwd(), "data", jobDataFileName);
      fs.writeFileSync(filePath, JSON.stringify(jobsData, null, 2));
      console.log("Jobs data updated successfully.");
      console.log(result);
      return;
    }
    console.log(result);
  } catch (error) {
    console.error("Error updating jobs data:", error);
  }
}

module.exports = updateJobsData;
