import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ScheduleBus from "./ScheduleBus";
import scheduleBus from "../API/ScheduleBusApi";

jest.mock("../API/ScheduleBusApi", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ScheduleBus", () => {
  beforeEach(() => {
    scheduleBus.mockClear();
  });

  test("renders the table with bus routes", () => {
    const busRoutes = [
      { id: 1, route_name: "Route 1", traffic: "High", bus_count: 5 },
      { id: 2, route_name: "Route 2", traffic: "Medium", bus_count: 3 },
    ];

    render(<ScheduleBus />);

    busRoutes.forEach((route) => {
      expect(screen.getByText(route.route_name)).toBeInTheDocument();
      expect(screen.getByText(route.traffic)).toBeInTheDocument();
      expect(screen.getByText(route.bus_count.toString())).toBeInTheDocument();
    });
  });

  test("updates bus route when 'Update' button is clicked", () => {
    const busRoutes = [
      { id: 1, route_name: "Route 1", traffic: "High", bus_count: 5 },
      { id: 2, route_name: "Route 2", traffic: "Medium", bus_count: 3 },
    ];

    render(<ScheduleBus />);

    busRoutes.forEach((route, index) => {
      const updateButton = screen.getAllByText("Update")[index];
      fireEvent.click(updateButton);

      expect(scheduleBus).toHaveBeenCalledWith(route);
    });
  });
});