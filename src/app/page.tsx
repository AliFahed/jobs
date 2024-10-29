import data from "../../data/jsearch-front-end.json";
import Image from "next/image";
import NoLogo from "../../images/no-logo.webp";
import { JobsSalary } from "../components/JobsSalary";

export default function Home() {
  return (
    <>
      <JobsSalary />
      <div>Last Updtate on: {data.date}</div>
      {data.data.map((job) => (
        <li key={job.job_id} className="mb-10">
          <Image
            src={job.employer_logo ? job.employer_logo : NoLogo}
            alt="company logo"
            width={75}
            height={75}
            className="rounded-xl"
          />
          <h1>{job.job_title}</h1>
          <p>{job.job_employment_type}</p>
          <p>{job.employer_name}</p>

          <p>{job.job_city}</p>
          <p>{job.job_country}</p>

          <div className="social icons">
            {job.employer_website ? (
              // <Image
              //   src="website-icons"
              //   alt="website icon"
              //   width={32}
              //   height={32}
              // />
              <a href={job.employer_website}>Company Link</a>
            ) : (
              // </Image>
              ""
            )}
            {job.employer_linkedin ? (
              // <Image
              //   src="website-icons"
              //   alt="website icon"
              //   width={32}
              //   height={32}
              // />
              <a href={job.employer_linkedin}>LinkedIn Link</a>
            ) : (
              // </Image>
              ""
            )}
          </div>

          <p>
            Job Quality Score: {Math.round(job.job_apply_quality_score * 100)}%
          </p>

          <div className="apply-options">
            <h3>Apply Options</h3>
            <ul>
              {job.apply_options.map((option, index) => (
                <li key={index}>
                  <p>Direct Application: {option.is_direct ? "Yes" : "No"}</p>
                  <a
                    href={option.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-7 py-3 rounded-sm bg-black text-white">
                      {option.publisher}
                    </button>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p>{job.job_description}</p>
          {/* <p>{job.job_posted_at_timestamp}</p> */}
          <p>{job.job_posted_at_datetime_utc}</p>

          <div className="google-maps">
            <a
              className="text-blue-700"
              href={`http://maps.google.com/maps?q=${job.job_latitude},${job.job_longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps Icon
            </a>
          </div>

          <p>
            Job opening Expiry:
            {job.job_offer_expiration_datetime_utc
              ? job.job_offer_expiration_datetime_utc
              : "Not Mentioned"}
          </p>
          {/* <p>{job.job_offer_expiration_timestamp}</p> */}

          <div className="job-requirements">
            <h3>Job Requirements</h3>
            <p>
              Degree Preferred:{" "}
              {job.job_required_education.degree_preferred === "true"
                ? "Yes"
                : "No"}
            </p>
            <p>
              {job.job_required_experience.no_experience_required === "true" ? (
                <p>No Experience Required: Yes</p>
              ) : (
                ""
              )}
            </p>
            <p>
              Required Experience (in months):{" "}
              {job.job_required_experience.required_experience_in_months ? (
                <span>
                  {job.job_required_experience.required_experience_in_months}
                </span>
              ) : (
                "Not Mentioned"
              )}
            </p>
            <p>
              Experience Preferred:{" "}
              {job.job_required_experience.experience_preferred === "true"
                ? "Yes"
                : "No"}
            </p>
          </div>

          {/* array-string-link
          <p>{job.job_required_skills}</p> */}

          <div>
            {job.job_min_salary ? (
              <p>Minimum Pay (per month): {job.job_min_salary}</p>
            ) : (
              <p>Minimum Pay (per month): Not Mentioned</p>
            )}
          </div>
          <div>
            {job.job_max_salary ? (
              <p>Maximum Pay (per month): {job.job_max_salary}</p>
            ) : (
              <p>Maximum Pay (per month): Not Mentioned</p>
            )}
          </div>
        </li>
      ))}
    </>
  );
}
