
import Swal from 'sweetalert2'

const AddCoffee = () => {
         
    const handleSubmit = event =>{

         event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value; 
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.photourl.value;

         const updateCoffee ={name,chef,supplier ,taste,category,details,photourl}

              console.log(updateCoffee)
         fetch('http://localhost:5000/coffees',{
            method: 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateCoffee)
         })
         .then(res=> res.json())
         .then(data=>{
            console.log(data)
            if(data.insertedId)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         })

    }

  return (
    <div className="m-20 ">
      <h2 className="text-4xl">Add Coffee</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter Coffee category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photourl"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input type="submit" className='bg-yellow-400 btn w-full' value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
