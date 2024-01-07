// DetailComponent.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const DetailComponent = () => {
  const { id } = useParams();
  const [listDetails, setListDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`[http://localhost:3000/api/items/list/6590af78a03d2ec4dd09930d`)
      .then(response => {
        // Process response data for the pie chart
        setListDetails(/* Processed Data */);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <PieChart /* Your PieChart Props */>
      <Pie dataKey="value" data={listDetails} /* Other Pie Props */ />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default DetailComponent;
