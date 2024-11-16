"use client";

import frontendsalary from "../../data/jobs-api-front-end-salary.json";
import backendsalary from "../../data/jobs-api-back-end-salary.json";
import fullstacksalary from "../../data/jobs-api-full-stack-salary.json";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Link from "next/link";

export const SalaryDetails = () => {
  const selectedCategory = useSelector(
    (state: RootState) => state.salary.selectedSalaryCategory
  );

  const pathname = usePathname();
  const countryName: any = pathname.split("/").pop();

  const countryNameToUpperCase = (countryName: string) => {
    return countryName.toUpperCase();
  };

  const firstLetterToUpperCase = (role: string) => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  function lastUpdatedDate(timeStamp: number): string {
    return new Date(timeStamp).toLocaleDateString("en-GB");
  }

  let salary;
  // Find the salary data in the JSON data by countryCode
  if (selectedCategory === "frontend") {
    salary = frontendsalary.find(
      (salary) =>
        salary.data.countryCode === countryNameToUpperCase(countryName)
    );
  } else if (selectedCategory === "backend") {
    salary = backendsalary.find(
      (salary) =>
        salary.data.countryCode === countryNameToUpperCase(countryName)
    );
  } else {
    salary = fullstacksalary.find(
      (salary) =>
        salary.data.countryCode === countryNameToUpperCase(countryName)
    );
  }

  if (!salary) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 pt-32">
        <h1 className="text-4xl">Salary not found</h1>
        <p>Please try again!</p>
        <Link href="/" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  interface SalaryInfo {
    median: number;
    mean: number;
    min: number;
    max: number;
  }

  interface SalaryData {
    hourlySalary: SalaryInfo;
    dailySalary: SalaryInfo;
    weeklySalary: SalaryInfo;
    monthlySalary: SalaryInfo;
    yearlySalary: SalaryInfo;
  }

  const salaryTypes: { key: string; title: string }[] = [
    { key: "hourlySalary", title: "Hourly Salary" },
    { key: "dailySalary", title: "Daily Salary" },
    { key: "weeklySalary", title: "Weekly Salary" },
    { key: "monthlySalary", title: "Monthly Salary" },
    { key: "yearlySalary", title: "Yearly Salary" },
  ];

  return (
    <>
      <div className="container px-4 py-16 mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="font-bold mt-5">
            {salary?.data.countryCode === "SA"
              ? "Saudi Arabia"
              : salary?.data.countryCode === "JP"
              ? "Japan"
              : salary?.data.country}{" "}
            | {salary?.data.countryCode}
          </p>
          <p>Currency: {salary?.data.currency}</p>
          <p>
            {salary?.data.lastUpdatedTimestamp
              ? `Last update on: ${lastUpdatedDate(
                  salary?.data.lastUpdatedTimestamp
                )}`
              : ""}
          </p>
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            {firstLetterToUpperCase(selectedCategory)} development Salary in{" "}
            {salary?.data.countryCode === "SA"
              ? "Saudi Arabia"
              : salary?.data.countryCode === "JP"
              ? "Japan"
              : salary?.data.country}
          </h1>
        </div>

        <div className="space-y-2 flex flex-col gap-5">
          {salaryTypes.map((type) => (
            <div key={type.key}>
              <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Median</p>
                  <p className="font-bold">
                    {salary?.data.currency}{" "}
                    {salary?.data[
                      type.key as keyof SalaryData
                    ].median.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Mean</p>
                  <p className="font-bold">
                    {salary?.data.currency}{" "}
                    {salary?.data[
                      type.key as keyof SalaryData
                    ].mean.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Min</p>
                  <p className="font-bold">
                    {salary?.data.currency}{" "}
                    {salary?.data[
                      type.key as keyof SalaryData
                    ].min.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Max</p>
                  <p className="font-bold">
                    {salary?.data.currency}{" "}
                    {salary?.data[
                      type.key as keyof SalaryData
                    ].max.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
