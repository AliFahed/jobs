"use client";

import frontendJobsData from "../../data/jsearch-front-end.json";
import backendJobsData from "../../data/jsearch-back-end.json";
import fullstackJobsData from "../../data/jsearch-full-stack.json";
import {
  Building2,
  MapPin,
  Calendar,
  Linkedin,
  Globe,
  ExternalLink,
  GraduationCap,
  Briefcase,
  DollarSign,
  Clock,
} from "lucide-react";
import Image from "next/image";
import NoLogo from "../../images/no-logo.webp";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Link from "next/link";

export const JobDetails = () => {
  const selectedCategory = useSelector(
    (state: RootState) => state.job.selectedJobCategory
  );

  const pathname = usePathname();
  const jobId = pathname.split("/").pop();

  let job;
  // Find the job in the JSON data by ID
  if (selectedCategory === "frontend") {
    job = frontendJobsData.data.find((job) => job.job_id === jobId);
  } else if (selectedCategory === "backend") {
    job = backendJobsData.data.find((job) => job.job_id === jobId);
  } else {
    job = fullstackJobsData.data.find((job) => job.job_id === jobId);
  }

  if (!job) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 pt-32">
        <h1 className="text-4xl">Job not found</h1>
        <p>Please try again!</p>
        <Link href="/" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  const formatDescription = (description: string) => {
    const lines = description.split("\n").map((line, index) => {
      if (line.startsWith("•")) {
        return (
          <li key={index} className="list-none">
            {line}
          </li>
        );
      }
      return <div key={index}>{line}</div>;
    });
    return lines;
  };

  return (
    <>
      <div className="container px-4 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border rounded-xl p-7">
              <div className="mb-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex items-center justify-between w-full md:w-fit">
                    <Image
                      src={job.employer_logo ? job.employer_logo : NoLogo}
                      alt="Company Logo"
                      width={50}
                      height={50}
                      className="w-20 h-20 object-contain rounded-xl border border-gray-300  contrast-100 brightness-110"
                    />
                    <div className="md:hidden text-sm font-bold border border-gray-400 opacity-75 outline-1 rounded-full text-center w-fit px-2 h-fit">
                      {job.job_employment_type}
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-xl md:text-2xl font-bold">
                        {job.job_title}
                      </h1>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {job.employer_name}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <p>
                            {job.job_city}, {job.job_country}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <p>
                            Uploaded on:{" "}
                            {new Date(
                              job.job_posted_at_datetime_utc
                            ).toLocaleDateString("en-GB")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {job.employer_linkedin ? (
                            <div className="flex items-center gap-2">
                              <Linkedin className="w-4 h-4" />
                              <a
                                href={job.employer_linkedin}
                                className="text-blue-700"
                              >
                                LinkedIn
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {job.employer_website ? (
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4" />
                              <a
                                href={job.employer_website}
                                className="text-blue-700"
                              >
                                Website
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="hidden md:block text-sm font-bold border border-gray-400 opacity-75 outline-1 rounded-full text-center w-fit px-2 h-fit">
                        {job.job_employment_type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                    <div className="text-gray-700">
                      {formatDescription(job.job_description)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-xl p-7">
              <div>
                <h2 className="text-2xl mb-6 font-bold">Job Overview</h2>
              </div>
              <div className="space-y-4">
                <div className="border-b-2 w-full">
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">
                        Degree Required
                      </div>
                      <p>
                        {job.job_required_education.degree_preferred === "true"
                          ? "Yes"
                          : "No"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 w-full">
                  <div className="flex items-center gap-2 mb-5">
                    <Briefcase className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Experience</div>
                      {job.job_required_experience
                        .required_experience_in_months ? (
                        <p>
                          {job.job_required_experience
                            .required_experience_in_months + " months"}{" "}
                          {job.job_required_experience.experience_preferred ===
                          "true"
                            ? "- Experience Preffered mentioned"
                            : ""}
                        </p>
                      ) : (
                        "Not Mentioned"
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-b-2 w-full">
                  <div className="flex items-center gap-2 mb-5">
                    <DollarSign className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Salary Range</div>
                      {job.job_min_salary ? (
                        <div className="flex gap-4">
                          <p>Minimum: {job.job_min_salary}</p>
                          {"-"}
                          <p>Maximum: {job.job_max_salary}</p>
                        </div>
                      ) : (
                        <p>Not Mentioned</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-b-2 w-full">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">
                        Application Deadline
                      </p>
                      <div>
                        {job.job_offer_expiration_datetime_utc ? (
                          <p>
                            {new Date(
                              job.job_offer_expiration_datetime_utc
                            ).toLocaleDateString("en-GB")}
                          </p>
                        ) : (
                          "Not Mentioned"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Google Maps</p>
                    <a
                      className="text-blue-700"
                      href={`http://maps.google.com/maps?q=${job.job_latitude},${job.job_longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.job_city}, {job.job_country}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-xl p-7">
              <div>
                <h2 className="text-2xl mb-6 font-bold">Apply Now</h2>
              </div>
              <div className="space-y-4">
                <ul>
                  {job.apply_options.map((option, index) => (
                    <li key={index} className="mb-7">
                      <p className="mb-1">
                        Direct Application: {option.is_direct ? "Yes" : "No"}
                      </p>
                      <a
                        href={option.apply_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 w-full">
                          Apply via {option.publisher}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
