const fullstackSalaryQuery = require("../data/data_request_query_params_manual/query-params.json");
const updateFullstackSalaryData = require("../utils/fetchData");
const {
  clearDataInJson: clearFullstackSalaryData,
} = require("../utils/crudJsonFile");

const fullstackSalaryFileName = "jobs-api-full-stack-salary.json";
// clear the old salary data only once
//clearFullstackSalaryData(fullstackSalaryFileName);

// iterate and send one request for each country and append all data
const fullstackSalaryCountries = Object.values(
  fullstackSalaryQuery.jobs_api_salary.country
);

async function requestFullstackSalaryData() {
  for (const countryCode of fullstackSalaryCountries) {
    const apiURL_fullstackJobSalary = `https://jobs-api14.p.rapidapi.com/salary/getSalaryRange?jobTitle=${encodeURIComponent(
      fullstackSalaryQuery.jobs_api_salary.job_title.full_stack
    )}&countryCode=${countryCode}`;

    await updateFullstackSalaryData(
      "jobs-api",
      apiURL_fullstackJobSalary,
      fullstackSalaryFileName,
      "append"
    );
  }
}

requestFullstackSalaryData();
