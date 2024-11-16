# Jobs

This is a Nextjs project that uses 2 separate API's, one for Posting Jobs related to web development roles, and other for Posting Jobs Salaries related to web development roles.

Visist the website: [Web Jobs](https://jobs-tau-swart.vercel.app/)

## Tech Stack & Technologies

**Nextjs** (React Framework), **Typescript** (Type Safety), **Tailwindcss** (Styles), **Redux** (State Management), **Jest** (Unit/Integration Tests), **Playwright** (E2E Tests), **Github Actions**, **Github Bot**

## Challenges

### 1. APIs have a hard limit of 50/200 requests per month

- To solve this issue and still use the APIs for free, I did the below:

  First I created scripts (CRUD) that request data from the APIs, receive the data, and store the data to be retrieved in the website.
  To not pass the hard limit of 50/200 requests for the jobs salaries api and jobs search api:

  1. Jobs Salaries API Scripts (has 50 requests limit per month)

  - It runs once per month it sends 33 requests to the api sequentially, receive the data, and store it.

  2. Jobs Search API Scripts (has 200 requests limit per month)

  - It runs using cron jobs once per day or runs manually using workflows it sends 3 requests to the api sequentially, receive the data, and store it.
    Github bot pushs the new data of the requests to the repo to be auto deployed by vercel and show the new data in the site.

### 2. APIs Data are not consistent, and needed further adjustments

- To solve this issue and use the data in the website, I used React conditional rendering to adjust based on the received data.

  Non consistency Examples:
  1. Company logo might be null
  2. Salary, education, skills, and other data for job details might not be mentioned
  
  Further Adjustments Examples:
  1. The Job description which is the most Important data in the jobs details are compacted without lines and its un-readable. Used custom function to format the layout of the texts.
  2. Salaries data contains arabic and japanese texts for saudia arabia and japan countries, I auto update it to be able to insert it to the url and to be consistent with other countries format.
  3. Salaries data numbers are in a format showing the number and decimals that is not easy to read at first glance as 83077.100191, the code format it to include comma for thousands and above to be 83,077.10.
