import { render, screen } from "@testing-library/react";
import Home from "../../../src/app/page";
import { Provider } from "react-redux";
import { store } from "@/store/store";

describe("Home Page", () => {
  it("renders JobCard component with correct data based on selected job category", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const jobCard = screen.getByText("Front-End Development Jobs");
    expect(jobCard).toBeInTheDocument();
  });

  it("renders SalaryCard component with correct data based on selected salary category", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const salaryCard = screen.getByText("Front-End Development Salaries");
    expect(salaryCard).toBeInTheDocument();
  });
});
