import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/ScheduleBus.css";
import { useNavigate } from "react-router-dom"; // for routing
import scheduleBus from "../API/ScheduleBusApi";

const ScheduleBus = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const trafficOptions = ["Very High", "High", "Medium", "Low"]; // Options for traffic dropdown

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...data];
    updatedData[index][name] = name === "bus_count" ? parseInt(value) : value;
    setData(updatedData);
  };

  //handle the update of bus route
  const handleAddToDatabase = (index) => {
    const response = scheduleBus(data[index]);
    if (!response.success) {
      toast.success("Updated !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //fetch data of the bus route
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/ticketing/schedule-bus/all"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="center-content">
        <h1 className="mb-4">Bus Routes</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Route</th>
              <th>Traffic</th>
              <th>Bus Count</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>
                  <Form.Control
                    type="text"
                    name="route_name"
                    value={entry.route_name}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <Form.Control
                    as="select"
                    name="traffic"
                    value={entry.traffic}
                    onChange={(e) => handleInputChange(e, index)}
                  >
                    {trafficOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </td>
                <td>
                  <Form.Control
                    type="number"
                    name="bus_count"
                    value={entry.bus_count}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToDatabase(index)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ToastContainer />
        <div className="button-container12">
          <button type="submit" onClick={() => navigate("/schedulebus/schedulebusform")}>
            Add New Bus Route
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBus;
