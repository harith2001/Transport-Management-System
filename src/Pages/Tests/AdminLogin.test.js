import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import AdminLogin from "../AdminLogin";
import adminLogin from "../../API/AdminApi";

jest.mock("../API/AdminApi", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("AdminLogin", () => {
  it("should render the login form", () => {
    const { getByLabelText, getByText } = render(<AdminLogin />);
    
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  
  it("should update input values when typed", () => {
    const { getByLabelText } = render(<AdminLogin />);
    
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    
    fireEvent.change(emailInput, { target: { value: "admin@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    
    expect(emailInput.value).toBe("admin@example.com");
    expect(passwordInput.value).toBe("password123");
  });
  
  it("should call adminLogin API and navigate to '/schedulebus' on successful login", async () => {
    const { getByLabelText, getByText } = render(<AdminLogin />);
    
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");
    
    adminLogin.mockResolvedValueOnce({ success: true });
    
    fireEvent.change(emailInput, { target: { value: "admin@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(adminLogin).toHaveBeenCalledWith({
        email: "admin@example.com",
        password: "password123",
      });
      expect(window.location.href).toBe("http://localhost/schedulebus");
    });
  });
  
  it("should log an error message on login failure", async () => {
    const { getByLabelText, getByText } = render(<AdminLogin />);
    
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");
    
    adminLogin.mockResolvedValueOnce({ success: false });
    
    fireEvent.change(emailInput, { target: { value: "admin@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(adminLogin).toHaveBeenCalledWith({
        email: "admin@example.com",
        password: "password123",
      });
      expect(console.error).toHaveBeenCalledWith("Login failed");
    });
  });
});