// src/__tests__/index.test.jsx
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { routes } from "../routes"; // Import the routes array

test("renders an error page when given a bad URL", () => {
  // Create a test router with error handling
  const testRouter = createMemoryRouter(routes, {
    initialEntries: ["/bad-route"],
    initialIndex: 0,
  });

  render(<RouterProvider router={testRouter} />);

  // Verify the error page is shown
  expect(
    screen.getByText(/Oops! Looks like something went wrong./i)
  ).toBeInTheDocument();
});
