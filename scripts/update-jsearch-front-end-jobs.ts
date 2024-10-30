const frontendQuery = require("../data/data_request_query_params_manual/query-params.json");
const updateFrontendJobsData = require("../utils/fetchData");

const apiURL_FrontendJobs = `https://jsearch.p.rapidapi.com/search?
query=${encodeURIComponent(frontendQuery.jsearch.front_end_title_and_country)}
&page=1&num_pages=1&date_posted=all&employment_types=FULLTIME%2C%20CONTRACTOR&job_requirements=under_3_years_experience%2C%20no_experience`;

const frontendFileName = "jsearch-front-end.json";

updateFrontendJobsData(
  "jsearch",
  apiURL_FrontendJobs,
  frontendFileName,
  "rewrite"
);
