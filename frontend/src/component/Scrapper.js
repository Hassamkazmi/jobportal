import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobFetcher = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.indeed.com/ads/apisearch', {
        params: {
          publisher: 'YOUR_PUBLISHER_ID',
          q: 'web developer',
          l: 'los angeles, ca',
          v: '2',
          format: 'json'
        }
      });
      setJobData(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobData.map((job, index) => (
          <li key={index}>
            <h2>{job.jobtitle}</h2>
            <h3>{job.company}</h3>
            <p>{job.snippet}</p>
            <p>{job.formattedLocation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobFetcher;