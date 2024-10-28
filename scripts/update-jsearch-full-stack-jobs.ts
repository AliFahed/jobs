import { updateJobsData } from "./update-jobs";

const apiURL_FullstackJobs = `https://jsearch.p.rapidapi.com/search?query=Full-Stack%20Developer%20in%20Kuala-Lumpur%2C%20Malaysia&page=1
&num_pages=1&date_posted=all&employment_types=FULLTIME%2C%20CONTRACTOR&job_requirements=under_3_years_experience%2C%20no_experience`;

const fullstackFileName = "jsearch-full-stack.json";

updateJobsData(apiURL_FullstackJobs, fullstackFileName);
