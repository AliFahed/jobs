"use client";

import { RootState } from "@/store/store";
import { setJobCategory } from "@/store/categorySlice";
import { setSalaryCategory } from "@/store/salaryCategorySlice";
import { useSelector, useDispatch } from "react-redux";
import frontendJobsData from "../../data/jsearch-front-end.json";
import backendJobsData from "../../data/jsearch-back-end.json";
import fullstackJobsData from "../../data/jsearch-full-stack.json";
import frontendSalaryData from "../../data/jobs-api-front-end-salary.json";
import backendSalaryData from "../../data/jobs-api-back-end-salary.json";
import fullstackSalaryData from "../../data/jobs-api-full-stack-salary.json";
import { JobCard } from "../components/JobCard";
import { SalaryCard } from "../components/SalaryCard";

const categories = ["frontend", "backend", "fullstack"];

export default function Home() {
  const dispatch = useDispatch();
  const selectedJobCategory = useSelector(
    (state: RootState) => state.job.selectedJobCategory
  );

  const selectedSalaryCategory = useSelector(
    (state: RootState) => state.salary.selectedSalaryCategory
  );

  const jobTitle = () => {
    if (selectedJobCategory === "frontend") {
      return "Front-End Development Jobs";
    } else if (selectedJobCategory === "backend") {
      return "Back-End Development Jobs";
    } else {
      return "Full-Stack Development Jobs";
    }
  };

  const salaryTitle = () => {
    if (selectedSalaryCategory === "frontend") {
      return "Front-End Development Salaries";
    } else if (selectedSalaryCategory === "backend") {
      return "Back-End Development Salaries";
    } else {
      return "Full-Stack Development Salaries";
    }
  };

  const jobDataJson = () => {
    if (selectedJobCategory === "frontend") {
      return frontendJobsData;
    } else if (selectedJobCategory === "backend") {
      return backendJobsData;
    } else {
      return fullstackJobsData;
    }
  };

  const salaryDataJson = () => {
    if (selectedSalaryCategory === "frontend") {
      return frontendSalaryData;
    } else if (selectedSalaryCategory === "backend") {
      return backendSalaryData;
    } else {
      return fullstackSalaryData;
    }
  };

  return (
    <>
      <div className="container px-4 pt-16 mx-auto max-w-7xl">
        <section className="jobs-section mt-10">
          <h1 className="text-4xl font-bold text-center mb-2">Web Dev Jobs</h1>
          <p className="text-gray-600 text-center mb-8">
            Find and Apply to Web Dev Jobs in Malaysia
          </p>

          <div className="flex justify-center mb-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <div className="text-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 m-2 rounded transition-colors duration-200 ${
                      selectedJobCategory === category
                        ? "bg-gray-800  text-white "
                        : "text-gray-600 hover:bg-gray-300"
                    }`}
                    onClick={() => dispatch(setJobCategory(category))}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <JobCard
            jobs={jobDataJson()}
            jobTitle={jobTitle()}
            role={selectedJobCategory}
          />
        </section>

        <section id="salary-section" className="pt-14">
          <h1 className="text-4xl font-bold text-center mb-2">
            Developer Salary Guide
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Comprehensive salary data for different developer roles across
            multiple countries
          </p>

          <div className="flex justify-center mb-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <div className="text-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 m-2 rounded transition-colors duration-200 ${
                      selectedSalaryCategory === category
                        ? "bg-gray-800  text-white "
                        : "text-gray-600 hover:bg-gray-300"
                    }`}
                    onClick={() => dispatch(setSalaryCategory(category))}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6">
            <SalaryCard
              salaries={salaryDataJson()}
              jobTitle={salaryTitle()}
              role={selectedSalaryCategory}
            />
          </div>
        </section>
      </div>
    </>
  );
}
