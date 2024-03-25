import React from "react";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { photourl, name, chef, taste, _id } = coffee;

   
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffees),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted");
        }
        console.log(data);
      });
  };

  return (
    <div className=" bg-base-100 shadow-xl flex  items-center justify-between">
      <div className="p-10">
        <img src={photourl} alt="Shoes" className="rounded-xl w-1/2" />
      </div>
      <div className="mr-32">
        <h2 className="">
          {" "}
          <span className="font-bold ">Name:</span> {name}
        </h2>
        <p>{chef}</p>
        <p>{taste}</p>
      </div>
      <div className="space-y-3">
        <button className="btn btn-sm ">view</button>
        <Link to={`/updatecoffee/${_id}`}>
          {" "}
          <button className="btn btn-sm">Edit</button>{" "}
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm">
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
