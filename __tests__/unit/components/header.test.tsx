import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Header } from "../../../src/components/Header";
import * as reactRedux from "react-redux";

// Mocking Next.js Link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// Mock useDispatch and useSelector globally
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// mock store
const mockStore = configureStore([]);
const initialState = {
  headerLink: { selectedHeaderLink: "Jobs" },
};

describe("Header Component", () => {
  let store: ReturnType<typeof mockStore>;
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    store = mockStore(initialState);
    dispatchMock = jest.fn();

    (reactRedux.useDispatch as unknown as jest.Mock).mockReturnValue(
      dispatchMock
    );

    (reactRedux.useSelector as unknown as jest.Mock).mockImplementation(
      (selector) => selector({ headerLink: { selectedHeaderLink: "Jobs" } })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Header component with correct links", () => {
    render(
      <Provider store={store}>
        <Header option="Link In page" />
      </Provider>
    );

    expect(screen.getByText("Web Jobs")).toBeInTheDocument();
    // expect(screen.getByText("Log in")).toBeInTheDocument();
    // expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("Jobs")).toBeInTheDocument();
    expect(screen.getByText("Salary Guide")).toBeInTheDocument();
  });

  it("toggles the mobile menu when the menu button is clicked", () => {
    render(
      <Provider store={store}>
        <Header option="Link In page" />
      </Provider>
    );

    const menuButton = screen.getByRole("button", {
      name: /open main menu/i,
    });

    const mobileMenu = screen.getByTestId("mobile-menu");

    // Initially hidden
    expect(mobileMenu).toHaveClass("hidden");

    // Click to open menu
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("flex");

    // Click again to close menu
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("hidden");
  });
});
