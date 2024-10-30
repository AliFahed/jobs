import frontendJobSalary from "../../data/jobs-api-back-end-salary.json";

export const JobsSalary = () => {
  function lastUpdatedDate(timeStamp: number): string {
    return new Date(timeStamp).toLocaleDateString("en-GB");
  }

  return (
    <div className="mb-10">
      {frontendJobSalary.map((item, index) => (
        <div>
          <p>
            {item.data.lastUpdatedTimestamp
              ? `Last update on: ${lastUpdatedDate(
                  item.data.lastUpdatedTimestamp
                )}`
              : ""}
          </p>
          <div key={index}>
            <p>Country Code: {item.data.countryCode}</p>
            <p>Currency: {item.data.currency}</p>
            <p>
              Hourly Rate: {item.data.currency}
              {item.data.hourlySalary.min.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
