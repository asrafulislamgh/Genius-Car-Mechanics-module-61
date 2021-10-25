import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div>
      <div style={{ width: "400px", margin: "0 auto" }}>
        <h1 style={{ padding: "20px 0" }}>Detail of the service</h1>
        <h4>{service.name}</h4>
        <img style={{ padding: "20px 0" }} src={service.img} alt="" />
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Booking;
