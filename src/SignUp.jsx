import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import auth from "./firebase.config";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;

    const password = form.password.value;

    const user = { email };

    console.log(user);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed up

        console.log(result.user);
        const createAt = result.user?.metadata?.creationTime;
        const user = { email, createAt };
        // ...

        fetch(
          " https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/users",
          {
            method: "POST",

            headers: {
              "content-type": "application/json",
            },

            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert("created done");
            }

            form.reset();
          });
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
