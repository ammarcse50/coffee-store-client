import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, taste, chef } = coffee;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;

    const chef = form.chef.value;

    const taste = form.taste.value;

    const updateUser = { name, chef, taste };

    console.log(updateUser);

    fetch(
      ` https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(updateUser),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          alert("updated done");
        }
      });
  };
  return (
    <div>
      <h2>Update Coffee</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="name"
          name="name"
          placeholder="your coffee name"
          className="input input-bordered"
        />

        <br />

        <input
          name="chef"
          type="name"
          placeholder="your coffee chef name"
          className="input input-bordered"
        />
        <br />

        <input
          type="name"
          name="taste"
          placeholder="your coffee taste"
          className="input input-bordered"
        />
        <br />

        <input type="submit" className="bg-slate-400" value="update User" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
