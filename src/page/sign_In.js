import React, { useState } from "react";
import { useContext } from "react";
import { The_Context } from "../data/Context";
import { signIn, sign_in } from "../auth/auth";
import Modal from "../component/costume_modal";

const Sign_in = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [modal, setModal] = useState({
    status: false,
    success: false,
    msg: "",
    color: "",
  });
  const { setAccess_token } = useContext(The_Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      console.error("Please Fill all fields");
      // Optionally, you can set an error state to show a message to the user
      return;
    }

    signIn(formData)
      .then((response) => {
        setAccess_token(response.user.accessToken);
        setModal({
          status: true,
          success: true,
          msg: "Logged in successfully",
          color: "red",
        });
        setFormData({
          email: "",
          password: "",
        });

        console.log("User signed up successfully:", response);
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        setModal({
          status: true,
          msg: "Account wasnt created" + " " + error.message,
          color: "",
        });
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <Modal modal={modal} setModal={setModal} name="Sign in" />
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <a className="underline" href="/sign_up">
              Sign up
            </a>
          </p>

          <button
            onClick={handleSignUp}
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sign_in;
