const backendQuery = require("../data/data_request_query_params_manual/query-params.json");
const updateBackendJobsData = require("../utils/fetchData");

const apiURL_BackendJobs = `https://jsearch.p.rapidapi.com/search?
query=${encodeURIComponent(backendQuery.jsearch.back_end_title_and_country)}
&page=1&num_pages=1&date_posted=all&employment_types=FULLTIME%2C%20CONTRACTOR&job_requirements=under_3_years_experience%2C%20no_experience`;

const backendFileName = "jsearch-back-end.json";

updateBackendJobsData(
  "jsearch",
  apiURL_BackendJobs,
  backendFileName,
  "rewrite"
);
