const fs = require("fs");
const path = require("path");

require("dotenv").config();

const url = `https://jsearch.p.rapidapi.com/search?query=Front-End%20Developer%20in%20Kuala-Lumpur%2C%20Malaysia&page=1
  &num_pages=1&date_posted=all&employment_types=FULLTIME%2C%20CONTRACTOR&job_requirements=under_3_years_experience%2C%20no_experience`;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY_JSEARCH || "",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
};

async function updateJobsData() {
  try {
    console.log("Headers:", options.headers);
    const response = await fetch(url, options);
    const result = await response.json();

    const jobsData = {
      date: new Date().toLocaleDateString("en-GB"),
      data: result.data,
    };

    if (jobsData.data) {
      const filePath = path.join(
        process.cwd(),
        "data",
        "jsearch-front-end.json"
      );
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

updateJobsData();
