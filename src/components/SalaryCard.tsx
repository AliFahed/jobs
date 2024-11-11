import { JobsSalary } from "../components/BackendJobSalaryData";

export const SalaryCard = () => {
  return (
    <div className="container px-4 py-16 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobsSalary />
      </div>
      {/* <div key="" className="space-y-2">
        <h4 className="text-lg font-semibold capitalize">Salary</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Median</p>
            <p className="font-semibold"></p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Mean</p>
            <p className="font-semibold"></p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Min</p>
            <p className="font-semibold"></p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Max</p>
            <p className="font-semibold"></p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
