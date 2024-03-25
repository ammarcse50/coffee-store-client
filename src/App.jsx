import { useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

function App() {
  const loadCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadCoffees);


    const handleDelete =event =>{

         event.preventDefault()




    }

  return (
    <div className="bg-[#F4F3F0]">
      <h2 className="text-center mt-20 text-4xl">
        Coffees Avialable:{loadCoffees.length}
      </h2>

      <div className="grid md:grid-cols-2 p-20 gap-5 ">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            handleDelete={handleDelete}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
