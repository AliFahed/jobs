import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const SalaryCard = ({ salaries, jobTitle, role }: any) => {
  const countryToLowerCase = (country: string) => {
    return country.toLowerCase();
  };

  return (
    <div className="container px-4 py-10 mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl font-bold">{jobTitle}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salaries.map((item: any, index: number) => (
          <div
            key={index}
            className="border p-4 shadow-md rounded hover:bg-gray-200 transition delay-65"
          >
            <div>
              <Link
                href={`/salary/${role}/${countryToLowerCase(
                  item.data.countryCode
                )}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <p>
                    {item.data.countryCode === "SA"
                      ? "Saudi Arabia"
                      : item.data.countryCode === "JP"
                      ? "Japan"
                      : item.data.country}{" "}
                    | {item.data.countryCode}
                  </p>
                  <div className="flex items-center gap-1 border-b border-black">
                    Details
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <p>Currency: {item.data.currency}</p>
                <p>
                  <span className="">Yearly Salary (median):</span>
                  {item.data.currency}
                  {item.data.yearlySalary.median.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
