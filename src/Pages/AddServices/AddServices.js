import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("Data inserted successfully!");
        reset();
      }
    });
    //   .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Please add a service</h1>
      <form className="addForm" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Name" />
        <textarea
          type="text"
          {...register("description")}
          placeholder="Description"
        />
        <input type="number" {...register("price")} placeholder="Price" />
        <input type="text" {...register("img")} placeholder="Image URL" />

        <input className="common-btn" type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
