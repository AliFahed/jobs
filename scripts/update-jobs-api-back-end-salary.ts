const backendSalaryQuery = require("../data/data_request_query_params_manual/query-params.json");
const updateBackendSalaryData = require("../utils/fetchData");
const {
  clearDataInJson: clearBackEndSalaryData,
} = require("../utils/crudJsonFile");

const backendSalaryFileName = "jobs-api-back-end-salary.json";
// clear the old salary data only once
//clearBackEndSalaryData(backendSalaryFileName);

// iterate and send one request for each country and append all data
const backendSalaryCountries = Object.values(
  backendSalaryQuery.jobs_api_salary.country
);

async function requestBackendSalaryData() {
  for (const countryCode of backendSalaryCountries) {
    const apiURL_BackendJobSalary = `https://jobs-api14.p.rapidapi.com/salary/getSalaryRange?jobTitle=${encodeURIComponent(
      backendSalaryQuery.jobs_api_salary.job_title.back_end
    )}&countryCode=${countryCode}`;

    await updateBackendSalaryData(
      "jobs-api",
      apiURL_BackendJobSalary,
      backendSalaryFileName,
      "append"
    );
  }
}

requestBackendSalaryData();
