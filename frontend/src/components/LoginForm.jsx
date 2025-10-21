import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { StoreContext } from "../context/StoreContext";

const LoginForm = () => {
  const { url, checkUserAuthStats } = useContext(StoreContext);

  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   checkUserAuthStats();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // login(currentState === "Sign Up" ? "signup" : "login", userCredentials);
    // console.log(userCredentials);
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/signin";
    } else {
      newUrl += "/api/user/signup";
    }

    try {
      const response = await axios.post(newUrl, userCredentials, {
        withCredentials: true,
      });

      if (response.data.success) {
        window.location.reload();
        // toast.success(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // toast.error(error.response.data.message);
        console.error(error.response.data.message);
        setShowErrorMsg(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="hero bg-base-200/30  min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-semibold ">{currentState}</h2>{" "}
            </div>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                {currentState === "Sign Up" && (
                  <>
                    <label className="label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userCredentials.name}
                      className="input"
                      placeholder="Full Name"
                      required
                      onChange={(e) =>
                        setUserCredentials({
                          ...userCredentials,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </>
                )}
                <>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userCredentials.email}
                    className="input"
                    placeholder="Email"
                    required
                    onChange={(e) =>
                      setUserCredentials({
                        ...userCredentials,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </>

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userCredentials.password}
                  className="input"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {showErrorMsg && (
                  <label className="label text-red-600">
                    Incorrect email or password
                  </label>
                )}
                {currentState === "Sign Up" && (
                  <div className="mt-4">
                    <fieldset>
                      <label className="label">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                          required
                        />
                        Agree to the terms of use & privacy policy.
                      </label>
                    </fieldset>
                  </div>
                )}
                {currentState === "Sign Up" ? (
                  <p>
                    Already have an account?{" "}
                    <span
                      onClick={() => {
                        setCurrentState("Login");
                      }}
                      className="text-accent cursor-pointer"
                    >
                      Login here
                    </span>
                  </p>
                ) : (
                  <p>
                    Create an account{" "}
                    <span
                      onClick={() => setCurrentState("Sign Up")}
                      className="text-accent cursor-pointer"
                    >
                      Click here
                    </span>
                  </p>
                )}
                <button type="submit" className="btn btn-primary mt-4">
                  {currentState === "Sign Up" ? "Create Account" : "Login Now"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle bg-black btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
    </dialog>
  );
};

export default LoginForm;
