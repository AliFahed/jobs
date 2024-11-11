"use client";

import frontendJobsData from "../../data/jsearch-front-end.json";
import backendJobsData from "../../data/jsearch-back-end.json";
import fullstackJobsData from "../../data/jsearch-full-stack.json";
import { JobsSalary } from "../components/BackendJobSalaryData";
import { JobCard } from "../components/JobCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setCategory } from "@/store/categorySlice";

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
        <div className="text-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-2 rounded ${
                selectedCategory === category
                  ? "bg-gray-800  text-white py-2 px-4 rounded-md"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => dispatch(setCategory(category))}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <JobCard
        jobs={jobDataJson()}
        jobTitle={jobTitle()}
        role={selectedCategory}
      />

      <JobsSalary />
    </>
  );
}
