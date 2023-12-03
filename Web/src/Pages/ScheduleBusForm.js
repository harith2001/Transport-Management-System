import React, { useState } from 'react';
import '../Styles/ScheduleForm.css'
import { ScheduleBusAdd } from '../API/ScheduleBusAdd.js';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const ScheduleBusForm = () => {
  const navigate = useNavigate();
  const [route_name, setRoute] = useState('');
  const [traffic, setTraffic] = useState('');
  const [bus_count, setBusCount] = useState('');

  const trafficOptions = ["Very High", "High", "Medium", "Low"]; // Options for traffic dropdown

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'route') {
      setRoute(value);
    } else if (name === 'traffic') {
      setTraffic(value);
    } else if (name === 'busCount') {
      setBusCount(parseInt(value, 10)); // Parse value as an integer
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = ScheduleBusAdd({ route_name, traffic, bus_count });
    if (!response.success) {
      navigate('/schedulebus');
      toast.success("Added SuceesFully !", {
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

  const handleCancel = () => {
    navigate('/schedulebus');
  };

  return (
    <form className='container1' onSubmit={handleSubmit}>
      <h1 className='h1'>Add Bus Route</h1>
      <div className="form-group">
        <label htmlFor="route">Route:</label>
        <input
          type="text"
          id="route"
          name="route"
          value={route_name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="traffic">Traffic:</label>
        <select
          id="traffic"
          name="traffic"
          value={traffic}
          onChange={handleInputChange}
        >
          <option value="">Select traffic</option>
          {trafficOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="busCount">Bus Count:</label>
        <input
          type="number"
          id="busCount"
          name="busCount"
          value={bus_count}
          onChange={handleInputChange}
        />
      </div>

      <div className="button-group">
        <button type="submit" onSubmit={handleSubmit}>Add</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ScheduleBusForm;