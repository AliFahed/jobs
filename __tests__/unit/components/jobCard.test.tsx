import { render, screen } from "@testing-library/react";
import { JobCard } from "../../../src/components/JobCard";
import "@testing-library/jest-dom";
import NoLogo from "../../images/no-logo.webp";
import { jobs } from "__mocks__/data/jobs";

jest.mock("next/image", () => (props: any) => (
  <img {...props} alt="Mocked Image" />
));

jest.mock("next/image", () => require("../../../__mocks__/image"));

describe("JobCard Component", () => {
  const jobTitle = "Front-End Development Jobs";
  const role = "frontend";

  it("renders job title and update date", () => {
    render(<JobCard jobs={jobs} jobTitle={jobTitle} role={role} />);

    expect(screen.getByText(jobTitle)).toBeInTheDocument();
    expect(
      screen.getByText(`Jobs Updated on: ${jobs.date}`)
    ).toBeInTheDocument();
  });

  it("renders all job entries with details", () => {
    render(<JobCard jobs={jobs} jobTitle={jobTitle} role={role} />);

    jobs.data.forEach((job) => {
      expect(screen.getByText(job.job_title)).toBeInTheDocument();
      expect(screen.getByText(job.employer_name)).toBeInTheDocument();
      expect(
        screen.getByText(`${job.job_city}, ${job.job_country}`)
      ).toBeInTheDocument();
      expect(screen.getByText(job.job_employment_type)).toBeInTheDocument();
      expect(
        screen.getByText(
          `Uploaded on: ${new Date(
            job.job_posted_at_datetime_utc
          ).toLocaleDateString("en-GB")}`
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          `Quality Score: ${Math.round(job.job_apply_quality_score * 100)}%`
        )
      ).toBeInTheDocument();
    });
  });

  it("displays default logo if no employer logo is provided", () => {
    render(<JobCard jobs={jobs} jobTitle={jobTitle} role={role} />);

    const images = screen.getAllByRole("img");

    images.forEach((img) => {
      expect(img).toHaveAttribute("src", NoLogo.src);
    });
  });
});
