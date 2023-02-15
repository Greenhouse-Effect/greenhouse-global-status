import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Home() {
  const [mockData, setMockData] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((response) => {
      setMockData(response.data);
    })
  })

  return (
    <>
      <div className="text-3x1 text-amber-600">hello world!</div>
      {mockData.map((val) => {
        return <h1>id: {val.id} | amount: {val.amount} | name: {val.name}</h1>
      })}
    </>
  )
}
