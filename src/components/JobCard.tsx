import data from "../../data/jsearch-front-end.json";
import NoLogo from "../../images/no-logo.webp";
import Image from "next/image";
import { Building2, MapPin, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

export const JobsData = () => {
  return (
    <div className="container px-4 py-16 mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl font-bold">Front-End Development Jobs</h1>
        <p className="">Jobs Updated on: {data.date}</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {data.data.map((job) => (
          <div
            key={job.job_id}
            className="mb-5 list-none border p-5 rounded-xl"
          >
            <div className="flex flex-col gap-8  w-full">
              <div className="flex gap-5 justify-between">
                <div className="flex gap-5">
                  <Image
                    src={job.employer_logo ? job.employer_logo : NoLogo}
                    alt="Company Logo"
                    width={50}
                    height={50}
                    className="w-20 h-20 object-contain rounded-xl border border-gray-300  contrast-100 brightness-110"
                  />

                  <div>
                    <Link
                      href={`/jobs/${job.job_id}`}
                      className="hover:text-gray-400"
                    >
                      <h1 className="text-xl font-bold">{job.job_title}</h1>
                    </Link>

                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <p>{job.employer_name}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <p>
                          {job.job_city}, {job.job_country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-bold border border-gray-400 opacity-75 outline-1 rounded-full text-center w-fit px-2 h-fit">
                  {job.job_employment_type}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <p>
                      Uploaded on:{" "}
                      {new Date(
                        job.job_posted_at_datetime_utc
                      ).toLocaleDateString("en-GB")}
                    </p>
                  </div>

                  <p className="bg-gray-300 opacity-75 rounded-full text-center w-fit px-2 h-fit text-sm">
                    Quality Score:{" "}
                    {Math.round(job.job_apply_quality_score * 100)}%
                  </p>
                </div>

                <button className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md">
                  <Link
                    href={`/jobs/${job.job_id}`}
                    className="flex items-center gap-2"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
