const frontendSalaryQuery = require("../data/data_request_query_params_manual/query-params.json");
const updateFrontendSalaryData = require("../utils/fetchData");
const {
  clearDataInJson: clearFrontEndSalaryData,
} = require("../utils/crudJsonFile");

const frontendSalaryFileName = "jobs-api-front-end-salary.json";
// clear the old salary data only once
//clearFrontEndSalaryData(frontendSalaryFileName);

// iterate and send one request for each country and append all data
const frontendSalaryCountries = Object.values(
  frontendSalaryQuery.jobs_api_salary.country
);

async function requestFrontendSalaryData() {
  for (const countryCode of frontendSalaryCountries) {
    const apiURL_frontendJobSalary = `https://jobs-api14.p.rapidapi.com/salary/getSalaryRange?jobTitle=${encodeURIComponent(
      frontendSalaryQuery.jobs_api_salary.job_title.front_end
    )}&countryCode=${countryCode}`;

    await updateFrontendSalaryData(
      "jobs-api",
      apiURL_frontendJobSalary,
      frontendSalaryFileName,
      "append"
    );
  }
}

requestFrontendSalaryData();
