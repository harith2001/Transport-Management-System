import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ScheduleBusForm from "./ScheduleBusForm";
import { ScheduleBusAdd } from "../API/ScheduleBusAdd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

jest.mock("../API/ScheduleBusAdd", () => ({
  __esModule: true,
  ScheduleBusAdd: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe("ScheduleBusForm", () => {
  beforeEach(() => {
    ScheduleBusAdd.mockClear();
    useNavigate.mockClear();
    toast.success.mockClear();
  });

  test("displays an error message when form submission fails", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    ScheduleBusAdd.mockReturnValue({ success: false });

    render(<ScheduleBusForm />);

    const routeInput = screen.getByLabelText("Route:");
    const trafficSelect = screen.getByLabelText("Traffic:");
    const busCountInput = screen.getByLabelText("Bus Count:");
    const addButton = screen.getByText("Add");

    fireEvent.change(routeInput, { target: { value: "Test Route" } });
    fireEvent.change(trafficSelect, { target: { value: "High" } });
    fireEvent.change(busCountInput, { target: { value: "5" } });

    fireEvent.click(addButton);

    expect(ScheduleBusAdd).toHaveBeenCalledWith({
      route_name: "Test Route",
      traffic: "High",
      bus_count: 5,
    });
    expect(navigateMock).toHaveBeenCalledWith("/schedulebus");
    expect(toast.success).toHaveBeenCalledWith("Added SuceesFully !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });
});