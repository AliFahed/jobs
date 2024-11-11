"use client";

import { RootState } from "@/store/store";
import { setCategory } from "@/store/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import frontendJobsData from "../../data/jsearch-front-end.json";
import backendJobsData from "../../data/jsearch-back-end.json";
import fullstackJobsData from "../../data/jsearch-full-stack.json";
// import { JobsSalary } from "../components/BackendJobSalaryData";
import { JobCard } from "../components/JobCard";
import { SalaryCard } from "../components/SalaryCard";

const categories = ["frontend", "backend", "fullstack"];

export default function Home() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );

  const jobTitle = () => {
    if (selectedCategory === "frontend") {
      return "Front-End Development Jobs";
    } else if (selectedCategory === "backend") {
      return "Back-End Development Jobs";
    } else {
      return "Full-Stack Development Jobs";
    }
  };

  const jobDataJson = () => {
    if (selectedCategory === "frontend") {
      return frontendJobsData;
    } else if (selectedCategory === "backend") {
      return backendJobsData;
    } else {
      return fullstackJobsData;
    }
  };

  return (
    <>
      <div className="container px-4 pt-16 mx-auto max-w-7xl">
        <section className="jobs-section">
          <h1 className="text-4xl font-bold text-center mb-2">Web Dev Jobs</h1>
          <p className="text-gray-600 text-center mb-8">
            Find and Apply to Web Dev Jobs in Malaysia
          </p>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <div className="text-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 m-2 rounded transition-colors duration-200 ${
                      selectedCategory === category
                        ? // py-2 px-4 rounded-md
                          "bg-gray-800  text-white "
                        : "text-gray-600 hover:bg-gray-300"
                    }`}
                    onClick={() => dispatch(setCategory(category))}
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
            role={selectedCategory}
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

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <div className="text-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 m-2 rounded transition-colors duration-200 ${
                      selectedCategory === category
                        ? // py-2 px-4 rounded-md
                          "bg-gray-800  text-white "
                        : "text-gray-600 hover:bg-gray-300"
                    }`}
                    //onClick={() => dispatch(setCategory(category))}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <SalaryCard />
        </section>

        {/* Role Content */}
        {/* <div className="bg-white rounded-2xl p-6 shadow-sm">
          <RoleTab roleData={salaryData[activeRole]} />
        </div>
        

        {/* <JobsSalary /> */}
      </div>
    </>
  );
}
