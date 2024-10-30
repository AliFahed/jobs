const fullstackQuery = require("../data/data_request_query_params_manual/query-params.json");
const updateFullstackJobsData = require("../utils/fetchData");

const apiURL_FullstackJobs = `https://jsearch.p.rapidapi.com/search?
query=${encodeURIComponent(fullstackQuery.jsearch.full_stack_title_and_country)}
&page=1&num_pages=1&date_posted=all&employment_types=FULLTIME%2C%20CONTRACTOR&job_requirements=under_3_years_experience%2C%20no_experience`;

const fullstackFileName = "jsearch-full-stack.json";

updateFullstackJobsData(
  "jsearch",
  apiURL_FullstackJobs,
  fullstackFileName,
  "rewrite"
);
