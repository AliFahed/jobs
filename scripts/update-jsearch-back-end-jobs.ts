const updateBackendJobsData = require("./update-jobs");

const apiURL_BackendJobs = `https://jsearch.p.rapidapi.com/search?query=Back-End%20Developer%20in%20Kuala-Lumpur%2C%20Malaysia&page=1
&num_pages=1&date_posted=all&employment_types=FULLTIME%2C%20CONTRACTOR&job_requirements=under_3_years_experience%2C%20no_experience`;

const backendFileName = "jsearch-back-end.json";

updateBackendJobsData(apiURL_BackendJobs, backendFileName);
