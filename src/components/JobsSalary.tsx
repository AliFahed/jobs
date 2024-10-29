import jobSalary from "../../data/jobs-api-front-end-salary.json";

export const JobsSalary = () => {
  const lastUpdatedDate = new Date(
    jobSalary.lastUpdatedTimestamp
  ).toLocaleDateString("en-GB");

  return (
    <>
      <p>{lastUpdatedDate}</p>
      <p>{jobSalary.country}</p>
      <p>Currency: {jobSalary.currency}</p>
      <p>
        {jobSalary.currency} {jobSalary.hourlySalary.min.toFixed(2)}
      </p>
    </>
  );
};
