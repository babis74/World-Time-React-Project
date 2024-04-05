import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorldTime.css';

const WorldTime = () => {
  const [timeData, setTimeData] = useState([]);
  const [error, setError] = useState(null);
  const cities = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney',  'Europe/Athens', 'Europe/Belgrade', 'Europe/Bucharest'];

  useEffect(() => {
    const fetchTimeData = async () => {
      try {
        const responses = await Promise.all(cities.map(city => axios.get(`http://worldtimeapi.org/api/timezone/${city}`)));
        const responseData = responses.map(response => response.data);
        setTimeData(responseData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTimeData();
  }, []);

const formatTimeWithTimezone = (datetime, timezone) => {
  const options = {
    timeZone: timezone,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return new Date(datetime).toLocaleString('en-US', options);
};

  return (
    <div>
      <h2>World Time</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table className="world-time-table">
          <thead>
            <tr>
              <th>City</th>
              <th>Current Time</th>
            </tr>
          </thead>
          <tbody>
            {timeData.map((cityData, index) => (
              <tr key={index}>
                <td>{cities[index].split('/')[1]}</td>
                <td>{formatTimeWithTimezone(cityData.datetime, cities[index])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WorldTime;
