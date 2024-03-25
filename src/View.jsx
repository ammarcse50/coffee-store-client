import React from "react";
import { useLoaderData } from "react-router-dom";

const View = () => {
  const coffee = useLoaderData();

  const { _id, name, taste, chef, photourl } = coffee;

  return (
    <div className="flex items-center bg-[#F4F3F0]  shadow-xl p-20 ">
      <div>
        <img src={photourl} className="rounded-xl ml-96" alt="Movie" />
      </div>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Taste: {taste}</p>
        <p>Chef: {chef}</p>
      </div>
    </div>
  );
};

export default View;
