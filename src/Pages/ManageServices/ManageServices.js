import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h4>Manage services</h4>
      {services.map((service) => (
        <div key={service._id} style={{ margin: "40px auto", width: "400px" }}>
          <h5>{service.name}</h5>
          <img style={{ width: "100%" }} src={service.img} alt="" />
          <p>{service.description}</p>
          <button
            className="common-btn"
            onClick={() => {
              handleDelete(service._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
